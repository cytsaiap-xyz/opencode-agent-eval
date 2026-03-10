# DeepPlanning Shopping Task Level 2 #15

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big wardrobe refresh and need to order several pieces. First, I have to get the Men's Classic Pima Cotton Polo Shirt from Ralph Lauren in Green. Since I need it fast, the transport time must be less than 2, and I want a popular one with more than 1800 total reviews. Next, I'm looking for a 'Men's Vintage Crew Neck Sweatshirt' in a Wine Red color and size L. For this one, I want a high average score of over 4.5 and fewer than 10 two-star reviews. I also need a popular men's item from The North Face with a monthly sales volume of more than 100. For the warmer weather, I'm searching for a summer product from Uniqlo that's extremely well-liked, with over 32000 total reviews and under 60 one-star reviews. From Uniqlo as well, I need another very popular men's item in size L that has a monthly sales volume over 1500 and fewer than 15 one-star reviews. Lastly, I'm looking for some pants from Patagonia with 'Traverse Pants' in the name, specifically in size L, a Gold color, and with more than 5 three-star reviews. Find me some products where the total price is no less than 3953 and no more than 3985.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
