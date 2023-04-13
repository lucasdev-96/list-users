import React, { ReactNode, createContext, useEffect, useState } from "react";
import { getAllUsers } from "../Api/users";

type UserContextProps = {
  children: ReactNode;
};

interface User {
  value: {
    results: []
  };

}

interface UserContextValue {
  usersPagination: User[];
  setUsersPagination: React.Dispatch<React.SetStateAction<User[]>>;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  nat: string;
  setNat: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextValue>({
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
  const [users, setUsers] = useState<User[]>([]);
  const [gender, setGender] = useState("");
  const [nat, setNat] = useState("");
  const [usersPagination, setUsersPagination] = useState<User[]>([]);
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
    setUsersPagination
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};