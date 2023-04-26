import { createContext } from "react";

const userContext = createContext({
  user: { name: "abhilasha", email: "abhi15@gmail.com" },
});

export default userContext;
