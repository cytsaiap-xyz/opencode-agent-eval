# DeepPlanning Shopping Task Level 2 #28

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm refreshing my wardrobe for the changing seasons and need everything to arrive quickly. First, I'm looking for a pullover suitable for Spring/Autumn. It needs to be a well-reviewed item with more than 600 total reviews and fewer than 40 three-star reviews, and importantly, the transport time must be less than 2 days. Next, I need a women's item with long sleeves from the brand Salomon. It has to be a bestseller, with a total sales volume over 3100 and fewer than 15 three-star reviews, also with a transport time of less than 2 days. For the summer, I'm looking for a black product from Under Armour with a stock quantity of more than 200. Finally, I need a size XXL item from Arc'teryx that has more than 50 four-star reviews and can also be delivered in less than 2 days. My budget is between 1935 and 1977.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
