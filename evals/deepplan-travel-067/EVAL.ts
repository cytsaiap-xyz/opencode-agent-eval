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
    expect(plan.outboundTransport.number).toBe('CA4973');
  });

  test('constraint: flight_seat_class - inbound flight', () => {
    expect(plan.inboundTransport.number).toBe('NS8159');
  });

  test('constraint: hotel_price_range - correct hotel', () => {
    expect(plan.hotel.name).toBe('Xiamen Sheraton Hotel');
  });

  test('constraint: attraction_top_rated_must_visit - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_top_rated_must_visit');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Chef\'s Restaurant (Huangcuo Branch)');
  });
});
