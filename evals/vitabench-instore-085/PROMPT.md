# VitaBench Task: Instore #85

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You and your friends haven't gotten together for a long time, and the four of you have agreed to find a place to relax tomorrow night. You want to go to a restaurant & bar, preferably one with a live singer to enhance the atmosphere. Then you plan to order a set meal for 4 people at the restaurant, and the package should ideally include craft beer; if not, you'll buy a separate 4-person beer package. Since you're going out, you can't just eat and drink - after dinner, you plan to go sing karaoke. You intend to find a chain KTV with a rating of 4.5 or higher within 2 kilometers of the restaurant, purchase a 3-hour karaoke package, and make a reservation to arrive at 8 PM.

## Context

- Current time: `2023-09-07 19:45:00`
- Domain: `instore`

## Requirements / Rubrics

- The restaurant & bar should have a live singer
- When querying and ordering packages at the restaurant & bar, the results should include a four-person meal with craft beer, so the restaurant & bar order should only have one four-person meal
- The restaurant & bar package should include food and craft beer
- The KTV should be within 2km (inclusive) from Drunk Note Restaurant & Bar, 3rd Floor, Wanda Plaza, 1380 Lijiang Road, Honggutan New District, Nanchang, Jiangxi Province
- The KTV should have a rating of 4.5 or above
- The KTV should be a chain brand
- The KTV order should be for a karaoke package
- The KTV order should be for a 3-hour session
- The KTV reservation time should be September 8, 2023, at 20:00:00
- The KTV reservation should be for 4 people
- The reserved KTV venue should be Star Gathering KTV (Wanda Plaza Branch)

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
