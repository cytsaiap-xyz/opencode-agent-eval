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
    expect(plan.inboundTransport.number).toBe('G3423');
  });

  test('constraint: hotel_price_range - correct hotel', () => {
    expect(plan.hotel.name).toBe('Vienna International Hotel (5.0 Edition Chengdu Chunxi Road Taikoo Li Branch)');
  });

  test('constraint: restaurant_closest_to_attraction - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Zi Fei (Kuanzhai Alley Scenic Area Branch)');
  });

  test('constraint: restaurant_highest_rated - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Yi Dian Wei Restaurant (Great Wall Garden Branch)');
  });
});
