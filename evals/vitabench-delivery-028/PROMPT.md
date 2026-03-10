# VitaBench Task: Delivery #28

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You have a court hearing from 10:00 AM to 12:00 PM today, and you need to meet with an agent at 2:00 PM in the afternoon. You want to order lunch in advance. As someone with phlegm-dampness constitution, your doctor has advised you to eat light meals. You plan to order a single person meal set, specifically the best-selling one in the store, and would like to note: Please place it at the front desk of the law firm upon delivery. You also want to cancel the breakfast you just ordered, and place a new order for a box of Sticky Bean Bun to be delivered to your company. You cannot eat anything containing dairy ingredients or alcohol.

## Context

- Current time: `2025-03-17 09:13:13`
- Domain: `delivery`

## Requirements / Rubrics

- Successfully cancelled user's breakfast order at Chundejin Baozi (Garden Store), the order with order_id 40711007O01 should have a status of cancelled
- The delivery address for the Sticky Bean Bun order should be Taojie Law Office, Room 101, 396 Xiangyang Street, Jianshe South Road Subdistrict, Jingxiu District, Baoding, Hebei Province
- The estimated delivery time for the Sticky Bean Bun order should be between 2025-03-17 12:00:00 and 2025-03-17 14:00:00
- When choosing Sticky Bean Bun products, Low Sugar type should be selected
- When choosing Sticky Bean Bun products, they should not contain dairy ingredients
- The Sticky Bean Bun order should include the note: Please place it at the front desk of the law firm upon delivery
- The delivery address for the lunch set meal order should be Taojie Law Office, Room 101, 396 Xiangyang Street, Jianshe South Road Subdistrict, Jingxiu District, Baoding, Hebei Province
- The estimated delivery time for the lunch set meal order should be between 2025-03-17 12:00:00 and 2025-03-17 14:00:00
- When choosing a lunch meal set , the best-selling single person meal set in the store should be selected
- When choosing a lunch meal set, a light flavor should be selected that meets the requirements of low salt, low oil, and non-spicy diet
- The lunch set meal order should include the note: Please place it at the front desk of the law firm upon delivery

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
