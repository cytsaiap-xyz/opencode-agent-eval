# VitaBench Task: Ota #82

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Next month, you plan to take your girlfriend on a trip to Xi'an. You both want to experience the Regular Train, preferably one where you can sleep and wake up on the 15th just as you arrive. After booking the train tickets, you want to arrange the attractions you'll visit. The Terracotta Army and Mausoleum of the First Qin Emperor are must-see destinations, and you plan to visit them on the day you arrive in Xi'an. Your girlfriend is very interested in Tang Dynasty history and wants to rent a Hanfu costume to take photos in the brilliantly lit night, experiencing the prosperity of the flourishing Tang Dynasty. This can be arranged for the second day. You'll help take photos of her, so you won't need to rent a Hanfu costume yourself. You've never seen giant pandas before, so this is a good opportunity to see them. Let's schedule the panda visit for the third day. Also, you need to buy return train tickets, and for the return journey, you'd prefer to take the High-Speed Rail or EMU (Electric Multiple Unit) as it would be faster. It's fine as long as you can return on the evening of the third day.

## Context

- Current time: `2024-08-22 19:53:27`
- Domain: `ota`

## Requirements / Rubrics

- Outbound train departure date is September 14, 2024
- Outbound train number should start with K
- Outbound train arrival time should be on the morning of September 15, 2024
- Number of outbound train tickets is 2
- Outbound train should be from Linyi to Xi'an
- Return train departure date is September 17, 2024
- Return train number should start with D or G
- Return train arrival time should be on the evening of September 17, 2024
- Number of return train tickets is 2
- Return train should be from Xi'an to Linyi
- Attractions ordered on the first day of the journey should include Emperor Qin Shi Huang's Mausoleum Site Museum (Terracotta Army)
- Tickets for attractions ordered on the first day should be for September 15, 2024
- Number of tickets for attractions ordered on the first day should be 2
- Attractions ordered on the first day of the journey should include Mausoleum of the First Qin Emperor
- Tickets for attractions ordered on the first day should be for September 15, 2024
- Number of tickets for attractions ordered on the first day should be 2
- Attraction ordered on the second day of the journey should be Tang Paradise
- Tickets for attractions ordered on the second day should be for September 16, 2024
- Tickets for attractions ordered on the second day should include 1 Adult Ticket
- Tickets for attractions ordered on the second day should include 1 Hanfu Experience Ticket (Includes Admission + Hanfu Rental)
- Attraction ordered on the third day of the journey should be Xi'an Qinling Wildlife Park
- Tickets for attractions ordered on the third day should be for September 17, 2024
- Number of tickets for attractions ordered on the third day should be 2

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
