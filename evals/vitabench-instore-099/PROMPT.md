# VitaBench Task: Instore #99

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your kids are back with their dad at their grandparents', and you're planning a perfect weekend. You're hoping to find a Japanese restaurant with a pleasant enviroment, which must provide Tatami and Kimono experience. You plan to order a Kaiseki Cuisine Packcage for single person, with a reservation for Saturday at 12:00 PM. Afterward, you're looking for a pottery workshop, but you only want to buy a package that includes Intangible Heritage Experience and costs no more than 100 yuan. If there isn't a suitable one, you'll head to your regular foot therapy center for buying a Foot Therapy Relaxation Package. On Sunday, you plan to find a new yoga studio to experience a Pilates Private Lesson. You must find one that offers New Customer Discount package as you need to control your spending, and you'll buy one once you find something suitable.

## Context

- Current time: `2026-04-09 15:35:07`
- Domain: `instore`

## Requirements / Rubrics

- Japanese restaurant orders should have a pleasant environment
- Japanese restaurant orders should include Tatami
- Japanese restaurant orders should include Kimono experience
- Japanese restaurant orders must be Kaiseki Cuisine
- Japanese restaurant orders must be for a single person
- The reserved Japanese restaurant should be Cherry Blossom Japanese Cuisine
- The Japanese restaurant reservation time is 2026-04-11 12:00:00
- The number of people in the Japanese restaurant reservation is 1
- Pottery workshop orders must be intangible heritage experience packages
- Pottery workshop orders must be for single person packages
- The price of pottery workshop order should be less than or equal to 100 yuan
- Based on user historic orders and behavior, the yoga studio selected should not be Zen Yoga Lifestyle Center or Zen Joy Yoga Studio
- The items ordered at the yoga studio should be Pilates courses
- The items ordered at the yoga studio should be private lessons
- The items ordered at the yoga studio should be new customer discounts
- Since a suitable pottery workshop can be found, there should not be orders from foot therapy centers

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
