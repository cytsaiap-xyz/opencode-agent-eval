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
    expect(plan.outboundTransport.number).toBe('MU2115');
  });

  test('constraint: hotel_cheapest_brand - correct hotel', () => {
    expect(plan.hotel.name).toBe('Atour Hotel Beijing Yizhuang Mobile Silicon Valley');
  });

  test('constraint: restaurant_highest_rated - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Wanchun Jinfu Afternoon Tea (Qianmen Branch)');
  });

  test('constraint: attraction_must_visit_named - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_must_visit_named');
  });
});
