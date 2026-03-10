# DeepPlanning Shopping Task Level 2 #21

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm refreshing my wardrobe and have a few specific items I need to buy. First, I'm searching for a 'Women's Dri-FIT Long-Sleeve Training Top' from Nike. It must be Beige, have an average rating score greater than 4.5, and a stock quantity of more than 800. Next, I need a very popular item delivered quickly, so it must have a transport time of less than 2 days, a total sales volume over 5500, more than 500 five-star ratings, and fewer than 10 two-star ratings. I’m also looking for an Orange item from Zara that has a lot of feedback—specifically, more than 1300 total reviews and over 50 three-star reviews. Finally, I'm looking for something for women from the brand Salomon in Wine Red. It needs to be well-rated with an average score greater than 4.5 and have more than 80 in stock. My budget is between 2458 and 2529.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
