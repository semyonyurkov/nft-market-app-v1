import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Details from './pages/Details';
import PersonalAcc from './pages/PersonalAcc';
import Header from './components/Header';
import Main from './components/Main';

function App() {
    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/nft" element={<Details />} />
                    <Route path="/account" element={<PersonalAcc />} />
                </Routes>
            </Main>
        </>
    );
}

export default App;
