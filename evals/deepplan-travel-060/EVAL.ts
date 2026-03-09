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

  test('constraint: flight_seat_class - outbound flight', () => {
    expect(plan.outboundTransport.number).toBe('FU6594');
  });

  test('constraint: flight_seat_class - inbound flight', () => {
    expect(plan.inboundTransport.number).toBe('FU6593');
  });

  test('constraint: hotel_cheapest_brand - correct hotel', () => {
    expect(plan.hotel.name).toBe('Orange Hotel Changsha Lugu BBK New World');
  });

  test('constraint: restaurant_must_eat_named - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Xiangzhiwei Self-Service Restaurant (Four Twos and Two Kings Authorized Store)');
  });

  test('constraint: restaurant_closest_to_attraction - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Chuiyan Stir-Fried Yellow Beef Upgraded Store (Huaxia Branch)');
  });
});
