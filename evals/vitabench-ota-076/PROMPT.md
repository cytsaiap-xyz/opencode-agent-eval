# VitaBench Task: Ota #76

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

During the summer vacation, you plan to visit Yuntai Mountain in Henan with your cousin. You've just agreed to set the departure date for next Monday. Now you want to check the ticket information for the scenic spots, determine the earliest entry time, and confirm what discounts are available for college students. You've heard there's rock climbing available in the scenic area. You plan to enter the scenic area on Tuesday, so you need to pay attention to the weather that day. If the highest temperature doesn't exceed 30°C, you plan to purchase the rock climbing tickets along with the entrance tickets. After buying the tickets, you plan to check train ticket information, first figuring out which train station is closer to the Yuntai Mountain Scenic Area, then purchasing the appropriate train tickets - Second Class Seat will be fine. For accommodation, you plan to book a hotel for Monday night first. You hope to stay somewhere near the scenic area, no more than 3 kilometers away. Ideally, the room should have a view, but the price shouldn't exceed 500 yuan, and you want a king bed room.

## Context

- Current time: `2025-07-11 13:39:50`
- Domain: `ota`

## Requirements / Rubrics

- The scenic spot to be booked should be Yuntai Mountain Scenic Area
- Need to check the earliest entry time for Yuntai Mountain Scenic Area, which is 06:30
- Need to check the ticket price information for Yuntai Mountain Scenic Area, which is Student Ticket 60 yuan each (half-price discount)
- The date in the scenic spot order should be 2025-07-15
- Need to check the weather conditions for Jiaozuo Yuntai Mountain Scenic Area on July 15, 2025, which shows a maximum temperature of 28 degrees, not exceeding 30 degrees, so the scenic spot order should include two Student Tickets and two rock climbing tickets
- Need to calculate the distance between Yuntai Mountain Scenic Area, Yuntai Mountain Town, Xiuwu County, Jiaozuo, Henan Province and Zhengzhou Railway Station, Erqi District, Zhengzhou, Henan Province; Luoyang Longmen Railway Station, Luolong District, Luoyang, Henan Province; and Jiaozuo Railway Station, Jiefang District, Jiaozuo, Henan Province, and compare which railway station is closest to Yuntai Mountain Scenic Area. The result is Jiaozuo Railway Station (distance 25.58km), so the destination in the train ticket order should be Jiaozuo Railway Station
- The date in the train ticket order should be 2025-07-14
- The quantity in the train ticket order should be 2
- The seat type in the train ticket order should be Second Class Seat
- The hotel to be booked should be within 3 kilometers of Yuntai Mountain Scenic Area, Yuntai Mountain Town, Xiuwu County, Jiaozuo, Henan Province
- The room type in the hotel order should be a scenic view room
- The room type in the hotel order should be a king room
- The date in the hotel order should be 2025-07-14
- The price in the hotel order should be less than or equal to 500

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
