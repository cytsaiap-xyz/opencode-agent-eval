# VitaBench Task: Cross Domain #30

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your wife will be finishing her postpartum confinement tomorrow, and you need to host a baby's first month celebration at noon. You want to find a family restaurant with infant-friendly facilities, in a cozy and safe environment. There will be three tables of guests, so you're looking for 8-Person Meal sets, three of them, and you want to book for tomorrow at 12 noon. However, your wife shouldn't eat anything too greasy, and you don't eat food that's too salty. Although tomorrow's celebration is for your second child, you don't want your older child to feel left out, so tomorrow afternoon you plan to take both children to a theme park where the whole family of four can create precious memories together. You need to look for theme park ticket packages, check prices and photography rules, and choose something suitable. For photo memories, you want to buy a high-quality Parent-Child Outfit Set to be delivered to your home now, which should include a Four-Piece Set for you and your wife, your child and infant, made of Pure Cotton in Blue.

## Context

- Current time: `2025-06-11 15:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The restaurant ordered must have Infant-Friendly facilities
- The restaurant environment needs to be Cozy Environment
- Each set meal ordered by the agent at the restaurant must be for 8 people
- The agent needs to order three multi-person set meals at the restaurant
- The set meal dishes at the ordered restaurant should not be too oily
- The dishes in the order set should comply with the user's dietary restrictions: Low Salt
- Need to find information about theme park ticket packages; return price and photography rules: Family Package Ticket price range is 368-698 yuan, Shenyang Happy Family Theme Park allows bringing your own camera, Shenyang Family Time Theme Park has a professional photography area
- Need to order a theme park package suitable for 2 adults, 1 child, and 1 infant
- The ordered parent-child clothing package must include a Four-Piece Set, including clothing for adults, children, and infants
- The ordered parent-child clothing must be Pure Cotton material
- The ordered products must be Blue
- The delivery address for the parent-child clothing order should be the user's residence: Huafu World, 46 Nanjing South Street, Heping District, Shenyang
- The restaurant reservation should be at Star Dream Family Theme Restaurant
- The restaurant reservation time must be June 12, 2025, at 18:00
- The number of people for the restaurant reservation should be 24

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
