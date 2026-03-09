# VitaBench Task: Cross Domain #97

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You're going on a business trip to the company's headquarters tomorrow. You're particularly busy today, and you still have to discuss cooperation with a client at 6 p.m. Now you need to book a high-end business restaurant. For the client's convenience, you plan to find a restaurant close to Linyi Commercial Center Exhibition Center. You suddenly remember that you haven't prepared a gift for the senior leader at the headquarters yet. You want to buy two boxes of high-end tea, with exquisite packaging, priced around 500 yuan each. It doesn't matter if the delivery is a bit slow, as long as it can be delivered to your home before 10 p.m. tonight. However, you might not be home by then, so you'll note to leave it at the property management center of your community. You also haven't bought your train tickets for the business trip yet. You want to quickly check the train schedule to Jinan, looking for the one with the shortest travel time, preferably departing around 10 a.m. By the way, for the client dinner, you want to buy a Business Set Meal for 6-8 People now, which is both formal and prestigious.

## Context

- Current time: `2024-10-27 11:46:28`
- Domain: `cross_domain`

## Requirements / Rubrics

- The restaurant ordered should be a high-end business restaurant
- The ordered restaurant should be within 500 meters (including 500 meters) from Linyi Commercial Center Exhibition Center
- The restaurant reservation time should be October 27, 2024 at 18:00
- The restaurant reservation should be for 6-8 people
- The restaurant for purchasing the set meal order should be Yu Pin Xuan
- The restaurant set meal order should include one Business Set Meal for 6-8 People
- The tea should have elegant packaging
- The tea should be in standard packaging
- The unit price of the tea should be between 400-600 yuan
- The delivery location for the tea must be Tianji Golden Waterfront, 180 meters north of the intersection of Yinqueshan Road and Binhe Road, Lanshan District, Linyi, Shandong Province
- The estimated delivery time for the tea should be before 22:00 on October 27, 2024 (including 22:00)
- The tea order should include the note 'Leave at community property management center'
- The departure station for the train ticket should be Linyi
- The arrival station for the train ticket should be Jinan
- The departure date for the train ticket should be October 28, 2024
- The departure time for the train ticket should be between 09:00-11:00
- Need to check for the fastest train from Linyi to Jinan on October 28, 2024, between 09:00-11:00, with the result being train G1234 (travel time: 1 hour and 20 minutes)

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
