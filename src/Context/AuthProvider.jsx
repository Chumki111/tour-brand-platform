import { useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, serUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const authInfo = {
        user,
        loading,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
// propTypes
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;