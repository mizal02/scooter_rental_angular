import { Rental } from './rental';

export interface User {
  id?: string;
  role: string;
  username: string;
  email: string;
  password: string;
  createdDate: string;
  accountBalanceString: string;
  isActive: boolean;
  rentals: Rental[];
}
