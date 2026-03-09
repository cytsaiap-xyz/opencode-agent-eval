import servicesData from './services.json';

export interface Location {
  lat: number;
  lng: number;
}

export interface Hotel {
  id: string;
  name: string;
  stars: number;
  pricePerNight: number;
  location: Location;
  amenities: string[];
  checkInTime: string;
  checkOutTime: string;
  availableDates: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  pricePerPerson: number;
  rating: number;
  location: Location;
  hours: { open: string; close: string };
  closedDays: string[];
  acceptsReservations: boolean;
  maxPartySize: number;
}

export interface Transport {
  id: string;
  type: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  fromLocation: Location;
  toLocation: Location;
}

export interface BookingRequest {
  checkInDate: string;       // "YYYY-MM-DD"
  checkOutDate: string;      // "YYYY-MM-DD"
  partySize: number;
  totalBudget: number;       // Max total spend (hotel nights + dinner per person * party)
  requiredAmenities?: string[];
  minHotelStars?: number;
  dinnerDate: string;        // "YYYY-MM-DD" (day of dinner)
  dinnerTime: string;        // "HH:MM"
  cuisinePreferences?: string[];  // preferred cuisines (any match is ok)
  needsReservation?: boolean;
}

export interface BookingPlan {
  hotel: Hotel;
  restaurant: Restaurant;
  totalCost: number;         // hotel total + restaurant total (pricePerPerson * partySize)
  hotelCost: number;
  restaurantCost: number;
  nights: number;
}

/**
 * Calculate the distance in km between two locations using the Haversine formula.
 */
export function calculateDistance(a: Location, b: Location): number {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Get the day of week (lowercase) for a given date string "YYYY-MM-DD".
 * e.g., "2025-03-15" -> "saturday"
 */
export function getDayOfWeek(dateStr: string): string {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Find all valid booking plans that satisfy the request constraints.
 *
 * A valid plan must satisfy:
 * - Hotel is available for ALL nights (checkInDate to checkOutDate, not including checkout day)
 * - Hotel has all requiredAmenities
 * - Hotel stars >= minHotelStars (if specified)
 * - Restaurant is open on the dinner date's day of week
 * - Restaurant is open at the dinner time
 * - Restaurant can accommodate the party size
 * - If needsReservation is true, restaurant must accept reservations
 * - If cuisinePreferences specified, restaurant cuisine must be in the list
 * - Total cost (hotel nights * pricePerNight + restaurant pricePerPerson * partySize) <= totalBudget
 *
 * Return plans sorted by: restaurant rating descending, then total cost ascending.
 */
export function findBookingPlans(request: BookingRequest): BookingPlan[] {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Find the best booking plan (highest restaurant rating, lowest cost as tiebreaker).
 * Returns null if no valid plan exists.
 */
export function findBestPlan(request: BookingRequest): BookingPlan | null {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Given a hotel and restaurant, find the best transport option to get from
 * the hotel to the restaurant. "Best" = cheapest that gets you there.
 * If no direct transport, return the taxi option (id "t4") as fallback.
 *
 * Matching is done by proximity: a transport's fromLocation must be within
 * 2km of the hotel location, and toLocation within 2km of the restaurant location.
 */
export function findTransport(hotel: Hotel, restaurant: Restaurant): Transport {
  // TODO: implement
  throw new Error('Not implemented');
}
