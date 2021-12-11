import React, { useState } from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AppContext.Provider value={[isAuth, setIsAuth]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
