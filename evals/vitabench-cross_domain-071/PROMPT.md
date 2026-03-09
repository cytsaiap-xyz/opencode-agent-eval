# VitaBench Task: Cross Domain #71

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your new home is finally renovated, and you want to celebrate tonight with some mildly spicy barbecue skewers. You plan to order 20 skewers in total, including two types of vegetables and two types of meat (you only eat beef). Food elivery to my home around 9:00 PM is fine. Tomorrow, you're planning to visit a high-end SPA with professional therapists and a comfortable environment. You're looking for a deep relaxation package that includes full-body massage and facial care. As for your annual travel, which you've delayed due to the renovation this year—you're thinking about going on holiday in Sanya. Since March-April is considered off-season there, you'd like to check flight prices between March 1st and March 7th. If round-trip tickets are under 1,500 yuan per person, you'll book two tickets so you can enjoy a four-day-three-night trip with your son. Oh, since you want to avoid puffiness for tomorrow's facial care, so you'd like to have your late-night snack earlier. The delivery time needs to be two hours earlier, so you need to quickly modify the order information.

## Context

- Current time: `2025-02-18 17:32:05`
- Domain: `cross_domain`

## Requirements / Rubrics

- The delivery order should be BBQ
- The BBQ order needs to include 20 skewers in total
- The BBQ order must include 2 types of vegetables
- The BBQ order must include 2 types of meat
- The meat BBQ must only include different types of beef
- The BBQ delivery address must be Room 502, Building 3, City Garden Community, 28 Gongnong Road, Chongchuan District, Nantong, Jiangsu Province (user's residence)
- The BBQ order flavor should be mildly spicy
- The BBQ should comply with the user's dietary restrictions, not ordering BBQ options or side dishes containing alcohol or high purine (offal/seafood soup)
- There should be 2 orders from Lao Ma BBQ, one of which should have the status of paid
- The paid delivery order must be delivered between 6:00 PM and 7:00 PM on February 18, 2025
- There should be 2 orders from Lao Ma BBQ, one of which should have the status of cancelled
- The SPA club should offer massage and foot therapy services
- The SPA club must have professional therapists
- The SPA club should have a comfortable environment
- The ordered SPA package must include full body massage
- The ordered SPA package must include facial care
- The SPA package ordered must be suitable for deep relaxation
- Departure and return dates must be 3 days apart (e.g., March 1 departure, March 4 return)
- The total price for all round-trip tickets should be less than 3000 yuan
- The departure flight should be on or after March 1
- The departure order's ticket quantity should be 2
- The return flight ticket should be on or before March 7
- The return order's ticket quantity should be 2

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
