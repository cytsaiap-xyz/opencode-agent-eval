# VitaBench Task: Instore #42

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your last silver ring crafting was successful, giving you confidence. This week, you want to find a pottery studio within 3km of your home to experience pottery making. You hope to find a fully equipped place with an average cost of no more than 150 yuan per person, and purchase a pottery package that includes materials fee and firing. After buying the package, you scheduled for the 21st at 3 PM, but suddenly remembered you promised your son to take him to a cat cafe that day. You had no choice but to reschedule the pottery package to the 22nd at 3 PM, and also need to buy an adult and child cat cafe package, preferably at a cat cafe within 3 kilometers of your home. Since you're taking your child out, you might as well have dinner outside. You want to find a restaurant with children's meals and see if they have a two-person parent-child package. Just as you were about to place the order, your husband said he doesn't need to work overtime tomorrow and can join you for dinner. He wants to eat Northwestern cuisine, so you're looking for a Northwestern restaurant, preferably one on the must-eat list, and purchase a Northwestern family package (two adults, one child).

## Context

- Current time: `2024-09-20 15:35:00`
- Domain: `instore`

## Requirements / Rubrics

- The distance from the ordered pottery studio to Room 502, Unit 3, Building 12, Jiangcheng Garden, 1288 Donghuan Avenue, Jiaojiang District, Taizhou, Zhejiang Province should be within 3km (inclusive)
- The ordered pottery studio should be fully equipped
- The ordered pottery studio product price should be less than or equal to 150 yuan
- The ordered pottery studio product should be a package that includes materials fee
- The ordered pottery studio product should be a package that includes firing
- The reserved pottery studio should be Craftsman Pottery Studio
- The pottery studio reservation time should be 2024-09-22 15:00:00
- The pottery studio reservation should be for 1 person
- The distance from the ordered cat cafe to Room 502, Unit 3, Building 12, Jiangcheng Garden, 1288 Donghuan Avenue, Jiaojiang District, Taizhou, Zhejiang Province should be within 3km (inclusive)
- The cat cafe ordered product should be a package for one adult and one child
- The ordered restaurant should be a Northwestern cuisine restaurant
- The ordered restaurant should be on the must-eat list
- The restaurant ordered product should be a parent-child package for two adults and one child

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
