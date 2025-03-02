import './App.css'
import {Header} from "./component/Header.jsx"
import {Video} from "./component/Video.jsx"
import {MovieCart} from "./component/MovieCart.jsx";
import {SpecialCinema} from "./component/SpecialCinema.jsx";
import {Package} from "./component/Package.jsx";
import {Notice} from "./component/Notice.jsx";
import {Footer} from "./component/Footer.jsx";

function App() {

    return (
        <>
            <Header/>
            <Video/>
            <MovieCart/>
            <SpecialCinema/>
            <Package/>
            <Notice/>
            <Footer/>
        </>
    );
}

export default App
