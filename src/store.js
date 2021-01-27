import { createStore } from "redux";

const initialState = {
  product: [
    {
      id: 1,
      nombre: "Manzanas",
      foto: "http://media.webweaver.es/manzanas.jpg",
    },
    {
      id: 2,
      nombre: "Pan",
      foto: "http://media.webweaver.es/pan.jpg",
    },
    {
      id: 1,
      nombre: "Cerveza",
      foto: "http://media.webweaver.es/cerveza.jpg",
    },
  ],
  list: [],
  buyed: [],
};

const reducerBuyer = (state = initialState, action) => {
  return state;
};

export default createStore(reducerBuyer);
