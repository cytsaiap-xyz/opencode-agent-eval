# VitaBench Task: Ota #86

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

After watching a travel variety show, you were deeply attracted by the vast and magnificent grassland, so you asked friends around you, and finally everyone agreed at once to travel with 5 people departing on Friday. After researching travel guides, you decided on Ulan Butong Grassland as your destination. With the destination set, you purchase tickets for next Saturday. Camel riding on the grassland is an essential experience, so the tickets you buy should include this activity. For accommodation, everyone has similar spending levels, so book hotels according to your usual standard. However, one friend is a very light sleeper and needs to sleep alone, so you need to book two twin rooms and one king room. The hotel environment must be clean and tidy, and you'll book for two nights first. For transportation, there seems to be no direct train from Nanjing to Chifeng, so you and your friends plan to transfer in Beijing. Check if there are suitable trains for these two segments, allowing at least half an hour for transfer time. Try to avoid early morning departure and arrival times to prevent everyone from getting exhausted from the journey, and buy the same class of seats for everyone. Other people will be responsible for the return transportation, so you don't need to worry too much about that. Additionally, check the weather in Chifeng on the 23rd. If it rains, go to the museum and book tickets with a guided tour; otherwise, find a park.

## Context

- Current time: `2023-04-17 15:31:27`
- Domain: `ota`

## Requirements / Rubrics

- The purchased tickets are dated April 22, 2023
- The number of tickets purchased is 5
- The purchased tickets are valid for adults
- The purchased tickets include camel riding activity
- The tickets are for Ulan Butong Grassland
- The hotel reservation dates are April 21, 2023 and April 22, 2023
- The hotel booking includes twin rooms
- The hotel booking includes king rooms
- The hotel booking includes 2 twin rooms per night
- The hotel booking includes 1 king room per night
- The price per night for each hotel room should be consistent with the user's usual spending level (query shows it's 500-1000)
- The booked hotel should be clean and tidy
- The purchased train tickets are from Beijing to Chifeng
- For the Beijing to Chifeng train tickets, the arrival time should not be in the early morning hours
- For the Beijing to Chifeng train tickets, all seats are of the same class
- For the Beijing to Chifeng train tickets, 5 tickets were purchased
- The Beijing to Chifeng train tickets are booked for April 21, 2023
- Train tickets were also purchased from Nanjing to Beijing
- For the Nanjing to Beijing train tickets, the departure time should not be in the early morning hours
- For the Nanjing to Beijing train tickets, all seats are of the same class
- For the Nanjing to Beijing train tickets, the arrival time should be at least half an hour earlier than the departure time of the Beijing to Chifeng train
- For the Nanjing to Beijing train tickets, 5 tickets were purchased
- The Nanjing to Beijing train tickets are booked for April 21, 2023
- The weather forecast for April 23, 2023 in Chifeng shows rain, so the attraction booked is a museum
- The attraction tickets purchased include guided tour service
- The number of attraction tickets purchased is 5
- The attraction tickets are dated April 23, 2023

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
