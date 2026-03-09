# VitaBench Task: Instore #46

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Finally got paid! You decide to treat yourself after working hard for a month. Tonight, you want to enjoy an upscale seafood feast near your home. You're looking for a restaurant with single booth seating and preferably an unlimited buffet with no time limit - you're so hungry you could eat a horse! Oh, and the per-person cost can't exceed 1.5 times your usual spending, otherwise you'll be broke for days. You have a date with your crush tomorrow, so after dinner, you plan to get your nails done. You need a nail salon that's open until 11pm, offering Full Nail Tips packages with freedom to choose any style, priced under 150. Of course, if there's a package between 150-200 that includes Construction Service, that would work too. After selecting the package, make an appointment for 9pm.

## Context

- Current time: `2024-08-15 17:15:00`
- Domain: `instore`

## Requirements / Rubrics

- The restaurant ordered should be within 3km (including 3km) of Room 503, Building 2, Linyi People's Hospital Staff Quarters, 15 Jinqueshan Road, Lanshan District, Linyi City, Shandong Province
- The restaurant must provide Single Booth Seat
- The restaurant package ordered should offer Low Purine Menu
- The restaurant package ordered should be a buffet with No Time Limit
- User's usual spending range is found to be between 90 and 160 yuan, and restaurant spending should not exceed 1.5 times the user's daily spending range, so the restaurant order price should be less than or equal to 240 yuan (including 240 yuan)
- The nail salon ordered should be open until at least 11 PM
- The nail salon package ordered should include Full Nail Tips
- The nail salon package ordered should offer multiple style options
- The nail salon order should prioritize packages priced at 150 yuan or less; if unavailable, order packages priced above 150 yuan but below 200 yuan (including 200 yuan), and the package must include construction; upon inquiry, there are packages under 150 yuan, so the ordered package should be priced at 150 yuan or less
- The nail salon appointment should be at Fingertip Art Nail Salon
- The nail salon appointment time is 2024-08-15 21:00:00
- The nail salon appointment is for 1 person

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
