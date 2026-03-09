# VitaBench Task: Instore #39

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your wife's close friend is returning from abroad on the National Day, and she's meeting up with several girlfriends, so you'll need to take care of your child alone that day. You think horse riding sounds interesting, so you plan to take your child there in the morning. You want to find an equestrian club with spacious grounds and experienced coaches, and purchase a parent-child package. However, you need to check if there are age restrictions since your child is still three years away from elementary school. If your child is too young to participate, you'll take them to a family park within the city area where they can have close contact with small animals, and buy a parent-child package that includes animal feeding. You also want to find a Xibei restaurant within 3km of either the club or the family park, and make a reservation for 12:30 to avoid holiday queues. Your child enjoys the children's meal at Xibei, while you want to order You Mian noodles.

## Context

- Current time: `2025-09-27 20:15:00`
- Domain: `instore`

## Requirements / Rubrics

- Based on available information, the equestrian club's parent-child packages have an age restriction of 5 years and above, so the recommendation should be the family park
- The family park should be located within the city area
- The family park should allow interaction with small animals
- The ordered item at the family park should be a family package
- The ordered item at the family park should include feeding small animals
- Xibei should be no more than 3km (including 3km) from Wonderful Animal Kingdom Family Park, No. 18 Hong Kong Middle Road, Shinan District, Qingdao, Shandong Province
- The ordered items at Xibei should include children's meals
- The ordered items at Xibei should include You Mian (oat noodles)
- Children's meal package and You Mian should be from the same restaurant
- The reservation time for Xibei should be National Day (October 1, 2025) at 12:30 PM
- The number of people for the Xibei reservation should be 2
- The reserved restaurant should be Xibei You Mian Village (Hong Kong Middle Road Branch)

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
