# VitaBench Task: Ota #7

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your kids have been asking to visit Mazu Film and Television City, so you and their father are planning a two-day trip to Putian during the Lantern Festival. Your 11-year-old son will definitely need a ticket, but your 5-year-old daughter might not—check if tickets are required for her age group. You'll also need to check the weather forecast for both the Lantern Festival day and the following day: If the weather is good, purchase unlimited-entry performance tickets valid for two days. If it's not ideal (e.g., rain), opt for single-day tickets just for Lantern Festival day since performances may be affected by bad weather. Additionally, look into nearby attractions suitable for young children where you can take them on the second day. For accommodation: You plan to stay on Meizhou Island on Lantern Festival night. The hotel must have parking lots and a private beach area. Since you're bringing two kids along, book a twin room with an option to add an extra bed as needed. Make sure to reserve early because same-day bookings might leave you without availability.

## Context

- Current time: `2025-02-06 00:56:41`
- Domain: `ota`

## Requirements / Rubrics

- Check the Lantern Festival date, which is 2025-02-12, so the ticket purchase date is 2025-02-12
- The ticket order needs to include a child ticket (the older brother is 11 years old, and he needs to purchase child ticket for ages 6-12)
- Check the weather for February 12 and 13, 2025 (sunny and cloudy respectively), the weather conditions are good, so the children ticket in the order should be for two days
- The younger sister is only 5 years old (children under 6 don't need tickets), so no ticket is purchased for her
- The ticket order needs to include adult tickets
- The quantity of adult tickets in the order is 2
- Check the weather for February 12 and 13, 2025 (sunny and cloudy respectively), the weather conditions are good, so the adult tickets in the order should be for two days
- Check the Lantern Festival date, which is 2025-02-12, so the hotel booking date is 2025-02-12
- The hotel must include a parking lot
- The hotel must include a private beach
- The hotel must offer extra bed service
- The room type booked in the hotel order is a twin room

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
