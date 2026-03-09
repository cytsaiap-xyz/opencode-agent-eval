# DeepPlanning Shopping Task Level 1 #19

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a major wardrobe overhaul online and have a very specific list. First, I need a popular silver item for men from Nike that has a total sales volume of over 18,000. Next, for the transitional seasons, I'm looking for a navy blue product for spring/autumn from Under Armour, and it must have fewer than 20 one-star reviews. To go with that, I need some grey 'Casual Trousers' that are well-liked, with a sales volume over 11,000, more than 1,800 five-star ratings, and fewer than 15 one-star and 20 two-star ratings. I also need a highly-rated product from Uniqlo that can ship quickly, with a transport time of less than 2 days, an average score above 4.5, and more than 6,800 five-star reviews. Lastly, I'm searching for a pair of brown 'Suede Winter Ankle Boots' from Zara, which also must have a transport time of less than 2 days.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
