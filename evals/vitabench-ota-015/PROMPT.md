# VitaBench Task: Ota #15

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

Your boss has assigned you to visit the subsidiary in Luohe next week to oversee project progress. You plan to depart the day after Qixi Festival, stay for two nights, and then return. Now you need to check the round-trip train tickets. The departure time doesn't matter much, so choose any convenient option for the outbound trip. For your return journey, book an afternoon train ticket. Since expenses are reimbursable by the company, opt for business class seats both ways. Regarding accommodation: You'd like to book a hotel within 3 kilometers of Xinmart Shopping Plaza so that you can explore the mall during your free evenings. Ensure that two nights' lodging falls within the reimbursable limit of 1,000 yuan or less. While in Luohe, check if there are any attractions similar to those you usually enjoy visiting; if so, purchase tickets in advance for a visit on your last morning before returning home. If no such places match your preferences, plan instead to spend some leisure time at Cricket Tribe. You probably won't have much to do on the morning of your return day, so you'll choose the attraction tickets for that day.

## Context

- Current time: `2024-08-09 14:30:00`
- Domain: `ota`

## Requirements / Rubrics

- The outbound train is from Qingdao to Luohe
- Planning to depart the day after Qixi Festival, which falls on August 10, 2024, so the outbound train ticket date should be August 11, 2024
- The outbound train ticket is for a Business class seat
- The return train is from Luohe to Qingdao
- Planning to depart the day after Qixi Festival, which falls on August 10, 2024, so the outbound date should be August 11, 2024, staying for two nights and returning on August 13, 2024
- The return train ticket is for a Business class seat
- The departure time for the return train is in the afternoon of that day
- Planning to depart the day after Qixi Festival, which falls on August 10, 2024, staying for two nights, so the hotel booking dates should be August 11, 2024 and August 12, 2024
- The booked hotel should be within 3km of Xinmart Shopping Plaza
- The total price for the two nights at the hotel should not exceed 1000 yuan
- Checking whether Luohe has historical sites, exhibition halls (museums/art galleries), natural landscapes (mountains/lakes/forests), or hot spring scenic areas (Luohe Museum matches the user's preferences), and the purchased ticket is for Luohe Museum
- Planning to depart the day after Qixi Festival, which falls on August 10, 2024, staying for two nights, so the return date is August 13, 2024, and the attraction ticket is booked for August 13, 2024
- The purchased ticket is an adult ticket

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
