import React from "react";
import { useSelector } from "react-redux";

//let rawMessages;

//export function GetText() {
//  const rawMessages = useSelector((state) => state.products.items);
//  return <div>React</div>;
//}

//console.log(rawMessages);

export default {
  en: {
    promo: "Promo",
    pizza: "Pizza",
    drinks: "Drinks",
    sides: "Sides",
    desserts: "Desserts",
    developers: "Developers",
  },
  ru: {
    promo: "Акции",
    pizza: "Пицца",
    drinks: "Напитки",
    sides: "Сайды",
    desserts: "Десерты",
    developers: "Разработчики",
  },
};
