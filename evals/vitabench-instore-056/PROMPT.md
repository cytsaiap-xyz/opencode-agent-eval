# VitaBench Task: Instore #56

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Recently, my son has been constantly asking to try racing, so you decide to take him to an outdoor go-kart track on the weekend. You're looking for a go-kart venue with a professional track design, with a shopping area within 3km, or at least a food street would be fine, making it convenient to grab a meal afterwards. You want to purchase a Two-Person Experience Package that includes One Adult and One Child racing with safety equipment. You plan to go at 9 AM on Saturday. Just after making the reservation, you suddenly remember that you need to pick up your wife from the airport Saturday morning as she's returning from a business trip, so you have to change the karting appointment to the same time on Sunday. It's actually perfect timing to bring your wife along too - though she doesn't enjoy such activities, she can take photos of you and your son from outside the track. For lunch, you can try the Mexican restaurant your wife has been wanting to visit, ordering a Three-Person Package that must include Tacos. Since it's rare for the whole family to go out together, going straight home after lunch seems like a waste, so you decide to visit the nature exploration park closest to the restaurant in the afternoon, purchasing a Parent-Child Adventure Ticket (2 adults & 1 child). You want to make sure the park has a parking lot - free parking would be ideal, but you're willing to pay if necessary.

## Context

- Current time: `2024-10-22 15:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The go-kart track should have a professional track design
- The go-kart track should be an outdoor venue
- The go-kart track should have commercial areas or food streets nearby
- The go-kart track order should be a Two-Person Package
- The go-kart package ordered should include One Adult and One Child racing
- The go-kart track order should include safety equipment
- The go-kart track product ordered should be available on weekends
- The reserved go-kart track should be Speed Star Karting Track
- The go-kart track reservation time should be 2024-10-27 09:00:00
- You will bring your wife and child, but your wife doesn't like to participate and will take photos of you and your son from outside the track. Therefore, the go-kart track reservation should be for 2 people (you and your son)
- The restaurant ordered should be a Mexican restaurant
- The restaurant order should include Tacos
- The restaurant order should be a three-person meal package, not multiple individual meals
- The park should be closest to B1-102, Sheshan Tianjie, 1088 Linhu Road, Sheshan Town, Songjiang District, Shanghai
- The park order should be a package for two adults and one child
- The park should provide parking facilities

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
