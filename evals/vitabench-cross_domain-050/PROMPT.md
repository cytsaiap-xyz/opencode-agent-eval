# VitaBench Task: Cross Domain #50

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You and your girlfriend want to try a Two-Day One-Night Murder Mystery Game (Dinner Included) at Qingcheng Mountain next Saturday. You have also invited four friends to join, and now you want to see if there are suitable scripts to order in advance. The script can be an Emotional Script or Fun Script, preferably without too strong deduction elements, but not too simple either. Murder Mystery Games usually include costume experiences, and you hope the package includes styling services so everyone can take nice photos. Also, you want to check high-speed rail tickets to Qingcheng Mountain, departing around 11 AM. You, your girlfriend, and two of your friends will depart from Xipu Station, so you're looking for suitable tickets to purchase together; the other two friends will depart from Chengdu East Station and buy their own tickets. Before returning in the afternoon of the second day, you all want to have a meal near the high-speed rail station, preferably something healthy with some snacks. You're looking for a suitable Six-Person Meal. If available, you'd like to reserve a table for around 12:30; if not, two Three-Person Packages would work too. Regarding food restrictions, don't worry about your dietary restrictions as you can pick what to eat.

## Context

- Current time: `2024-07-26 15:47:02`
- Domain: `cross_domain`

## Requirements / Rubrics

- Murder Mystery Game venue should provide a two-day one-night murder mystery experience
- The ordered script should be an Emotional Script
- The ordered script should have Medium Difficulty Deduction
- The ordered script should be a 6-Person Script
- The ordered murder mystery package should include male and female Styling services
- The ordered murder mystery package must include Dinner Included
- The departure station of the ordered train should be Xipu Station
- The arrival station of the ordered train should be Dujiangyan Station
- The departure time of the ordered train should be between 10:00-12:00 on August 3, 2024
- The quantity of ordered train tickets should be 4
- The ordered restaurant should be within 3000m of Dujiangyan Station
- The ordered restaurant package should include Wellness dishes and Snacks
- The ordered restaurant package should be the Three-Person Package at Dujiangyan Sichuan Cuisine Restaurant, not three individual meals
- Seats should be reserved at the ordered restaurant for 12:30:00 on August 4, 2024
- The number of people for the restaurant reservation should be six

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
