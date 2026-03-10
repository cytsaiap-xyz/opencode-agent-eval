# VitaBench Task: Instore #93

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You and your college roommates are planning to have a gathering this weekend. You're hoping to find a retro decorated Chinese restaurant within 5km of Shanxi Medical University, and buy a 6-person package that includes drinks. After the meal, you want to find a place to play games, so you're planning to find a board game club near the restaurant to play Werewolf game, and you intend to buy several individual tickets, which would also make carpooling with others convenient. You estimate that the gathering will end at around 10 PM, and you'll definitely be home by 11 PM, so you're thinking that if there's still a flower shop open within 2km of your home, you'll buy a voucher to bring a bouquet of flowers back for your wife. You prefer white roses, but if they're sold out, you'll buy red roses, but be careful not to buy discounted defective products.

## Context

- Current time: `2025-03-15 19:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The Chinese restaurant should be within 5000m (inclusive) of Shanxi Medical University
- The Chinese restaurant should have retro decoration style
- The ordered item at the Chinese restaurant should be a six-person package
- The ordered item at the Chinese restaurant should include drinks
- The ordered item at the Chinese restaurant should be available on weekends
- The board game club should be within 3000m (inclusive) of Laozhaimen Private Cuisine, 500m east of Shanxi Medical University, Qinxian North Street, Xiaodian District, Taiyuan City
- The ordered item at the board game club should be Werewolf game tickets
- The ordered item at the board game club should be Individual ticket
- The quantity of ordered items at the board game club should be 6
- The ordered flower shop should be within 2000m (inclusive) of Room 1203, Building A, Longcheng Garden, No.100 South Inner Ring Street, Yingze District, Taiyuan City
- The ordered flower shop should be open until 23:00
- Should check if the flower shop has white rose bouquet vouchers, result is no, therefore the ordered item at the flower shop should be red rose
- The ordered item at the flower shop should be a bouquet
- The ordered item at the flower shop cannot be a discounted item

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
