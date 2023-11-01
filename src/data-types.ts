export interface SignUp {
  name: string;
  password: string;
  email: string;
}
export interface LogIn {
  email: string;
  password: string;
}
export interface Product {
  name: string;
  price: string;
  category: string;
  color: string;
  description: string;
  image: string;
  id: number;
}