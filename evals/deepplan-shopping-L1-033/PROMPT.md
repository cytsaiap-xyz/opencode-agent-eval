# DeepPlanning Shopping Task Level 1 #33

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting my gear ready for an upcoming outdoor trip and need to order a few things. First, I need a women's 'Fleece Half-Zip' from Patagonia, and since I need it quickly, the transport time must be less than two days. I’m also looking for something in burgundy from the brand Vans; to make sure it's well-liked, it needs to have more than 1000 five-star ratings. For layering, I specifically need the 'Women's Rho Heavyweight Base Layer Bottoms' from Arc'teryx that have a total sales volume over 2500 and fewer than five 2-star reviews. Next, I’m searching for Salomon's 'Women's All-Terrain Performance Tights' in a size M and the color black, but only if they’re very popular, with a total sales volume greater than 8500. Lastly, I need a light grey item from Anta that has a stock quantity of more than 1200.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
