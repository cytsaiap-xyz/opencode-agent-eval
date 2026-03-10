# VitaBench Task: Instore #45

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You've recently become obsessed with the guzheng (Chinese zither), and just watching others play is no longer satisfying. You want to find a place to learn it systematically. You're looking for a store that offers beginner instruction, with a package that includes instrument usage and basic fingering technique instruction. Ideally, you'd prefer a three-lesson experience card, with a price not exceeding 300 yuan. You plan to purchase the cheapest option from a suitable store. By the way, for your first visit, you want to wear your newly bought Hanfu (traditional Chinese clothing), but it won't arrive until the day after tomorrow, so you plan to schedule for next Wednesday at 9 PM. You're worried about working overtime and hope the store will be open after 9 PM. This afternoon, you originally planned to go shopping with your girlfriends, but it's too hot, so they don't want to shop anymore. Instead, you've decided to book a KTV to sing with them. You want to book a KTV within 2 kilometers of your home. Your friends don't drink alcohol, so you plan to buy a Singing Only Package for less than 200 yuan. If there's nothing suitable nearby, you're willing to travel up to 3 kilometers as long as the price is right. In the evening, you plan to eat salmon with your friends. Everyone says Haizhilian isn't good, so you'll go to the place you visited last time. You need to reserve a table for 3 people at 8 PM.

## Context

- Current time: `2024-10-27 14:16:11`
- Domain: `instore`

## Requirements / Rubrics

- The ordered item from the Guzheng training merchant should be a beginner instruction related course
- The ordered item from the Guzheng training merchant should include instrument usage and basic fingering technique instruction
- The ordered item from the Guzheng training merchant should be a three-lesson experience card
- The ordered item from the Guzheng training merchant should cost less than or equal to 300 yuan (inclusive)
- The ordered item from the Guzheng training merchant should be the Guzheng Three-lesson Experience Package
- The Guzheng training merchant should be open until after 9 PM
- The appointment time for the Guzheng training merchant should be October 30, 2024 at 21:00:00
- The number of people for the Guzheng training appointment should be 1 person
- The appointed Guzheng training merchant should be Ancient Melody Guzheng Art Training Center
- The KTV should be within 3km (inclusive) from Room 1204, Building 3, Ronghe Shanshui Lvcheng, No.20 Fengling North Road, Qingxiu District, Nanning
- The ordered item from KTV should be a package that only includes singing
- The price of the ordered item from KTV should not exceed 200 yuan (inclusive)
- Based on the user's historical behavior, the restaurant appointment should be at Helv Rotating Sushi (Mixc Branch)
- The restaurant appointment time should be October 27, 2024 at 20:00:00
- The number of people for the sushi restaurant appointment should be 3 people

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
