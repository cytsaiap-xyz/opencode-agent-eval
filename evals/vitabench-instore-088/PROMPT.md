# VitaBench Task: Instore #88

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

The Double Ninth Festival is approaching, but your parents have to work, so they gave you 1,600 yuan and assigned you to arrange lunch and dinner for your maternal grandparents and paternal grandparents that day. However, you want to keep at least 100 yuan as your own service fee, with 40% of the budget for lunch and 60% for dinner. For lunch, you plan to take them to eat Jiangsu and Zhejiang Cuisine, and you hope to find a restaurant near Oriental Pearl Garden that is also on the Must-Try List. You need to pre-order a set menu that can feed five people and make a reservation for 12 noon. As for dinner, both your maternal and paternal grandparents said they can wait until your parents get off work to eat together. So you need to buy in advance a Cantonese Set Menu suitable for your group size, which should include White Cut Chicken and Stir-fried Seasonal Vegetables. Preferably, this restaurant should be no more than 3 kilometers from your home.

## Context

- Current time: `2024-10-08 19:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The noon restaurant order must include a set meal for five people, not multiple individual meals
- The restaurant for lunch must be within 2.5km (inclusive) of Oriental Pearl Garden, Wucheng District, Jinhua City, Zhejiang Province
- The noon restaurant must serve Jiangsu and Zhejiang Cuisine
- The noon restaurant must be listed on the Must-Try List
- The user's total budget is 1600 yuan, but at least 100 yuan must remain, and lunch takes 40% of the budget. Since (1600-100)*40%=600, the price of items in the noon restaurant order cannot exceed 600 yuan (inclusive)
- The reserved restaurant is Grandmother's Home (Oriental Pearl Branch)
- The lunch reservation time is 12:00:00 on Double Ninth Festival (2024-10-11)
- The lunch reservation is for 5 people
- The evening restaurant order must include a set meal for 7 people, not multiple individual meals
- The evening restaurant order must include a Cantonese Set Menu
- The evening restaurant order must include White Cut Chicken
- The evening restaurant order must include Stir-fried Seasonal Vegetables
- The restaurant for dinner must be within 3km (inclusive) of Shengshi Huating, No.1399 Shuanglong South Street, Wucheng District, Jinhua City, Zhejiang Province
- The user's total budget is 1600 yuan, but at least 100 yuan must remain, and dinner takes 60% of the budget. Since (1600-100)*60%=900, the price of items in the evening restaurant order cannot exceed 900 yuan (inclusive)

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
