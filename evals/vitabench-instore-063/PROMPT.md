# VitaBench Task: Instore #63

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

I've heard that moxibustion during the Dog Days can remove cold and dampness, so you plan to try it tomorrow. You hope the health preservation center has a TCM Physician Consultation available, and it shouldn't be too far—you won't consider places more than three kilometers from home. After comparing several options, you decide to book the cheapest Multiple Acupoint Moxibustion Treatment Package. You also want to buy a beverage from a highly-rated beverage shop within one kilometer of Starlight Paradise Shopping Mall, so you can bring it when picking up your daughter after her tutoring class. First check if the beverage shop has Strawberry Milkshake; if they do, buy one, otherwise just get a Pearl Milk Tea (Boba Milk Tea).

## Context

- Current time: `2024-07-21 14:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The distance between the health preservation center and Room 1203, Building B, Huale Garden, 1037 Luoyu Road, Hongshan District, Wuhan should be within 3000m (including 3000m)
- The health preservation center should have a TCM Physician available on Mondays
- The ordered product from the health preservation center should be a multiple acupoint treatment package
- The ordered product from the health preservation center should be moxibustion treatment
- The ordered product from the health preservation center should be the Traditional Five-Point Moxibustion Experience Package
- The distance between the beverage shop and the Starlight Paradise Shopping Mall should be within 1000m (including 1000m)
- After checking the user's historic orders, book and resercation, the user's preferred store rating range is 4.3-5.0, so the beverage shop's rating should be 4.3 or above
- The beverage shop should be checked for Strawberry Milkshake, which is available, so the ordered product from the beverage shop should be Strawberry Milkshake

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
