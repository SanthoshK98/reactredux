
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' exact element={<ProductListing/>}/>
        <Route path='/product/:productId' exact element={<ProductDetail/>}/>
        <Route>404 Found</Route>
      </Routes>
      
    </div>
  );
}

export default App;
