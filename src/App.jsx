import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import RequiereAuth from "./components/RequiereAuth";
import Register from "./routes/Register";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";
import LayoutContainerForm from "./components/LayoutContainerForm";


const App = () => {

  const {user} = useContext(UserContext)

  if(user === false){
    return <p>Loading...</p>
  }

  return (
    <>
    <Navbar />
    <h1>APP</h1>
    <Routes>
        <Route
          path="/"
          element={
          <RequiereAuth>
            <Home />
          </RequiereAuth>
          }
        /><Route path="/" element={<LayoutContainerForm />}>
          <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
          </Route>      
        
    </Routes>
    </>
  );
};

export default App;
