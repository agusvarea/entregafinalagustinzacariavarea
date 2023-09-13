import HOME from './componets/home/home'; 
import CartContent from './componets/CartContent/CartContent';
import DataProvider from './componets/Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HOME />} />
          <Route path='/cart' element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
