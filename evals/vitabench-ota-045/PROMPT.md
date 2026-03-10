# VitaBench Task: Ota #45

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

The Friday of the week after next is your thirtieth birthday. You've arranged to meet up with three close friends for a trip to Xinjiang to welcome this new stage in your life. You plan to depart three days before your birthday. Your friends want to take the train to experience Xinjiang's scenery, so you all plan to fly individually to Urumqi first, then take the train together to Kashgar. You hope to see the sunset from the plane. Your friends have already purchased train tickets for the next day from Urumqi to Kashgar, train number K9786, and you want to check the specific departure and arrival times. Since they took care of the train tickets, you'll handle the accommodations. You plan to book three nights of accommodation in Kashgar for everyone. You all want to stay in the old city area, experience a hotel with Uyghur Style Decoration, and feel the local cultural atmosphere. Everyone needs a good rest, so you want one room per person.

## Context

- Current time: `2024-08-12 20:55:21`
- Domain: `ota`

## Requirements / Rubrics

- Flight departure date must be August 27, 2024 (three days before birthday)
- Flight order must be scheduled in the afternoon to evening, allowing passengers to see the sunset from the plane
- Need to check the departure and arrival times of train K9786, which are 11:41 departure and 22:58 arrival
- Accommodation in Kashgar must be booked for 3 nights
- Kashgar accommodation check-in dates must be August 28, 2024, August 29, 2024, and August 30, 2024 respectively
- Accommodation in Kashgar must be a hotel with Uyghur characteristics
- Must book 4 rooms per night for the Kashgar accommodation
- The hotel in Kashgar must provide parking services or have a Parking Lot

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
