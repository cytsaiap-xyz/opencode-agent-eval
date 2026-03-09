# VitaBench Task: Ota #5

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You're planning a trip to Xiapu next Friday during the golden season for photographing its tidal flats, aiming to capture stunning coastal scenery where mountains embrace the sea and islands reflect on the water. You hope to take a train that arrives around noon that day, but since tickets during this time might be hard to secure, you'll book an earlier departure if necessary. Given it's peak season with potentially tight ticket availability, you plan to reserve your train tickets in advance. Once in Xiapu, you intend to stay for three days and two nights. For accommodation, you're looking for a homestay within your usual budget range but one that offers views of the coastline—ideally something picturesque and serene. It would be even better if breakfast is included and features local specialties. Since you'll bring plenty of photography equipment along with you, you'd appreciate it if the homestay could provide shuttle service. Once you've found suitable lodging options meeting these criteria, go ahead and book them now. Your girlfriend plans to join you over the weekend for some sightseeing together. Check Saturday's weather forecast: If it's sunny or clear skies are expected, she'd like you to arrange her ticket on the earliest available train departing that morning. However, if rain is predicted instead, she prefers staying home indoors.

## Context

- Current time: `2027-08-11 14:23:49`
- Domain: `ota`

## Requirements / Rubrics

- Train departure date should be August 20, 2027
- Tickets for trains from Jinhua to Xiapu around 12:00 on August 20, 2027 are sold out, the train number of the ticket should be D3216
- Train ticket should be for a train from Jinhua to Xiapu
- The number of train tickets should be 1
- Homestay price should be between 500 and 1000 yuan
- Homestay should provide breakfast
- Homestay's breakfast should be local specialty cuisine
- Homestay should provide shuttle service
- The room type ordered for the homestay should be Sea View Room
- Homestay order should include rooms for two nights, on August 20, 2027 and August 21, 2027 respectively
- The weather in Jinhua on August 21, 2027 will be showers, so train tickets from Jinhua to Xiapu for August 21, 2027 should not be purchased

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
