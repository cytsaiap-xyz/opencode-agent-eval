# VitaBench Task: Cross Domain #3

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your two buddies have invited you to go hiking and camping on Double Ninth Festival, staying overnight on the mountain to breathe some fresh air before returning home the next day. However, you have an important work commitment that day and can only get time off for the following day. Fortunately, your friends are willing to wait until you finish work at 4:30 PM to set off together. You want to find a hiking-friendly scenic area in Baoding with the cheapest admission tickets available, just enough to get in, with single tickets not exceeding 100 yuan, and you plan to buy tickets for everyone once you find a suitable option. You feel the outdoor equipment you bought last time was quite good, but unfortunately, you left it at your parents' home. You want to check the weather forecast - if the temperature stays below 30°C on both days, there's no need to specifically buy a tent as you can share your friend's tent at night; otherwise, it would be too hot to squeeze together, so you'd rather buy your own tent and have it delivered to your office before you leave for the hike on that day.

## Context

- Current time: `2025-10-22 14:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The ordered scenic area should be suitable for hiking activities
- The ordered scenic area should be in Baoding
- The latest admission time for the scenic area should be after 16:30
- The price of the ordered tickets should be the lowest among all tickets for this scenic area (S17550802111734829_P00019)
- The price of a single ticket should not exceed 100 yuan
- The usage date for the ordered tickets should be October 29, 2025
- The quantity of ordered tickets should be 3
- The agent must check the weather for both October 29, 2025, and October 30, 2025, with the final results showing temperatures above 30 degrees on both days
- The ordered outdoor equipment should be from the Toread Outdoor Flagship Store
- The ordered outdoor equipment should be a tent
- The delivery address for the outdoor equipment should be Huachuang International Plaza, 557 Yuhua West Road, Lianchi District, Baoding, Hebei Province
- The expected delivery time for the outdoor equipment should be before 16:30 on October 29, 2025

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
