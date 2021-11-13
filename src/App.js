import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import AddProducts from './pages/AddProducts/AddProducts';
import AddReviews from './pages/AddReviews/AddReviews';
import Slider from './pages/Home/Slider/Slider';
import Orders from './pages/Orders/Orders';
import Login from './pages/Login/Login';
import AuthProvider from '../src/AuthProvider/AuthProvider';
import Navigation from './pages/Shared/Navigation/Navigation';
import Register from './pages/Login/Register';
import Bikes from './pages/Bikes/Bikes';
import PrivateRoute from './pages/PrivetRoute/PrivetRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import UserOrders from './pages/UserOrders/UserOrders';
import ManegeAllOrders from './pages/Dashboard/ManegeAllOrders/ManegeAllOrders';
import ManegeAllProducts from './pages/ManegeAllProducts/ManegeAllProducts';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Navigation></Navigation>
       <Switch>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route path='/home'>
           <Home></Home>
         </Route>
         <Route path='/addproducts'>
           <AddProducts></AddProducts>
         </Route>
         <Route path='/addreviews'>
           <AddReviews></AddReviews>
         </Route>
         <Route path='/slider'>
           <Slider></Slider>
         </Route>
         <Route path='/login'>
           <Login></Login>
         </Route>
         <Route path='/register'>
           <Register></Register>
         </Route>
         
         <PrivateRoute path='/bikes'>
           <Bikes></Bikes>
         </PrivateRoute>
         <PrivateRoute path='/manegeallorders'>
           <ManegeAllOrders></ManegeAllOrders>
         </PrivateRoute>
         <PrivateRoute path='/orders'>
           <Orders></Orders>
         </PrivateRoute>
         <PrivateRoute path='/userorders'>
           <UserOrders></UserOrders>
         </PrivateRoute>
         <PrivateRoute path='/manegeallproducts'>
           <ManegeAllProducts> </ManegeAllProducts>
         </PrivateRoute>
         <PrivateRoute path='/dashboard'>
           <Dashboard></Dashboard>
         </PrivateRoute>
         <PrivateRoute path='/products/:productId'>
           <Orders></Orders>
         </PrivateRoute>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
