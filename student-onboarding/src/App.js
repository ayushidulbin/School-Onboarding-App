
import './App.css';
import {Button} from '@material-ui/core'
import OnBoardingForm from './Components/OnBoardingForm';
import Home from './Components/Home';
import { BrowserRouter,Redirect, Switch, Route} from 'react-router-dom';
import ListOfStudents from './Components/ListOfStudents';
import ViewDetails from './Components/ViewDetails';
import EditDetail from './Components/EditDetail';
import LoginForm from './Components/LoginForm';
import Logout from './Components/Logout';



 const Temp=({token})=>{
   if(token!=='')
  {
  return( <Switch>
  <Route path='/login' component={LoginForm} />
  <Route path='/logout' component={Logout} />
  <Route path='/home' component={Home}/>
  <Route path='/viewDetail/:studentId' component={ ViewDetails }/>
  <Route path='/editDetail/:studentId' component={EditDetail}/>
  <Redirect from="/" to="/login" />
  </Switch>)
  }else{
    return(
    <Switch>
    <LoginForm/>
    </Switch>)
  }


}

function App() {
  const token=localStorage.getItem('username');
  return (
   <BrowserRouter>
     <Temp token={token} />
    </BrowserRouter>
  );
}

export default App;
