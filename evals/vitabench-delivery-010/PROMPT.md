# VitaBench Task: Delivery #10

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Today is your birthday, and you plan to order a birthday cake to be delivered to your boyfriend's home to enjoy together. Your boyfriend lives in Chengfatou Zhujian Yajun. You are allergic to mangoes and are controlling your sugar intake, so you have some limitations when choosing a cake. Also, the property management has notified that there will be a power outage after 4 PM, so make sure the cake is delivered one hour in advance so that after finishing the cake, you can go to River Lake Plaza during the power outage. The delivery address should be written as Chengfatou Zhujian Yajun, Rongning Road, Sanlitun Street, Zhengding County, Shijiazhuang, Hebei Province.

## Context

- Current time: `2025-10-01 09:51:28`
- Domain: `delivery`

## Requirements / Rubrics

- The ordered birthday cake must not contain mango ingredients
- The ordered birthday cake should be low-sugar or xylitol type
- The ordered birthday cake should be suitable for 2 people to share (such as 4-6 inch cake)
- The delivery address for the birthday cake order should be Chengfatou Zhujian Yajun, Rongning Road, Sanlitun Street, Zhengding County, Shijiazhuang, Hebei Province
- The estimated delivery time for the birthday cake order should be before 2025-10-01 15:00:00

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
