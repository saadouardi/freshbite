import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';                                                                                  
import { Home } from './pages/Public/Home/Home';
import { About } from './pages/Public/About/About';
import { Menu } from './pages/Public/Menu/Menu';
import { ChefsPage } from './pages/Public/Chefs/Chefs';
import { GalleryPage } from './pages/Public/Gallery/Gallery';
import { Contact } from './pages/Public/Contact/Contact';

function App() {
  return (
    <>
          <Router>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/menu" exact component={Menu}/>
                <Route path="/chefs" exact component={ChefsPage}/>
                <Route path="/gallery" exact component={GalleryPage}/>
                <Route path="/contact" exact component={Contact}/>
              </Switch>
          </Router>
    </>
  );
}

export default App;
