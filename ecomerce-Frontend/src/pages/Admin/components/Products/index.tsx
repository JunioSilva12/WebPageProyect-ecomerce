
import List from './List';
import { Route, Routes } from 'react-router-dom';
import Form from './Form';

const Products = () => {
  console.log("productos renderizando");
  return (
    <div>
      <Routes>
        <Route path="/"  element={<List />} />
     
              
        <Route path="/:productId"  element={<Form />} />{/**aqui anda el create tambien */}
         

      </Routes>
    </div>
  )
}

export default Products;