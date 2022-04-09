import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin"
import UserProfile from './pages/UserProfile'
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch , Route , Redirect} from "react-router-dom";


const App = () => {
  const user =  useSelector(state=>state.user.currentUser)
  const newuser = useSelector(state=> state.newuser.newUser)
  const emailAdmin = useSelector(state=>state.user.email)
  console.log(user)
  console.log(newuser)
  console.log(emailAdmin)
  return(
    <Router>
      <Switch>
        <Route exact path = "/">
            <Home/>
        </Route>
        <Route  path="/products/:cat">
           <ProductList/>
        </Route>
        <Route  path="/product/:id">
            <Product/>
        </Route>
        <Route  path="/cart"> 
           <Cart/>
        </Route>
        <Route  path="/login">
            { user ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route   path="/register">
            {newuser ? <Redirect to="/login"/> : <Register/>}
        </Route>
        <Route path ="/admin">
           {emailAdmin !== "adminka@gmail.com"  ? <Login/>  : <Admin/>  } 
        </Route>
        <Route path="/userprofile">
           <UserProfile/>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;