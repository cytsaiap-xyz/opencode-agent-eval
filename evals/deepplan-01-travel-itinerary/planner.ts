import cityData from './city-data.json';

export interface Location {
  lat: number;
  lng: number;
}

export interface Attraction {
  id: string;
  name: string;
  type: string;
  rating: number;
  entryFee: number;
  visitDurationMinutes: number;
  openTime: string;
  closeTime: string;
  closedDays: string[];
  location: Location;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  avgPrice: number;
  rating: number;
  mealType: string;
  openTime: string;
  closeTime: string;
  closedDays: string[];
  location: Location;
}

export interface Hotel {
  id: string;
  name: string;
  stars: number;
  pricePerNight: number;
  rating: number;
  location: Location;
}

export interface ItineraryItem {
  startTime: string;     // "HH:MM"
  endTime: string;       // "HH:MM"
  type: 'attraction' | 'meal' | 'travel' | 'hotel';
  name: string;
  cost: number;
}

export interface DayPlan {
  day: number;           // 1-indexed
  date: string;          // "YYYY-MM-DD"
  items: ItineraryItem[];
  dayCost: number;
}

export interface Itinerary {
  hotel: Hotel;
  days: DayPlan[];
  totalCost: number;     // hotel + meals + attractions
  totalAttractions: number;
}

export interface PlanRequest {
  startDate: string;           // "YYYY-MM-DD"
  numDays: number;             // 1-3
  budget: number;              // total budget
  mustVisit?: string[];        // attraction IDs that must be included
  preferredMealBudget?: number; // max per meal
  minHotelStars?: number;
  startTimeEachDay?: string;   // default "08:00"
  endTimeEachDay?: string;     // default "21:00"
}

/**
 * Get the day of week (lowercase) for a date string "YYYY-MM-DD".
 */
export function getDayOfWeek(dateStr: string): string {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Add minutes to a time string "HH:MM" and return new "HH:MM".
 * e.g., addMinutes("09:00", 90) => "10:30"
 */
export function addMinutes(time: string, minutes: number): string {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Check if a time range [startTime, endTime] fits within [openTime, closeTime].
 * All times in "HH:MM" format.
 */
export function fitsInTimeWindow(startTime: string, endTime: string, openTime: string, closeTime: string): boolean {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Estimate travel time in minutes between two locations.
 * Use simple distance-based heuristic:
 * - < 0.5km apart: 5 minutes
 * - 0.5-2km: 10 minutes
 * - 2-5km: 20 minutes
 * - >5km: 35 minutes
 *
 * Distance is Euclidean on lat/lng * 111 (approximate km per degree).
 */
export function estimateTravelTime(from: Location, to: Location): number {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Generate a valid itinerary for the given request.
 *
 * Rules:
 * - Pick a hotel that fits the budget and star requirement.
 * - Each day should have: breakfast (around start time), attractions, lunch (12:00-14:00),
 *   more attractions, dinner (18:00-20:00).
 * - Attractions must be open on that day (check closedDays using date) and visited within operating hours.
 * - Include travel time between locations.
 * - Must include all mustVisit attractions.
 * - Don't visit the same attraction twice.
 * - Stay within budget (hotel * nights + all meals + all entry fees).
 * - Each day's schedule must not go past endTimeEachDay.
 *
 * Return the best itinerary (most attractions visited within constraints).
 * Return null if mustVisit constraints cannot be satisfied.
 */
export function generateItinerary(request: PlanRequest): Itinerary | null {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Validate that an itinerary satisfies all constraints:
 * - No time overlaps within a day
 * - All items within startTime/endTime bounds
 * - Attractions visited during their open hours on correct day
 * - Must-visit attractions are included
 * - Total cost within budget
 * - No duplicate attractions
 *
 * Return { valid: true } or { valid: false, errors: string[] }
 */
export function validateItinerary(
  itinerary: Itinerary,
  request: PlanRequest
): { valid: boolean; errors: string[] } {
  // TODO: implement
  throw new Error('Not implemented');
}
