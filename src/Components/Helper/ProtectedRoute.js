import React from "react";
import { UserContext } from "../../Context/UserContext";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({element}, ...rest) => {
  const { login } = React.useContext(UserContext);
  // if (login === true) {
  //   return <Route {...props} />;
  // } else if (login === false) {
  //   return (
  //     <React.Fragment>
  //       <Navigate to="/login" />
  //     </React.Fragment>
  //   );
  // } else return null;
  if (login === true) {
    return <Route element={element} {...rest}/>;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return null;
  }
};

export default ProtectedRoute;
