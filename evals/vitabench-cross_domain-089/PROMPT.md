# VitaBench Task: Cross Domain #89

You are building a service agent that processes user requests. Given the environment data in `environment.json` and the expected output format in `expected.json`, implement the `solve()` function in `solution.ts`.

## User Request

You and two friends are planning to celebrate your close friend's recent promotion. You want to arrange a celebration dinner this Saturday at 6 PM. You're looking for a Michelin-starred restaurant with high ratings to avoid any disappointment. You'd like to check if the restaurant's set menu includes champagne and special desserts, which you can purchase now. Also, you don't eat offal. You've prepared a watch as a gift for your friend, but forgot to buy a greeting card, so you're also looking for a suitable one. Nothing too childish - something innovative like a 3D greeting card would be perfect. The card should be delivered to your home tomorrow morning between 7-8 AM. Your girlfriend, who went to Shenzhen to visit family a few days ago, just messaged that she wants to join too. You previously helped her book the flight, so now you need to check when she arrives in Changchun on Saturday - she should be able to make it if she arrives two hours before dinner. If not, you'll need to reschedule her flight. Also, you'll need to change the dinner set to accommodate five people.You and two friends are planning to celebrate your best friend's recent promotion with a celebration banquet this Saturday at 6:00 PM. You're looking for a Michelin-starred restaurant with high ratings to avoid any disappointment. Check if the restaurant offers set menus that include champagne and special desserts, and go ahead and purchase the package now if it fits your needs. Also, you don't eat offal food. You've prepared a watch as a gift for your friend but forgot to buy a greeting card. Now you'd like to find one—nothing too childish; something unique like a pop-up or 3D card would be ideal. Arrange for it to be delivered tomorrow morning between 7:00–8:00 AM to your home. Your girlfriend, who recently went back to Shenzhen to visit family, just messaged that she wants to join the celebration as well. Since you booked her flight earlier, check what time she'll arrive in Changchun on Saturday—she should ideally land at least two hours before dinner starts so she can make it on time. If her current ticket doesn't work out timing-wise, arrange for rescheduling instead. Also, change the dinner reservation or set menu order so that it accommodates five people.

## Context

- Current time: `2025-10-23 21:31:04`
- Domain: `cross_domain`

## Requirements / Rubrics

- The delivered item should be a greeting card
- The delivered item should be pop-up or 3D card
- The delivered food item should not be in childish style
- The delivery address should be Room 502, Building 3, Jilin University First Hospital Residential Area, 2699 Qianjin Street, Chaoyang District, Changchun City, Jilin Province
- The estimated delivery time should be between 2025-10-24 07:00-08:00
- The four-person meal order from Jing Yue Xuan Michelin Restaurant should be cancelled
- The ordered restaurant should be a Michelin-starred restaurant
- The restaurant's rating should be 4.2 or above
- The set menu ordered at the restaurant should include champagne and special desserts
- The set menu ordered at the restaurant should not include offal
- The set menu ordered at the restaurant should meet the dining needs of 5 people
- Need to check the user's historical flight information from Shenzhen to Changchun on 2025-10-25, and should inform the user that the purchased MU5628 flight departs at 8:20 and arrives at 12:35, which can arrive more than two hours before dinner at 18:00, so there's no need to change the flight

## Your Task

Implement the `solve()` function in `solution.ts` that returns the correct order(s) matching the user's request. The function should:

1. Read the environment data (stores, products, user info)
2. Apply the constraints from the user's request
3. Return an array of order objects with the correct `store_id`, `products` (each with `product_id`, `quantity`, `price`), `total_price`, and `address`

Look at `expected.json` for the exact output format expected. Your `solve()` function must return data that matches the `required_orders` structure.
