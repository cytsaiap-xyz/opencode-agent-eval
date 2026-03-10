# VitaBench Task: Ota #14

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

My daughter is studying in Chongqing and will soon graduate from her master's program. She mentioned that for her graduation trip, she wants to take you and your wife to Zhangjiajie for a three-day, two-night vacation. She plans to ship her school belongings home and then go directly to Zhangjiajie. You've agreed to meet at the airport on the twenty-fifth of next month. You want to make some preparations in advance so your daughter can relax when the time comes. You all plan to travel by plane, preferably arriving around the same time, and hope the tickets will be reasonably priced. For the Zhangjiajie scenic area tickets, you'll buy them for the middle day of your trip. For accommodation, you're considering staying within one kilometer of the Zhangjiajie National Forest Park Visitor Center for easier access to the attractions. Your daughter will stay in a King Room by herself, while you and your wife would prefer a Twin Room. You'll also arrange the return flight tickets so you can all go home together.

## Context

- Current time: `2022-05-13 09:30:00`
- Domain: `ota`

## Requirements / Rubrics

- The flight ticket from Chongqing to Zhangjiajie should have a departure date of June 25, 2022
- The quantity of flight tickets from Chongqing to Zhangjiajie should be 1
- The flight ticket type from Chongqing to Zhangjiajie should be Economy Class
- Need to filter flights with Zhangjiajie as the destination, and find the combination of flights departing from Shenzhen and Chongqing respectively with the shortest arrival time interval. The result is MU2287 and CZ3967, so the flight from Chongqing to Zhangjiajie in the order should be MU2287
- The flight tickets from Shenzhen to Zhangjiajie should have a departure date of June 25, 2022
- The quantity of flight tickets from Shenzhen to Zhangjiajie should be 2
- The flight ticket type from Shenzhen to Zhangjiajie should be Economy Class
- Need to filter flights with Zhangjiajie as the destination, and find the combination of flights departing from Shenzhen and Chongqing respectively with the shortest arrival time interval. The result is MU2287 and CZ3967, so the flight from Shenzhen to Zhangjiajie in the order should be CZ3967
- The attraction to order should be Zhangjiajie National Forest Park
- The usage date for the attraction tickets should be June 26, 2022
- The quantity of attraction tickets should be 3
- The distance from the booked hotel to the Zhangjiajie National Forest Park Visitor Center should be within 1km (including 1km)
- The hotel order should include a King Room for 2 nights, with booking dates of June 25, 2022 and June 26, 2022
- The hotel order should include a Twin Room for 2 nights, with booking dates of June 25, 2022 and June 26, 2022
- The flight tickets from Zhangjiajie to Shenzhen should have a departure date of June 27, 2022
- The quantity of flight tickets from Zhangjiajie to Shenzhen should be 3
- The flight ticket type from Zhangjiajie to Shenzhen should be Economy Class

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
