import React, { ReactNode, createContext, useEffect, useState } from "react";
import { getAllUsers } from "../Api/users";
import { IUser } from "../interface/UserInterface";

type UserContextProps = {
  children: ReactNode;
};



interface UserContextValue {
  user: {};
  setUser: React.Dispatch<React.SetStateAction<{}>>;
  usersPagination: IUser[];
  setUsersPagination: React.Dispatch<React.SetStateAction<IUser[]>>;
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  nat: string;
  setNat: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextValue>({
  user: {},
  setUser: () => {},
  usersPagination: [],
  setUsersPagination: () => {},
  users: [],
  setUsers: () => {},
  gender: "",
  setGender: () => {},
  nat: "",
  setNat: () => {},
});

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [gender, setGender] = useState("");
  const [nat, setNat] = useState("");
  const [usersPagination, setUsersPagination] = useState<IUser[]>([]);
  const [user, setUser] = useState({});
  const setUsersFn = async () => {
    const users = await getAllUsers(nat, gender)
    setUsers(users.results);
  };

  useEffect(() => {
    setUsersFn();
  }, [gender, nat]);

  const userContextValue: UserContextValue = {
    users,
    setUsers,
    gender,
    setGender,
    nat,
    setNat,
    usersPagination,
    setUsersPagination,
    user,
    setUser
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};