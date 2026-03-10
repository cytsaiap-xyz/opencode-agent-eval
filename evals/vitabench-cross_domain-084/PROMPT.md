# VitaBench Task: Cross Domain #84

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your mother is hospitalized at Baoding First Central Hospital Main Campus, and today you need to pick her up after discharge. You'll be busy handling various procedures and want to order lunch for both of you to be delivered to the hospital. For convenience, you want to order the same meal for both of you - something light and easy to digest as a Post-Illness Meal, otherwise it would be difficult to choose. Oh, and it should contain High-Quality Protein and be delivered by 11 AM. Your mother's hair hasn't grown back yet, and although you bought her a hat, you can tell she's still self-conscious about it. You plan to buy her a Real Hair Woven Wig (Senior Style) to be delivered to your home as a surprise, specifically designed for elderly people. You plan to leave at 11 AM to pick her up, so the wig needs to be delivered before then. You have a business trip to Beijing tomorrow, and since your mother just got discharged, you're concerned that taking care of your son might be too tiring for her. You're considering taking your son with you on the business trip. You haven't booked a hotel yet and want to check if there are any hotels within 1km of Chaoyang Station that have children's play facilities and Childcare Service. If you find one, you'll book a Twin Room for one night. If you manage to book a hotel, you'll also buy a First Class Seat ticket for your son on the same train as yours, the one departing at 2 PM. If there aren't any suitable hotels, you'll just hire a temporary helper instead.

## Context

- Current time: `2025-08-03 09:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- Post-Illness Meal should be light and easy to digest
- Post-Illness Meal should contain High-Quality Protein
- The number of Post-Illness Meal should be 2
- The delivery address of Post-Illness Meal should be Baoding First Central Hospital Main Campus
- The expected delivery time of Post-Illness Meal is 11:00 on August 3, 2025
- The wig should be made of Real Hair Woven
- The wig should be in Senior Style for women
- The delivery address of the wig should be Room 502, Unit 2, Building B, Huafu Residential Complex, No.1699 Dongfeng Middle Road, Lianchi District, Baoding, Hebei Province
- The expected delivery time of the wig is before 11:00 on August 3, 2025
- There is a hotel with play facilities and childcare services within 1km of Chaoyang Station (such as Beijing Yitel Hotel Family Theme Branch), so a hotel needs to be booked
- The hotel check-in date is August 4, 2025
- The hotel room type should be Twin Room
- The train number for the train ticket is G123
- The seat type for the train ticket is First Class Seat

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
