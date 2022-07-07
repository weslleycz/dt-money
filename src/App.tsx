import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { DBConfig } from "./config/indexeddb";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { initDB } from "react-indexed-db";
import { useState } from "react";

initDB(DBConfig);

Modal.setAppElement("#root");

export const App = () => {
  const [isNewTranslationModalOpen, setIsNewTranslationModalOpen] =
    useState(false);

  const handleOpenNewTranslationModal = () => {
    setIsNewTranslationModalOpen(true);
  };

  const handleCloseNewTranslationModal = () => {
    setIsNewTranslationModalOpen(false);
  };

  return (
    <>
      <Header onOpenNewTranslationModal={handleOpenNewTranslationModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTranslationModalOpen}
        onRequestClose={handleCloseNewTranslationModal}
      />
    </>
  );
};
