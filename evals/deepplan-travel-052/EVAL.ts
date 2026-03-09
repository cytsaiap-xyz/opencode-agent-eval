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

  test('constraint: flight_shortest_duration_direct - outbound flight', () => {
    expect(plan.outboundTransport.number).toBe('9C8523');
  });

  test('constraint: hotel_cheapest_brand - correct hotel', () => {
    expect(plan.hotel.name).toBe('Enshi Badong Hongsheng Business Hotel');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Yongxing Restaurant (Daqiao Road Branch)');
  });

  test('constraint: attraction_top_rated_must_visit - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_top_rated_must_visit');
  });
});
