# VitaBench Task: Delivery #91

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Today you've promised your son to make an exception and have some greasy food that you usually avoid. Considering the appetite of two people, you plan to order two individual set meals at Xiao Cai Yuan, plus a meat dish with duck intestines and two sets of disposable tableware. Additionally, you want to buy 30 pot stickers from the pot sticker shop you ordered from before, to serve as tomorrow's breakfast, but this time, you're not going to order the set meal that includes other items.

## Context

- Current time: `2025-09-26 18:26:00`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the dinner order should be Room 502, Building 3, Evergrande Oasis, Intersection of Richu Road and Binzhi Road, Feidong County, Hefei, Anhui Province
- The expected delivery time for the dinner order should be around 2025-09-26 19:30:00
- Xiao Cai Yuan New Hui Cuisine should be selected as the merchant  for the dinner order
- The dinner order should include 2 single-person set meals
- The total number of items in the dinner order should be 3
- The dinner order needs to include a note requesting two sets of disposable tableware
- The delivery address for the pot stickers order for tomorrow's breakfast should be Room 502, Building 3, Evergrande Oasis, Intersection of Richu Road and Binzhi Road, Feidong County, Hefei, Anhui Province
- Feishu Pot Stickers should be selected as the merchant for tomorrow's breakfast needs
- The pot stickers order should not include any products other than pot stickers

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
