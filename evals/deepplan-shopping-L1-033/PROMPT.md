# DeepPlanning Shopping Task Level 1 #33

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting my gear ready for an upcoming outdoor trip and need to order a few things. First, I need a women's 'Fleece Half-Zip' from Patagonia, and since I need it quickly, the transport time must be less than two days. I’m also looking for something in burgundy from the brand Vans; to make sure it's well-liked, it needs to have more than 1000 five-star ratings. For layering, I specifically need the 'Women's Rho Heavyweight Base Layer Bottoms' from Arc'teryx that have a total sales volume over 2500 and fewer than five 2-star reviews. Next, I’m searching for Salomon's 'Women's All-Terrain Performance Tights' in a size M and the color black, but only if they’re very popular, with a total sales volume greater than 8500. Lastly, I need a light grey item from Anta that has a stock quantity of more than 1200.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
