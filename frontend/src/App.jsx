import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Login from './pages/Authentication/Login/Login';
import Signup from './pages/Authentication/Signup/Signup';
import Profile from './pages/Member/Profile/Profile';

import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Stock from './pages/Admin/Orders/Orders';
import Statistics from './pages/Admin/Orders/Orders';
import Orders from './pages/Admin/Orders/Orders';
import AddOrder from './pages/Admin/Orders/Orders';
import EditOrder from './pages/Admin/Orders/Orders';
import Products from './pages/Admin/Products/Products';
import AddProduct from './pages/Admin/Products/AddProduct/AddProduct';
import EditProduct from './pages/Admin/Products/EditProduct/EditProduct';
import Contacts from './pages/Admin/Contacts/Contacts';
import AddContact from './pages/Admin/Orders/Orders';
import EditContact from './pages/Admin/Orders/Orders';
import Blogs from './pages/Admin/Orders/Orders';
import AddBlog from './pages/Admin/Orders/Orders';
import EditBlog from './pages/Admin/Orders/Orders';
import DashboardSetting from './pages/Admin/Orders/Orders';

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

function App() {
  return (
    <>
        <Router basename="/freshbite">
          <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />

              <Route path="/dashboard" component={Dashboard} />
              <Route path="/dashboard/statistic" component={Statistics} />
              <Route path="/products" component={Products} />
              <Route path="/add-product" component={AddProduct} />
              <Route path="/edit-product" component={EditProduct} />
              <Route path="/orders" exact component={Orders} />
              <Route path="/add-order" component={AddOrder} />
              <Route path="/edit-order" component={EditOrder} />
              <Route path="/blogs" component={Blogs} />
              <Route path="/add-blog" component={AddBlog} />
              <Route path="/edit-blog" component={EditBlog} />
              <Route path="/users" component={Dashboard} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/add-user" component={AddContact} />
              <Route path="/edit-user" component={EditContact} />
              <Route path="/stock" component={Stock} />
              <Route path="/dashboard-settings" component={DashboardSetting} />

              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/menu/:filter?" exact component={ProductList}/>
              <Route path="/product/:product?" exact component={ProductDetails}/>
              <Route path="/wishlist" exact component={Wishlist}/>
              <Route path="/cart" exact component={Cart}/>
              <Route path="/checkout" exact component={Checkout}/>
              <Route path="/chefs" exact component={ChefsPage}/>
              <Route path="/gallery" exact component={GalleryPage}/>
              <Route path="/blog" exact component={Blog}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/support" exact component={Contact}/>

              <Route path="/profile" exact component={Profile}/>
              <Route path="/orders" exact component={Profile}/>
              <Route path="/wishlist" exact component={Profile}/>
              <Route path="/notifications" exact component={Profile}/>
              <Route path="/settings" exact component={Profile}/>
              <Route path="/profile" exact component={Profile}/>
        </Switch>
      </Router>
    </>
  );
}
export default App;