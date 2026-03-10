# VitaBench Task: Ota #46

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your family of three wants to challenge climbing Mount Emei. Since you're bringing your six-year-old child, you feel that the itinerary shouldn't be too tight, so you're planning for four days and three nights first. As it's currently the rainy season, you want to check the weather for this weekend and next weekend, and choose whichever has better weather. You plan to book the High-Speed Train tickets first, arriving at Mount Emei Foot on Friday evening and returning at noon on the last day. During your last trip, your child shared a seat with you, which you found too cramped. You also need to book hotels. You've roughly researched the climbing route and are considering staying at Leidongping on the day of the climb. You've heard that watching the sunrise at the Golden Summit is worth experiencing, so you plan to spend another night near the Golden Summit for convenient sunrise viewing in the morning. Regarding accommodation, you prioritize hotel quality and hope for a rating of 5.0, with plans to book a Family Suite. A Five-Star hotel would be ideal, but you can accept more limited conditions on the mountain if necessary.

## Context

- Current time: `2027-04-13 12:23:31`
- Domain: `ota`

## Requirements / Rubrics

- It will rain on Mount Emei on April 18 and 19, 2027, so travel should be postponed to the following weekend, with the departure train ticket date being April 23, 2027
- The arrival time of the departure train ticket should be on the evening of April 23, 2027
- The quantity of departure train tickets should be 3
- The departure train ticket should be for a train from Chengdu to Mount Emei
- The return train ticket date should be April 26, 2027
- The departure time of the return train ticket should be noon on April 26, 2027
- The quantity of return train tickets should be 3
- The return train ticket should be for a train from Mount Emei to Chengdu
- The check-in date for the first night's hotel should be April 23, 2027
- The first night's hotel should be at the foot of Mount Emei
- The room type for the first night's hotel should be Family Suite
- The check-in date for the second night's hotel should be April 24, 2027
- The second night's hotel should be at Leidongping
- The room type for the second night's hotel should be Family Suite
- The check-in date for the third night's hotel should be April 25, 2027
- The third night's hotel should be at Golden Summit
- The room type for the third night's hotel should be Family Suite

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
