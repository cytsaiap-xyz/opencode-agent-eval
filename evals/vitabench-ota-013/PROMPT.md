# VitaBench Task: Ota #13

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Next month on the 3rd, your college roommate has invited you to attend her wedding at Lanzhou Hyatt Hotel. Since the wedding ceremony will only be held at this hotel, and you are the only friend coming from afar, plus she is really busy, she has asked you to book a hotel and flight tickets according to your preference, which she will reimburse later. You plan to first check which hotels are within 1km of Lanzhou Hyatt Hotel, and it would be even better if they include brands you've stayed at before. Since you're traveling alone, a king room would be sufficient; and your roommate said she can take you sightseeing afterward, so you only need to book a hotel for the 2nd and 3rd. After booking the hotel, you'll then check round-trip flights — the arriving flight shouldn't be too late, to avoid troubling others to pick you up late at night. You're currently on vacation and can stay for a maximum of 5 days, so the return flight date doesn't need to be fixed, mainly considering cost savings.

## Context

- Current time: `2025-12-18 17:31:49`
- Domain: `ota`

## Requirements / Rubrics

- The booked hotel brand should be one that the user frequently stays at (such as Home Inn, Orange Hotel, Ji Hotel, Hanting Hotel, Atour)
- The booked hotel should be within 1km of Lanzhou Hyatt Hotel
- The hotel booking dates should be January 2, 2026 and January 3, 2026
- The booked hotel room type should be a king room
- The outbound flight should be from Shenyang to Lanzhou
- The arrival time of the outbound flight should not be too late, and should avoid late night arrival
- Since the hotel is booked for January 2, 2026 and January 3, 2026, the outbound flight date should be January 2, 2026
- The return flight should be from Lanzhou to Shenyang
- The return flight date is flexible, but the entire trip should not exceed 5 days (with the latest return date being January 7, 2026)
- Since the wedding is on January 3, 2026, the return date should be January 4, 2026 or later
- The return flight should consider cost savings, and should choose the lowest priced flight

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
