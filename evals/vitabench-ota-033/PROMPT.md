# VitaBench Task: Ota #33

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your commission for that big order last month has been credited. You're planning to take your girlfriend to Dehong for a 5-day, 4-night trip starting next Friday. The flight tickets have already been purchased, now you need to select hotels. You plan to stay in Mangshi for the first two nights, and in Tengchong for the next two nights. The hotel price should be according to your usual standards, but both hotels must have good views. Also, you need to check which day will be overcast during the trip. Your girlfriend says this kind of weather is perfect for taking photos in outdoor swimming pools, so the hotels you stay on those days must have pools for good photo opportunities. Once you've selected the hotels, you can proceed with payment. For Mangshi, your girlfriend wants to visit the Menghuan Golden Pagoda next Saturday; for Tengchong, you've planned to visit Tengchong Beihai Wetland and Tengchong Hot Sea Park on Monday of the week after next. You'll decide on the rest of the attractions once you arrive at the destinations.

## Context

- Current time: `2027-06-27 14:15:38`
- Domain: `ota`

## Requirements / Rubrics

- The booking dates for Mangshi hotel are July 2, 2025 and July 3, 2025
- The Mangshi hotel should have good views, a Scenic View Room should be booked
- The price of the Mangshi hotel must be within the range of 500-1000 yuan
- Check the weather in Mangshi on July 2, 2025 and July 3, 2025 (sunny and cloudy respectively) and the weather in Tengchong on July 4, 2025 and July 5, 2025 (overcast and showers respectively), so the hotel booked in Tengchong should have a swimming pool
- The swimming pool in the Tengchong hotel should be outdoor
- The Tengchong hotel should have good views, a Mountain View Room should be booked
- The booking dates for Tengchong hotel are July 4, 2025 and July 5, 2025
- The price of the Tengchong hotel must be within the range of 500-1000 yuan
- The booking date for tickets to Menghuan Golden Pagoda is July 3, 2025
- The number of tickets booked in the Menghuan Golden Pagoda order is 2
- The tickets booked in the Menghuan Golden Pagoda order are Adult Ticket
- The booking date for tickets to Tengchong Beihai Wetland is July 5, 2025
- The number of tickets booked in the Tengchong Beihai Wetland order is 2
- The tickets booked in the Tengchong Beihai Wetland order are Adult Ticket
- The booking date for tickets to Tengchong Hot Sea Park is July 5, 2025
- The tickets booked in the Tengchong Hot Sea Park order are Couple Package

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
