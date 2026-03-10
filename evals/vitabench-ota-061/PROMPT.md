# VitaBench Task: Ota #61

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're teaching senior high school this year and have an early vacation, so you and 4 travel companions are planning to complete the small Ali Circuit in 5 days. You had already bought flight tickets to Lhasa for next Wednesday, but one of your companions suddenly said they need to return one day earlier. Since you all plan to depart and return together, you need to adjust the itinerary and leave one day earlier. Now you want to look for suitable flight tickets and cancel the previously purchased ones to rebook. For the itinerary, you plan to stay in Lhasa on the first night, start self-driving from Lhasa early the next morning, and rest in Shigatse in the evening. On the third night, you'll stay in Gangga, on the fourth night in Coqen, and reach Nyima on the fifth night. On the sixth day, you'll return to Lhasa for a good rest for another night. Regarding accommodation, you need to check and book hotels for each night in advance. Two rooms per night will be sufficient - one triple room and one twin room; if triple rooms are not available, you'll need to book two twin rooms and one king room.

## Context

- Current time: `2024-06-09 17:27:42`
- Domain: `ota`

## Requirements / Rubrics

- The order status for order number S17557512385846899_O00001 should be cancelled
- The departure city of the ordered flight should be Beijing
- The destination city of the ordered flight should be Lhasa
- The departure date of the ordered flight should be June 11, 2024
- The quantity in the flight order should be 5
- The hotel for the first night should be InterContinental Lhasa Paradise
- The date in the order for InterContinental Lhasa Paradise should be 2024-06-11
- The order for InterContinental Lhasa Paradise should include two Twin Rooms and one King Room
- The hotel for the second night should be Atour Hotel Shigatse
- The date in the order for Atour Hotel Shigatse should be 2024-06-12
- The order for Atour Hotel Shigatse should include one Triple Room and one Twin Room
- The hotel for the third night should be Vienna Hotel Gangga
- The date in the order for Vienna Hotel Gangga should be 2024-06-13
- The order for Vienna Hotel Gangga should include one Triple Room and one Twin Room
- The hotel for the fourth night should be Highland Pearl Hotel Coqen
- The date in the order for Highland Pearl Hotel Coqen should be 2024-06-14
- The order for Highland Pearl Hotel Coqen should include two Twin Rooms and one King Room
- The hotel for the fifth night should be Home Inn Nyima
- The date in the order for Home Inn Nyima should be 2024-06-15
- The order for Home Inn Nyima should include one Triple Room and one Twin Room
- The hotel for the sixth night should be JI Hotel Lhasa
- The date in the order for JI Hotel Lhasa should be 2024-06-16
- The order for JI Hotel Lhasa should include one Triple Room and one Twin Room

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
