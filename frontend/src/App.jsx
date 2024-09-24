import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';                                                                                  
import Home from './pages/Public/Home/Home';
import About from './pages/Public/About/About';
import ProductList from './pages/Public/Shop/ProductList/ProductList';
import ProductDetails from './pages/Public/Shop/ProductDetails/ProductDetails';
import Wishlist from './pages/Public/Shop/Wishlist/Wishlist';
import Cart from './pages/Public/Shop/Cart/Cart';
import Checkout from './pages/Public/Shop/ProductDetails/ProductDetails';
import ChefsPage from './pages/Public/Chefs/Chefs';
import GalleryPage from './pages/Public/Gallery/Gallery';
import Contact from './pages/Public/Contact/Contact';

function App() {
  return (
    <>
          <Router>
              <Switch>
                <Route path="/freshbite" exact component={Home}/>
                <Route path="/freshbite/about" exact component={About}/>
                <Route path="/freshbite/menu" exact component={ProductList}/>
                <Route path="/freshbite/menu/product" exact component={ProductDetails}/>
                <Route path="/freshbite/wishlist" exact component={Wishlist}/>
                <Route path="/freshbite/cart" exact component={Cart}/>
                <Route path="/freshbite/checkout" exact component={Checkout}/>
                <Route path="/freshbite/chefs" exact component={ChefsPage}/>
                <Route path="/freshbite/gallery" exact component={GalleryPage}/>
                <Route path="/freshbite/contact" exact component={Contact}/>
              </Switch>
          </Router>
    </>
  );
}
export default App;