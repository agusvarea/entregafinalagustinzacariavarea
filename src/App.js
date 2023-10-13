import HOME from './componets/home/home'; 
import Navbar from './componets/Navbar/Navbar'
import CartContent from './componets/CartContent/CartContent';
import DataProvider from './componets/Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './componets/Products/products';
import ItemDetailContainer from './componets/ItemdetailContainer/ItemDetailContainer';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HOME />} />
          <Route path='/category/:categoryId' element={<Products/>} />
          <Route path='/detail/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
