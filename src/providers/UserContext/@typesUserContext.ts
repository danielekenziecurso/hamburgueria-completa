export interface IDefaultProviderProps {
  children: React.ReactNode;
}
export interface IIUser {
  id: string;
  name: string;
  email: string;
}
export interface IUserContext {
  registerOfUser: (data: IRegisterValue) => Promise<void>;
  loginOfUser: (data: ILoginValue) => Promise<void>;
  loading: boolean;
  logout: () => void;
  user: IIUser | null;
}
export interface IRegisterValue {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface ILoginValue {
  email: string;
  password: string;
}
