import Section from "./component/section/section.component";
import Forms from "./component/form/form.component";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
// import QR from "./component/QR/qr.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Forms />} />
        <Route path="section/*" element={<Section />} />
        {/* <Route path="qr/*" element={<QR />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
