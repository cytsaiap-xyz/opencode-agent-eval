# VitaBench Task: Ota #3

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your cousin, who just finished her college entrance exams, is coming to visit you. You're planning to take her to Yangjiang's Hailing Island to enjoy the scenic views. The plan is to leave by high-speed train early on Saturday morning two weeks from now and arrive before 10:00 AM if possible. You'll stay on the island for one night and return Sunday evening around 7:00 PM. Since weekend train tickets can be in high demand, you want to book both departure and return tickets in advance. Your cousin mentioned wanting to try some thrilling activities, which you're also interested in exploring. Check whether there are parasailing or other exciting water sports available at the destination; any adrenaline-pumping sea activities would work as alternatives too. Also, see if there are atrraction ticket discounts specifically for college entrance exam graduate—if so, arrange a discounted ticket for your cousin; otherwise, go with regular pricing. You hope to enjoy these activities on Saturday. For accommodation: you want something luxurious this time—a five-star resort hotel on the island that offers a premium buffet dining experience where you can relax and chat over delicious food with your cousin. Your cousin is still young, and you're concerned about her staying alone, but she doesn't seem to like sharing a bed with others.

## Context

- Current time: `2023-06-09 15:17:53`
- Domain: `ota`

## Requirements / Rubrics

- Departure train's date should be June 24, 2023
- Departure train's arrival time should be before 10:00 AM on June 24, 2023
- Departure train's tickets should be for Zhuhai to Yangjiang
- Departure train's tickets quantity should be 2
- Return train's departure date should be June 25, 2023
- Return train's departure time should be between 7:00 PM and 8:00 PM on June 25, 2023
- Return train's tickets should be for Yangjiang to Zhuhai
- Return train's tickets quantity should be 2
- The ordered attraction tickets should be for parasailing
- The ordered attraction tickets should include one Parasailing Only Adult Ticket
- The ordered attraction tickets should include one College Entrance Exam Graduate Discount Ticket
- The ordered attraction tickets' usage date should be June 24, 2023
- The ordered hotel should be five-star
- The ordered hotel should provide buffet
- The ordered hotel room type should be twin room
- The ordered hotel room quantity should be 1
- Hotel check-in date should be June 24, 2023

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
