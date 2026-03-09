# VitaBench Task: Ota #95

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You‘re planning a 5-day, 4-night solo trip to Qiandongnan starting on the 7th of next month. On August 7th, you plan to arrive in Guiyang and take some time to rest and adjust after traveling. On August 8th, your itinerary includes visiting  Xijiang Thousand Households Miao Village. The following day, August 9th, you'll head over to Zhaoxing Dong Village. For August 10th, choose one of your favorite types of attractions. Don't make any plans for August 11th. Once you've decided on the specific attractions you want to visit, buy your tickets in time. For accommodation during this trip: stay inside Xijiang Thousand Households Miao Village for two nights; then find traditional Dong-style guesthouse located in  Zhaoxing Dong Village with drum towers views and wind-and-rain bridge view for your last two nights—this will allow you an authentic experience while fully integrating into local life. Keep total lodging costs under 2000 yuan across all four nights. Regarding transportation, it seems there are no direct flights or trains to Qiandongnan, so you'll first book a flight to Guiyang. Since you have no plans on the 7th, you don't need to book a morning departure, but the arrival time shouldn't be too late either as you'll need time to travel from there to Qiandongnan.

## Context

- Current time: `2027-04-25 12:29:33`
- Domain: `ota`

## Requirements / Rubrics

- The ticket date for Xijiang Thousand Households Miao Village order is May 8, 2027
- The ticket type for Xijiang Thousand Households Miao Village order is adult ticket
- The ticket date for Zhaoxing Dong Village order is May 9, 2027
- The ticket type for Zhaoxing Dong Village order is adult ticket
- The attractions ordered should be the type of attractions the user frequently visits (according to user profile, it's museums)
- The ticket date for the museum order is May 10, 2027
- The ticket type for the museum order is adult ticket
- The return flight is from Ho Chi Minh City to Shanghai
- The first two nights of accommodation should be in Xijiang Thousand Households Miao Village
- The dates for the first two nights of accommodation are May 7, 2027 and May 8, 2027
- The room type for the first two nights should be king room
- The last two nights' accommodation should be traditional Dong guesthouse
- The last two nights' accommodation should have Drum Tower views
- The last two nights' accommodation should have Wind and Rain Bridge views
- The dates for the last two nights' accommodation are May 9, 2027 and May 10, 2027
- The room type for the last two nights should be king room
- The total price for all four nights of accommodation should not exceed 2000 yuan
- The departure flight booked is from Tianjin to Guiyang
- The departure flight booked should not depart in the morning
- The departure flight booked should not arrive too late
- The departure flight departure date is May 7, 2027

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
