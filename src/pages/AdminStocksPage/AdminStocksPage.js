import React from 'react';
import AdminStocksEditor from '../../components/AdminStocksEditor';
import AdminStocksList from '../../components/AdminStocksList';

export default function AdminStocksPage() {
  return (
    <>
      <AdminStocksEditor />
      <AdminStocksList />
    </>
  );
}
