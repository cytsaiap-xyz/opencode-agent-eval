# VitaBench Task: Instore #78

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Tomorrow is your mother's birthday, and you plan to take your parents and wife out for a celebratory dinner. Your mother is from Quanzhou, so you want to find a Fujian restaurant that's within 3km from home, is top-rated, and serves yellow croaker rice cake and geoduck jelly, as these are your mother's favorite dishes. If there's a set meal for four that includes these two dishes, you'll order it directly; if not, you'll get a meal for 2-3 people with these dishes and order additional items later. You also want to reserve a table for 4 people at 5:30 PM to avoid waiting in line, which would affect the experience. While discussing tomorrow's plans with your mother, your sister calls to say that she, her husband, and your two nephews will also be joining, so you immediately change your reservation to a table for 8 people, keeping the same set meal and planning to order additional dishes on site. After booking the restaurant, thinking that it's rare for the whole family to gather, you decide to also book a 6-person seating at a tea house you've visited before for 8 PM, figuring that your two nephews probably won't sit still anyway, so they can find their own entertainment.

## Context

- Current time: `2024-05-24 10:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The restaurant ordered should be within 3km (inclusive) of Room 503, Unit 2, Building 6, Henghua Garden, 28 Youyi Road, Hexi District, Tianjin
- The restaurant ordered should be Top-rated
- The merchant in the order should be a Fujian cuisine restaurant
- The search shows no 4-person meal that includes both yellow croaker rice cake and geoduck jelly, so the ordered item should be a set meal for 2-3 people that includes both yellow croaker rice cake and geoduck jelly, rather than multiple individual set meals
- The reserved restaurant should be Fujian Aming Seafood Restaurant
- The restaurant reservation time should be 2024-05-25 17:30:00
- The number of people for the restaurant reservation should be 8
- The reserved tea house should be Anxin Tea House
- The tea house reservation time should be 2024-05-25 20:00:00
- The number of people for the tea house reservation should be 6

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
