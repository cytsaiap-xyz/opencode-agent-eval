# VitaBench Task: Cross Domain #20

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You're going to give a speech in Zunyi the day after tomorrow, but you've been procrastinating on writing it. Tonight you plan to stay up late to prepare your speech. Now you want to order food delivery to boost your energy. You're looking for highly satiating Light Meal recommendations that are Non-spicy and don't contain Offal, to avoid frequent bathroom trips. You don't eat Light Meals often, so you'd prefer a highly-rated dine-in restaurant to avoid disappointment. You want to place the order now for delivery to your home before 6 PM. After dinner, you plan to go to a 24 Hours coffee shop to write your speech. You're looking for a quiet café near your home, preferably with WiFi, and want to book a table for 7 PM. For the menu, you want to order a Set Meal for Two to stay awake. You've already purchased your train ticket to Zunyi for tomorrow and want to check the departure time. If it departs before noon, you want to refund it and book a new one departing around 2 PM, as you're worried about waking up on time; if it departs after noon, you'll keep the current ticket.

## Context

- Current time: `2026-09-07 17:25:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The rating of the delivery restaurant should be greater than or equal to 4.3
- The delivery order should not be a set meal for two
- The delivery restaurant should offer dine-in service
- The delivery food should be Light Meal
- The delivery food should be Highly Satiating
- The delivery food should be Non-spicy
- The delivery should not contain Offal
- The delivery address must be Room 2503, 25th Floor, Times Avenue, No. 88 Jiefangbei Pedestrian Street, Yuzhong District, Chongqing
- The estimated delivery time should be before 2026-09-07 18:00:00
- The coffee shop should be open 24 Hours
- The coffee shop should be within 600 meters from Room 2503, 25th Floor, Times Avenue, No. 88 Jiefangbei Pedestrian Street, Yuzhong District, Chongqing
- Should not choose noisy coffee shops (such as those with Band Performance)
- The coffee shop should provide WiFi
- Need to reserve a booth at the coffee shop for 7pm
- The reservation at the coffee shop should be for 1 person
- The ordered items should include two cups of coffee
- The ordered items should be from Maan Coffee (Jiefangbei 24-Hour Branch)
- Need to check the departure time of the user's purchased ticket to Zunyi, and should inform the user that the purchased D1825 train departs from Chongqing North Railway Station at 11:25 tomorrow (2026-09-08) and arrives at Zunyi Railway Station at 12:48
- If the train departure time is before 12pm, order number S17550802126117462_O00004 should be canceled
- The departure station for the train ticket should be Chongqing North Railway Station
- The arrival station for the train ticket should be Zunyi Railway Station
- The train ticket should be for a train departing between 13:00-15:00 on 2026-09-08

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
