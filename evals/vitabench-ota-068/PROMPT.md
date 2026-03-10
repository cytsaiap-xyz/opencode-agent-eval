# VitaBench Task: Ota #68

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You suddenly received an urgent assignment and need to lead a 3-person team to Hong Kong tomorrow for a week-long joint project, returning to Tianjin on Thursday evening. You need to find a hotel near Central Plaza, within 500 meters; and it must have an Executive Floor to facilitate team discussions. Since this is a business trip with reimbursable expenses, you can book according to a higher standard than usual, with room rates 500-600 yuan more per night than your typical travel budget. You'll need to book 4 king rooms. By the way, this period overlaps with the Mid-Autumn Festival, but to complete the assignment, you'll only take the holiday day off. You plan to use this rare break to relax. If the weather is sunny, you'll visit Victoria Peak Tram to enjoy the magnificent views of Victoria Harbour and experience Hong Kong's charming night scenery. To avoid holiday crowd restrictions affecting your itinerary, you need to book attraction tickets in advance - one-way tickets will be sufficient. However, if it's rainy, you'll just rest at the hotel, considering you'll be working overtime for so many consecutive days.

## Context

- Current time: `2024-09-12 15:23:49`
- Domain: `ota`

## Requirements / Rubrics

- The booked hotel should be within 500 meters of Central Plaza, 18 Harbour Road, Wan Chai, Hong Kong
- The hotel should have an Executive Floor
- The hotel reservation should include six nights of rooms, specifically for 2024-09-13, 2024-09-14, 2024-09-15, 2024-09-16, 2024-09-17, 2024-09-18
- The room type in the hotel reservation should be a king room
- The hotel reservation should include 4 rooms for each night
- The room rate per night should be between 1000-1600 yuan, and the total order amount should be between 24000-38400 yuan
- Need to check the date of Mid-Autumn Festival in 2024, which is 2024-09-17; need to check the weather in Hong Kong on 2024-09-17, which is sunny, and the tickets in the attraction order should be for the Victoria Peak Tram
- The tickets in the attraction order should be one-way tickets
- The tickets in the attraction order should be Adult Ticket
- The date in the attraction order should be 2024-09-17

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
