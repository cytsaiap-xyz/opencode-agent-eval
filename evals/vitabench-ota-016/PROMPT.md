# VitaBench Task: Ota #16

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Next month, you're going to Zhuhai with your boyfriend to attend a friend's wedding. After the wedding on the 15th, you want to stay for two more days until the 17th. Your friend has booked a hotel only until the 16th, so you want to look for an ocean view room in Zhuhai and book a king room separately. You'd prefer accommodation with a view of the Hong Kong-Zhuhai-Macao Bridge, and you're willing to spend 300-400 yuan more than your usual budget since it's just for one night. You also want to take a tourist boat ride, but your boyfriend says it will be too sunny, so you want to check the weather on the 16th - if the highest temperature exceeds 33 degrees, you'll choose a different attraction. You've heard that Zhuhai Chimelong Ocean Kingdom is nice and they currently have beautiful fireworks shows that you want to see. However, you've also heard that the tickets are quite expensive - if they exceed your budget of 800 yuan per person, you'll stick to your usual hotel budget. Oh, and you need to buy two attraction tickets.

## Context

- Current time: `2026-04-03 14:14:59`
- Domain: `ota`

## Requirements / Rubrics

- Need to check the weather in Zhuhai on May 16, 2026, with the highest temperature of 35°C, which exceeds 33°C. The attraction to order should be Zhuhai Chimelong Ocean Kingdom
- The tickets in the attraction order should include a fireworks show
- The date of the tickets in the attraction order should be May 16, 2026
- The ticket type in the attraction order should be adult tickets
- The hotel room type should be an Ocean View Room
- The hotel room type should be a King Room
- The hotel room must have a view of the Hong Kong-Zhuhai-Macao Bridge
- The hotel order date should be May 16, 2026
- Need to check the ticket price of Zhuhai Chimelong Ocean Kingdom, which is 850 yuan for Adult Ticket (Including Fireworks Show and Indoor Light Show), exceeding the user's budget of 800 yuan per person

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
