import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import HomeCards from "./components/Homecards";
// import JobListings from "./components/JobListings";
// import ViewAllJobs from "./components/ViewAllJobs";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/add" element={<h1>My App</h1>} />)
);

const App = () => {
  return (
    // this all components will be used using router
    // <>
    //   <Navbar />

    //   {/* passing props */}
    //   {/* <Hero title="Test Title" subtitle="this is subtitle" /> */}
    //   <Hero />
    //   <HomeCards />
    //   <JobListings />
    //   <ViewAllJobs />
    // </>
    <RouterProvider router={router} />
  );
};

export default App;
