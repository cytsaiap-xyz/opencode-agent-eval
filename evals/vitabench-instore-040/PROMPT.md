# VitaBench Task: Instore #40

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You have an important client meeting this afternoon, and after smelling secondhand smoke all morning, you feel your hair stinks. You plan to find a hair salon near your company during your lunch break. The salon needs to be within 500 meters and must have high ratings. You want to purchase a package that includes essential oil treatment and styling, and you want to schedule an appointment for 12:10 PM. The essential oil brand must be either Kérastase or Schwarzkopf, no other generic brands, and it shouldn't cost more than 200 yuan. Recently you've been feeling a bit heaty, so you don't want to order takeout. Instead, you want to find a dine-in restaurant within 1 kilometer of your company and get a single-person set meal. You can't eat foods high in purine, and you don't want anything spicy. Also, you haven't bought fruits to serve your client in the afternoon. You need to check fruit stores near your company for cut fruit packages containing at least 5 types of fruits. If suitable, you'll buy one, but your budget is only 100 yuan as anything more won't be reimbursed by the company.

## Context

- Current time: `2025-05-08 11:45:00`
- Domain: `instore`

## Requirements / Rubrics

- The hair salon should be within 500 meters of Room 801, 8th Floor, Shaoxing Chamber of Commerce Building, 365 Victory East Road, Yuecheng District, Shaoxing, Zhejiang Province
- The hair salon's rating should be 4.0 or above
- The ordered service at the hair salon should include Essential Oil Treatment
- The ordered service at the hair salon should include Styling service
- The essential oil brand used in the Essential Oil Treatment service must be Kérastase or Schwarzkopf
- The price of the ordered service at the hair salon should be 200 yuan or less
- The ordered service at the hair salon should be available for use on May 8, 2025, at 12:10
- The appointment time at the hair salon should be May 8, 2025, at 12:10
- The appointment at the hair salon should be for 1 person
- The appointed hair salon should be Hair Story
- The dine-in restaurant should be within 1 kilometer of Room 801, 8th Floor, Shaoxing Chamber of Commerce Building, 365 Victory East Road, Yuecheng District, Shaoxing, Zhejiang Province
- The ordered food at the restaurant should be a single person meal
- The ordered food at the restaurant should not contain high purine ingredients
- The ordered food at the restaurant should not be spicy
- The fruit store should be within 500 meters of Room 801, 8th Floor, Shaoxing Chamber of Commerce Building, 365 Victory East Road, Yuecheng District, Shaoxing, Zhejiang Province
- The ordered items from the fruit store should include at least 5 types of fruits
- The price of the ordered items from the fruit store should not exceed 100 yuan

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
