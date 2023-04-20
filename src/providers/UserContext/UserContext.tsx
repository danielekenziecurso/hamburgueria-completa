import { createContext, useEffect, useState } from "react";
import { IDefaultProviderProps, IIUser, ILoginValue, IRegisterValue, IUserContext } from "./@typesUserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const UserContext = createContext({} as IUserContext);

export const UserProviders = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IIUser | null>(JSON.parse(localStorage.getItem("accessUser") as string) || null);
  const navigate = useNavigate();

  const registerOfUser = async (data: IRegisterValue) => {
    try {
      setLoading(true);
      const response = await api.post('/users', data);
      setUser(response.data.user);
      toast.success('Conta criada com sucesso!', {
        autoClose: 2000
      });
      navigate('/');
    } catch (error) {
      toast.error('Ops! Algo deu errado.', {
        autoClose: 2000
      });
    }
    finally{
        setLoading(false);
    }
  };

  const loginOfUser = async (data: ILoginValue) => {
    try {
      setLoading(true);
      const response = await api.post('/login', data);
      setUser(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem('accessUser', JSON.stringify(response.data.user));
      navigate('/shop');
    } catch (error) {
      toast.error('Ops! Algo deu errado.', {
        autoClose: 2000
      });
    }
    finally{
        setLoading(false);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const autoLogin = async () => {
        try {
           await api.get('/products', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          navigate('/shop');
        } catch (error) {
          console.log(error);
          navigate("/")
        }
      };
      autoLogin()
    }
    else{
      navigate("/")
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('accessUser');
    navigate('/');
  };


  return <UserContext.Provider value={{registerOfUser, loginOfUser, loading, logout, user}}>{children}</UserContext.Provider>;
};
