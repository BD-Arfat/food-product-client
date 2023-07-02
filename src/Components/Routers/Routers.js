import { createBrowserRouter } from "react-router-dom";
import Maine from "../Maine/Maine/Maine";
import Home from "../pages/Home/Home/Home";
import ProductsLayouts from "../Products/Products/ProductsLayouts";
import FoodProducts from "../Products/FoodProducts/FoodProducts";
import DrinkFood from "../Products/DrinkFood/DrinkFood";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Maine/Form/Main";
import SingleProduct from "../Products/SingleProduct/SingleProduct";
import PrivetRouters from "../PrivetRouters/PrivetRouters";
import SingleDrink from "../Products/SingleDrink/SingleDrink";
import MyReview from "../MyReview/MyReview";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Maine />,
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    },
    {
        path: '/products',
        element: <PrivetRouters><ProductsLayouts /></PrivetRouters>,
        children: [
            {
                path: '/products',
                element: <FoodProducts />
            },
            {
                path: '/products/drinkProducts',
                element: <DrinkFood />
            },
        ]
    },
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/login',
                element: <Login />
            }, {
                path: '/register',
                element: <Register />
            },
            {
                path : '/myReview',
                element : <MyReview/>
            },
            {
                path : '/products/:id',
                element : <SingleProduct/>,
                loader : ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path : '/drinks/:id',
                element : <SingleDrink/>,
                loader : ({params})=>fetch(`http://localhost:5000/drinks/${params.id}`)
            }
        ]
    }
])