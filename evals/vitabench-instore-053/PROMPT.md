# VitaBench Task: Instore #53

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You've been straining your eyes lately, feeling dryness and itchiness, so you want to find a professional eye care center nearby for a massage. The store should be within 1km of your office, preferably. You prefer to purchase an eye + head massage package; if that's not available, a pure eye massage service would work, with service time of 40 minutes or more. After deciding, you'll place an order, pay, and schedule an appointment for Saturday at 3:30 PM. You'll be hungry after the massage, so you plan to visit a cake shop to fill your stomach with a 4-inch dairy cream cake. Since you're controlling your weight, you can't eat anything with sugar, and you're allergic to mango. You also want to drink HeyTea, specifically a grape-flavored drink. After finding what you want, you'll purchase a milk tea discount coupon.

## Context

- Current time: `2024-07-15 18:24:34`
- Domain: `instore`

## Requirements / Rubrics

- The eye care center must be professional
- The eye care center must be within 1km (inclusive) of the 15th Floor, No.5 Victory International Building, Harbor Square, Zhongshan District, Dalian
- For the eye care center order, priority should be given to eye + head massage combination packages; if unavailable, order eye massage packages only; upon checking, eye + head massage packages are available, so these should be ordered
- The service time for the eye care center order must be 40 minutes or longer
- The eye care center should be Bright Eyes Care Center
- The appointment time for the eye care center should be 2024-07-20 15:30:00
- The number of people for the eye care center appointment should be 1
- The cake ordered from the cake shop should be 4-inch
- The cake ordered should be Sugar-free
- The cake ordered should not contain mango
- The cake ordered should use Dairy Cream
- The milk tea ordered should be Sugar-free
- The milk tea ordered should be grape flavored
- The milk tea ordered should not contain mango
- The recommended milk tea shop should be HeyTea

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
