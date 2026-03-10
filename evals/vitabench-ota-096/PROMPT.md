# VitaBench Task: Ota #96

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

During this year's Spring Festival holiday from January 21 to January 27, you're planning a five-day, four-night family trip to Sanya with your family of five. However, January 21 is not an option since you'll need to have dinner with relatives that day. For now, you plan to start by checking round-trip flights from Hangzhou to Sanya. You prefer morning departures but don't want them too early and absolutely avoid red-eye flights. Your priority is finding the cheapest available round-trip tickets. Once the flight times are confirmed after booking, you can proceed with hotel reservations. Check the weather forecast for Sanya during those days of the Spring Festival: If there are sunny days predicted, consider booking sea-view rooms; otherwise, choose a hotel with indoor pool instead. The selected hotels must provide airport transfer services for convenience. For accommodations: stay in Sanya Bay for the first two nights and then move to Haitang Bay for the last two nights. For room types, family suite is the priority, but if not available, book two double rooms instead—but ensure that total accommodation costs over all four nights remain within 10,000 yuan. Once suitable hotels meeting these criteria are found, make immediate reservations.

## Context

- Current time: `2023-01-03 11:23:47`
- Domain: `ota`

## Requirements / Rubrics

- The outbound flight should be CA1357, the return flight should be CZ6789, comparing the price of January 22 outbound flight (1350 yuan) + January 26 return flight (1350 yuan) with January 23 outbound flight (1420 yuan) + January 27 return flight (1260 yuan). January 23 outbound flight and January 27 return flight is the cheapest flight combination, so the outbound flight date should be January 23, 2023
- The outbound flight should be from Hangzhou to Sanya
- The outbound flight quantity should be 5
- The return flight date should be January 27, 2023
- The return flight should be from Sanya to Hangzhou
- The return flight quantity should be 5
- There is no sunny day in Sanya from January 23 to January 24, 2023, so the hotel ordered in Sanya Bay should include an indoor pool
- The hotel ordered in Sanya Bay should provide airport transfer service
- To keep the total cost of four nights' accommodation within 10,000 yuan, the room type of the hotel in Sanya Bay should be a double room
- The Sanya Bay hotel order should include 2 double rooms per night
- The Sanya Bay hotel order should include rooms for 2 nights on January 23, 2023 and January 24, 2023
- There are sunny days in Sanya from January 25 to January 26, 2023, so the hotel ordered in Haitang Bay should be a sea view room
- The hotel ordered in Haitang Bay should provide airport transfer service
- The room type of the hotel in Haitang Bay should be a Sea View Family Suite (Suitable for 5-6 People)
- The Haitang Bay hotel order should include rooms for 2 nights on January 25, 2023 and January 26, 2023

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
