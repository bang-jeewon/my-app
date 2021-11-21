import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header />
            {/* <HomePage /> */}
            <Routes>
                <Route path="/" exact={true} component={HomePage} />
                <Route path="/login" exact={true} component={LoginPage} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
