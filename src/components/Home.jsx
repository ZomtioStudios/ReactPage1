import "../styles.css";
import "../home.css";
import Widgets from "./applets/menuwidget";
import { Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <div className="homePageContainer" style={{ marginTop: 5 }}>
      <div className="menu">
        <Widgets />
      </div>
      <div className="main">
        <h3> main</h3>
        <Routes>
          <Route path="/" element={<h1>hi1</h1>} />
          <Route path="/sub2" element={<h1>"im a submenu" </h1>} />
          <Route path="/sub3" element={<h1>hi there</h1>} />
        </Routes>
      </div>
      <div className="footer">footer or something idk</div>
    </div>
  );
}
