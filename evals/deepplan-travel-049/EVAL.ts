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

  test('constraint: flight_arrival_time_range - inbound flight', () => {
    expect(plan.inboundTransport.number).toBe('FM9221');
  });

  test('constraint: hotel_price_range - correct hotel', () => {
    expect(plan.hotel.name).toBe('Renaissance Shanghai Zhongshan Park Hotel');
  });

  test('constraint: attraction_type_highest_rated - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_type_highest_rated');
  });

  test('constraint: attraction_must_visit_named - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_must_visit_named');
  });
});
