import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/App.scss';
import HomeDetails from './components/HomeDetails/HomeDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddRentHouse from './components/AddRentHouse/AddRentHouse';
import MyRent from './components/MyRent/MyRent';
import BookingList from './components/BookingList/BookingList';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/homedetails">
              <HomeDetails></HomeDetails>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/addrenthouse">
              <AddRentHouse></AddRentHouse>
            </Route>
            <Route path="/myrent">
              <MyRent></MyRent>
            </Route>
            <Route path="/bookinglist">
              <BookingList></BookingList>
            </Route>
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
