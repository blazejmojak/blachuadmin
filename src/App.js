import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails';

axios.defaults.withCredentials = true

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route>404 Not Found</Route>
      </Switch>
    </Router>
  );
}

export default App;
