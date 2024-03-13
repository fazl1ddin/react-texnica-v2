import { LoginModel } from "./model";

type LoginProps = {
  creditionals: string;
  password: string;
};

const login = async ({ creditionals }: LoginProps): Promise<LoginModel> => {
  if (creditionals)
    return new Promise((res) => {
      setTimeout(() => {
        res({
          cart: [],
          compare: [],
          favorite: [],
          visited: [],
          mail: "fazliddinergashev36@gmail.com",
          password: "Qwerty21",
          phone: "+77777777777",
        });
      }, 300);
    });
  else
    return Promise.reject({
      message: "Incorrect creditionals",
    });
};

export { login };
