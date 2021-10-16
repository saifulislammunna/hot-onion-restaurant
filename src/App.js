 
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
 
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import NotFound from './components/NotFound/NotFound';
 
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import Footer from './components/Footer/Footer';
import BreakFastDetails from './components/BreakFastDetails/BreakFastDetails';
 
 
 


function App() {

  return (
    <div className="App">
      
     <BrowserRouter>
     
     <Header></Header>
     <Banner></Banner>
      <Switch>
      
        <Route  path="/home">
        <Home></Home>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/signup">
        <Signup></Signup>
        </Route>
        <Route exact path="/breakfast">
             <Breakfast></Breakfast>
        </Route>
        <Route path="/breakfast/:id">
              <BreakFastDetails></BreakFastDetails>
          </Route>
        <Route exact path="/lunch">
             <Lunch></Lunch>
        </Route>
        <Route exact path="/dinner">
             <Dinner></Dinner>
        </Route>
       
        <Route  path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
