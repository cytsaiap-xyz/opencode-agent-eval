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

  test('constraint: train_shortest_duration_direct - inbound train', () => {
    expect(plan.inboundTransport.number).toBe('G1533');
  });

  test('constraint: hotel_highest_rated - correct hotel', () => {
    expect(plan.hotel.name).toBe('Atour Hotel Henan Zhengkai Avenue');
  });

  test('constraint: restaurant_highest_rated - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Song Style Elegant Banquet · Song Culture Restaurant (Shangzuo Center Branch)');
  });

  test('constraint: restaurant_cheapest_nearby_attraction - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Zhang\'s Goose Burger');
  });
});
