export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  created_at: Date;
  update_at: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IToken {
  email: Record<string, any>;
}
export interface UserDelete {
  id: string;
}

export interface UserUp {
  id: string;
  name?: string;
  email?: string;
  password?: string;
}
