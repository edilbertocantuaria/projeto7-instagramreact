import ReactDom from "react-dom";

import Corpo from './Corpo'
import NavBar from './NavBar'
import Footer from './Footer'


function App(){
    return(
        <div>
        <NavBar/>
        <Corpo/>
        <Footer/>
        </div>
    );
}


ReactDom.render(<App />, document.querySelector(".root"));