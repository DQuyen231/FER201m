import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./component/Home";
import Loginpage from "./component/Loginpage";
import Navigation from "./component/Navigation";
import Register from "./component/Register";
import Contact from "./component/Contact";
import Payment from "./component/Payment";
import Footer from "./component/Footer";
import History from "./component/HistoryApplication";
import Car from "./component/Car";
import Booking from "./component/Booking";

// import Login from "./gg_login/Login";
// import Protected from "./Protect/protected";

function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/loginpage" element={<Loginpage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/car" element={<Car />}></Route>
          <Route path="/booking/:CarId" element={<Booking />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/viewhistory" element={<History />}></Route>

          {/* <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Protected><Dashboard /></Protected>}></Route> */}
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
