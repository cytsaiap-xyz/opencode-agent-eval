# VitaBench Task: Ota #79

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your girlfriend still has 3 days of annual leave left, and you plan to take advantage of that starting next Wednesday to travel to Qinhuangdao together, with Shanhaiguan as your first stop. You've set the departure date for Wednesday to avoid peak travel times, so you want to buy tickets for Thursday. You're looking into ticket options for Meng Jiangnu Temple, wondering if they offer Double Ticket and which purchase option would be most economical. You almost forgot about transportation - you want to check if there are direct flights first. If available, you'll quickly purchase two morning arrival tickets; if not, you'll wait until your girlfriend's leave is approved and let her plan the trip. Additionally, your high school classmate is coming with their family of three this Thursday, and you need to host them properly. You should now look for suitable hotels within 3 kilometers of your home, preferably with Family Suite options, and book two nights in advance. The hotel should be five-star and offer Childcare Service so your classmate's family can feel more relaxed and comfortable.

## Context

- Current time: `2025-03-25 21:32:14`
- Domain: `ota`

## Requirements / Rubrics

- Need to query all ticket options for visiting Meng Jiangnu Temple, and choose the most cost-effective combination. The result shows that Meng Jiangnu Temple is located within Shanhaiguan, so choosing the Shanhaiguan Scenic Area Double Ticket and Meng Jiangnu Temple Double Ticket would be the most economical option
- The Shanhaiguan Scenic Area ticket order should be a Double Ticket
- The usage date for the Shanhaiguan Scenic Area ticket should be next Thursday (April 3, 2025)
- The Meng Jiangnu Temple ticket order should be a Double Ticket
- The usage date for the Meng Jiangnu Temple ticket should be next Thursday (April 3, 2025)
- Must query direct flights from Shenzhen to Qinhuangdao, Hebei, filtering for tickets on April 2, 2025. The result shows insufficient tickets for two people, so flight tickets should not be purchased
- The hotel must be located within 3 kilometers (inclusive) of the user's home (Room 1507, Yihua Fintech Building, 3018 Keyuan South Road, South Science Park, Nanshan District, Shenzhen, Guangdong Province)
- The hotel booking check-in dates must be March 27, 2025 and March 28, 2025 respectively
- The hotel must be a five-star hotel
- The hotel must provide Childcare Service
- The hotel room type must be a Family Room

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
