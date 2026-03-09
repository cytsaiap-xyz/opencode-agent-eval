# VitaBench Task: Instore #17

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You've been feeling tired lately, so you're looking for a highly-rated massage place near your home to relax. Last time you had a full-body relaxation massage, but this time you want to try a health preservation sauna instead. You just booked an appointment for this Saturday at 2 PM, then remembered your girlfriend has also been complaining about feeling tense, so you need to wait until she finishes lunch with her friends to take her with you. She said she'll finish eating at 3 PM, so you need to change your appointment to 4 PM, and purchase a package suitable for both of you - the most economical one. Your girlfriend loves Japanese cuisine, especially Sashimi and Wagyu Beef BBQ. You plan to have dinner out right after the sauna, so you need to find a Japanese buffet restaurant within four kilometers of the massage place and buy a package. But she has a sensitive stomach, so if the food isn't fresh, she easily gets diarrhea. As for the price, it shouldn't exceed four hundred yuan. After making your selections, place the order and book a table for 7 PM.

## Context

- Current time: `2024-10-23 14:20:00`
- Domain: `instore`

## Requirements / Rubrics

- The massage shop should be within 1000m (inclusive) from Room 502, Unit 1, Building 3, Jinyu Huafu, 6789 Dongfeng East Street, Kuiwen District, Weifang, Shandong Province
- The massage shop should have a rating of 4.4 or above
- The massage shop should provide Health Preservation Sauna service
- The appointment time for the massage shop should be 2024-10-26 16:00
- The number of people for the massage shop appointment should be 2
- The ordered massage shop should be Yuyang Health Club
- The ordered item at the massage shop should be a Health Preservation Sauna package
- The ordered item at the massage shop should be suitable for two people
- The ordered item at the massage shop should be a Health Preservation Sauna Package for Two
- The Japanese buffet restaurant should be within 4000m (inclusive) from Yuyang Health Club, 3rd Floor, Wanda Plaza, 5678 Dongfeng East Street, Kuiwen District, Weifang, Shandong Province
- The Japanese buffet restaurant should have fresh ingredients
- The ordered item at the Japanese buffet restaurant should be a Package for Two
- The ordered set at the Japanese buffet restaurant should include both Sashimi and Wagyu Beef BBQ
- The price of the ordered set at the Japanese buffet restaurant should be within 400 yuan (inclusive)
- The reserved Japanese buffet restaurant should be Sakura Japanese Buffet
- The reservation time for the Japanese buffet restaurant should be 2024-10-26 19:00
- The number of people for the Japanese buffet restaurant reservation should be 2

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
