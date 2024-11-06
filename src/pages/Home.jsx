import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { enrutadorApp } from "../routes/enrutador"; 


const Home = () => {
    const enruter = createBrowserRouter(enrutadorApp);
    return <RouterProvider router={enruter} />;
};

export default Home;



