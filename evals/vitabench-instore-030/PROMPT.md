# VitaBench Task: Instore #30

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You've been working overtime a lot recently, and you heard that aromatherapy is very relaxing, so you want to try it out. Since you've never tried it before and don't know what scents you prefer, you're looking for a relaxing package that includes multiple essential oils. You want to find an aromatherapy SPA club with an elegant environment and high privacy. You can drive there, so any location within 10 kilometers of your home is acceptable. After finding a suitable place and purchasing the package, you plan to make an appointment with your boss for Saturday at 11:00 AM. If you can't make an appointment at that time, you can always go back at 2:00 PM. If you go in the morning, after the therapy, you'll have foie gras for lunch at the same restaurant as last time, and you need to make a reservation in advance. If you go in the afternoon, you'll find a well-known light meal store within one kilometer of the aromatherapy club and buy a single meal with beef.

## Context

- Current time: `2025-03-20 17:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The ordered aromatherapy SPA package must include multiple essential oils
- The ordered aromatherapy SPA club must have an elegant environment
- The ordered aromatherapy SPA club must have high privacy
- The ordered aromatherapy SPA club must be within 10 kilometers (including 10 kilometers) from Room 1204, Building B, World Trade Center, No. 6 Hong Kong Middle Road, Shinan District, Qingdao
- The reserved aromatherapy SPA club should be Yunshu Aromatherapy SPA Club
- When checking if the aromatherapy SPA club is available for reservation on 2025-03-22 11:00:00, as the business hours are open from 12:00-22:00, it is unavailable, so the reservation time is set to 2025-03-22 14:00:00
- The number of people for the aromatherapy SPA club reservation is 1
- As the user will have therapy in the afternoon of 2025-03-22, the restaurant ordered should be a light meal restaurant
- The ordered restaurant should be a Well-known brand
- The restaurant order must be a Single person meal
- The restaurant set meal must include Beef
- The restaurant order must be a Light meal
- The ordered restaurant should be within one kilometer (including one kilometer) from Yunshu Aromatherapy SPA Club, 3rd Floor, Hyatt Plaza, No. 15 Donghai West Road, Shinan District, Qingdao

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
