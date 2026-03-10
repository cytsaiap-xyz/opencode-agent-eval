# DeepPlanning Shopping Task Level 1 #8

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting all my gear together for some upcoming spring activities and need to order a few things quickly. First, I'm looking for a popular Puma product in size M. It has to ship fast, so the transport time must be less than 2. To make sure it's in stock and well-regarded, it needs a stock quantity over 350 and more than 800 total reviews. Speaking of Puma, I also want to get the specific 'Puma Cali Dream Metallic Sneaker' in Silver. It must have a stock quantity greater than 250 and more than 1200 total reviews. For my more rugged outings, I need a best-selling item from Salomon for women, in size M and the color Black, with a total sales volume over 15,000. Lastly, I need something from Columbia for the Spring/Autumn season that also has a transport time of less than 2 and more than 50 three-star ratings.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
