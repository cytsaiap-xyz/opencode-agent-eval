# VitaBench Task: Ota #28

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your best friend is on a business trip in Shijiazhuang, and you haven't seen each other for a long time. You want to take the weekend to visit her. You plan to leave early on Saturday and want to check which trains are available before 8 AM. With so many railway stations in Beijing, you think it's more convenient to choose one close to your home. Sitting on a train for a long time is quite tiring, so you hope to arrive quickly. Your friend mentioned she has training on Saturday morning and a lunch gathering. So you two will probably meet in the afternoon and evening. Another college classmate of yours also wants to come, so you need to help her buy a ticket too. You want to check the weather for that day. If the weather is good, you'll buy her a ticket that arrives around 11:30 AM, and you two can stroll around first. If it happens to be rainy, she can arrive around 2 PM.

## Context

- Current time: `2026-09-17 15:43:59`
- Domain: `ota`

## Requirements / Rubrics

- There should be two train ticket orders, with the user's own ticket departing before 8 AM
- When searching for the station nearest to the user's home address (Wancheng Huafu Shangyuan, near Haiyuan, at the intersection of Wanliu Huafu North Street and Wanliu West Road, Haidian District, Beijing), the result is Beijing North Railway Station, so the departure station for the ticket departing before 8 AM must be Beijing North Railway Station
- When filtering for trains departing before 8 AM from Beijing North Railway Station, and finding the one with the shortest journey time, the result is G6703, so the user's own ticket order must be for train G6703
- The train ticket orders must be for September 19, 2026
- Must search for and provide the weather information for Shijiazhuang on September 19, 2026, which is light rain with temperatures between 16-23 degrees
- There should be two train ticket orders, with the college classmate's ticket arriving around 2 PM
- The college classmate's train ticket order must be for September 19, 2026

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
