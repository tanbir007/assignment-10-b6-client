import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import NotFound from "../others/NotFound/NotFound";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Category from "../Pages/Category/Category";
import Courses from "../Pages/Courses/Courses";
import FrequentQues from "../Pages/FrequentQues/FrequentQues";
import CoursesLayout from "../layout/CoursesLayout";
import Banner from "../Pages/Home/Banner/Banner";
import PrivateRoute from "./PrivateRoute";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import PremiumAccess from "../Pages/PremiumAccess/PremiumAccess";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/home",
        element: <Banner></Banner>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/courses/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/courses/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/blogs",
        element: (
            <Blogs></Blogs>
        ),
      },
      {
        path: "/courses/blogs",
        element: (
            <Blogs></Blogs>
        ),
      },
      {
        path: "/frequent_ques",
        element: <FrequentQues></FrequentQues>,
      },
      {
        path: "/courses/frequent_ques",
        element: <FrequentQues></FrequentQues>,
      },
    ],
  },
  {
    path: "/courses",
    element: <CoursesLayout></CoursesLayout>,
    children: [
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://assignment-10-b6-server-tanbir007.vercel.app/courses"),
      },
      {
        path: "/courses/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-b6-server-tanbir007.vercel.app/courses/category/${params.id}`
          ),
      },
      {
        path: "/courses/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-b6-server-tanbir007.vercel.app/courses/course/${params.id}`
          ),
      },
      {
        path: "/courses/premium/:id",
        element: (
          <PrivateRoute>
            <PremiumAccess></PremiumAccess>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-b6-server-tanbir007.vercel.app/courses/course/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
