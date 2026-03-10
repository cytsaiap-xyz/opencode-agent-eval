# VitaBench Task: Instore #2

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You plan to take your mother for a SPA on Mother's Day. This is your first experience, so you want to find a beauty salon, preferably a chain brand, which feels more reliable. You want to see if the salon offers a mother-daughter package; if yes, you'll purchase one, if not, you'll buy two individual sets. You need anti-aging treatments and want to book a 9 AM appointment. After the SPA, you also want to take your mother for a warm soup to warm her stomach, planning to choose a Cantonese Tea Restaurant near the SPA salon that offers health tonic soup sets. By the way, after the SPA treatment, you need to be careful about sun protection, and the set menu shouldn't contain any photosensitive ingredients. Your mother also doesn't like chicken soup. Recently, your mother has been saying she really wants to eat Squab (Young Pigeon); if it's not included in the set, you'll buy a separate squab set menu. Oh, and your total budget for today cannot exceed 2000 yuan.

## Context

- Current time: `2025-05-09 07:30:00`
- Domain: `instore`

## Requirements / Rubrics

- The beauty salon order is from a chain brand
- The package purchased in the beauty salon order is a mother-daughter package
- The package purchased in the beauty salon order is for anti-aging
- Check the specific date of Mother's Day (2025-05-11), and the appointment date at the beauty salon should be 2025-05-11 at 09:00:00
- The number of people for the appointment is 2
- The appointed merchant is Yuerong SPA Beauty Center
- The restaurant ordered should be a Cantonese Tea Restaurant
- The restaurant should be within 3km (including 3km) of Yuerong SPA Beauty Center, B1 Floor, CapitaMall, Wuyi Square, Furong District, Changsha
- The restaurant order should include a Health Nourishing Soup Set
- The Health Nourishing Soup Set purchased should not be chicken soup
- The Health Nourishing Soup Set purchased should not contain photosensitive ingredients
- After checking, if the restaurant's set menu does not include squab, a Premium Squab set meal should be purchased in the restaurant order
- The total cost of all orders should not exceed 2000 yuan

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
