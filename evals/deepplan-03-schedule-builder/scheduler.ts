import conferenceData from './conference.json';

export interface Session {
  id: string;
  title: string;
  speaker: string;
  durationMinutes: number;
  track: string;
  priority: 'required' | 'high' | 'medium' | 'low';
  requiredEquipment: string[];
  preferredTimeSlot: 'morning' | 'afternoon';
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
  equipment: string[];
}

export interface TimeSlot {
  id: string;
  start: string;
  end: string;
  period: 'morning' | 'afternoon';
}

export interface ScheduleEntry {
  sessionId: string;
  roomId: string;
  timeSlotId: string;
  startTime: string;
  endTime: string;
}

export interface Schedule {
  entries: ScheduleEntry[];
  unscheduled: string[]; // session IDs that couldn't be scheduled
  score: number;         // quality score
}

export interface ConflictReport {
  type: 'room' | 'speaker' | 'equipment';
  description: string;
  entries: [ScheduleEntry, ScheduleEntry];
}

/**
 * Check if a room has all the required equipment for a session.
 */
export function roomHasEquipment(room: Room, session: Session): boolean {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Check if a session's duration fits within a time slot.
 * Session must not exceed the slot's time range.
 * Time slot duration = end - start in minutes.
 */
export function sessionFitsSlot(session: Session, slot: TimeSlot): boolean {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Detect all conflicts in a schedule:
 * - Room conflict: two sessions in the same room at overlapping times
 * - Speaker conflict: same speaker in two sessions at overlapping times
 * - Equipment conflict: room doesn't have required equipment
 *
 * Return an array of conflict reports.
 */
export function detectConflicts(schedule: Schedule): ConflictReport[] {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Calculate a quality score for a schedule (0-100):
 * - +40 points: all "required" priority sessions are scheduled
 * - +30 points: all "high" priority sessions are scheduled
 * - +15 points: sessions are in their preferred time period (morning/afternoon)
 * - +15 points: no conflicts
 *
 * Partial credit: proportional to the fraction achieved in each category.
 */
export function calculateScore(schedule: Schedule): number {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Build an optimal conflict-free schedule.
 *
 * Algorithm requirements:
 * 1. Schedule all "required" sessions first, then "high", then "medium", then "low"
 * 2. Prefer rooms that match required equipment
 * 3. Prefer time slots matching the session's preferred period
 * 4. No speaker can be in two places at the same time
 * 5. No room can host two sessions at the same time
 * 6. Session duration must fit within the time slot
 * 7. Sessions with duration > 60 min may span into the next consecutive slot
 *    (treat two adjacent slots as one big slot if needed)
 *
 * Return the best schedule with its quality score.
 */
export function buildSchedule(): Schedule {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Get a human-readable schedule display grouped by time slot.
 * Format:
 * "09:00-10:00: [Main Hall] Keynote: Future of AI (Dr. Smith)"
 * "09:00-10:00: [Room A] React Best Practices (Jane Doe)"
 * ...
 *
 * Sort by time, then by room name.
 */
export function formatSchedule(schedule: Schedule): string {
  // TODO: implement
  throw new Error('Not implemented');
}
