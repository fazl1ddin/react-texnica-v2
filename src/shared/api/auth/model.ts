interface AuthModel {
  phone: string;
  mail: string;
  password: string;
  firstname: string;
  favorite: Array<number>;
  cart: Array<number>;
  visited: Array<number>;
  compare: Array<number>;
}

export { type AuthModel };
