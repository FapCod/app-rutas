import './App.css';
import Usuarios from './Components/Usuarios'
import DetalleUsuario from './Components/DetalleUsuario'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

/* import Inicio from './Components/Inicio'
import Error from './Components/Error'
import Login from './Components/Login' */
function App() {
  return (
   <Router>
     {/* <Link to='/inicio'>Inicio</Link> */}
     <Link to='/'>Usuarios</Link>
     {/* <Link to='/404'>Error</Link> */}
     <Switch>
       {/* <Route path='/inicio/:nombre/:apellido/:edad' component={Inicio}></Route> */}
       {/* <Route path='/404' component={Error}></Route> */}
       {/* <Route component={Error} /> */}
       <Route exact path='/' component={Usuarios}></Route>
       <Route  path='/usuario/:id' component={DetalleUsuario}></Route>
     </Switch>
   </Router>
  );
}

export default App;
