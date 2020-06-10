import React from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";

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
