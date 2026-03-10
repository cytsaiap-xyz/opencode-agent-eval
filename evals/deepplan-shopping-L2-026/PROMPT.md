# DeepPlanning Shopping Task Level 2 #26

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a complete wardrobe refresh online and have a very specific list. First, for the summer, I need a navy blue size S item for women from Uniqlo. I’m also looking for a popular pair of women's 'Chino Pants' from Ralph Lauren that has an average score above 4.5 and more than 300 in monthly sales volume. For a more formal piece, I need something from Gucci with 'Velvet' in the name, in a size S with over 150 five-star reviews. To prepare for transitional weather, I need a spring/autumn item that ships quickly, in less than 2 days. It must be well-liked, with over 100 total reviews, more than 80 five-star reviews, and fewer than 5 two-star reviews. I also need an item with 'TrailScape' in its name that has over 80 in stock, an average score above 4.5, more than 250 five-star ratings, and fewer than 15 three-star ratings. Finally, I'm looking for a yellow, size S item from Peacebird that ships in less than 3 days and has more than 750 total reviews. Find me some products where the total price is no less than 12064 and no more than 12560.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
