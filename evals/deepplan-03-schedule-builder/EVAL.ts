import { expect, test, describe } from 'vitest';
import {
  roomHasEquipment, sessionFitsSlot, detectConflicts,
  calculateScore, buildSchedule, formatSchedule,
  type Session, type Room, type TimeSlot, type Schedule, type ScheduleEntry
} from './scheduler';

const testSession: Session = {
  id: 's1', title: 'Test', speaker: 'Speaker', durationMinutes: 60,
  track: 'ai', priority: 'required',
  requiredEquipment: ['projector', 'microphone'],
  preferredTimeSlot: 'morning'
};

const mainRoom: Room = {
  id: 'main', name: 'Main Hall', capacity: 500,
  equipment: ['projector', 'microphone', 'whiteboard']
};

const smallRoom: Room = {
  id: 'c', name: 'Room C', capacity: 50,
  equipment: ['projector']
};

describe('roomHasEquipment', () => {
  test('room with all equipment returns true', () => {
    expect(roomHasEquipment(mainRoom, testSession)).toBe(true);
  });

  test('room missing equipment returns false', () => {
    expect(roomHasEquipment(smallRoom, testSession)).toBe(false);
  });

  test('session with no equipment requirement', () => {
    const session: Session = { ...testSession, requiredEquipment: [] };
    expect(roomHasEquipment(smallRoom, session)).toBe(true);
  });
});

describe('sessionFitsSlot', () => {
  test('60-min session fits 60-min slot', () => {
    const slot: TimeSlot = { id: 'slot1', start: '09:00', end: '10:00', period: 'morning' };
    expect(sessionFitsSlot(testSession, slot)).toBe(true);
  });

  test('90-min session does not fit 60-min slot', () => {
    const session: Session = { ...testSession, durationMinutes: 90 };
    const slot: TimeSlot = { id: 'slot1', start: '09:00', end: '10:00', period: 'morning' };
    expect(sessionFitsSlot(session, slot)).toBe(false);
  });

  test('30-min session fits 60-min slot', () => {
    const session: Session = { ...testSession, durationMinutes: 30 };
    const slot: TimeSlot = { id: 'slot1', start: '09:00', end: '10:00', period: 'morning' };
    expect(sessionFitsSlot(session, slot)).toBe(true);
  });
});

describe('detectConflicts', () => {
  test('no conflicts in empty schedule', () => {
    const schedule: Schedule = { entries: [], unscheduled: [], score: 0 };
    expect(detectConflicts(schedule)).toHaveLength(0);
  });

  test('detects room conflict', () => {
    const schedule: Schedule = {
      entries: [
        { sessionId: 's1', roomId: 'main', timeSlotId: 'slot1', startTime: '09:00', endTime: '10:00' },
        { sessionId: 's2', roomId: 'main', timeSlotId: 'slot1', startTime: '09:00', endTime: '10:00' },
      ],
      unscheduled: [], score: 0,
    };
    const conflicts = detectConflicts(schedule);
    expect(conflicts.some(c => c.type === 'room')).toBe(true);
  });

  test('detects speaker conflict', () => {
    // Prof. Johnson has s2 and s6; if scheduled at same time
    const schedule: Schedule = {
      entries: [
        { sessionId: 's2', roomId: 'a', timeSlotId: 'slot1', startTime: '09:00', endTime: '10:00' },
        { sessionId: 's6', roomId: 'b', timeSlotId: 'slot1', startTime: '09:00', endTime: '10:00' },
      ],
      unscheduled: [], score: 0,
    };
    const conflicts = detectConflicts(schedule);
    expect(conflicts.some(c => c.type === 'speaker')).toBe(true);
  });

  test('no conflict in different time slots', () => {
    const schedule: Schedule = {
      entries: [
        { sessionId: 's1', roomId: 'main', timeSlotId: 'slot1', startTime: '09:00', endTime: '10:00' },
        { sessionId: 's2', roomId: 'main', timeSlotId: 'slot2', startTime: '10:15', endTime: '11:15' },
      ],
      unscheduled: [], score: 0,
    };
    const conflicts = detectConflicts(schedule);
    const roomConflicts = conflicts.filter(c => c.type === 'room');
    expect(roomConflicts).toHaveLength(0);
  });
});

describe('calculateScore', () => {
  test('empty schedule with all sessions unscheduled scores 15 (no conflicts only)', () => {
    const schedule: Schedule = {
      entries: [],
      unscheduled: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10'],
      score: 0,
    };
    const score = calculateScore(schedule);
    // No required/high scheduled = 0+0, no sessions to judge preferences = 0 for preference, but 15 for no conflicts
    expect(score).toBe(15);
  });

  test('perfect schedule gets high score', () => {
    const schedule = buildSchedule();
    const score = calculateScore(schedule);
    // Should be at least 40 (all required scheduled)
    expect(score).toBeGreaterThanOrEqual(40);
  });
});

describe('buildSchedule', () => {
  test('schedules all required sessions', () => {
    const schedule = buildSchedule();
    // Required sessions: s1 (Keynote), s5 (Panel), s10 (Closing)
    const scheduled = new Set(schedule.entries.map(e => e.sessionId));
    expect(scheduled.has('s1')).toBe(true);
    expect(scheduled.has('s5')).toBe(true);
    expect(scheduled.has('s10')).toBe(true);
  });

  test('no room conflicts', () => {
    const schedule = buildSchedule();
    const conflicts = detectConflicts(schedule);
    const roomConflicts = conflicts.filter(c => c.type === 'room');
    expect(roomConflicts).toHaveLength(0);
  });

  test('no speaker conflicts', () => {
    const schedule = buildSchedule();
    const conflicts = detectConflicts(schedule);
    const speakerConflicts = conflicts.filter(c => c.type === 'speaker');
    expect(speakerConflicts).toHaveLength(0);
  });

  test('schedules most sessions', () => {
    const schedule = buildSchedule();
    // Should schedule at least 7 out of 10
    expect(schedule.entries.length).toBeGreaterThanOrEqual(7);
  });

  test('equipment requirements met', () => {
    const schedule = buildSchedule();
    const conflicts = detectConflicts(schedule);
    const equipConflicts = conflicts.filter(c => c.type === 'equipment');
    expect(equipConflicts).toHaveLength(0);
  });

  test('has valid score', () => {
    const schedule = buildSchedule();
    expect(schedule.score).toBeGreaterThanOrEqual(0);
    expect(schedule.score).toBeLessThanOrEqual(100);
    // Score should match calculated score
    expect(schedule.score).toBeCloseTo(calculateScore(schedule), 0);
  });

  test('high priority sessions scheduled', () => {
    const schedule = buildSchedule();
    const scheduled = new Set(schedule.entries.map(e => e.sessionId));
    // High priority: s2, s3, s7, s8
    const highScheduled = ['s2', 's3', 's7', 's8'].filter(id => scheduled.has(id));
    expect(highScheduled.length).toBeGreaterThanOrEqual(3); // at least 3 of 4
  });
});

describe('formatSchedule', () => {
  test('produces readable output', () => {
    const schedule = buildSchedule();
    const output = formatSchedule(schedule);
    expect(output).toContain('Keynote: Future of AI');
    expect(output).toContain('Dr. Smith');
    expect(output).toContain('[');
    expect(output).toContain(']');
    // Should have multiple lines
    const lines = output.trim().split('\n');
    expect(lines.length).toBeGreaterThanOrEqual(7);
  });

  test('sorted by time then room', () => {
    const schedule = buildSchedule();
    const output = formatSchedule(schedule);
    const lines = output.trim().split('\n');
    // Extract times from each line
    const times = lines.map(l => l.substring(0, 5));
    for (let i = 1; i < times.length; i++) {
      expect(times[i] >= times[i - 1]).toBe(true);
    }
  });
});
