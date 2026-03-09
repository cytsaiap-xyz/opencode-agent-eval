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

  test('constraint: train_earliest_departure_direct - outbound train', () => {
    expect(plan.outboundTransport.number).toBe('C7698');
  });

  test('constraint: hotel_cheapest_star - correct hotel', () => {
    expect(plan.hotel.name).toBe('Guangzhou Xiangxue International Hotel Apartment (Baoneng Performing Arts Center Branch)');
  });

  test('constraint: hotel_cheapest_star - correct star rating', () => {
    expect(plan.hotel.star).toBe(5);
  });

  test('constraint: restaurant_cheapest_nearby_attraction - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Jingbao Restaurant · Established 1994');
  });

  test('constraint: restaurant_must_eat_named - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Zhou Zhi Ji Tea Restaurant (Guangren Road Branch)');
  });
});
