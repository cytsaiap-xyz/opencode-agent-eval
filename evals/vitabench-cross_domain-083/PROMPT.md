# VitaBench Task: Cross Domain #83

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

This Saturday marks the 3rd anniversary of your streaming career, and you plan to host an offline fan meetup a day earlier by playing escape rooms together. You're looking for escape room venues in Wuxi that offer suspenseful and detective-themed experiences with at least four different themes that can accommodate 18 people total. After finishing the escape room activity, you'll need to order some late-night snacks: five portions of fried chicken (different flavors), 18 burgers, and 18 cups of cola—but not from Wallace—and have them delivered to the escape room venue at 9:00 PM. You'd also like to check if there are any packages available for the escape rooms; make sure they cover all 18 participants so you can figure out how best to purchase them economically. The next day, you're heading to Shanghai for a dual-streaming session with another friend starting at 6:00 PM. Initially, you planned on taking a high-speed train in the afternoon around this time. However, one of your fans is returning home during this same timeframe and has booked a second-class seat—you want to avoid running into them onboard. So you check the weather forecast: If it doesn't rain in the morning, buy tickets for around 10:00 AM instead. If it rains in the morning, stick with traveling in the afternoon but ensure your ticket avoids crossing paths with that fan's booking.

## Context

- Current time: `2025-07-02 19:38:05`
- Domain: `cross_domain`

## Requirements / Rubrics

- The in-store merchant is for escape rooms
- The in-store merchant orders are mystery deduction type
- The in-store merchant orders must include at least four themes of escape rooms
- The in-store merchant orders must accommodate 18 people
- The in-store merchant orders should be "Dark Night Mansion" Escape Room Theme (4-6 People) + "Fatal Files" Escape Room Theme (3-5 People) + "Mystery City Stories" Escape Room Theme (3-5 People) + "Deep Sea Laboratory" Escape Room Theme (2-4 People)
- The delivery order must include fried chicken
- The quantity of fried chicken in the delivery order is 5
- The delivery order's fried chicken items should be of different flavors
- The delivery order must include burgers
- The quantity of burgers in the delivery order is 18
- The delivery order must include cola
- The quantity of colas in the delivery order must be 18
- The delivery order's fried chicken, burgers, and cola must come from the same store
- The delivery order's fried chicken, burgers, and cola cannot come from Wallace
- The delivery address must be Mystery City Escape Room, 10 Financial First Street, Taihu New City, Binhu District, Wuxi, Jiangsu Province
- The delivery order's expected delivery time is 21:00 on July 4, 2025
- Need to check the weather in Shanghai and Wuxi on July 5, 2025, and the result shows that it won't be rainy. Therefore, a high-speed rail ticket should be ordered for around 10:00 AM on July 5, that is, the final train departure time should be between 9:45 AM and 10:15 AM]
- The train ticket should be from Wuxi to Shanghai

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
