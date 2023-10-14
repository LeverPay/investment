import InvestmentPage from './pages/InvestmentPage/InvestmentPage';
import Investment from './pages/InvestmentPageform/Investment';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Investment/>} />
        <Route path='/home' element={<InvestmentPage/>} />
      </Routes>
     {/* <InvestmentPage/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
