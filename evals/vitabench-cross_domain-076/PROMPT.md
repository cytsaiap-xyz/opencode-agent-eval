# VitaBench Task: Cross Domain #76

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your bonus for publishing in a C-tier journal has arrived, and you plan to use 1,200 yuan of it to share your joy with your research group. Tomorrow, you want to treat everyone to a session at a murder mystery game venue. You're looking for a seven-player campus-backgrounded package since there are five men and two women in the group—if necessary, the male students can play female roles. Since this is your first time playing murder mystery game, you'd like to know how long it typically takes. Your group meeting starts at 5:30 PM tomorrow afternoon, so the game must finish early enough for you all to have half an hour left to return to school; make sure the timing works when booking. You also want to gift your advisor a gold nib fountain pen as thanks for his guidance on your paper. Last time you gave him a Parker pen that broke within less than a year. If delivery cannot be made within an hour today, schedule it instead for 2:00 PM tomorrow directly at the murder mystery game venue. Also, next Monday your advisor will attend an academic conference in Beijing and asked you to book his flight ticket. Check business class prices; if they're under 1,800 yuan now, go ahead and purchase one immediately.

## Context

- Current time: `2025-07-04 10:15:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The in-store merchant should be a murder mystery game venue
- The ordered product from the in-store merchant must be a murder mystery game with campus background
- The ordered product from the in-store merchant must be a 7-player script
- The ordered package from the in-store merchant must have at least two female character roles
- The ordered product from the in-store merchant should be 7 portions
- The murder mystery game activity must end before 17:00, and the ordered product duration is 2.5 hours, so the in-store merchant reservation time should be earlier than 14:30 on July 5, 2025
- The number of people for the in-store merchant reservation is 7
- Need to provide the duration information of the murder mystery game in the order, the duration of "Youth Mystery" is 2.5 hours
- The ordered product in the delivery order should be a gold nib fountain pen
- The ordered product in the delivery order cannot be Parker brand
- The estimated delivery time for the ordered product in the delivery order is before 11:15 AM on July 4, 2025
- The delivery address for the ordered product in the delivery order is Room 302, Building 5, East Garden Community, Huazhong University of Science and Technology, 1037 Luoyu Road, Hongshan District, Wuhan, Hubei Province
- The ordered flight ticket should be for a flight from Wuhan to Beijing
- The departure date of the ordered flight ticket should be July 7, 2025
- The ordered flight ticket should be business class
- The price of the ordered flight ticket should be less than 1800 yuan
- The total budget for in-store merchant order and delivery order must not exceed 1200 yuan

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
