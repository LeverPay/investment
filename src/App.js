import InvestmentPage from './pages/InvestmentPage/InvestmentPage';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
     <InvestmentPage/>
    </div>
    </BrowserRouter>
  );
}

export default App;
