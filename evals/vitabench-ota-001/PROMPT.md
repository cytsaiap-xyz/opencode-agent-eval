# VitaBench Task: Ota #1

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Next month on the 1st, you will be going to Nanyang with your parents to handle some personal matters, and plan to book a hotel for 3 nights there. Choose the hotel brand you stay at most frequently, selecting the location closer to the Municipal Government, and book one twin room and one king room. You estimate that you'll finish your business by the morning of the 3rd, but since you're planning to return on the 4th anyway, you can spend the afternoon of the 3rd sightseeing in Nanyang. You intend to check the weather for the 3rd, and if the maximum temperature doesn't exceed 30℃, you'll take your parents to the Nanyang Rose Garden, as your mother loves such scenic spots; if it's hotter than that, you'll visit the Zhang Zhongjing Museum instead, as being indoors will protect them from the sun. Your father is 61 this year and your mother is 57, so you'll need to consider the most appropriate ticket options when making the purchase.

## Context

- Current time: `2026-07-21 13:15:27`
- Domain: `ota`

## Requirements / Rubrics

- The hotel brand should be the one the user stays at most frequently (query shows it's Ji Hotel)
- The hotel needs to be the Ji Hotel closest to Nanyang Municipal Government
- The hotel order includes 3 nights of twin rooms
- The hotel order includes 3 nights of king rooms
- The twin rooms in the hotel order are booked for August 1, 2026, August 2, 2026, and August 3, 2026
- The king rooms in the hotel order are booked for August 1, 2026, August 2, 2026, and August 3, 2026
- The query shows that the highest temperature in Nanyang on August 3, 2026 is 32℃, which exceeds 30℃, so the attraction chosen is Zhang Zhongjing Museum
- The date on the attraction tickets should be August 3, 2026
- The attraction order should include Senior Ticket
- The attraction order should include Adult Ticket
- The attraction order should have 1 Senior Ticket (father is 61 years old, eligible for senior ticket)
- The attraction order should have 2 Adult Tickets (mother is 57 years old, needs adult ticket; plus one adult ticket for the user)

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
