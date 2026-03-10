# VitaBench Task: Instore #20

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You asked your mom take care of your puppy for a few days, and when you get it back, it's already turned in to a "village dog" and needs a bath right away. So you're looking for a professional pet grooming store, preferably one that offers a bath + grooming service package, with a rating of at least 4.5 and show-grade wash and care. You also want to buy some imported dog treat canned food from the same store, and you want to buy the package in advance so you can redeem them directly at the store. If the store sells imported canned dog treats, buy six cans; if not, forget it. Once you've made your purchases, schedule a instore date at 10:00 AM. By the way, you and your best friend haven't been together in a while, and you're looking for a western restaurant  that provides Beautiful Meal within 1km of the pet grooming store. You'd like to order a meal for two, arriving at 11:00 AM so you can pick up the dog together afterward. Don't forget the dietary restrictions: your best friend doesn't eat beef, and you're allergic to caffeine.

## Context

- Current time: `2024-09-14 09:15:00`
- Domain: `instore`

## Requirements / Rubrics

- The package ordered from a pet grooming store must be available for dogs
- Pet grooming store rating must be 4.5 stars or higher
- Pet grooming store order must include bath + grooming service
- Pet grooming store order must be show-grade washing and care service
- Pet grooming store order must include imported dog treat canned food
- Pet grooming store order must include 6 cans of dog food
- Pet grooming appointment time must be 10:00 AM
- The reserved pet grooming business should be Noble Pet SPA Club
- The western restaurant must be located within 1km of the pet grooming store (Noble Pet SPA Club, 1st Floor, Zhengshang Bozuan Commercial Plaza, Intersection of Tanggong West Road and Kaixuan East Road, Xigong District, Luoyang)
- The western restaurant order must be a set meal for two, not two individual meals
- The western restaurant set meal for two must not contain beef (friend's dietary restriction)
- The western restaurant set meal for two must not contain caffeine (user is allergic), choosing a set meal labeled as caffeine-free
- The western restaurant order must be a Beautiful Meal
- Western restaurant reservation time must be 11:00 AM
- Western restaurant reservation must be for 2 people
- The reserved western restaurant should be Milano Western Restaurant

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
