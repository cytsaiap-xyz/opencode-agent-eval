# VitaBench Task: Ota #12

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.py`.

## User Request

Grandma said she wants to have a gathering with a group of old friends in Dezhou this weekend, and you think it's better to accompany her for peace of mind. Grandma usually gets up very early, so you can set off early on Saturday, looking for train tickets departing around seven or eight o'clock. However, since grandma is elderly, spending two days out might be tiring for her, so arriving in Linyi around noon the next day would be more appropriate. Once you've determined the schedule, you can book the tickets. Oh, and get Second Class Seats on the High-Speed Rail. Grandma's gathering is on Saturday afternoon, and you want to take her around in the morning. Elderly people usually enjoy taking photos of flowers and plants, so Dezhou Happy Flower Valley should be suitable, and you plan to accompany her there. Grandma is sixty-five this year, so if the scenic area has relevant discount policies, that would be better; if not, just order two regular Adult Tickets. You want to find a hotel within 3 kilometers of Dezhou Railway Station, and hope the hotel provides Free Luggage Storage service. To take care of grandma, it's better for you to stay together. However, since you're already a grown young man, it might not be appropriate to share the same bed with grandma. Once you've selected a suitable hotel, you can make the reservation.

## Context

- Current time: `2023-04-26 19:22:11`
- Domain: `ota`

## Requirements / Rubrics

- The outbound train should be High-Speed Rail
- The outbound ticket should be from Linyi to Dezhou
- The departure date of the outbound ticket should be 2023-04-29
- The departure time of the outbound ticket should be between 07:00-08:00
- The seat type of the outbound ticket in the order should be Second Class Seat
- The quantity of the outbound ticket in the order should be 2
- The return train should be High-Speed Rail
- The return ticket should be from Dezhou to Linyi
- The departure date of the return ticket should be 2023-04-30
- The arrival time of the return ticket should be around 12:00
- The seat type of the return ticket in the order should be Second Class Seat
- The quantity of the return ticket in the order should be 2
- The scenic spot to be ordered should be Dezhou Happy Flower Valley
- Need to check the age range for senior tickets at Dezhou Happy Flower Valley, the result shows that people aged 60 and above can enjoy senior ticket discount, and the scenic spot order should include 1 senior ticket
- The scenic spot order should include 1 adult ticket
- The ticket date of the scenic spot order should be 2023-04-29
- The hotel to be booked should be within 3 kilometers of Dezhou Railway Station, Hubin Middle Avenue, Decheng District, Dezhou, Shandong Province
- The hotel to be booked should provide Free Luggage Storage service
- The check-in date of the hotel order should be 2023-04-29
- The quantity in the hotel order should be 1
- The room type in the hotel order should be Twin Room

## Your Task

Implement the `solve()` function in `solution.py` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
