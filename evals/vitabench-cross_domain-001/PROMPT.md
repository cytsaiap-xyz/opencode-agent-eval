# VitaBench Task: Cross Domain #1

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

This Saturday, you and five friends are planning to experience real-person CS in Beijing. One friend is responsible for purchasing round-trip train tickets (going Saturday, returning Sunday), another friend is booking the hotel, and you're in charge of finding a large, professionally equipped outdoor CS base. You plan to purchase a CS package that includes at least two hours of experience and more advanced equipment such as goggles, helmets, and bulletproof vests. It would be even better if there's coach guidance. If you find a suitable package, you can place the order now and book a spot for Saturday at 2 PM. Thinking about going outdoors, you realize your sunscreen is almost empty, so you want to check if the product delivery service has your regular Anessa sunscreen. If it can be delivered today, buy a large capacity bottle to be delivered to your home before 10 PM, as you're concerned about the doorbell disturbing your child's sleep. If it can't be delivered today, have it sent to your office between 3-4 PM tomorrow, so you can pick it up during your downtime. Just now, your company announced a monthly meeting for Saturday morning, so you plan to find a high-speed rail ticket departing after 1:00 PM on Saturday and ask your friend to change your booking. The CS activity will have to wait until you arrive, and you'll need to allow about 1.5 hours to travel from the station to the CS base, so you'll need to change the reservation time. Also, the train departure can't be too late, otherwise you won't have enough time to play in the afternoon.

## Context

- Current time: `2025-06-19 21:29:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The real-person CS base ordered should be an outdoor base
- The real-person CS base ordered should have a large venue and professional setup
- The real-person CS package ordered should include more than two hours of experience
- The real-person CS package ordered should include advanced equipment
- The real-person CS package ordered should include coach guidance
- The agent should order a real-person CS package for six people
- The sunscreen product ordered should be the Anessa brand
- The sunscreen product ordered should be large capacity
- Check the business hours of JD Beauty Supermarket, which are 09:00-21:00, and cannot be delivered to Room 502, Unit 2, Building 8, Oriental Garden Community, Intersection of Dongfeng Road and Yuhua Road, Lianchi District, Baoding, Hebei Province before 22:00:00 on June 19, 2025; the delivery address should be Building 3, Baoding Technology Park, 128 Chuangye Road, High-tech Zone, Baoding, Hebei Province, and the delivery time should be between 15:00:00-16:00:00 on June 20, 2025
- Need to check high-speed rail ticket information from Baoding to Beijing on June 21, 2025, with departure time after 13:00:00 and arrival time before 15:00:00, resulting in the user taking train G505 arriving in Beijing at 14:02, allowing 1.5 hours travel time from the station to the CS base, thus needing to change the real-person CS order appointment time from 14:00:00 to around 15:30:00 on June 21, 2025 [i.e., arrival appointment time should be within the 15:15-15:45 timeframe]
- The number of people for the CS experience reservation should be 6 people

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
