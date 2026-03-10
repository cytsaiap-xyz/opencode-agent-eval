# VitaBench Task: Instore #25

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

Your dog has been shedding a lot of fur recently and is quite dirty, so you plan to find a pet grooming shop tomorrow to give your dog a bath. Your dog is sensitive to heat, so before that, you want to check tomorrow's weather. If the maximum temperature is below 35°C, you'll purchase a package including bath, grooming, and nail care services, at a price within your acceptable range, and make an appointment for 2 PM. Also, the shop should be within 2 kilometers from your home, as it's inconvenient to travel far with your dog, and it shouldn't have a rating below 4.5. If the maximum temperature is above 35°C, as the heat might be too much for your dog to bear, you'll invite your bestie who has a car to go together for transportation. You'll still purchase the same package, but choose a shop within 3km from home with a rating no lower than 4.5, and make the appointment for 1 PM, so that you can have afternoon tea with your bestie while your dog is getting groomed. To maintain your figure, you need to find a coffee shop within 1 kilometer of the pet grooming shop that offers low-sugar desserts, preferably a viral photography hotspot, so you can take nice photos with your bestie. You'll buy a set for two that includes a White Flat White, which is your bestie's favorite.

## Context

- Current time: `2024-08-16 16:12:22`
- Domain: `instore`

## Requirements / Rubrics

- Check tomorrow's (2024-08-17) weather forecast, with the highest temperature exceeding 35°C, need to invite a bestie with a car to go to a pet grooming shop, so the pet grooming shop should be within 3km (including 3km) from Room 301, Unit 2, Building 5, Shanxi Theater Staff Quarters, 69 Tiyu Road, Xiaodian District, Taiyuan
- The pet grooming shop's rating should be greater than or equal to 4.5
- The pet grooming service should be a package that includes Bath, Grooming, and Nail Care
- The total price of the pet grooming order should be less than or equal to 300 yuan
- The pet grooming appointment should be at Pet Paradise
- Check tomorrow's (2024-08-17) weather forecast, with the highest temperature exceeding 35°C, need to invite a bestie with a car to go to a pet grooming shop, so the pet grooming shop appointment time should be 2024-08-17 13:00:00
- The number of pet grooming appointments should be 1
- The coffee shop should be within 1km (including 1km) from Pet Paradise, 145 Changzhi Road, Xiaodian District, Taiyuan
- The coffee shop should be a Social Media Check-in spot
- The coffee shop order should be a set for two that includes White Flat White
- The coffee shop order should include Low-Sugar Dessert

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
