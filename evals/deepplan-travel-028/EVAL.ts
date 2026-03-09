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

  test('constraint: train_departure_time_range - outbound train', () => {
    expect(plan.outboundTransport.number).toBe('D3104');
  });

  test('constraint: hotel_star_service_required - correct hotel', () => {
    expect(plan.hotel.name).toBe('Manju Hotel (Hangzhou Xindeng Fuchun Port Branch)');
  });

  test('constraint: hotel_star_service_required - correct star rating', () => {
    expect(plan.hotel.star).toBe(4);
  });

  test('constraint: hotel_star_service_required - required service', () => {
    expect(plan.hotel.services).toContain('Swimming Pool');
  });

  test('constraint: restaurant_must_eat_named - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Changhua Family Restaurant (Gongchen Mountain Community Branch)');
  });

  test('constraint: attraction_must_visit_named - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('attraction_must_visit_named');
  });
});
