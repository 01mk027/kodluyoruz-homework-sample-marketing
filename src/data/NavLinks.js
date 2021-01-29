import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import LookForProduct from "../pages/LookForProduct";
import Baska from "../pages/Baska";
import NotExist from "../pages/NotExist";

const linkObj = [
  {
    id: 1,
    address: "/",
    title: "Home Page",
    isActive: true,
    component: Home,
    isExact: true
  },
  {
    id: 2,
    address: "/about",
    title: "About us",
    isActive: true,
    component: About,
    isExact: false
  },
  {
    id: 3,
    address: "/products",
    title: "Products",
    isActive: true,
    component: Products,
    isExact: true
  },
  {
    id: 4,
    address: "/products/:proID",
    title: "Details for relevant product",
    isActive: false,
    component: ProductDetail,
    isExact: false
  },
  {
    id: 5,
    address: "/contact",
    title: "Contact with me",
    isActive: true,
    component: Contact,
    isExact: false
  },
  {
    id: 6,
    address: "/lookforproduct",
    title: "Find product",
    isActive: false,
    component: LookForProduct,
    isExact: false
  },

  {
    id: 7,
    address: "",
    title: "Don't exist",
    isActive: false,
    component: NotExist,
    isExact: false
  }
];

export default linkObj;
