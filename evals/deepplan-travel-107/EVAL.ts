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
    expect(plan.outboundTransport.number).toBe('G56802');
  });

  test('constraint: flight_seat_status - inbound flight', () => {
    expect(plan.inboundTransport.number).toBe('MU9896');
  });

  test('constraint: hotel_star_service_required - correct hotel', () => {
    expect(plan.hotel.name).toBe('Kunlun Leju Select Hotel (Zhengzhou South City Jinyi City Branch)');
  });

  test('constraint: hotel_star_service_required - correct star rating', () => {
    expect(plan.hotel.star).toBe(3);
  });

  test('constraint: hotel_star_service_required - required service', () => {
    expect(plan.hotel.services).toContain('SPA Service');
  });

  test('constraint: restaurant_cheapest_nearby_attraction - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Mi Pi Ji Halal Restaurant (West Street Branch)');
  });

  test('constraint: attraction_must_visit_named - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_must_visit_named');
  });
});
