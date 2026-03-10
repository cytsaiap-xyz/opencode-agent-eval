# VitaBench Task: Ota #35

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

It's the peak season for lavender blooming, and you've planned a trip with three friends to the Ili River Valley to enjoy the purple sea of flowers. You all agreed to meet at Yining Airport on the afternoon of the 20th. Others have already booked their flights, and after checking everyone's arrival times, you think arriving around 4 PM would be ideal. After booking your own ticket, you want to arrange accommodation for everyone in advance. A Country Style homestay would create a nice atmosphere, especially if the surrounding environment is fragrant and pleasant. Everyone values their private space and would prefer to book 4 King Rooms, but your friends mentioned they're a bit tight on budget lately. If the King Rooms cost more than 200 yuan per night, then you'll opt for Twin Rooms with two people sharing each room instead. You plan to stay in Ili for three days and two nights before heading to Urumqi. You all prefer to arrive in Urumqi in the afternoon, and if suitable flights are available, you'd like to purchase tickets for everyone.

## Context

- Current time: `2027-06-02 23:32:25`
- Domain: `ota`

## Requirements / Rubrics

- Flight to Ili is scheduled for June 20, 2027
- The flight arrives in Ili around 4 PM on June 20, 2027
- Number of tickets to Ili is 1
- The homestay should be in Country Style
- The homestay should offer Flower Field View
- Since the king room costs over 200 yuan per night, the homestay booking should be for twin rooms
- The homestay booking should include 2 twin rooms per night
- The homestay booking should be for 2 nights, on June 20 and June 21, 2027
- Flight to Urumqi is scheduled for June 22, 2027
- The flight arrives in Urumqi in the afternoon of June 22, 2027
- Number of tickets to Urumqi is 4

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
