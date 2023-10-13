import Banner from "../Banner/Banner";
import Products from "../Products/products";
const HOME = () => {
    return (
     <>
      
         <Banner />
         <div className="product-card-container">
             <Products/>
         </div>
         
     </>   
    );
};

export default HOME;