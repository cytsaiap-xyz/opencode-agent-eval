# VitaBench Task: Instore #4

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You and several female colleagues in your project team have agreed to work out together, and it's your turn to select a venue this week. You're thinking about finding a professional Latin dance studio for a session. You've never tried dancing before, just some sports experience, so you want to find a studio with instructor guidance and a rating above 4.7. Ideally, you'd prefer a small class that can accommodate just the six of you without strangers, to avoid awkwardness. If that's not available, an 8-person small class would also be acceptable, and you can split the extra cost among yourselves. After purchasing, you need to book a class for Saturday at 4 PM. You also want to find a sauna room within 2km of the Latin dance studio, purchase vouchers in advance, and schedule to arrive half an hour after the dance class ends. After class, you all plan to enjoy a sauna together, except for one colleague who will be on her period and won't join the sauna.

## Context

- Current time: `2024-02-22 15:30:00`
- Domain: `instore`

## Requirements / Rubrics

- Latin dance studio merchants must be selected from Latin dance studios/services
- The merchant rating for dance orders must be higher than 4.7 stars
- The dance order package must provide course services with teacher guidance
- The dance order package must be suitable for beginners to experience
- Since the user doesn't want to be with strangers, it's necessary to screen for beginner courses with 6 people per class, which yields no results; therefore, small classes with 8 people per class should be selected, ordering 8 portions
- The appointment time for dance classes must be Saturday at 4 PM (February 27, 2024, 16:00)
- Since the user doesn't want to be with strangers, the number of people for the dance class appointment must be 8
- The appointed dance class merchant should be Dancing Miracle Latin Dance Studio
- The sauna room merchant needs to be within a 2km range of the Latin dance studio (Dancing Miracle Latin Dance Studio, 5th Floor, Building B3, Olympic City Commercial Plaza, Huayuan Industrial Park, Nankai District, Tianjin)
- The sauna room order needs to reserve five single-person sauna items
- The sauna room order package content must be steam bath
- The number of people for the sauna room appointment should be 5
- The appointment time for the sauna room should be half an hour after the Latin class ends; checking the Latin class order shows the Latin class duration is 90 minutes, therefore the sauna room appointment time should be February 27, 2024, 18:00
- The appointed sauna room merchant should be Yuehuan Sauna Club

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
