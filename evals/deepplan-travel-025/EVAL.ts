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

  test('constraint: flight_shortest_duration_direct - inbound flight', () => {
    expect(plan.inboundTransport.number).toBe('G56803');
  });

  test('constraint: hotel_cheapest_brand - correct hotel', () => {
    expect(plan.hotel.name).toBe('Hanting Hotel Zhengzhou Hanghai East Road');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Little Green Lotus Restaurant');
  });

  test('constraint: restaurant_specific_cuisine_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Haiyu Premium Seafood Restaurant');
  });

  test('constraint: budget_constraint - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('budget_constraint');
  });
});
