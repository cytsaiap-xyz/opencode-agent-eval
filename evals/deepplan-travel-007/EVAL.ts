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
    expect(plan.outboundTransport.number).toBe('G3210');
  });

  test('constraint: train_seat_class - inbound train', () => {
    expect(plan.inboundTransport.number).toBe('D1637');
  });

  test('constraint: hotel_cheapest_star - correct hotel', () => {
    expect(plan.hotel.name).toBe('Jinjiang Inn Hotel (Taiyuan Wanda Plaza Longtan Park Branch)');
  });

  test('constraint: hotel_cheapest_star - correct star rating', () => {
    expect(plan.hotel.star).toBe(2);
  });

  test('constraint: attraction_top_rated_must_visit - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_top_rated_must_visit');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Little Splash Skewer');
  });
});
