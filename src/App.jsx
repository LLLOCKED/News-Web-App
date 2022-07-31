import Header from "./components/Header/Header";
import {
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";

function App() {
    return (
        <>
            <Header/>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/category/:name" element={<CategoriesPage />}/>
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
