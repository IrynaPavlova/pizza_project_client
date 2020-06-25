import React from 'react';
import AdminStocksEditor from '../../components/AdminStocksEditor';
import AdminStocksList from '../../components/AdminStocksList';
import styles from './AdminStocksPage.module.css';

export default function AdminStocksPage() {
  return (
    <div className={styles.container}>
      <AdminStocksEditor />
      <AdminStocksList />
    </div>
  );
}
