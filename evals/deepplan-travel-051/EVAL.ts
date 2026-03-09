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

  test('constraint: train_seat_status - outbound train', () => {
    expect(plan.outboundTransport.number).toBe('G1302');
  });

  test('constraint: train_seat_status - inbound train', () => {
    expect(plan.inboundTransport.number).toBe('G1301');
  });

  test('constraint: hotel_highest_rated - correct hotel', () => {
    expect(plan.hotel.name).toBe('Hanting Hotel Shanghai Jiaotong University Jiangchuan Road Metro Station New Branch');
  });

  test('constraint: restaurant_specific_tag_nearby - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Xianqi Half Step Tipsy Bistro (Dingxi Road Branch)');
  });

  test('constraint: restaurant_must_eat_named - restaurant', () => {
    const mealNames = plan.meals.map(m => m.restaurantName);
    expect(mealNames).toContain('Panlu Western Restaurant at Pullman Shanghai Jing\'an Hotel (Pullman Shanghai Jing\'an Hotel)');
  });

  test('constraint: budget_constraint - satisfied', () => {
    expect(plan.constraintResults).toHaveProperty('budget_constraint');
  });
});
