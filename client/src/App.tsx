import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ui from "./pages/Ui";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ui" element={<Ui />} />
      </Routes>
    </Router>
  );
};
export default App;
