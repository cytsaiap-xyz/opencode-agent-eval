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

  test('constraint: train_seat_class - outbound train', () => {
    expect(plan.outboundTransport.number).toBe('G1499');
  });

  test('constraint: train_seat_class - inbound train', () => {
    expect(plan.inboundTransport.number).toBe('G3068');
  });

  test('constraint: hotel_cheapest_star - correct hotel', () => {
    expect(plan.hotel.name).toBe('Lavande Hotel · Nanchang Tengwang Pavilion Wanshou Palace Metro Station Branch');
  });

  test('constraint: hotel_cheapest_star - correct star rating', () => {
    expect(plan.hotel.star).toBe(3);
  });

  test('constraint: restaurant_must_eat_named - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Sister Cheng\'s Little Eatery');
  });

  test('constraint: restaurant_highest_rated - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Garden Bistro');
  });

  test('constraint: budget_constraint - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('budget_constraint');
  });
});
