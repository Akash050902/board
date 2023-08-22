import { Routes, Route} from "react-router-dom";
import SignUp from './components/SignUp'
import Login from "./components/Login"
import Dashboard from './components/Dashboard';
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
function App() {
  return (
    <div>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </UserAuthContextProvider>
        
    </div>
    // <div>
    // <Routes>
    // <Route path="/" element={<Login />} />
    //   </Routes>  
    // </div>
        
  )
}

export default App