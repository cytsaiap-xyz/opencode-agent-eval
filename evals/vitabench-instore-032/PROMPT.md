# VitaBench Task: Instore #32

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your nails have grown out and you want to change the style. You're looking for a professional Japanese nail salon with 'One Customer One Disinfection' practices. The salon must be within 3 kilometers of your home because you don't want to drive. You don't really like flashy nail designs and plan to get a solid color manicure set, booking an appointment for Saturday at 4 PM. But then you think since you're already getting your nails done, you might as well get your eyelashes done too, so now you want to change your appointment to 10 AM and add an Eyelash Extension set so you can get both done at once. By the way, the manicure set must include 'Nail Removal Included' service - you don't want the kind where you have to pay extra for removal. You also realize that after getting your nails and eyelashes done on Saturday, you probably won't feel like cooking at home, so your family of three might as well eat out. Your daughter has been asking for hotpot, so you're planning to find a highly-rated hotpot restaurant near your home. You'll check if they have a 'Three-Person Yin-Yang Hotpot Set' and buy a voucher if they do. If not, a two-person set would work too since your daughter doesn't eat much anyway.

## Context

- Current time: `2025-08-15 18:45:00`
- Domain: `instore`

## Requirements / Rubrics

- The nail salon to order from should be Japanese style
- The nail salon must provide One Customer One Disinfection service
- The nail salon should be within 3km (inclusive) of Room 403, Unit 2, Building 12, Zone B, CR Phoenix City, 2699 Qianjin Street, Chaoyang District, Changchun
- The nail salon order should include a manicure set
- The nail salon order's manicure set should be solid color
- The nail salon order's manicure set should include free nail removal service
- The nail salon order should include an eyelash extension set
- The manicure set and eyelash extension set should be from the same nail salon
- The appointment should be made at Sakura Japanese Nail and Eyelash Salon
- The number of people for the nail salon appointment is 1
- The nail salon appointment time is 2025-08-16 10:00:00
- The hotpot restaurant should be within 1km (inclusive) of Room 403, Unit 2, Building 12, Zone B, CR Phoenix City, 2699 Qianjin Street, Chaoyang District, Changchun
- The hotpot restaurant rating should be 4 stars or above
- The hotpot restaurant order should be a Yin-Yang Hotpot
- The hotpot restaurant order requires prioritizing a three-person meal; if not available, order a two-person meal. Since the hotpot restaurant has a three-person meal, the ordered item should be a three-person meal

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
