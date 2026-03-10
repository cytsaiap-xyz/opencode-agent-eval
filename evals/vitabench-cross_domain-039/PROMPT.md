# VitaBench Task: Cross Domain #39

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Tomorrow is the Lantern Festival, and you need to go to your wife's parents' home for a family dinner. Your wife took your child back to Zhongshan a few days ago, but you've been busy with work, so you bought a ticket to Zhongshan for tomorrow. Having finally finished your work, you're planning to find a 24-Hour Service internet cafe tonight to play some games, and you need monitors with at least 200Hz refresh rate. You want to order a Private Room Voucher to avoid noise. You also want some energy drinks, so you're checking if there's a milk tea shop near the internet cafe that could deliver a caffeinated drink directly to the internet cafe around 8pm, but you don't like adding toppings. Oh, and you want to check what time your train departs - if it's before 8am, you're considering an Overnight Package at the internet cafe so you can go directly to the high-speed railway station afterward, so the internet cafe should be near the high-speed railway station. Otherwise, you'll just find an internet cafe close to home, and if you get too tired, you'll go home to sleep.

## Context

- Current time: `2024-02-23 18:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- Delivery address is Jidian Internet Cafe, North Plaza of Zhuhai High-Speed Railway Station, 999 Yingbin South Road, Xiangzhou District, Zhuhai City, Guangdong Province
- Delivery time is around 8 PM on February 23, 2024 [i.e., delivery time should be between 7:45 PM and 8:15 PM]
- Products in the delivery order should not include toppings
- The ordered product should contain caffeine
- The merchant should provide 24-Hour Service
- The merchant should have monitors above 200Hz
- The purchased package should be for a private room
- The purchased package should allow overnight use
- By checking historical orders, we found a train ticket from Zhuhai to Foshan departing at 07:25 on February 24, 2024, so the merchant should be near the high-speed railway station

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
