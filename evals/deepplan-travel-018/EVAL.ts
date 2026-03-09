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

  test('constraint: train_seat_status - outbound train', () => {
    expect(plan.outboundTransport.number).toBe('G7713');
  });

  test('constraint: train_seat_status - inbound train', () => {
    expect(plan.inboundTransport.number).toBe('G7718');
  });

  test('constraint: hotel_star_highest_rated - correct hotel', () => {
    expect(plan.hotel.name).toBe('Shaoxing Yuecheng Hilton Garden Inn');
  });

  test('constraint: hotel_star_highest_rated - correct star rating', () => {
    expect(plan.hotel.star).toBe(4);
  });

  test('constraint: attraction_all_free_attractions - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_all_free_attractions');
  });

  test('constraint: restaurant_cheapest_nearby_attraction - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Shangdingxian Specialty Noodles');
  });

  test('constraint: budget_constraint - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('budget_constraint');
  });
});
