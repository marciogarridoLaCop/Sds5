
import Datatable from 'components/Datatable';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary"> Olá Mundo  </h1>
       <Datatable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
