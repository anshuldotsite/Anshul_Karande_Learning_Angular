export interface Coffee {
  id: number;
  name: String;
  description: String;
  price: number;
  image: String;
  inStock?: boolean; //optional
  lastUpdated: Date;
}
