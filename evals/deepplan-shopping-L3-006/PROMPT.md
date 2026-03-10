# DeepPlanning Shopping Task Level 3 #6

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together a new wardrobe and need to get several popular items that I know will be reliable choices. First, I'm looking for something with "Old Skool" in the name that's proven to be a bestseller - it needs to have more than 11,000 total sales and over 900 monthly sales to ensure it's a solid choice. Next, I want to find a women's product that has "Sk8-Hi" in the name and maintains excellent quality with fewer than 2 two-star reviews. Finally, I need another item with "Sk8-Hi" in the name that's both popular and well-stocked, requiring more than 900 total reviews, over 300 monthly sales, stock quantity above 100, and fewer than 50 three-star reviews to guarantee availability and customer satisfaction.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
