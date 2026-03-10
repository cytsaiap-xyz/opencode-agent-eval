# VitaBench Task: Instore #34

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You want to find a calligraphy class for your 6-year-old daughter. You need to purchase their experience package that includes the Four Treasures of Study (brush, ink, paper, and inkstone), as you don't want to prepare these yourself. You prefer to have One-on-One Teaching, and the store should be within 3km of your home. After deciding on the package, you'll place the order and make an appointment for this Saturday at 3 PM. After making the appointment, you suddenly remember you need to have dinner with your wife's parents on Saturday evening and worry about the tight schedule. You plan to change the appointment to Sunday afternoon instead. You haven't decided on a restaurant for Saturday's dinner yet, but you hope to find one near Mixc Shopping Center. You want to order a package meal, and considering that your parents have just recovered from the flu, you prefer Light Flavored dishes. Ideally, the restaurant should have a High Chair Available so you won't need to hold your second child during the meal.

## Context

- Current time: `2025-04-04 15:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The calligraphy order package must be suitable for children
- The calligraphy package must include pen, ink, paper, and inkstone
- The calligraphy order package must be an experience course package
- The calligraphy package must provide One-on-One Teaching
- The calligraphy order merchant must be within 3km of the home address (Room 1204, Building B, Hangyang International City, 131 Minzu Avenue, Qingxiu District, Nanning)
- The calligraphy appointment merchant must be Han Mo Xuan Calligraphy Training Center
- The calligraphy appointment order must be scheduled for Sunday afternoon (April 6, 2025) at 3 PM
- The calligraphy appointment order must be for 1 person
- The restaurant must be located within 3km of Mixc Shopping Center
- The dining party consists of 6 people, including 4 adults, 1 young child, and 1 infant; the restaurant order should be one 5-6 person meal package rather than multiple 3-person packages
- The restaurant package dishes must be Light Flavored
- The restaurant must provide High Chair Available facility

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
