# VitaBench Task: Cross Domain #68

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Two days after the winter solstice, you will accompany your grandmother for her 90th Birthday Celebration. In the morning, you plan to find a Traditional Time-honored Brand restaurant specializing in Huaiyang Cuisine, as your grandmother really wants to taste authentic Crab Roe Lion's Head Meatballs. You have already prepared an exquisite Purple Clay Tea Set for your grandmother, and now you want to order a suitable Tea Pet Ornament that complements the tea set and carries the meaning of Prolonging Life and Health, to be delivered to your home. The restaurant's Set Menu should include Longevity Noodles, and you also want to reserve a Comfortable Spacious Private Room in advance, arriving at 11 AM, with enough space for 8 people. In the afternoon, you plan to visit the Botanical Garden to walk and appreciate flowers, as your grandmother loves plants and flowers. You want to know the Botanical Garden's ticket prices and Senior Discount policies. If the Botanical Garden stays open after 5 PM, you would like to book tickets for yourself and your grandmother; otherwise, you'll skip it.

## Context

- Current time: `2025-12-20 09:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The restaurant ordered from must offer traditional Huaiyang Cuisine
- The restaurant ordered from must be a Time-honored Brand
- The restaurant's set menu must include Crab Roe Lion's Head Meatballs
- The restaurant's set menu must include Longevity Noodles
- The restaurant should have Private Rooms
- The merchant to be reserved should be Huaiyang Fu
- Need to check the specific date of Winter Solstice, with the result being December 21, 2025, and the order reservation date should be December 23, 2025
- The number of diners for the reservation should be 8
- The reservation time should be 11:00 AM
- The product to be ordered should be a Tea Pet Ornament
- The ordered product must match with Purple Clay Tea Set, therefore a Purple Clay Material Tea Pet must be chosen
- The ordered Tea Pet must have meanings of Prolonging Life and Health
- The Tea Pet order should be delivered to Room 502, Building 3, Zhongxing Mingyuan, 328 Didang Lake Road, Yuecheng District, Shaoxing, Zhejiang Province
- Need to inquire and provide information about the Botanical Garden ticket prices and senior discount policy; the result shows that Shaoxing Botanical Garden Adult Ticket is 30 yuan, Senior Ticket is 15 yuan, 50% cheaper than Adult Ticket
- Need to return the Botanical Garden opening hours; opening hours are 08:30-17:00, not later than 17:00, no need to book tickets in advance

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
