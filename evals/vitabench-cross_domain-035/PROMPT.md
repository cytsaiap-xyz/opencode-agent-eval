# VitaBench Task: Cross Domain #35

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You're on a day off this week, staying at a friend's house in Jinjiang. This afternoon, you want your friend to take you to an archery club for an experience. She's an archery expert, and you want to check what packages are available - specifically one without a coach, as you want to play for three hours. You don't want her to spend money, so you plan to buy the package in advance and make a reservation for around 13:00. Just now, your boyfriend messaged saying his parents are coming to see you both tonight. You think it's not good to return too late, so you want to confirm what time your previously purchased train ticket arrives in Fuzhou. If it arrives before 8:00 PM in Fuzhou, you won't need to change it; if not, you'll need to change it. If changing, it shouldn't be too early, as you need to allow time for archery with your friend. You also need to prepare some gifts for your boyfriend's parents. Check if you can have bird's nest in an elegant gift box and a bottle of Moutai delivered. The gifts should be delivered to the high-speed railway station according to your arrival time. Your boyfriend will be at the station waiting for you at 19:30, so delivery during his wait is fine. He can place the order with a note to contact him at 18382114867, so you won't have to meet his parents empty-handed.

## Context

- Current time: `2025-11-19 10:30:00`
- Domain: `cross_domain`

## Requirements / Rubrics

- The package ordered at the archery club should be without coach instruction
- The duration of the ordered product should be 3 hours
- The order at the archery club should be for a two-person package or two single-person packages
- The reserved archery club should be Jian Wu Xu Fa Archery Club (S17550807829797634_I00012)
- The reservation time for the archery club should be November 19, 2025, at 13:00
- The number of people for the archery club reservation should be 2
- The historical order ID to be queried is A0811011T005, train number D3256 arrives at 19:42, so there's no need to change the train ticket
- The food delivery order should include a bird's nest gift box
- The food delivery order should include a bottle of Moutai
- The food delivery address should be Fuzhou Station, No. 168 Lianjiang Middle Road, Jin'an District, Fuzhou City, Fujian Province
- The estimated food delivery time should be between 19:30 and 19:42 on November 19, 2025
- The food delivery order should include the note: Contact 18382114867

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
