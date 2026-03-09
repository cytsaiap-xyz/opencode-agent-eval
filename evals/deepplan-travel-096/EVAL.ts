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
    expect(plan.outboundTransport.number).toBe('MU3790');
  });

  test('constraint: flight_seat_status - inbound flight', () => {
    expect(plan.inboundTransport.number).toBe('HO1735');
  });

  test('constraint: hotel_newest_decoration - correct hotel', () => {
    expect(plan.hotel.name).toBe('Ji Hotel Nanjing Confucius Temple Laomendong');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Nengren Slow Time Community Self-Service Restaurant');
  });

  test('constraint: restaurant_cheapest_nearby_attraction - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Xilai Shun (Xiaowei Street Main Branch)');
  });
});
