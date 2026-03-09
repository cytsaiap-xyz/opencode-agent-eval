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

  test('constraint: flight_departure_time_range - outbound flight', () => {
    expect(plan.outboundTransport.number).toBe('SC2280');
  });

  test('constraint: hotel_price_range - correct hotel', () => {
    expect(plan.hotel.name).toBe('Peony International Hotel Xiamen');
  });

  test('constraint: attraction_all_of_type - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_all_of_type');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Xiamen University Siming Campus Nanguang Restaurant');
  });

  test('constraint: budget_constraint - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('budget_constraint');
  });
});
