# VitaBench Task: Cross Domain #55

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

The company elevator has recently been displaying ads for an archery range, and you and your colleagues have agreed to try it out tonight. You want to check if there are any newly opened archery ranges nearby and purchase a beginner package that includes coach guidance. Since you'll need an archery protective gear, you'd prefer not to use the beginner type but instead buy a professional-grade one in size L. Make sure it's delivered to your company by 6:00 PM today. Next Tuesday, you're traveling on a business trip to Taiyuan, and the finance department has asked you to book your own business class flight ticket for reimbursement later. You'd like to look at flights departing Tuesday morning and book the latest possible departure. Suddenly, you remembered that you might step out shortly; so the protective gear should be noted for "leave at front desk" upon delivery.

## Context

- Current time: `2025-11-07 16:45:49`
- Domain: `cross_domain`

## Requirements / Rubrics

- The archery hall ordered from should be newly opened
- The package purchased at the archery hall should include coach guidance
- The package purchased at the archery hall should be aimed at beginners
- The flight ordered is from Changchun to Taiyuan
- The date of the flight ticket is November 11, 2025
- The flight departs in the morning
- The flight ticket must be business class
- The flight ordered is the last departure of the morning, the flight in the ticket order should be MU5231 (departing at 11:40)
- The item in the delivery order should be archery protective gear
- The archery protective gear in the order should be professional grade
- Size L should be selected for the archery protective gear in the order
- The delivery time for the archery protective gear order should be before or at 6:00 PM on November 7, 2025
- The delivery address for the archery protective gear order should be Room 1203, Building B, Changchun International Financial Center, 1588 Kaiyun Street, Chaoyang District, Changchun, Jilin Province
- The note for the archery protective gear order should be 'Leave at front desk'

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
