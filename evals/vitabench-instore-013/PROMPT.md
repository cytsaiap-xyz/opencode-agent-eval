# VitaBench Task: Instore #13

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your mom wants to get in shape recently, and you plan to find a yoga studio near home for her to learn yoga. You hope to find a place with an elegant environment, professional teachers, and where classes are available on weekdays. For the first trial class, both of you will go together. She's more suitable for beginner-level classes, and you need to buy two single-session packages that include basic pose instruction. By the way, the yoga studio you tried before wasn't very good, so it can't be that one. Preferably a newly Opened in 2023 place with fewer people. You also need to prepare yoga clothes for your mom, so schedule the first class for this Friday. You get off work at 6:00, so arriving at the studio at 7:30 should be appropriate. Oh, and your friend is planning to try the 'evil practice weight loss method' and has already invited you to sing at KTV to lose weight. You want to buy a Singing-only package (3 hours without drinks) at a KTV near your home first, and then go together with your friend when they come over on the weekend.

## Context

- Current time: `2025-07-10 18:15:00`
- Domain: `instore`

## Requirements / Rubrics

- The ordered yoga studio cannot be Taiyuan Yushe Yoga Club
- The ordered yoga studio must be within 3km (including 3km) of the user's home
- The ordered yoga studio must have an elegant environment
- The ordered yoga studio must have professional teachers
- The ordered yoga studio must have classes scheduled on weekdays (Monday to Friday)
- The ordered yoga studio must be recently opened
- The purchased yoga package must be suitable for beginners
- The purchased yoga package must include basic pose instruction
- The quantity of yoga packages purchased must be 2
- The booked merchant should be Qingya Yoga Life Studio
- The number of people in the yoga studio reservation should be 2 people
- The time in the yoga studio reservation should be 19:30:00 on 2025-07-11
- The ordered KTV must be within 3km of the user's home
- The ordered KTV package should be a singing-only package
- The usage duration of the ordered KTV package should be 3 hours

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
