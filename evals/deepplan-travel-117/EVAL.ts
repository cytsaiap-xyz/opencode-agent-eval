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
    expect(plan.outboundTransport.number).toBe('D1028');
  });

  test('constraint: hotel_star_service_required - correct hotel', () => {
    expect(plan.hotel.name).toBe('Radisson Hotel Beijing Daxing Airport');
  });

  test('constraint: hotel_star_service_required - correct star rating', () => {
    expect(plan.hotel.star).toBe(5);
  });

  test('constraint: hotel_star_service_required - required service', () => {
    expect(plan.hotel.services).toContain('Robot Service');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Tsinghua University Xichunyuan Restaurant');
  });

  test('constraint: restaurant_cheapest_nearby_attraction - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Xiaoxiang Pavilion (Sanlitun SOHO Branch)');
  });
});
