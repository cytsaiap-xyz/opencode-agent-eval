# VitaBench Task: Ota #53

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're planning a 3-day, 2-night trip to Zhoushan next Friday with your family of three. However, your wife just mentioned that her team project is at a critical stage next week, so she won't be able to join you this time. You've decided to cancel the original tickets and rebook two business class seats on the same flight for yourself and your child. The hotel should stick with your usual standards—don't compromise on comfort while traveling. Choose a hotel near the business center; it doesn't need to be too close to tourist attractions. Since you'll have your child with you, book a twin room for both nights in the same hotel. Also, check Saturday's weather forecast before making plans. If there's no strong wind or rain, purchase tickets for Mount Putuo that include speedboat since your child has been eager to try one. If bad weather is expected instead, opt for regular ferry tickets as they would be safer and more comfortable under such conditions. Additionally, check if there are any discounts available for children aged 14 when purchasing these tickets. Besides Mount Putuo, you also want to find an attraction where you can go fishing, planning to take your child there for the experience on Sunday morning.

## Context

- Current time: `2026-06-11 07:50:15`
- Domain: `ota`

## Requirements / Rubrics

- The status of the original order for three economy class flight tickets for June 19, 2026 in the historical orders is cancelled
- The date of the booked flight tickets is June 19, 2026
- The flight originally booked in the historical orders was CZ3567, so  the newly booked flight is also CZ3567
- The newly booked flight tickets are for business class
- The number of flight tickets booked is 2
- The hotel booking dates are June 19, 2026 and June 20, 2026
- The booked hotel should be close to the business center
- The booked hotel room type should be a twin room
- The price per night for the booked hotel room must be within the range of 1000-2000 yuan
- Next Saturday (June 20, 2026) will be cloudy with no strong wind or rain, so the tickets purchased for Mount Putuo Scenic Area should include speedboat transportation
- The user's child is 14 years old, and since children's tickets are for ages 6-12, the number of adult tickets purchased for Mount Putuo Scenic Area should be 2
- The date of the tickets purchased for Mount Putuo Scenic Area is June 20, 2026
- The purchased tickets are for an attraction where fishing is available
- The date of the tickets purchased for the fishing attraction should be June 21, 2026
- The user's child is 14 years old, so a youth ticket should be purchased for the fishing attraction
- The fishing attraction order includes an adult ticket

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
