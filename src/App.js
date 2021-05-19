import './App.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Naslovna from "./Podstranice/Naslovna.js";
import Info from './Podstranice/Info.js';
import Forma from "./Podstranice/Forma.js";
import Forum from "./Podstranice/Forum.js";
import Users from "./Podstranice/Users.js";
import Javascript from "./Jezici/Javascript";
import Python from "./Jezici/Python";
import Java from "./Jezici/Java";

import{ Route, BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
        <Router>
          <Route path="/" component={Header}></Route>
          <Route exact path="/" component={Naslovna}></Route>
          <Route path="/aboutus" component={Info}></Route>
          <Route path="/create" component={Forma}></Route>
          <Route path="/forum" component={Forum}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/js" component={Javascript}></Route>
          <Route path="/python" component={Python}></Route>
          <Route path="/java" component={Java}></Route>
        </Router>
        <Footer></Footer>
    </div>
  );
}

export default App;
