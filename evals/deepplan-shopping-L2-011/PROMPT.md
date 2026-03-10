# DeepPlanning Shopping Task Level 2 #11

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big online shopping haul and need everything to arrive fast. First, I'm looking for a purple item that has fewer than 20 three-star reviews and can be delivered in less than 5 days. I also need a really popular product that has a monthly sales volume over 1200, more than 2000 total reviews, and a transport time of less than 5 days. For something I need urgently, I'm looking for an item from Zara with a transport time of less than 2 days. It must be highly rated, with an average score over 4.5, more than 200 five-star reviews, and over 80 four-star reviews. On a more specific note, I'm searching for a yellow item in size 40 from the brand Anta. It has to contain 'Lite-Run' in its name, have a total sales volume of more than 8900, and fewer than 15 one-star reviews. Next, I need some wine red 'Wide-Leg Trousers' for women that can also ship in under 5 days, with fewer than 70 three-star and 40 two-star reviews. Finally, I'm looking for a popular winter item from Timberland with a total sales volume over 2000. It needs to arrive in less than 2 days and have fewer than 10 two-star ratings. I'd like to keep my total spending between 2467 and 2595. Please help me find the products that meet my requirements.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
