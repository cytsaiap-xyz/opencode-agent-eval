# DeepPlanning Shopping Task Level 1 #2

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting all my gear ready for an upcoming outdoor trip. First, I'm looking for a very specific item: the 'Men's Atom LT Insulated Crew Neck Pullover' from Arc'teryx in Navy Blue. I'm only interested if it's highly rated, with an average score over 4.5, more than 50 four-star ratings, and fewer than 5 one-star ratings. Next, I need something from New Balance in a size 43 that has fewer than 10 one-star reviews. I also need some All Seasons pants with 'Trekking Pants' in the name, in a size XL. Since I need them quickly, the transport time must be less than 2 days, and they should have fewer than 20 three-star ratings. Lastly, I'm looking for one more men's item in size XL that is well-stocked with a quantity greater than 180 and has more than 40 four-star ratings.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
