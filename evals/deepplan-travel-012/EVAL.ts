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
    expect(plan.outboundTransport.number).toBe('G2935');
  });

  test('constraint: train_seat_class - inbound train', () => {
    expect(plan.inboundTransport.number).toBe('D1794');
  });

  test('constraint: hotel_star_service_required - correct hotel', () => {
    expect(plan.hotel.name).toBe('Guilin Sky Street International Hotel');
  });

  test('constraint: hotel_star_service_required - correct star rating', () => {
    expect(plan.hotel.star).toBe(4);
  });

  test('constraint: hotel_star_service_required - required service', () => {
    expect(plan.hotel.services).toContain('Gym');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Yangshuo Liyue River View Restaurant');
  });

  test('constraint: restaurant_specific_cuisine_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Guilin Shangri-La Hotel · Li Café Western Restaurant');
  });
});
