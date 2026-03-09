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

  test('constraint: train_cheapest_train_type - outbound train', () => {
    expect(plan.outboundTransport.number).toBe('G710');
  });

  test('constraint: hotel_cheapest_star - correct hotel', () => {
    expect(plan.hotel.name).toBe('Home Inn Selected - Dalian Kuiying Building Labor Park Branch');
  });

  test('constraint: hotel_cheapest_star - correct star rating', () => {
    expect(plan.hotel.star).toBe(3);
  });

  test('constraint: restaurant_cheapest_nearby_attraction - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Eat Well 15 Yuan Self-Service Fast Food Restaurant');
  });

  test('constraint: restaurant_highest_rated - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Hang Xiaodian Dim Sum & Scallion Oil Noodles (Parkland Store)');
  });
});
