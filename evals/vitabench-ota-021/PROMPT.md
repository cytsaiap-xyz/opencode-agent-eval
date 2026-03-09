# VitaBench Task: Ota #21

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

This summer, you participated in your first internship and earned your first salary. Recently, you don't have many senior year courses, so you want to use your internship income to travel to Chaozhou as a small reward for yourself. You plan to spend three days and two nights there, returning the day before the Mid-Autumn Festival. For transportation, you're considering taking a High-speed train, with a flexible departure time - you can leave earlier. For the return trip, you need to consider the schedule carefully, since it takes about one and a half hours from the station to your university, and the dormitory closes at 11 PM, which could be troublesome if you're late. You want to book your round-trip tickets in advance. You also need to book a hotel in advance, preferably within 1 kilometer of Paifang Street, which you've heard is a lively area. You prefer chain hotels, ideally ones that Opened in 2023 or Opened in 2022. If there aren't any recently opened ones, hotels Renovated in 2022 or Renovated in 2019 would be acceptable too. Within these criteria, the cheaper options would be your first choice. By the way, you want to try Chaoshan raw marinated dishes, but you're worried about getting acute gastroenteritis, so as a precaution, you want to check if there are any hospitals near the hotel.

## Context

- Current time: `2023-09-16 22:53:13`
- Domain: `ota`

## Requirements / Rubrics

- The 2023 Mid-Autumn Festival is on September 29, and the user needs to return the day before the Mid-Autumn Festival, with the return date being September 28, 2023. Therefore, the departure train ticket date is September 26, 2023
- The outbound train ticket should be from Xiamen to Chaoshan
- The outbound train departure time should be relatively early (D2286)
- The user needs 1.5 hours to get from the station to school, and the dormitory building closes at 23:00, so the return train arrival time should be before 21:30 on September 28, 2023
- The return train ticket should be from Chaoshan to Xiamen
- The hotel should be within 1km of Paifang Street
- The booked hotel should be a chain hotel
- The opening or renovation date of the booked hotel should be between September 2021 and September 2023
- Based on price, the booked hotel should be the Hanting Hotel Chaozhou Ancient City Branch
- The hotel booking should include two nights, on September 26, 2023, and September 27, 2023
- The booked hotel is Hanting Hotel Chaozhou Ancient City Branch, with a hospital (Chaozhou People's Hospital) about 3 kilometers away

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
