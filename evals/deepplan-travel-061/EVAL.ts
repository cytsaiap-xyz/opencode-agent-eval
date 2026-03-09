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

  test('constraint: train_departure_time_range - outbound train', () => {
    expect(plan.outboundTransport.number).toBe('G7262');
  });

  test('constraint: hotel_star_highest_rated - correct hotel', () => {
    expect(plan.hotel.name).toBe('Ji Hotel (Nanjing Pharmaceutical Valley Longtai Road)');
  });

  test('constraint: hotel_star_highest_rated - correct star rating', () => {
    expect(plan.hotel.star).toBe(3);
  });

  test('constraint: restaurant_closest_to_attraction - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Wanquinglou Gourmet Pavilion');
  });

  test('constraint: restaurant_highest_rated - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Songlan · Yakitori Tavern (Yunnan North Road Branch)');
  });
});
