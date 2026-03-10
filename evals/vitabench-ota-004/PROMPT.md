# VitaBench Task: Ota #4

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You've taken on a part-time job and will be heading to Jiangmen next Saturday to help a client set up their promotional event. You plan to arrive in Jiangmen early Saturday morning, complete the work by the afternoon, and then find a hotel to rest for the night. On Sunday, you'd like to explore Jiangmen before returning home that evening. Since this is just a side gig with modest pay, you're looking for more budget-friendly accommodation than usual. While your hotel requirements are simple, you've been committed to maintaining your fitness routine lately and don't want it disrupted. Once you find an appropriate option, go ahead and book it. For sightseeing, you've heard good things about Kaiping Diaolou and Villages as well as Jiangmen Donghu Park. Check which one is closer to your chosen hotel; then purchase a ticket for the closer attraction on Sunday accordingly.

## Context

- Current time: `2029-09-06 17:52:36`
- Domain: `ota`

## Requirements / Rubrics

- The departure date of the outbound train should be September 15, 2029
- The departure time of the outbound train should be relatively early
- The outbound train ticket should be for a train from Huizhou to Jiangmen
- The quantity of outbound train ticket should be 1
- The departure date of the return train should be September 16, 2029
- The departure time of the return train should be relatively late
- The return train ticket should be for a train from Jiangmen to Huizhou
- The quantity of return train ticket should be 1
- The price of the ordered hotel should be less than 500 yuan
- The ordered hotel should provide a gym
- The ordered hotel check-in date should be September 15, 2029
- Jiangmen Donghu Park is about 500 meters from Vienna Hotel Jiangmen Pengjiang Wanda Branch, while Kaiping Diaolou and Villages is about 46 kilometers from Vienna Hotel Jiangmen Pengjiang Wanda Branch, therefore tickets for Jiangmen Donghu Park should be ordered
- The ticket usage date should be September 16, 2029

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
