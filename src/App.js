import React from "react";
import Header from "./Component/Header";
import CreateNote from "./Component/CreateNote";
import Note from "./Component/Note";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <Header />
      <CreateNote />
      <Note />
      <Footer />
    </>
  );
};

export default App;
