import React from "react";

export enum IdentityType {
  ROOT = 'root',
  ADMIN = 'admin',
  VISTOR = 'vistor',
  WHITE = 'white'

}

export interface AuthContextType {
  isLogin: boolean;
  identity: IdentityType;
  signIn: () => Promise<any>;
  signUp: () => Promise<any>; // 注册
  signOut: () => Promise<any>;
}

export const authValue = {
  isLogin: false,
  identity: IdentityType.WHITE,
  // 登录：验证 cookie 或者跳转到登录
  signIn: function () {
    return new Promise((resolve, reject) => {
      resolve(1)
    })
  },
  signOut: function () {
    return new Promise((resolve, reject) => {
      resolve(1)
    })
  },
  signUp: function () {
    return new Promise((resolve, reject) => {
      resolve(1)
    })
  }
}

const AuthContext = React.createContext<AuthContextType>(authValue)

export default AuthContext