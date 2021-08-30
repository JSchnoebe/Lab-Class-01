import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { render } from '@testing-library/react';

function App() {
  
  return (
    <div>
   
    <Header />
    <Main />
    <Footer />
    </div>
  )
}
export default App;
