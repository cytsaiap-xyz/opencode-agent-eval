# VitaBench Task: Cross Domain #61

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

On Sunday, you plan to take your parents out. In the morning, you want to order a nutritious breakfast takeout for three people. Since your elderly parents care about health, it must be from a dine-in restaurant. In the morning, you want to take them to an elegant environment photo studio to take a two-person artistic photography, and purchase a Neo-Chinese Style package that includes makeup and styling, with complimentary photos and frame. You need to make an appointment to arrive at 10 o'clock. Your dad's baldness is quite severe, so you're wondering if there are any wigs suitable for elderly people available for delivery, but he might get angry, so better not buy it for now. You want to find some scenic spots suitable for elderly people to visit, which shouldn't have too many slopes and should have fresh air. If you find one, you'll buy three tickets for the afternoon to take a stroll together.

## Context

- Current time: `2026-04-12 08:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The breakfast order items should be nutritionally rich
- The breakfast order items must be Three-person Portion
- The breakfast order items must come from a Dine-in Restaurant
- The breakfast order items must not contain high Purine foods (such as organ meats/seafood soup)
- The breakfast order items must not contain caffeine
- The delivery address for the breakfast order should be Room 501, Unit 2, Building 1, Vanke City Light, No.239 Qingyang North Road, Tianning District, Changzhou City, Jiangsu Province
- The studio in the photo studio order should have an Elegant Environment
- The items in the photo studio order should be Neo-Chinese Style
- The items in the photo studio order should be Two-person Artistic Photography
- The package in the photo studio order must include Makeup and Styling Included services
- The package in the photo studio order must include photos and photo frames
- The photo studio appointment should be at Elegant Rhythm Photography Art Gallery
- The appointment time for the photo studio should be 10:00 on 2026-04-12
- The number of people for the photo studio appointment should be 2
- The tourist attraction ordered should be suitable for elderly people
- The tourist attraction ordered must not require climbing too many slopes
- The tourist attraction ordered must have fresh air
- The scenic spot order should include Senior Ticket
- The scenic spot order should include Adult Ticket
- The scenic spot order should include 2 Senior Tickets
- The scenic spot order should include 1 Adult Ticket
- The ticket date for the scenic spot order should be 2026-04-12
- Need to inquire whether there are wigs suitable for elderly people, the result shows that Health Preservation Wig Specialty Store offers Middle-aged and Elderly Men's Real Hair Toupee, Lightweight Breathable Wig Set for Elderly and other products

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
