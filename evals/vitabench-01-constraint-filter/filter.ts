import restaurantData from './restaurants.json';

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  price_range: string;
  avg_price_per_person: number;
  dietary_options: string[];
  delivery_time_minutes: number;
  has_dine_in: boolean;
  is_chain: boolean;
  distance_km: number;
  business_hours: { open: string; close: string };
  closed_days: string[];
}

export interface FilterCriteria {
  /** Only include restaurants with these cuisines */
  cuisines?: string[];
  /** Minimum rating (inclusive) */
  minRating?: number;
  /** Maximum average price per person (inclusive) */
  maxPricePerPerson?: number;
  /** Restaurant must support ALL of these dietary options */
  requiredDietaryOptions?: string[];
  /** Maximum delivery time in minutes (inclusive) */
  maxDeliveryTime?: number;
  /** Must have dine-in option */
  requireDineIn?: boolean;
  /** Must be a chain restaurant */
  requireChain?: boolean;
  /** Maximum distance in km (inclusive) */
  maxDistance?: number;
  /** Restaurant must be open at this time (HH:MM format, 24hr) */
  openAt?: string;
  /** Restaurant must NOT be closed on this day (lowercase day name) */
  openOnDay?: string;
  /** Exclude these cuisine types */
  excludeCuisines?: string[];
}

/**
 * Load all restaurants from the JSON data.
 */
export function getAllRestaurants(): Restaurant[] {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Filter restaurants based on multiple criteria.
 * All specified criteria must be satisfied (AND logic).
 * Return results sorted by rating (highest first), then by distance (closest first) for ties.
 */
export function filterRestaurants(criteria: FilterCriteria): Restaurant[] {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Given a time (HH:MM, 24hr), day of week (lowercase), and a budget per person,
 * find the top N restaurants that are:
 *  - open at that time and on that day
 *  - within budget
 *  - can deliver within maxDeliveryMinutes (if specified)
 * Sorted by rating (highest first).
 */
export function findBestAvailable(
  time: string,
  dayOfWeek: string,
  budgetPerPerson: number,
  maxDeliveryMinutes?: number,
  topN?: number
): Restaurant[] {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Find pairs of restaurants suitable for "lunch + dinner" on a given day.
 * Lunch: must be open at lunchTime, dinner: must be open at dinnerTime.
 * Both must be open on the specified day.
 * They must be different cuisines (no same cuisine for both meals).
 * Total combined avg_price_per_person must not exceed totalBudget.
 * Return array of [lunchRestaurant, dinnerRestaurant] pairs, sorted by combined rating (highest first).
 */
export function findMealPairs(
  dayOfWeek: string,
  lunchTime: string,
  dinnerTime: string,
  totalBudget: number
): [Restaurant, Restaurant][] {
  // TODO: implement
  throw new Error('Not implemented');
}
