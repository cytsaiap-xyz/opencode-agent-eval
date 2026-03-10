# VitaBench Task: Instore #59

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

The weather is getting hot, and you want to find a swimming pool to learn swimming, so that you can enjoy the beach later. You plan to find a swimming pool that disinfects daily, and offers one-on-one guidance swimming lessons. As a beginner, you plan to practice for two weeks. You only have time on Fridays, Saturdays, and Sundays, so you want to purchase a package with just the right number of sessions. After deciding on the package, you placed an order, paid, and scheduled your first class for today at 6 PM. But you suddenly realized that you need some time to eat after work, so 6 PM is a bit tight. Therefore, you rescheduled to 7:30 PM. For dinner, you don't want anything too greasy, so you plan to go to a salad shop you've visited before to buy a single person set. This time you don't want chicken breast, but prefer red meat instead. Oh, and you can't drink coffee.

## Context

- Current time: `2025-05-09 16:30:00`
- Domain: `instore`

## Requirements / Rubrics

- Swimming pools should be disinfected daily
- The product ordered at the swimming pool should be one-on-one guidance course
- The product ordered at the swimming pool should be a course suitable for beginners
- The user's practice period is two weeks, during which they only participate in practice on Fridays, Saturdays, and Sundays each week, totaling 6 days of practice, so the swimming pool order should be for a 6-session package
- The reserved swimming pool should be Haiyue Swimming and Fitness Center
- The reservation time for the swimming pool should be 2025-05-09 19:30:00
- The number of people for the swimming pool reservation should be 1
- Need to check the user's historical behavior to find previously visited salad shops, the result is Mr. Salad, so the salad shop to order from should be Mr. Salad
- The product ordered at the salad shop should be a single person set
- The set ordered at the salad shop should include red meat
- The set ordered at the salad shop should not include chicken breast
- The set ordered at the salad shop should not include coffee drinks

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
