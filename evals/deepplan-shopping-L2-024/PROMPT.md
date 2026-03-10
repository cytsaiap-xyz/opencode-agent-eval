# DeepPlanning Shopping Task Level 2 #24

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting some new clothes for an upcoming winter trip and need everything to arrive quickly. First, I'm looking for a popular brown item with 'Canvas' in its name that has a monthly sales volume of over 1200 and a transport time of less than 5 days. Next, I need something for men from the brand Vans that can get here in under 2 days; I’m picky, so it must have fewer than 15 two-star reviews and less than 40 three-star reviews. For a nicer outfit, I'm searching for a Gucci product with 'Polo Top' in the name, an average score above 4.5, and fewer than 10 three-star reviews. I also need a navy blue item with an average rating over 4.5 stars and more than 200 total reviews. Finally, I'm looking for a men's winter product in size 43 with a monthly sales volume over 100 and a transport time of less than 2 days. Find me some products where the total price is no less than 6962 and no more than 7608.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
