import Dexie from 'dexie';
import { createContext, useContext } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface MyDB extends Dexie {
  users: Dexie.Table<User, string>;
}

const db = new Dexie('myDB') as MyDB;
db.version(1).stores({
  users: 'id, name, email, isAdmin'
});

export const DatabaseContext = createContext<MyDB>(db);

export const useDatabase = (): MyDB => {
  return useContext(DatabaseContext);
};

export const initDB = async (): Promise<boolean> => {
  try {
    await db.open();
    console.log('Opened database successfully');
    return true;
  } catch (error) {
    console.error('Failed to open database:', error);
    return false;
  }
};

export const addUser = async (user: User): Promise<void> => {
  await db.users.add(user);
};

export const getUser = async (id: string): Promise<User | undefined> => {
  return db.users.get(id);
};

export const updateUser = async (id: string, updatedUser: User): Promise<void> => {
  await db.users.update(id, updatedUser);
};

export const deleteUser = async (id: string): Promise<void> => {
  await db.users.delete(id);
};

export const getAllUsers = async (): Promise<User[]> => {
  return db.users.toArray();
};

export const searchUserByEmail = async (email: string): Promise<User[]> => {
  return db.users.where('email').equals(email).toArray();
};