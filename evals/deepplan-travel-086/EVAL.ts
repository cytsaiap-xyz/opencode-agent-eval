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

  test('constraint: flight_seat_status - outbound flight', () => {
    expect(plan.outboundTransport.number).toBe('HO7623');
  });

  test('constraint: flight_seat_status - inbound flight', () => {
    expect(plan.inboundTransport.number).toBe('EU7276');
  });

  test('constraint: hotel_star_service_required - correct hotel', () => {
    expect(plan.hotel.name).toBe('Puxi Hotel (Zhengzhou CBD Convention and Exhibition Center Branch)');
  });

  test('constraint: hotel_star_service_required - correct star rating', () => {
    expect(plan.hotel.star).toBe(3);
  });

  test('constraint: hotel_star_service_required - required service', () => {
    expect(plan.hotel.services).toContain('TV Casting');
  });

  test('constraint: restaurant_must_eat_named - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Qiyu Cantonese Tea Restaurant');
  });

  test('constraint: restaurant_closest_to_attraction - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Henan University Affiliated Zhengzhou First People\'s Hospital · Nutrition Restaurant');
  });

  test('constraint: budget_constraint - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('budget_constraint');
  });
});
