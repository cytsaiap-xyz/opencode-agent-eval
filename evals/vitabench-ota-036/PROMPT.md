# VitaBench Task: Ota #36

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

On the eve of Valentine's Day, your boyfriend of two years suddenly proposed breaking up. You feel heartbroken and want to go to Lijiang to clear your mind and adjust your mood. You need to arrange your outbound flight first and plan to leave either the day after tomorrow or the day after that, whichever day has cheaper tickets. You hope to see the moon from the airplane. You haven't decided exactly how long to stay yet, but you want to find a guesthouse with Naxi Ethnic Features and book it for a week first. Since you'll be staying longer, you hope the budget will be slightly lower than your previous trips. You definitely want to visit Jade Dragon Snow Mountain Scenic Area, tentatively planned for the sixth day. You remember when your best friend went there before, her package included warm clothing rental, and she looked great in the photos wearing it. You also want to book this type of package.

## Context

- Current time: `2028-02-13 21:29:13`
- Domain: `ota`

## Requirements / Rubrics

- Flight order must book a Red-eye Flight
- Need to check which flight between 2028-02-15 and 2028-02-16 has the best Price Discount, the result shows that CA1835 on February 15th at 820 yuan is the cheapest, and the flight in the order must be CA1835
- Guesthouse order must be for a guesthouse rather than a Chain Brand hotel
- Guesthouse must have Naxi Ethnic Features
- Guesthouse booking duration must be one week (7 nights)
- The dates of the guesthouse order must be 2028-02-15, 2028-02-16, 2028-02-17, 2028-02-18, 2028-02-19, 2028-02-20, 2028-02-21 respectively
- The guesthouse price per night must be lower than the user's historical hotel consumption budget, the price per night should be less than 500 yuan
- Must book tickets for Jade Dragon Snow Mountain Scenic Area
- The visiting time for Jade Dragon Snow Mountain in the ticket order must be the sixth day (i.e., 2028-02-20, the 6th day counting from the check-in date)
- The Jade Dragon Snow Mountain admission ticket must choose a package that includes warm clothing rental

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
