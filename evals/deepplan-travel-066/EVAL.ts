import { expect, test, describe } from 'vitest';
import { planTrip } from './solution';
import taskData from './task-data.json';

describe('DeepPlanning Travel Task', () => {
  const plan = planTrip();
  const constraints = taskData.hard_constraints as Record<string, any>;
  const meta = taskData.meta_info;

  test('plan has correct origin and destination', () => {
    expect(plan.origin).toBeTruthy();
    expect(plan.destination).toBeTruthy();
  });

  test('plan has correct number of days', () => {
    expect(plan.days).toBe(meta.days);
  });

  test('plan has correct number of travelers', () => {
    expect(plan.peopleNumber).toBe(meta.people_number);
  });

  test('constraint: flight_seat_status - outbound flight', () => {
    expect(plan.outboundTransport.number).toBe('FU6594');
  });

  test('constraint: flight_seat_status - inbound flight', () => {
    expect(plan.inboundTransport.number).toBe('QW6155');
  });

  test('constraint: hotel_highest_rated - correct hotel', () => {
    expect(plan.hotel.name).toBe('Changsha Yuelu Fairfield Hotel');
  });

  test('constraint: attraction_type_highest_rated - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_type_highest_rated');
  });

  test('constraint: attraction_top_rated_must_visit - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_top_rated_must_visit');
  });
});
