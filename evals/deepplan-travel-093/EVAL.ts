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

  test('constraint: flight_cheapest_airline_direct - outbound flight', () => {
    expect(plan.outboundTransport.number).toBe('G59098');
  });

  test('constraint: hotel_cheapest_star - correct hotel', () => {
    expect(plan.hotel.name).toBe('Ji Hotel Beijing Asian Games Village Bird\'s Nest');
  });

  test('constraint: hotel_cheapest_star - correct star rating', () => {
    expect(plan.hotel.star).toBe(3);
  });

  test('constraint: restaurant_must_eat_named - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Yue She Restaurant (T+MALL Branch)');
  });

  test('constraint: attraction_type_highest_rated - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_type_highest_rated');
  });
});
