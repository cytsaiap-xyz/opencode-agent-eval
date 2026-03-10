# VitaBench Task: Instore #38

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

The project team plans to hold a team building activity next Friday, and you are responsible for organizing and planning this event. Your department has a total of 20 people. You plan to directly book a large party venue, and the venue should be equipped with a projector because the leader needs to give a speech at the beginning. Colleagues are expected to gather at the party venue around 1PM on that day and finish at 6PM. To ensure everyone's experience, you want to book the party venue in advance and purchase a package. The package should include unlimited access to KTV, billiards, mahjong, PS5, board games and other activities to satisfy the different interests of colleagues. After the party activities, everyone will have dinner together. You want to find a Chinese restaurant within 3km of the party venue, with large private rooms, and booking for 6:30PM should be perfect.

## Context

- Current time: `2023-03-17 10:15:00`
- Domain: `instore`

## Requirements / Rubrics

- The venue to be booked is a large party venue
- The party venue should be equipped with a projector
- The party venue reservation time is next Friday, March 24, 2023, at 13:00:00
- The party venue reservation is for 20 people
- The party venue package duration should be 5 hours
- The party venue package should include Unlimited KTV access
- The party venue package should include Unlimited Billiards access
- The party venue package should include Unlimited Mahjong access
- The party venue package should include Unlimited PS5 Gaming access
- The party venue package should include Unlimited Board Games access
- The party venue to be booked should be LePai Party House
- The restaurant to be booked must be a Chinese restaurant
- The restaurant must be within 3 kilometers (inclusive) of LePai Party House, located at the intersection of Wangcheng Avenue and Kaixuan East Road, Xigong District, Luoyang
- The restaurant must have a large private room
- The reservation time is next Friday, March 24, 2023, at 18:30:00
- The reservation is for 20 people

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
