import { AuthModel } from "./model";

type LoginProps = {
  creditionals: string;
  password: string;
};

type RegisterProps = {
  firstname: string;
  mail: string;
  phone: string;
  password: string;
};

const login = async (creditionals: LoginProps): Promise<AuthModel> => {
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
          firstname: "Faziddin",
        });
      }, 300);
    });
  else
    return Promise.reject({
      message: "Incorrect creditionals",
    });
};

const register = async (props: RegisterProps): Promise<AuthModel> => {
  if (props)
    return new Promise((res) => {
      setTimeout(() => {
        res({
          cart: [],
          compare: [],
          favorite: [],
          visited: [],
          ...props,
        });
      }, 300);
    });
  else
    return Promise.reject({
      message: "Incorrect creditionals",
    });
};

export { login, register, type AuthModel };
