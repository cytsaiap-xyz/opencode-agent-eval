# DeepPlanning Shopping Task Level 1 #45

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm updating my wardrobe and looking for a few specific pieces. First, I'm after something for men from the brand Levi's that's fairly popular, with a monthly sales volume over 350 and more than 5 three-star ratings. I also want another item from Levi's, this time in size L and brown, that's really well-liked, with an average rating above 4.5 and monthly sales of more than 1200. For something more casual, I need 'Fleece-Lined Track Pants' from Anta in size L that have over 300 four-star reviews. Since I'm in a hurry, their transport time has to be less than 2 days. I also need some new footwear, specifically the Adidas 'Urban Explorer Running Shoes' in size 43, which must also have a transport time of less than 2 days. Finally, I'm looking for one more extremely popular product, ensuring it's in stock with a quantity over 400, has more than 4000 total reviews, and over 3500 of those are five-star reviews.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
