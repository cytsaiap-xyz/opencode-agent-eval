# DeepPlanning Shopping Task Level 3 #2

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together a complete summer wardrobe upgrade and need to get several key pieces. First, I'm looking for a Ralph Lauren item with "Classic-Fit Pima Cotton Polo" in the name that's proven popular with monthly sales over 800. Next, I need some Converse footwear in size 38 that's well-reviewed, specifically with more than 4250 total reviews and over 200 four-star ratings to ensure quality. Then I want to add a summer-appropriate piece in size XL that's selling well with monthly sales exceeding 140. Finally, I'm searching for an Under Armour product that's both popular and highly rated - it needs monthly sales over 300, more than 700 five-star reviews, and total sales exceeding 4000 to make sure it's a proven winner. This combination should give me a solid foundation for my summer style refresh.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
