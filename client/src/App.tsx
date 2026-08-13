import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Mainlayout from "./layouts/Mainlayout";
import ArticlePage from "./pages/Article";
import CreateArticle from "./pages/CreateArticle";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){
  return(
    <Mainlayout>
    <Routes>
      <Route
      path="/"
      element={<Home/>}
      />

      <Route
      path="/login"
      element={<Login/>}
      />

      <Route
      path="/register"
      element={<Register/>}
      />

      <Route
      path="/articles/:id"
      element={<ArticlePage/>}
      />

      <Route
      path="/write"
      element={
      <ProtectedRoute>
        <CreateArticle/>
      </ProtectedRoute>
      }
      />

    </Routes>

    </Mainlayout>
  )

}

export default App;