
import Barchart from 'components/Barchart';
import Datatable from 'components/Datatable';
import DonutChart from 'components/DonutChart';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3"> Dashboard </h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa</h5>
            <Barchart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3"> 
        <h2 className="text-primary"> Todas vendas</h2>
        </div>
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;
