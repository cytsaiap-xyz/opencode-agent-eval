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
    expect(plan.outboundTransport.number).toBe('T122');
  });

  test('constraint: train_seat_class - inbound train', () => {
    expect(plan.inboundTransport.number).toBe('G1714');
  });

  test('constraint: hotel_highest_rated - correct hotel', () => {
    expect(plan.hotel.name).toBe('Zhengzhou Hanfeng Business Hotel');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Harbor Restaurant');
  });

  test('constraint: attraction_all_of_type - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_all_of_type');
  });
});
