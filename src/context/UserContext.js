import { createContext, useContext, useState } from "react";

const userContext = createContext()

export const UserInfo = ({children}) => {
    const [userEmail, SetuserEmail] = useState()

    return (
        <userContext.Provider value={{userEmail, SetuserEmail}}>
        {children}
        </userContext.Provider>
    );
};

export const useUser = () => {
    return useContext(userContext)
}