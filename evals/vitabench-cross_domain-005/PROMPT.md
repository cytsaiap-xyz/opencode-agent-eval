# VitaBench Task: Cross Domain #5

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your idol is having a concert in Dongguan, but you only managed to get tickets for tonight's show. You want to buy a rice ball to take to your office and have a quick bite on your way. You need a Chicken Strips Purple Rice Ball without any sauce, delivered before 6:30 PM. After the concert, you plan to meet with 5 fellow fans to share photos. As the host, you're responsible for booking a restaurant. You plan to reserve a Private Room at Haidilao Hotpot (Dongguan Sports Center) for 10 PM, which is closest to the sports center, to avoid waiting in line. The day after tomorrow, you want to go to Shenzhen to see your idol off. Their flight is at 10 AM, and you need to arrive 30 minutes early. You want to check if there are direct High-speed Rail tickets to Shenzhen Airport. If not, you'll buy tickets to Shenzhen North and need to leave an hour earlier. The train ticket should not exceed 100 yuan.

## Context

- Current time: `2025-06-20 17:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The items in the Rice Ball order should not contain sauce
- The delivery time in the Rice Ball order should be before 18:30:00 on 2025-06-20
- The delivery address for the Rice Ball order is Mycott International Building, No.63 Maidi Road, Huicheng District, Huizhou, Guangdong
- The item in the Rice Ball order should be Chicken Strips Purple Rice Ball flavor
- The reservation time in the Haidilao order should be 22:00:00 on 2025-06-20
- The number of people for the Haidilao reservation is 6
- The merchant in the Haidilao order should be Haidilao
- The merchant in the Haidilao order should be the branch closest to the Sports Center (query shows it's Haidilao Hotpot (Dongguan Sports Center))
- Based on the query, there is no direct train from Huizhou to Shenzhen Airport, so a train from Huizhou to Shenzhen North should be ordered
- To pick someone up at the airport at 10:00, one needs to arrive at Shenzhen North Station one and a half hours in advance, so the arrival time of the train in the order should be before 08:30:00 on 2025-06-22
- The high-speed rail ticket price should not exceed 100 yuan

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
