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
    expect(plan.outboundTransport.number).toBe('G710');
  });

  test('constraint: train_seat_status - inbound train', () => {
    expect(plan.inboundTransport.number).toBe('G725');
  });

  test('constraint: hotel_newest_decoration - correct hotel', () => {
    expect(plan.hotel.name).toBe('Hanting Hotel Dalian Xian Road Commercial Street');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Yuanben Tang Restaurant');
  });

  test('constraint: attraction_all_of_type - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_all_of_type');
  });
});
