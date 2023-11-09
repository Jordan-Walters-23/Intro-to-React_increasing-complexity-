import './App.css';
import Header from './Header'
import ProductList from './ProductList'
import Footer from './Footer'

function App() {
  return(
  <div className="App">
  {/* <h1>My first React page</h1> */}
  <Header/>
  <ProductList/>
  <Footer/>
  </div>
  )
}

export default App;
