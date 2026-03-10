# VitaBench Task: Ota #90

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You're planning an autumn scenery tour to Jiuzhaigou for your parents. Your mother is 58 years old and your father is 62 years old. You want to understand how to purchase tickets most economically for two seniors visiting this scenic area, and make reservations in the most cost-effective way. You also need to check the weather conditions in Jiuzhaigou from October 1st to 4th, and choose two sunny days for your parents' trip. For the outbound train, select one departing around 2-3 PM, and for the return trip, choose one departing around 5-6 PM, booking the highest class seats for both journeys. For accommodation, you want to select a place near Jiuzhaigou Scenic Area, no more than 2 kilometers away. Give priority to Tibetan Style accommodations so your parents can experience the local cultural characteristics. Since your parents will only stay for one night, the accommodation should preferably provide Luggage Storage service, so they can travel light when entering Jiuzhaigou on the second day, which would be much easier for them. Also, the hotel room should be a twin room, as the two elderly people are accustomed to sleeping separately.

## Context

- Current time: `2023-09-17 14:51:19`
- Domain: `ota`

## Requirements / Rubrics

- The scenic spot ordered should be Jiuzhaigou Scenic Area
- Need to check the ticket prices for Jiuzhaigou Scenic Area and calculate the most economical combination based on the ages of the two elderly people (58, 60 years old), so the scenic spot order should include one Adult Ticket and one Senior Ticket (Age 60+)
- Need to check the weather in Jiuzhaigou on October 1, 2023, October 2, 2023, October 3, 2023, and October 4, 2023. The results are light rain, sunny, sunny, and overcast, so the date in the scenic spot order should be 2023-10-03
- The departure place for the outbound train should be Chengdu
- The destination for the outbound train should be Jiuzhaigou
- The departure time for the outbound train should be between 14:00-15:00
- Need to check the weather in Jiuzhaigou on October 1, 2023, October 2, 2023, October 3, 2023, and October 4, 2023. The results are light rain, sunny, sunny, and overcast, so the date in the outbound train ticket order should be 2023-10-02
- The seat type in the outbound train ticket order should be Soft Sleeper
- The departure place for the return train should be Jiuzhaigou
- The destination for the return train should be Chengdu
- The departure time for the return train should be between 17:00-18:00
- Need to check the weather in Jiuzhaigou on October 1, 2023, October 2, 2023, October 3, 2023, and October 4, 2023. The results are light rain, sunny, sunny, and overcast, so the date in the return train ticket order should be 2023-10-03
- The seat type in the return train ticket order should be Business Class Seat
- The hotel ordered should be within 2 kilometers of Jiuzhaigou Scenic Area, Jiuzhaigou County, Aba Tibetan and Qiang Autonomous Prefecture, Sichuan Province
- The hotel ordered should be in Tibetan Style
- The hotel ordered should provide Luggage Storage service
- The date in the hotel order should be 2023-10-02
- The room type in the hotel order should be twin room

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
