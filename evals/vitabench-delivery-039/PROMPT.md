# VitaBench Task: Delivery #39

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

The temperature has been fluctuating these days, and the company air conditioner is still blowing strongly, causing my stomach to feel a bit cold. I plan to have something warm before continuing to work overtime on my PPT. So I want to order three servings of sesame paste from Honeymoon Dessert that I've ordered before as a treat for myself before 8 o'clock. I've heard that Corn Cake is healthier than regular Milk-flavored Steamed Flower Rolls, so I plan to order ten to stock up and eat gradually.

## Context

- Current time: `2025-05-08 18:47:36`
- Domain: `delivery`

## Requirements / Rubrics

- The Black Sesame product ordered from Honeymoon Dessert should be selected with hot drink attribute, suitable for cold stomach conditions
- The Honeymoon Dessert store ordered from should be Honeymoon Dessert (Dalian CapitaMall Peace Plaza Second Store)
- The delivery address for Black Sesame order should be Dalian Software Park, 160 meters northeast of the intersection of Huangpu Road and Shuxiang Street, Shahekou District, Dalian, Liaoning Province
- The estimated delivery time for Black Sesame order should be before 2025-05-08 20:00:00, ensuring the user can enjoy it before working overtime
- The quantity of Black Sesame order should be 3 portions
- The delivery address for Corn Cake products order should be Dalian Software Park, 160 meters northeast of the intersection of Huangpu Road and Shuxiang Street, Shahekou District, Dalian, Liaoning Province
- The estimated delivery time for Corn Cake products order should be before 2025-05-08 20:00:00
- The order quantity of Corn Cake products should be 10 pieces, meeting the stocking needs

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
