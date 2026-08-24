import React, {createContext, useState} from "react";

export const POSITION = Object.freeze({
    REACT: "React Engineer",
    RUST: "Rust Engineer",
    DEFAULT: "Rust · React Engineer",
});

export const roleKeyOf = (role) =>
    Object.keys(POSITION).find((key) => POSITION[key] === role) || "DEFAULT";

export const RoleContext = createContext({
    role: POSITION.DEFAULT,
});

const RoleProvider = ({ children }) => {
    const [role, setRole] = useState(POSITION.DEFAULT);

    const context = { role, setRole };

    return (
        <RoleContext.Provider value={context}>
            {children}
        </RoleContext.Provider>
    );
};

export default RoleProvider;
