# VitaBench Task: Ota #88

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're planning a four-day-three-night trip to Yangshuo with your boyfriend in early May, but need to avoid the first three days of the month. To save money, you want to compare the total round-trip airfare for different dates to find the cheapest combination before confirming your specific travel dates, and then make the payment directly. For accommodation, choose the chain hotel you've stayed at before. Since your boyfriend has been snoring a lot lately, you want to get separate rooms to ensure you're well-rested during the trip. Book the hotel now as well, as prices will certainly increase if you wait until closer to your travel dates.

## Context

- Current time: `2025-04-10 19:23:17`
- Domain: `ota`

## Requirements / Rubrics

- Must search and compare different date combinations for round-trip flights from Changchun to Guilin between May 4 and May 10, including combinations such as departing on the 4th and returning on the 7th, departing on the 5th and returning on the 8th, departing on the 6th and returning on the 9th, departing on the 7th and returning on the 10th, etc.; return the cheapest flight price combination as the travel dates, which is May 5th departure (750 yuan) + May 8th return (500 yuan), with a total price of 1250 yuan
- The outbound flight order should be for a flight from Changchun to Guilin
- The outbound flight order date should be May 5, 2025
- The outbound flight order number should be CZ3421
- The quantity for the outbound flight order should be 2
- The return flight order should be for a flight from Guilin to Changchun
- The return flight order date should be May 8, 2025
- The return flight order number should be CA1847
- The quantity for the return flight order should be 2
- Should check the hotel brands where the user frequently stays, which are Vienna, Ji Hotel, or Orange Hotel; the hotel brand in the hotel order should be Vienna, Ji Hotel, or Orange Hotel
- The hotel room in the order must be a king room
- The hotel check-in dates must match the flight itinerary, for a total of 3 nights
- The hotel order should include 2 rooms per night to accommodate the need for separate beds
- The check-in dates in the hotel order should be May 5, 2025, May 6, 2025, and May 7, 2025 respectively

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
