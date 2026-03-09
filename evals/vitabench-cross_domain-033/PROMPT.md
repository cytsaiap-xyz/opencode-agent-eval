# VitaBench Task: Cross Domain #33

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Although you're working from home today, you have a lot to do. You want to order a healthy light meal to have a quick bite. You're trying to lose weight recently and would like to have some red meat, brown rice with vinaigrette on top. You don't have much appetite now, so it's fine as long as the food is delivered before 3 PM. An investor is coming from out of town today, and you need to arrange accommodation for him tonight. You want to find a five-star hotel that has been opened within the past two years, and the room type must be a Business King Room. In the evening, you need to have a business negotiation with him, so you need to find a business restaurant close to his hotel. The investor will have a short meeting at your company at 4 PM, which will end around 6 PM, so you need to make a reservation in advance.

## Context

- Current time: `2025-09-21 11:45:21`
- Domain: `cross_domain`

## Requirements / Rubrics

- The ordered food delivery should be a Healthy Light Meal
- The ordered food delivery should include Red Meat
- The ordered food delivery must include Brown Rice, not white rice or Quinoa
- The ordered food delivery must include Vinaigrette
- The food delivery order must comply with the user's dietary restrictions of avoiding High Sugar and Caffeine-free
- The food delivery address must be Room 801, Unit 1, Building 3, Rongqiao Jincheng, 138 Zhuodaoquan South Road, Hongshan District, Wuhan, Hubei Province
- The food delivery order must be delivered before 3 PM on September 21
- The hotel booked must be a Five-star hotel
- The hotel booked must have been Opened in 2022
- The hotel room type booked must be a Business King Room
- The hotel check-in date must be 2025-09-21
- The restaurant booked should be a Business Restaurant
- The restaurant booked must be located within 3km of Wuhan Zall Marriott Hotel, 738 Jianshe Avenue, Jianghan District, Wuhan, Hubei Province
- The restaurant reservation time should be after 18:00
- The restaurant reservation should be for 2 persons

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
