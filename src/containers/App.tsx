import { BrowserRouter } from "react-router-dom";
import BundledRoute from "../components/Routes";
import Navigation from "../components/Navigation";
import "../styles/app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <BundledRoute />
        <Navigation />
      </div>
    </BrowserRouter>
  );
};

export default App;
