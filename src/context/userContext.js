// This userContext used to share the user
import React from "react";

/*
    {+} React.createContext() returns context object

    {+} By convention, we use Pascal-case as a naming convention 
        to save this context object
*/

const UserContext = React.createContext();
UserContext.displayName = "UserContext";

export default UserContext;
