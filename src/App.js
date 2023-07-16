import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import TheApp from "./Components/TheApp";
import Code from "./Components/Code";
import GitRepo from "./Components/GitRepo";
import About from "./Components/About";
import NavigationBar from "./Components/NavigationBar";

const router = createBrowserRouter([
    {
        element : <NavigationBar/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/the-app",
                element: <TheApp/>
            },
            {
                path: "/code",
                element: <Code/>
            },
            {
                path: "/git-repo",
                element: <GitRepo/>
            },
            {
                path: "/about",
                element: <About/>
            },
        ]
    }
])


function App() {
  return (
      <div>
          <RouterProvider router={router}/>
      </div>
  );
}

export default App;
