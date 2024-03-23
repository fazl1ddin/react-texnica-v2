import { AuthModel } from "@/shared/api/auth";

interface IAuthContext {
  auth: AuthModel | null;
  setAuth: React.Dispatch<React.SetStateAction<AuthModel | null>>;
}

const initialData = {
  auth: null,
  setAuth: () => {},
};

export { type IAuthContext, initialData };
