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

  test('constraint: flight_shortest_duration_direct - outbound flight', () => {
    expect(plan.outboundTransport.number).toBe('CA3527');
  });

  test('constraint: hotel_star_service_required - correct hotel', () => {
    expect(plan.hotel.name).toBe('Vienna Hotel (5.0 Chongqing Sunac Resort Branch)');
  });

  test('constraint: hotel_star_service_required - correct star rating', () => {
    expect(plan.hotel.star).toBe(3);
  });

  test('constraint: hotel_star_service_required - required service', () => {
    expect(plan.hotel.services).toContain('Swimming Pool');
  });

  test('constraint: restaurant_specific_cuisine_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Exquisite Sichuan Cuisine · Half-Mountain Garden Restaurant');
  });

  test('constraint: attraction_type_highest_rated - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_type_highest_rated');
  });
});
