import './App.css';
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"

function App() {
  const productPhoneList =[
    {
      name:"iphone 14",
      price:99999,
      quantity:0,
    },
    {
      name:"redmi 12",
      price:9999,
      quantity:0,
    },
    {
      name:"samsung s24",
      price:120000,
      quantity:0,
    },
    {
      name:"iphone 12",
      price:120000,
      quantity:0,
    },
  ]

  const productClothList =[
    {
      name:"Zara",
      price:20000,
      quantity:0,
    },
    {
      name:"HNM",
      price:9999,
      quantity:0,
    },
    {
      name:"Zudio",
      price:1200,
      quantity:0,
    },
  ]
  return (
    <div className="App">
     <Navbar />
     <ProductList phoneList={productPhoneList} clothList={productClothList}/>
     <Footer />
    </div>
  );
}

export default App;
