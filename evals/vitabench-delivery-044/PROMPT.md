# VitaBench Task: Delivery #44

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You've been informed that the teaching research meeting this morning will last until 11:00 AM. You plan to order a beef light meal delivery to school in advance so you can eat right after the meeting ends. You hope to find a clean and hygienic restaurant, preferably one with a Dine-in Restaurant sign. For dinner, you want to order Braised Meat Rice Cake to be delivered to your home nearby. Since your mother likes Hangzhou Soft Egg Pancake, you want to order one with generous fillings, without onions but with all other toppings. The evening delivery should arrive around 5:00 PM.

## Context

- Current time: `2025-10-24 08:57:28`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the beef light meal order should be Zijingang Primary School of Xuejun Primary School Education Group, 198 Pingshui West Street, Xihu District, Hangzhou, Zhejiang Province
- The estimated delivery time for the beef light meal order should be after 11:00 on October 24, 2025
- The merchant selected for the beef light meal order should have a Dine-in Restaurant label to ensure hygiene standards
- The delivery address for the braised meat rice cake order should be Zijin Literary Garden, 418 Yuhang Tang Road, Xihu District, Hangzhou, Zhejiang Province (470m walk from Samba Metro Station Exit G1)
- The estimated delivery time for the braised meat rice cake order should be around 17:00 on October 24, 2025
- The delivery address for the soft egg pancake order should be Zijin Literary Garden, 418 Yuhang Tang Road, Xihu District, Hangzhou, Zhejiang Province (470m walk from Samba Metro Station Exit G1)
- The estimated delivery time for the soft egg pancake order should be around 17:00 on October 24, 2025
- The soft egg pancake order should select the option without onions, but keep other ingredient options (such as selecting 'cilantro only' from options like 'cilantro only', 'With Onions only', 'no cilantro no onions', 'with both cilantro and onions')

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
