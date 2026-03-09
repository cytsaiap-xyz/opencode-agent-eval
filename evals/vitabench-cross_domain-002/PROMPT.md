# VitaBench Task: Cross Domain #2

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your childhood friend has returned to hometown for work, and you want to welcome him back. Initially, you thought about ordering takeout to eat at home together, but later felt it should be more ceremonial, so you decided to go to a game arcade to experience childhood memories, especially those retro arcades with various arcade machines and claw machines that can best evoke beautiful memories. You want to check if the arcade has special nostalgic packages that include game tokens and various classic arcade experiences, scheduled for 3 PM today. Also order two cups of Bitter Gourd Lemon Tea for delivery to the arcade, also scheduled to arrive at 3 PM. He's coming back from Hangzhou, arriving at 12 PM, and you want to check the train schedule to see which high-speed rail station he's arriving at, as you plan to pick him up. The last time you two met was during the Dragon Boat Festival the year before last, and you want to check the exact date to avoid being unable to recall during your conversation. You suddenly remember that your friend doesn't eat bitter gourd, so you need to quickly cancel the takeout order and change it to one cup of Mint Lemon Tea and one cup of Bitter Gourd Lemon Tea, still from the same shop.

## Context

- Current time: `2025-11-02 10:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- Game arcades should provide claw machines and arcade games
- Game arcade reservation time is November 2, 2025 at 3:00 PM
- Game arcade reservation is for 2 people
- The delivery address for the cancelled bitter gourd beverage order is Retro Time Game Arcade, 168 East Renmin Road, Wucheng District, Jinhua, Zhejiang Province
- The order containing two cups of Bitter Gourd Lemon Tea has been cancelled
- The friend is taking train G1572
- The merchant for the Mint Lemon Tea and Bitter Gourd Lemon Tea order is A Little Tea
- The Mint Lemon Tea and Bitter Gourd Lemon Tea order contains two beverages, one Mint Lemon Tea and one Bitter Gourd Lemon Tea
- The delivery address for the Mint Lemon Tea and Bitter Gourd Lemon Tea order is Retro Time Game Arcade, 168 East Renmin Road, Wucheng District, Jinhua, Zhejiang Province
- The estimated delivery time for the Mint Lemon Tea and Bitter Gourd Lemon Tea order should be slightly after 3:00 PM on November 2, 2025
- The Dragon Boat Festival in 2023 is on June 22, 2023

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
