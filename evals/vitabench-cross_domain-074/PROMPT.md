# VitaBench Task: Cross Domain #74

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You've finally started your own company, and your family is very supportive of your entrepreneurial journey. Tomorrow morning, six of them plan to visit your office at the business building. For lunch, you'd like to book a high-end restaurant nearby with a business banquet where you can all dine together. Ideally, choose a set menu that symbolizes wealth and prosperity. You want to make the reservation and pay in advance now so no one else insists on covering the bill. After lunch, you'll be taking your cousin to Shenzhen for market research. Check the available high-speed train schedules heading there. Since neither of you has packed yet, if there are no trains departing after 4:00 PM tomorrow, purchase tickets for the earliest direct train the day after tomorrow instead, but not standing tickets.

## Context

- Current time: `2025-03-06 10:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The restaurant should be within 1 kilometer of the company address (Room 1208, Hang Lung Plaza Office Building, 139 Renmin Middle Road, Liangxi District, Wuxi, Jiangsu Province)
- The restaurant must be a high-end restaurant with a rating above 4.7
- The restaurant should have a Business Banquet tag
- The restaurant set menu should have 'Wealth Prosperity' or similar wealth symbolism
- The restaurant should support reservation
- The restaurant set menu should be sufficient for 7 people
- Need to book the restaurant for noon on March 7, 2025
- Restaurant reservations should be for 7 people
- Need to search for and provide high-speed rail schedules from Wuxi to Shenzhen after 4:00 PM on March 7, 2025, with the result showing G2382 train with Standing Ticket availability
- Need to search for and provide the earliest available train on March 8, 2025, with the ordered train being G2102
- The high-speed train tickets should not be Standing Tickets
- The high-speed train tickets' destination must be Shenzhen
- The order should be for 2 high-speed rtrain tickets

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
