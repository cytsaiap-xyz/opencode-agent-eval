# VitaBench Task: Instore #50

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You've recently felt that your body coordination has worsened, and you're also under a lot of work pressure, so you plan to find a combat gym with nationally certified boxing coaches to learn boxing. The venue must have a parking lot within 800 meters, so you can drive there directly after work. This is your first time trying boxing, and you hope to purchase an experience package with professional private training, which should include protective gear and basic movement instruction. If there's no single-session card available, a weekly card would work too. After ordering the package, make an appointment for 7 PM today. Before going to class, you need to eat something or you won't have energy. Find a fast food restaurant within 1km of the boxing gym, one that serves quickly. You want a light-flavored single-person meal with a balanced meat and vegetable combination, including rice, and the price should not exceed 50 yuan.

## Context

- Current time: `2024-09-13 17:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The boxing gym to order from must have nationally certified boxing coaches
- The package ordered from the gym should include boxing courses
- The recommended gym should be within 800 meters or less from a parking lot
- The package ordered from the gym should include professional private training
- The package ordered from the gym should include protective gear
- The package ordered from the gym should include basic movements instruction
- Should check if the recommended gym offers single trial classes, and if so, the ordered package should include a single trial class
- The reserved gym should be Nanning Gold Medal Boxing Training Gym
- The gym reservation time should be 2024-09-13 19:00:00
- The number of people for the gym reservation should be 1
- The recommended fast food restaurant should be within 1km or less from Nanning Gold Medal Boxing Training Gym
- The recommended fast food restaurant must have fast serving
- The single-person meal ordered from the fast food restaurant should be light-flavored
- The package ordered from the fast food restaurant should be a single-person meal
- The package ordered from the fast food restaurant should have a balanced meat and vegetable combination
- The package ordered from the fast food restaurant should include rice
- The order price at the fast food restaurant should be less than or equal to 50 yuan

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
