import Navbar from "./components/Navbar";
import bgImage from "./Shopping-image.jpg";
import Footer from "./components/Footer";
import { Search } from "@mui/icons-material";

const App = () => {
    return (
        <>
            <header>
                <div className="nav-area">
                    <a href="/#" className="logo">
                        GoShoppify
                    </a>
                    <Navbar />
                    <div className="nav__search">
                        <input type="text" placeholder="Search" />
                        <Search />
                    </div>
                </div>
            </header>
            <main>
                <div className="main__image">
                    <img src={bgImage} alt="Shopping" />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default App;
