# VitaBench Task: Cross Domain #27

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Today you're on vacation and have worked up a sweat doing a thorough house cleaning. You're too tired to cook and plan to order a light meal for delivery. You want something refreshing that includes meat, vegetables, and fruit, but you don't eat pork or beef. You also need to avoid high purine foods and anything with caffeine. You'd like it delivered around 1:00 PM. Recently, someone recommended a Nobel Prize-winning novel to you, but you find it hard to focus when reading at home. After lunch, you want to check if there's a quiet book bar nearby, thinking the atmosphere might be better for reading. While reading, you'd like to drink some tea to stay alert. You want to see what tea packages the book bar offers, as you don't like black tea, and you'd prefer to have a private reading space. If you find something suitable, you might buy a ticket in advance. Tomorrow afternoon, you need to take a train to Yuncheng for a business trip. You're thinking about taking one around 3:00 PM. If a First-class seat costs less than 200 yuan, you'll buy that; otherwise, you'll opt for a Second-class seat.

## Context

- Current time: `2025-06-03 12:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The ordered takeout food must be light meal
- The ordered takeout food must include meat, and cannot be pork or beef
- The ordered takeout food must include vegetables
- The ordered takeout food must include fruit
- The ordered takeout food should be refreshing
- The ordered takeout food cannot contain high-purine foods (such as offal, seafood soup, shrimp, etc.)
- The ordered takeout food cannot contain caffeine (such as coffee, matcha, etc.)
- The delivery address for the takeout order should be South Area, East Garden Community, Garden Front Street, Pingcheng District, Datong, Shanxi Province
- The takeout order delivery time should be around 13:00
- The book bar ordered should be less than 2.5km from South Area, East Garden Community, Garden Front Street, Pingcheng District, Datong, Shanxi Province
- The book bar ordered should have a quiet environment
- The book bar ordered must provide tea drink service
- The book bar set ordered should include tea, and it cannot be black tea
- The book bar set ordered should include private reading space
- The departure station of the train ordered should be Datong Station
- The arrival station of the train ordered should be Yuncheng Station
- The train ordered must depart around 3 PM on June 4, 2025 [specifically, the train departure time should be between 2:45 and 3:15]
- The train ticket in the order should be First-class seat
- The train number in the ticket order should be G1208

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
