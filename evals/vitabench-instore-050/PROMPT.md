# VitaBench Task: Instore #50

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

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

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
