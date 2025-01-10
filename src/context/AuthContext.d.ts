declare module '../context/AuthContext' {
  import { Context } from 'react';

  interface AuthContextType {
    // Define the shape of your AuthContext here
    user: any;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    // Add other methods and properties as needed
  }

  const AuthContext: Context<AuthContextType>;

  export default AuthContext;
}