import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch, HashRouter} from 'react-router-dom';
import {Login} from './pages/Pages';//登录组件
import Index from './pages/IndexPages';//登录成功后跳转的框架组件
import PrivateRoute from "./component/PrivateRoute";
function App() {
  return (
      <Router>
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route path="/" exact render={()=><Redirect to="/login"/>}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/index" render={()=>
                        <Index>
                            <PrivateRoute/>
                        </Index>
                    }/>
                </Switch>
            </HashRouter>
        </div>
      </Router>
  );
}

export default App;
