# VitaBench Task: Ota #44

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You originally planned to take a day off next Friday, making it a 3-day trip with the weekend, to take your partner to Qujing. Because you didn't want to spend too much time on the journey, you already bought round-trip train tickets and shared the plan with your partner. But your partner thinks it's boring to always travel within the province, and you realized they have a point. So you decided to change plans and go to Ningxia for 3 days instead. Now you need to cancel the train tickets you bought, and considering that Ningxia is quite far away and you have limited time, you'll switch to flying. You need to book flights departing early Friday morning and returning Sunday afternoon, and they must be on Sichuan Airlines. For accommodations, you plan to book a hotel in Jinfeng District for the first night, and it needs to be close to subway and bus stations. For the second night, you want to stay at the Shapotou Starry Sky Tent Hotel, which your partner says will have a nice atmosphere. Both nights should be King rooms. Since the weather has been hot lately, you plan to check the temperatures for those three days and buy tickets for the Zhenbeipu Western Film Studio on the coolest day to avoid the heat affecting your enjoyment. You'll arrange the other attractions freely once you arrive.

## Context

- Current time: `2024-09-11 23:17:45`
- Domain: `ota`

## Requirements / Rubrics

- The status of the train ticket order for train number G2926 is cancelled
- The status of the train ticket order for train number G2927 is cancelled
- The flight in the outbound air ticket order is from Kunming to Ningxia
- The flight in the outbound air ticket order is operated by Sichuan Airlines
- The flight in the outbound air ticket order departs in the morning
- The date of the outbound air ticket order is September 20, 2024
- The number of tickets in the outbound air ticket order is 2
- The flight in the return air ticket order is from Ningxia to Kunming
- The flight in the return air ticket order is operated by Sichuan Airlines
- The flight in the return air ticket order departs in the afternoon
- The date of the return air ticket order is September 22, 2024
- The number of tickets in the return air ticket order is 2
- The booking date for the first night hotel order is September 20, 2024
- The hotel in the first night hotel order should be in Jinfeng District
- The hotel in the first night hotel order should be near a subway station
- The room type in the first night hotel order should be a king room
- The booking date for the second night hotel order is September 22, 2024
- The hotel in the second night hotel order should be in Shapotou
- The hotel in the second night hotel order should have starry tents
- The room type in the second night hotel order should be a king room
- Query which day has the lowest temperature in Yinchuan, Ningxia from September 20, 2024 to September 22, 2024 (the result is September 21, 2024), so the date of the admission tickets is September 21, 2024
- The type of admission tickets purchased is Adult Ticket
- The number of Adult Tickets in the scenic spot order is 2
- The scenic spot ordered is the Western Film Studio

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
