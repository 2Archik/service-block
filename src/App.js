import React from "react";
import PageLayout from "./components/page-layout";
import ServiceBlock from "./components/service-block";
import Modal from "./components/Modal";
import More from "./components/more";
import { useSelector } from "react-redux";

function App() {
  const isMoreOpen = useSelector((state) => state.services.isMoreOpen);

  return (
    <PageLayout>
      <ServiceBlock />
      {isMoreOpen && (
        <Modal modalTitle="Подробная информация">
          <More />
        </Modal>
      )}
    </PageLayout>
  );
}

export default App;
