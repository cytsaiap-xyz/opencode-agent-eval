# DeepPlanning Shopping Task Level 1 #35

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a major wardrobe refresh for the upcoming year and need a few specific things. First, for an event happening soon, I need an item from Gucci in Brown, size 43. Since it's urgent, the transport time must be less than 2 days, and it needs to have more than 5 four-star reviews. Next, getting ready for the cold, I'm looking for some 'Winter Boots' from Peacebird in the color Khaki, with more than 100 total reviews. For the milder Spring and Autumn seasons, I want a popular product from Adidas with an average score over 4.5, a monthly sales volume of more than 1000, and fewer than 20 one-star reviews. Lastly, I need another popular item in Navy Blue with a monthly sales volume over 800 and more than 90 four-star reviews; this one also needs a transport time of less than 2 days.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
