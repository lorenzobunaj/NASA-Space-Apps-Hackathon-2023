import { BrowserRouter  } from "react-router-dom";
import { Router } from "./routes";
import Navbar from "./components/ui/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
