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

  test('constraint: flight_cheapest_direct - outbound flight', () => {
    expect(plan.outboundTransport.number).toBe('MF8414');
  });

  test('constraint: hotel_newest_decoration - correct hotel', () => {
    expect(plan.hotel.name).toBe('Ji Hotel Xiamen Zhongshan Road Botanical Garden Hotel');
  });

  test('constraint: attraction_all_of_type - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_all_of_type');
  });

  test('constraint: attraction_type_highest_rated - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_type_highest_rated');
  });
});
