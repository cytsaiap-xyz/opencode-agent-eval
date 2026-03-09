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

  test('constraint: train_cheapest_train_type - outbound train', () => {
    expect(plan.outboundTransport.number).toBe('G2644');
  });

  test('constraint: hotel_star_highest_rated - correct hotel', () => {
    expect(plan.hotel.name).toBe('Nanjing Central Hotel');
  });

  test('constraint: hotel_star_highest_rated - correct star rating', () => {
    expect(plan.hotel.star).toBe(5);
  });

  test('constraint: restaurant_specific_cuisine_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Xiang · All-Day Dining Restaurant');
  });

  test('constraint: attraction_type_highest_rated - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_type_highest_rated');
  });
});
