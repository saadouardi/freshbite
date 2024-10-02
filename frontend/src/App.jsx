import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Public/Home/Home';
import About from './pages/Public/About/About';
import ProductList from './pages/Public/Shop/ProductList/ProductList';
import ProductDetails from './pages/Public/Shop/ProductDetails/ProductDetails';
import Wishlist from './pages/Public/Shop/Wishlist/Wishlist';
import Cart from './pages/Public/Shop/Cart/Cart';
import Checkout from './pages/Public/Shop/Checkout/Checkout';
import ChefsPage from './pages/Public/Chefs/Chefs';
import GalleryPage from './pages/Public/Gallery/Gallery';
import Blog from './pages/Public/Blog/Blog';
import Contact from './pages/Public/Contact/Contact';
import Profile from './pages/Member/Profile/Profile';

function App() {
  return (
    <>
          <Router>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/menu/:filter?" exact component={ProductList}/>
                <Route path="/product/:product?" exact component={ProductDetails}/>
                <Route path="/wishlist" exact component={Wishlist}/>
                <Route path="/cart" exact component={Cart}/>
                <Route path="/checkout" exact component={Checkout}/>
                <Route path="/chefs" exact component={ChefsPage}/>
                <Route path="/gallery" exact component={GalleryPage}/>
                <Route path="/blog" exact component={Blog}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/profile" exact component={Profile}/>
              </Switch>
          </Router>
    </>
  );
}
export default App;