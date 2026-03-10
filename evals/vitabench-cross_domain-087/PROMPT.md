# VitaBench Task: Cross Domain #87

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You recently published a successful paper, and your child is being taken to grandpa's house by your husband. Now you want to reward yourself for all your hard work. Today at noon, you want to order a celebratory delivery meal to your office, preferably delivered before 12:00. You want to eat Chicken with Pig Stomach, but you don't eat scallions. You want to choose a restaurant that offers dine-in service, with prices not less than 50 yuan to avoid disappointment. After work tonight, you plan to experience urban nightlife at a bar, looking for a High-end Bar with Live Music and Exquisite Cocktail. You suddenly remember that the Dragon Boat Festival might be coming up soon, and your friend in Yuxi has been inviting you to visit. Check if there are suitable High-Speed Train tickets available the day before the Dragon Boat Festival. If not, look for options two days before. You want to take the shortest duration train and need a Business Class Seat. Oh, and don't forget to check if the bar has any suitable Solo Drinking Set that preferably includes Appetizer Pairing. If available, book a Sofa Booth for 8 PM, and you'll purchase the set menu when you get there.

## Context

- Current time: `2025-05-19 10:34:25`
- Domain: `cross_domain`

## Requirements / Rubrics

- The merchant in the food delivery order must offer dine-in service
- The food delivery order must be for Chicken with Pig Stomach
- The food delivery items must not contain scallions
- The price of items in the food delivery order must be 50 yuan or more
- The delivery address for the food order must be Building 12, 3rd Floor, Zone C, Nanning Software Park, No.15 Innovation Road, High-tech Zone, Xixiangtang District, Nanning, Guangxi Zhuang Autonomous Region
- The delivery time for the food order should be before 12:00 on May 19, 2025
- The train ticket must be for the shortest journey time, and the train should be G1256
- If no suitable High-Speed Train tickets are available the day before Dragon Boat Festival (2025-05-30), then the train ticket purchase date should be May 29, 2025
- The train ticket should be for Business Class Seat
- The reserved bar must provide Live Music performance
- The reserved bar must offer Exquisite Cocktail
- The reserved bar must offer Solo Drinking Set
- The bar's Solo Drinking Set should include Appetizers
- The bar reservation time should be 20:00 on May 19, 2025
- The bar reservation should be for 1 person

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
