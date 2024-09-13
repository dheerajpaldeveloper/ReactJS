import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"
function App() {
  const productList =[
    {
      name:"Iphone 14",
      price:99999,
      quantity:0
    },
    {
      name:"Samsung s24",
      price:120000,
      quantity:0
    },
    {
      name:"redmi 14",
      price:9999,
      quantity:0
    }
  ]
  return (
    <div className="App">

      <Navbar  />
    
      <ProductList productList={productList} />
    
      {/* <Footer /> */}
    
    </div>
  );
}

export default App;
