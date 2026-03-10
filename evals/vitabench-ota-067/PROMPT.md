# VitaBench Task: Ota #67

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You've accepted a role in a short drama that starts filming in Chongqing next month, so you plan to go there early to explore. You're planning to arrive on the 9th and want to stay near Jiefangbei Pedestrian Street, the closer the better, preferably within 100 meters, as it's convenient for shopping. You'll check out on the 12th, and your accommodation budget is under 500 yuan per night, as you're concerned the filming schedule might change, and it would be troublesome if you couldn't get a refund. For this shoot, you've prepared many outfits and will need to try on different combinations repeatedly, so you'd prefer a room with an extra bed just for laying out your clothes. You suddenly remember to check if there are any public holidays during those days - if so, you might want to stay somewhere quieter. If there are no public holidays, you can go ahead and book. Once the hotel is settled, you start thinking about what to see in Chongqing. You particularly enjoy cultural and historical sites, and visiting exhibition halls would be nice too. You've heard about an interesting underwater museum and want to buy a ticket to visit it on the second day.

## Context

- Current time: `2025-02-21 16:36:58`
- Domain: `ota`

## Requirements / Rubrics

- The hotel booked should support Free cancellation
- Need to verify whether March 9, 2025, March 10, 2025, and March 11, 2025 are statutory holidays, and the result is no, so the distance between the booked hotel and Jiefangbei Pedestrian Street, 100 Zourong Road, Yuzhong District, Chongqing should be less than or equal to 100 meters
- The room type in the hotel order should be twin room
- The hotel order should include three nights, which must be March 9, 2025, March 10, 2025, and March 11, 2025 respectively
- The price of the hotel room should be less than or equal to 500 yuan per night
- The attraction booked should be Baiheliang Underwater Museum
- The ticket date in the attraction order should be March 10, 2025
- The ticket in the attraction order should be an Adult ticket

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
