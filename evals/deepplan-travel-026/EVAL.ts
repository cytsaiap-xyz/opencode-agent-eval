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
    expect(plan.outboundTransport.number).toBe('3U4451');
  });

  test('constraint: hotel_cheapest_brand - correct hotel', () => {
    expect(plan.hotel.name).toBe('Atour Hotel Xiamen Jimei School Village Jiageng Sports Center');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Upstairs Restaurant');
  });

  test('constraint: restaurant_specific_cuisine_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Old Xiamen Seafood Restaurant (Gulangyu Branch)');
  });

  test('constraint: budget_constraint - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('budget_constraint');
  });
});
