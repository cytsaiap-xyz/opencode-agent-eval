# VitaBench Task: Cross Domain #69

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your boyfriend just passed the Judicial Examination, so you need to celebrate for him. You want to order a set of legal classic works as encouragement, which must be hardcover and have good collectible value. You two haven't dated for a long time because of exam preparation, so you want to find a private cinema near your home and book a small room for 4 hours to spend time together. The rating must be higher than 4.9. Book the latest time slot at the private cinema, and reserve an hour for travel time. If the books can't be delivered home before then, forget about the books. You also plan to check if the Great Hall of the People is open tomorrow, and if so, buy two tickets for tomorrow afternoon to experience the solemn atmosphere together.

## Context

- Current time: `2024-06-08 18:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The food delivery order must be for legal classic books
- The purchased books must be hardcover editions
- The purchased books must have collectible value
- The purchased books should be delivered to Room 1203, Unit 5, Jinnyu Jiahua Building, 19 Xibeiwang Middle Road, Haidian District, Beijing
- The books need to be delivered on the same day
- Need to check the operating hours of the private cinema for booking, with the result showing open until 1:00 AM, and the books should be delivered before 20:00 on June 8, 2025
- The private cinema must be a Small Private Room
- The package duration for the private cinema booking must be 4 hours
- The private cinema must be close to home, within 3 kilometers of Room 1203, Unit 5, Jinnyu Jiahua Building, 19 Xibeiwang Middle Road, Haidian District, Beijing
- The private cinema must have a rating higher than 4.9
- The private cinema needs to be booked for the latest available time slot on the same day (June 8, 2024), which is 21:00
- The number of people for the private cinema booking is 2
- Check if The Great Hall of the People is open for visits tomorrow (June 9, 2024), with the result showing that The Great Hall of the People is open from 09:00-15:00 tomorrow
- Two tickets need to be purchased for tomorrow (June 9, 2024)
- The attraction for the tickets should be The Great Hall of the People

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
