# VitaBench Task: Ota #63

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

You need to report to the Shanghai headquarters at BFC Bund Financial Center next Wednesday. You plan to check if there are train tickets available from Nanjing Railway Station to Shanghai that day, while also considering whether flights would be suitable. Additionally, you need to check the weather conditions in Shanghai to prepare for your trip. Since you have an early meeting that day, you need to choose a mode of transportation that gets you to the company earlier (taking the train would require 30 minutes total from station to company by taxi, while flying would take 80 minutes). The company will reimburse you, so you can buy the best tickets available. You should make the payment immediately to secure your tickets. Your work is expected to finish on Friday morning, and you'd like to see what attractions you enjoy most within 5km of the headquarters for visiting in the afternoon. You also want to know if these attractions offer Guided Tour Service, as you plan to purchase both admission tickets and tour services in advance.

## Context

- Current time: `2024-10-15 13:22:31`
- Domain: `ota`

## Requirements / Rubrics

- Check train tickets and flight information from Nanjing Station to Shanghai for next Wednesday, choose the travel option that allows earlier arrival at the office; Train G7003 arrives the earliest, arriving at 09:02, plus 30 minutes from the station to the office, finally arriving at 09:32; Flight MU2882 arrives at 08:20, plus 80 minutes from the airport to the office, finally arriving at 09:40. Therefore, choose to take the G7003 train
- The date of the purchased train ticket is October 23, 2024
- The purchased train ticket is for a train from Nanjing to Shanghai
- The purchased train ticket is a Business Class Seat
- The ordered attraction must be of the user's favorite type (exhibition hall/museum/art gallery)
- The ordered attraction is within 5km (inclusive) of the Bund Financial Center
- The attraction order includes an adult ticket
- The attraction order includes guided tour service
- The scheduled time for the attraction ticket is October 25, 2024

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
