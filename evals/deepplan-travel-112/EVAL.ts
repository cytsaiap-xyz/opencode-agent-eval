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

  test('constraint: flight_earliest_departure_direct - outbound flight', () => {
    expect(plan.outboundTransport.number).toBe('MU2531');
  });

  test('constraint: hotel_newest_decoration - correct hotel', () => {
    expect(plan.hotel.name).toBe('Jinjiang Inn (Hangzhou West Lake Cultural Square Metro Station Hotel)');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Pizza Marzano Italian Restaurant (West Lake Cultural Plaza Branch)');
  });

  test('constraint: restaurant_must_eat_named - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Feng Yue Oriental Cuisine');
  });
});
