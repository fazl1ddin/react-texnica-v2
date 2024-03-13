interface LoginModel {
  phone: string;
  mail: string;
  password: string;
  favorite: Array<number>;
  cart: Array<number>;
  visited: Array<number>;
  compare: Array<number>;
}

export { type LoginModel };
