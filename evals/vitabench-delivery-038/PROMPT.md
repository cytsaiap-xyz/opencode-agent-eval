# VitaBench Task: Delivery #38

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You want to order a Tastin half chicken meal set that your child likes to your workplace, so that you can surprise him directly when you pick him up at 6:30. Besides that, you also want to order two cups of herbal tea Guilinggao that you and your wife often drink and have them delivered to your home, with the usual flavors.

## Context

- Current time: `2025-05-23 16:49:03`
- Domain: `delivery`

## Requirements / Rubrics

- The delivery address for the half chicken set meal order should be International Department, South Campus of Linyi No.1 Middle School, No.135 Lingong Road, Zhimadun Street, Hedong District, Linyi City, Shandong Province
- The estimated delivery time for the half chicken set meal order should be before 2025-05-23 18:30:00
- The restaurant for ordering the half chicken set meal should be Tastin' Chinese Burger (Dongfang City Branch)
- The delivery address for the herbal tea Guilinggao order should be No.28 Boutique Apartment, 200 Meters West of People's Square, Intersection of Yinqueshan Road and Xinhua Road, Lanshan District, Linyi City, Shandong Province (Linyi People's Square Branch)
- The restaurant for ordering the herbal tea Guilinggao should be Yu Bao Tang
- The herbal tea Guilinggao ordered should include honey as an ingredient

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
