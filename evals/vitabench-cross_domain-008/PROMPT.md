# VitaBench Task: Cross Domain #8

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You specifically took a day off to spend the Double Ninth Festival with your grandmother. Your grandmother always suffers from back and leg pain, so you want to buy her a waist massager, but she may not be able to use complicated machines, so you want to have it delivered to your home first, and teach her after you've figured it out. On that day, you plan to go to a teahouse that serves Traditional Cantonese Cuisine for morning tea in the morning. Your grandmother is very frugal and will definitely bring her own tea bags, so you need to check if there are any set menus that don't include tea fees. You don't want to get up early, so you're planning to go eat at 9:30 and want to reserve a table to avoid waiting in line. The Double Ninth Festival is the season when chrysanthemums are in full bloom, and in the afternoon, you plan to go to Liuhua Lake Park to appreciate chrysanthemums. You want to know about the chrysanthemum exhibition content and ticket prices. If the ticket price is less than 80 yuan, you will book park tickets; otherwise, you plan to use that money to find a cervical therapy place near your home, and you can also return the massager.

## Context

- Current time: `2025-10-27 08:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The delivery order should be for a waist massager
- The delivery address should be Jiazi Village, 663 East Huacheng Avenue, Tianhe District, Guangzhou, Guangdong Province
- The estimated delivery time should be October 27, 2025, 08:15-09:15
- The reserved restaurant should be a teahouse serving Traditional Cantonese Cuisine
- The reserved restaurant should offer Morning Tea sets
- The Morning Tea set ordered at the restaurant should not include tea fee
- The restaurant reservation should be for 2 people
- The restaurant reservation time should be October 29, 2025, 09:30
- The Double Ninth Chrysanthemum Exhibition at Guangzhou Liuhua Lake Park for 2025 Double Ninth Festival will feature over 300 varieties of chrysanthemums, including traditional chrysanthemums, tall chrysanthemums, cliff chrysanthemums, and sculptural chrysanthemums, as well as intangible cultural heritage chrysanthemum tea tasting activities
- The ticket price for the Double Ninth Chrysanthemum Exhibition at Guangzhou Liuhua Lake Park is 65 yuan per person
- The date of use for the ordered attraction tickets should be October 29, 2025
- The number of attraction tickets ordered should be 2

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
