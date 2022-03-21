import { BrowserRouter } from "react-router-dom";
import BundledRoute from "../components/Routes";
import "../styles/app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navigation */}
        <BundledRoute />
      </div>
    </BrowserRouter>
  );
};

export default App;
