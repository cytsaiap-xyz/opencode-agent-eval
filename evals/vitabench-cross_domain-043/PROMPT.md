# VitaBench Task: Cross Domain #43

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, analyze the data and write your answer to `answer.json`.

## User Request

You and your boyfriend have arranged a double date with two friends from out of town tomorrow. You're planning to try the trendy trampoline activity, and now you want to find a fully equipped trampoline park, preferably with various difficulty levels and professional safety measures. Trampoline activities consume a lot of energy, so you also want to prepare some sports supplements in advance, buying electrolyte drinks and energy bars. One bottle of drink per person, two energy bars per person, a little extra is fine, but you don't want mango flavor or anything containing caffeine. Check if delivery is available now, if not, delivery to your home before you leave at 10 AM tomorrow is acceptable. Also look for suitable sports packages at the trampoline park, and if they include coach guidance, safety equipment, and multiple trampoline experiences, you can book now. By the way, your two friends were planning to stay at your place, but your community announced today that water will be shut off tomorrow, so you want to find a hotel within 500 meters of your home to book two rooms, preferably with good soundproofing, either twin rooms or king rooms, whichever is more economical. However, if the trampoline park has shower facilities, staying at your place would still be an option.

## Context

- Current time: `2026-04-03 23:37:21`
- Domain: `cross_domain`

## Requirements / Rubrics

- The trampoline park ordered should have complete facilities
- The trampoline park ordered should offer activities of varying difficulty levels
- The trampoline park ordered should have professional safety measures
- The package ordered at the trampoline park should include coaching services
- The package ordered at the trampoline park should include safety equipment
- The package ordered at the trampoline park should include multiple trampoline experiences
- The package ordered at the trampoline park should be suitable for a group of four people
- The electrolyte drink should be caffeine-free
- The electrolyte drink should not contain mango
- Need to purchase 4 bottles of electrolyte drink
- The energy bars should be caffeine-free
- The energy bars should not contain mango
- Need to purchase at least 8 energy bars
- The delivery store's business hours should be after 23:37:21 or before 10:00:00
- The electrolyte drinks and energy bars should come from Premium Sports Nutrition Store
- Need to check Premium Sports Nutrition Store's delivery time, which is 08:30-20:30 (currently not available), estimated delivery time should be before 2026-04-04 10:00:00
- The delivery address must be Room 203, Building 12, Jiangbin Garden, Hongjia Street, Jiaojiang District, Taizhou, Zhejiang Province
- Need to check if Feiyue Trampoline Sports Park has shower facilities, the result is no, so need to find hotels within 500m (inclusive) of Room 203, Building 12, Jiangbin Garden, Hongjia Street, Jiaojiang District, Taizhou, Zhejiang Province
- The hotel ordered should have good soundproofing
- The hotel room date should be for 2026-04-04
- After comparing the prices of twin rooms and king rooms at hotels meeting the conditions, should order the more economical Hanting Hotel (Taizhou Jiangbin Garden)-Standard Twin Room (258 yuan)

## Your Task

Read and analyze the environment data in `environment.json` to find orders matching the user's request:

1. Read the environment data (stores, products, user info, weather, location)
2. Apply the constraints from the user's request and rubrics above
3. Write your answer to `answer.json` as an array of order objects

Each order should have: `store_id`, `products` (array of `{product_id, quantity, price}`), `total_price`, and any other relevant fields (address, delivery_time, reservation details, etc.).

Look at `expected.json` for the exact output format expected. Your `answer.json` must contain data matching the `required_orders` structure.
