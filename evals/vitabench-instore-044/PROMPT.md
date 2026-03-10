# VitaBench Task: Instore #44

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Tired of the gym routine, you want to try a different sport to enhance your physical abilities, so you found a rock climbing gym and already purchased a training package. You plan to go on Saturday, but then realize it's not ideal to leave your child home alone, so you decide to bring them along for rock climbing. You need to cancel your previous order and purchase a new parent-child rock climbing package (1 adult, 1 child) at this gym, then make a reservation for this Saturday at 4:30 PM. After rock climbing, you definitely won't have the energy to cook, so you plan to find a restaurant within 1 kilometer of the climbing gym to grab something to eat - a meal for two with light dishes, as your child cannot eat spicy food, and Cantonese cuisine would be even better. You also want to check if there's a sports rehabilitation center within 1 kilometer of your home, as you're concerned about muscle soreness after climbing and want to relax your muscles. You hope that the technicians at this center are certified in sports rehabilitation like the trainers at your regular gym. Since your child is still young, you won't bring them along and will just purchase a package for one person.

## Context

- Current time: `2025-11-13 15:29:25`
- Domain: `instore`

## Requirements / Rubrics

- The status of the adult rock climbing single experience package order should be cancelled
- The product ordered at the climbing gym should be Parent-child rock climbing package (1 adult, 1 child)
- The merchant for the climbing gym order should be Extreme Rock Climbing Gym
- The reservation time for the climbing gym is November 15, 2025, at 16:30
- The number of people for the climbing gym reservation should be 2
- The reserved merchant for the climbing gym should be Extreme Rock Climbing Gym
- The Cantonese restaurant should not be more than 1km (including 1km) from Extreme Rock Climbing Gym, 85 Lianqian West Road, Siming District, Xiamen
- The ordered food from the Cantonese restaurant should be Light diet
- The ordered item from the Cantonese restaurant should be Package for two
- The technician at the sports rehabilitation center should have a sports rehabilitation therapist certificate
- The sports rehabilitation center should not be more than 1km (including 1km) from Room 504, Building 3, Lotus Apartment, 189 Lianqian East Road, Siming District, Xiamen
- The ordered item from the sports rehabilitation center should be Sports rehabilitation package for one

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
