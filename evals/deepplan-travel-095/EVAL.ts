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

  test('constraint: train_latest_arrival_direct - inbound train', () => {
    expect(plan.inboundTransport.number).toBe('G9874');
  });

  test('constraint: hotel_brand_highest_rated - correct hotel', () => {
    expect(plan.hotel.name).toBe('Jinjiang Inn Nanchang Bayi Square Yongshu Road Metro Station');
  });

  test('constraint: restaurant_closest_to_attraction - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Yunlin Mountain Hotel · Meihu Chinese Restaurant');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Mu Jia Music Restaurant & Bar Phoenix Island Branch (Jianjun Sculpture Square Branch)');
  });
});
