# VitaBench Task: Cross Domain #49

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your graduate advisor is retiring, and the students want to organize a gratitude banquet for him. You have been chosen to arrange the event. You want to schedule the banquet on March 16th at a cultural theme restaurant with a scholarly atmosphere, where the environment should be elegant and dignified, the dishes should be exquisite and ideally carry refined meaning. A total of 18 classmates will attend the banquet, and you need to reserve a private room in advance, booking it until midnight. If there are suitable set menus, you can purchase them all at once. Also, there are 7 students from out of town coming to attend the event, so you need to arrange accommodation for them that evening. You want to choose a hotel close to the restaurant, with a nice environment. Among them, there is a couple who can stay together. All people should be arranged in king rooms.

## Context

- Current time: `2025-03-14 11:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The reserved restaurant should be a cultural-themed restaurant with a scholarly atmosphere
- The reserved restaurant should have an elegant and dignified environment
- The reserved restaurant should offer exquisite dishes
- The private room of the reserved restaurant should accommodate at least 18 people
- The restaurant reservation time is 12:00 on March 16, 2025
- The restaurant reservation is for 18 people
- The ordered restaurant should be Moxiang Pavilion (S17550810196195804_I00007)
- The banquet set ordered for the event should be suitable for 18 people
- The booked hotel should be within 1km of Moxiang Pavilion, 36 Zhongguancun South Street, Haidian District, Beijing
- The booked hotel should have a nice environment
- The room type booked should be king room
- Six rooms should be booked at the same hotel
- The check-in date for the hotel should be March 16, 2025

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
