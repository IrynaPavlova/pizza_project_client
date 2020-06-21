import React, { useState } from "react";
import AdminStocksEditor from "../../components/AdminStocksEditor";
import AdminStocksList from "../../components/AdminStocksList";

export default function AdminStocksPage() {
  const [selectValue, setselectValue] = useState("add");
  const handleChange = ({ target: { value } }) => setselectValue(value);

  return (
    <>
      <select onChange={handleChange}>
        <option value="add">Добавить акцию</option>
        <option value="edit">Редактировать акцию</option>
      </select>
      <AdminStocksEditor editMode={selectValue} />
      <AdminStocksList onChange={handleChange} />
    </>
  );
}
