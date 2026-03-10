# VitaBench Task: Instore #14

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're looking to find a place for hair care within 1km of your company. You want to get a scalp massage, your hair is a bit dry, and you also need a protein correction, so the package should include these two items. After confirming the package, you'll pay for it, and make an appointment for 10 AM the day after tomorrow since you need to handle some things at the company earlier that morning. Since you're going out anyway, you plan to do some yoga that day. You want to check out private yoga classes nearby, specifically advanced classes, and just need a multi-class card. The yoga studio and the hair salon shouldn't be more than 2km apart. You need to control your expenses, so the total cost for these two activities should be within 600 yuan, and you absolutely cannot exceed this budget.

## Context

- Current time: `2025-03-20 09:15:00`
- Domain: `instore`

## Requirements / Rubrics

- The hair salon must be within 1km of the company address (28F, Shanghai Plaza Office Building, 138 Middle Huaihai Road, Huangpu District, Shanghai)
- The haircut package must include scalp massage
- The haircut package must include scalp massage
- The reserved hair salon should be Yunzi Hair Care Salon
- The appointment time in the reservation should be 10:00:00 on 2025-03-22
- The number of people in the reservation should be 1
- The yoga studio should be within 2km of Yunzi Hair Care Salon, 2F, Jin Mao Tower, 218 Middle Huaihai Road, Huangpu District, Shanghai
- The yoga class ordered should be a private training
- The yoga class ordered should be a single class
- The yoga class ordered should be an advanced class
- The total cost for both the haircut and yoga services must be kept under 600 yuan

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
