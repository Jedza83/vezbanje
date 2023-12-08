import { createContext, useContext, useState } from "react";
import Counter from "./Counter";
import ToDoList from "./ToDoList";
import PostList from "./PostList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SinglePost from "./SinglePost";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Petar");

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Hello, {user}</h1>
        <Component2 />
      </div>
    </UserContext.Provider>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Coponent 5</h1>
      <p>Ime korisnika u komponenti br. 5 je: {user}</p>
    </div>
  );
}

function Component2() {
  return (
    <div>
      <h1>Component 2</h1>
      <Component3 />
    </div>
  );
}

function Component3() {
  return (
    <div>
      <h1>Component 3</h1>
      <Component4 />
    </div>
  );
}

function Component4() {
  return (
    <div>
      <h1>Component 4</h1>
      <Component5 />
    </div>
  );
}

function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <ToDoList /> */}
      <Router>
        <Routes>
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:idPosta" element={<SinglePost />} />
          {/* navigate sa osnovnog URL-a na /posts */}
          <Route path="/" element={<Navigate to="/posts" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
