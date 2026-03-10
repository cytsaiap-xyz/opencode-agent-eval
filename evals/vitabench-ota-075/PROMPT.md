# VitaBench Task: Ota #75

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your daughter is currently in junior high school and has recently expressed interest in a summer camp study tour in Dunhuang. Since she's still young, you don't want her to join a tour group alone and plan to accompany her for the experience. You've discussed with your wife and decided to take annual leave, planning to depart on Monday of the week after next and return on Friday. Regarding transportation, you prefer a smooth journey and would like to fly whenever possible. You also want to purchase return tickets at the same time. You'd rather avoid flights that arrive in the early hours so everyone can rest well. For accommodation, you hope the hotel will have some local cultural characteristics. Your wife is particular about the accommodation environment and prefers recently opened hotels - the newer the better. Once you've made a selection, you'll book the hotel, and either a family room or twin room would be suitable. You also want to purchase Mogao Caves tickets in advance for the third day of your trip, with a student ticket for your daughter.

## Context

- Current time: `2028-06-13 15:21:34`
- Domain: `ota`

## Requirements / Rubrics

- Departure flight date is June 26, 2028
- Departure flight cannot be a Red-eye Flight
- Number of departure flight tickets is 3
- Departure flight should be from Yantai to Dunhuang
- Return flight date is June 30, 2028
- Return flight cannot be a Red-eye Flight
- Number of return flight tickets is 3
- Return flight should be from Dunhuang to Yantai
- Hotel should have Dunhuang characteristics
- The booked hotel should be Dunhuang Feitian Theme Hotel
- Hotel room type should be Family Suite or Twin Room
- Hotel reservation should include 4 nights, specifically for June 26, 2028, June 27, 2028, June 28, 2028, and June 29, 2028
- The attraction to be booked should be Mogao Caves
- Attraction tickets should include 2 Adult Tickets
- Attraction tickets should include 1 Student Ticket
- The date for using attraction tickets is June 28, 2028

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
