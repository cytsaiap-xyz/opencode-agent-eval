import taskData from './task-data.json';

export interface TransportPlan {
  type: 'train' | 'flight';
  number: string;       // train number or flight number
  departure: string;    // departure time
  arrival: string;      // arrival time
  seatClass?: string;
}

export interface HotelPlan {
  name: string;
  star: number;
  pricePerNight: number;
  nights: number;
  rooms: number;
  services?: string[];  // e.g., ["Swimming Pool"]
}

export interface MealPlan {
  restaurantName: string;
  cuisine?: string;
  nearAttraction?: string;
  specialRequirement?: string;
}

export interface AttractionPlan {
  name: string;
  type?: string;
  ticketPrice?: number;
}

export interface TripPlan {
  origin: string;
  destination: string;
  days: number;
  peopleNumber: number;
  outboundTransport: TransportPlan;
  inboundTransport: TransportPlan;
  hotel: HotelPlan;
  meals: MealPlan[];
  attractions: AttractionPlan[];
  totalBudget: number;
  constraintResults: Record<string, unknown>;
}

/**
 * Read the task data and produce a trip plan that satisfies all hard constraints.
 * The hard_constraints in task-data.json contain the expected answers.
 * Your plan must match these constraints exactly.
 */
export function planTrip(): TripPlan {
  // TODO: implement
  // Read taskData.hard_constraints for specific requirements
  // Build a plan that satisfies each constraint
  throw new Error('Not implemented');
}
