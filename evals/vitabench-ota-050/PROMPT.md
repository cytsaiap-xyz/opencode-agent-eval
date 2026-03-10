# VitaBench Task: Ota #50

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Your relatives are coming to visit for two or three days starting Thursday, and you plan to take them to a different attraction each day on Friday and Saturday, so you're looking for suitable places nearby. Considering that your relatives have a middle school child, you need to specifically arrange one day to visit a place that interests him. For the other day, let's go to Qingdao Olympic Sailing Center. Since ticket prices may differ between weekdays and weekends, you need to calculate which buying option is more economical before determining the order of visiting these two attractions. Your group includes 3 adults from your family and 4 people from your relatives' family, including a 72-year-old senior, so you need to pay attention to relevant discount policies when booking tickets. After all these are decided, you can proceed to pay for the ticket orders. Since there's not enough space for everyone at your home, you plan to book 2 twin rooms for them for Thursday and Friday nights. Your requirements for the hotel are very clear: the rating must be above 4.5, the rooms must have a sea view, and laundry service must be available - after all, clothes inevitably get dirty when traveling.

## Context

- Current time: `2026-07-13 12:28:16`
- Domain: `ota`

## Requirements / Rubrics

- Your relative's family has a middle school child, so Friday's tickets include a student ticket
- Your relative's family also has a 72-year-old senior, so Friday's tickets include a senior ticket
- Friday's tickets include adult tickets
- The group consists of 3 adults from your family and 4 people from your relative's family, including their 72-year-old senior and middle school child, so Friday's tickets include 5 adult tickets
- Friday's attraction should be one that would interest a middle school student (research shows it's the Qingdao Marine Science and Technology Museum)
- The order of visiting the two attractions must be determined based on comparing ticket prices (Qingdao Marine Science and Technology Museum: Friday: Adult Ticket ¥80, Student Ticket ¥60, Senior Ticket ¥40; Saturday: Adult Ticket ¥100, Student Ticket ¥75, Senior Ticket ¥50. Qingdao Olympic Sailing Center: Friday: Adult Ticket ¥50, Senior Ticket ¥25; Saturday: Adult Ticket ¥60, Senior Ticket ¥30); The cheapest combination is visiting the Marine Science and Technology Museum on Friday and the Olympic Sailing Center on Saturday.
- The ticket date in the Qingdao Marine Science and Technology Museum order is 2026-07-18
- Saturday's attraction has no student ticket option, so the number of adult tickets purchased is 6
- Saturday's attraction order includes a senior ticket
- The ticket date in the Qingdao Olympic Sailing Center order is 2026-07-19
- The hotel booking dates are July 17, 2026 and July 18, 2026
- The hotel order includes only twin rooms
- The hotel order includes 2 twin rooms per night
- The hotel should have a rating above 4.5
- The rooms in the hotel order should have sea views
- The hotel booked offers laundry service

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
