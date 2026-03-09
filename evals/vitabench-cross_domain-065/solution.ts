import envData from './environment.json';
import expectedData from './expected.json';

export interface Product {
  product_id: string;
  quantity: number;
  price: number;
  name?: string;
}

export interface Order {
  order_id: string;
  order_type: string;
  user_id: string;
  store_id: string;
  products: Product[];
  total_price: number;
  location?: {
    address: string;
    longitude?: number;
    latitude?: number;
  };
  dispatch_time?: string;
  status?: string;
  note?: string;
  [key: string]: unknown;
}

/**
 * Analyze the environment data and user request to produce the correct orders.
 * Read environment.json for available stores/products and user context.
 * Return orders matching the required format in expected.json.
 */
export function solve(): Order[] {
  // TODO: implement
  // Read envData.stores, envData.user_profile, envData.weather, etc.
  // Apply the constraints from the user request
  // Return the correct order(s)
  throw new Error('Not implemented');
}
