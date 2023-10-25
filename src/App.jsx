import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import LayoutRequiereAuth from "./components/layouts/LayoutRequiereAuth";
import Register from "./routes/Register";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";
import LayoutContainerForm from "./components/layouts/LayoutContainerForm";
import Perfil from "./routes/Perfil";
import NotFound from "./routes/NotFound";


const App = () => {

  const {user} = useContext(UserContext)

  if(user === false){
    return <p>Loading...</p>
  }

  return (
    <>
    <Navbar />
    <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/"
          element={
          <LayoutRequiereAuth/>
          }>
          <Route index element={<Home/>}/>
          <Route path="perfil" element={<Perfil/>}/>
        </Route>
        
        <Route path="/" element={<LayoutContainerForm />}>
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
