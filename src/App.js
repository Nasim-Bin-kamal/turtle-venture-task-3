import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import SignIn from './components/SignIn/SignIn';
import Radio from './pages/Radio/Radio';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID



function App() {
  return (
    <div className="">
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={`${window.location.origin}/home`}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Radio />} />
            <Route path="/home" element={<Radio />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Router>
      </Auth0Provider>
    </div>
  );
}

export default App;
