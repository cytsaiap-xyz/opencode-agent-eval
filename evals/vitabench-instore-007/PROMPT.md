# VitaBench Task: Instore #7

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Today you don't have much planned, so you're thinking of calling a few friends to find a place to play mahjong together. After discussing, you all unanimously decided to find a place with a nice environment and relatively new facilities. Preferably a full self-service style place, which also makes it convenient to bring your own tea and snacks. You want to reserve a spot for 4 PM. A teahouse would also work, as long as you can buy packages and it's not one of those places located below residential buildings. You expect to play for quite a while, so you need to book a 6-hour private room package first. After mahjong, you and your friends want to find a BBQ place near the card and board game room for some night snacks. It should be an established restaurant that has been open for at least five years and operates until 3 AM, with an average cost not exceeding 80 yuan per person. Once you've selected the restaurant, check out their meal for four and place an order.

## Context

- Current time: `2024-08-24 14:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The mahjong venue must have a good environment
- The mahjong venue facilities must be relatively new
- The mahjong venue cannot be located in a residential area
- The mahjong venue must be Full self-service style
- The mahjong package ordered should not include tea and snacks
- The mahjong venue order must be a 6-hour private room package
- The mahjong venue reservation time must be August 24, 2024 at 4 PM
- The number of people for the mahjong venue reservation should be 4
- The reserved mahjong venue should be Shangya Card & Chess Club
- The BBQ restaurant ordered must be an established venue with at least five years of operation, opened before 2019
- The BBQ restaurant ordered should be within 500m (including 500m) of Laojiekou BBQ, 156 Financial Second Street, Taihu New Town, Binhu District, Wuxi
- The BBQ restaurant ordered must be open until 3:00 AM (including 3:00 AM)
- The BBQ restaurant order should be a Set menu for four
- The BBQ restaurant order should cost no more than 80 yuan per person, with a total order amount not exceeding 320 yuan

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
