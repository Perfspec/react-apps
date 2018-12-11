import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Login = () => <h2>Login</h2>;
const Logout = () => <h2>Logout</h2>;
const Users = () => <h2>Users</h2>;
const Admins = () => <h2>Admins</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout/">Logout</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
          <li>
            <Link to="/admins/">Admins</Link>
          </li>
        </ul>
      </nav>

      <Route path="/login" exact component={Login} />
      <Route path="/logout/" component={Logout} />
      <Route path="/users/" component={Users} />
      <Route path="/admins/" component={Admins} />
    </div>
  </Router>
);

export default AppRouter;
