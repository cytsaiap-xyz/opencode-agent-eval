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

  test('constraint: flight_arrival_time_range - inbound flight', () => {
    expect(plan.inboundTransport.number).toBe('HO1255');
  });

  test('constraint: hotel_star_highest_rated - correct hotel', () => {
    expect(plan.hotel.name).toBe('Jinjiang Inn (Shanghai Fengxian Jinhui Longhu Tianjie Branch)');
  });

  test('constraint: hotel_star_highest_rated - correct star rating', () => {
    expect(plan.hotel.star).toBe(2);
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Minre Restaurant (Saint Love Building Branch)');
  });

  test('constraint: restaurant_must_eat_named - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Gong Li Restaurant (Zhengda Store)');
  });
});
