# VitaBench Task: Cross Domain #48

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're planning to entertain a friend visiting from Japan tonight and want to take him to an authentic Wenzhou restaurant to taste genuine Wenzhou flavors. It doesn't matter if it's a bit far from your company, you just hope the restaurant has a high rating. But preferably within 20 kilometers, so you can make a reservation around 19:30. Also, you need to check if there are suitable set meals without coriander. You've already prepared a Wenzhou-style souvenir gift for him, but feel that a Fish Cake Gift Box alone might be too simple, so you want to see if there are other Wenzhou Specialties. You want to choose a store with fast delivery, but the quality must be good, priced above 100 yuan, and preferably delivered to your office before you finish work at 6:30 PM. Oh, and you also need to buy a packaging bag, preferably in Chinese Style. Tomorrow you plan to take him sightseeing, so you're looking for a scenic spot that showcases Wenzhou's characteristics, but not one requiring too much walking. It would be even better if there are some Novel Experiences available.

## Context

- Current time: `2024-04-12 17:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The ordered restaurant should be an authentic Wenzhou Cuisine restaurant
- The ordered restaurant's rating should be 4.2 or above
- The ordered restaurant should be within 20 kilometers of Wenzhou Smart Industrial Park, 326 Haitong Road, Longwan District, Wenzhou, Zhejiang Province
- The ordered set meal at the Wenzhou restaurant should be a meal for two people, not two individual meals
- The ordered set meal at the Wenzhou restaurant should not contain coriander
- Need to reserve seats at the Wenzhou restaurant around 19:30 [meaning the reservation time should be between 19:15 and 19:45]
- The reservation at the Wenzhou restaurant should be for 2 people
- The Wenzhou specialty souvenir gift should not contain Fish Cake
- The price of the Wenzhou specialty souvenir gift should be above 100 yuan
- The packaging bag should be Chinese Style
- The Wenzhou specialty souvenir gift and the packaging bag should come from the same store
- The delivery address for food delivery must be Wenzhou Smart Industrial Park, 326 Haitong Road, Longwan District, Wenzhou, Zhejiang Province
- The expected delivery time should be before 2024-04-12 18:30:00
- The recommended scenic area should reflect Wenzhou's characteristics
- The recommended scenic area should not require extensive walking
- The recommended scenic area should have novel activities, such as making Ou Kiln ceramics

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
