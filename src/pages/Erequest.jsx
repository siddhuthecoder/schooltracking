import React from 'react';
import Sidebar from '../components/Sidebar';
import TopHeader from '../components/TopHeader';
import ErequestHeader from '../components/E-request/E-requestHeader';
import ErequestTable from '../components/E-request/E-requestTable';

const Request= () => {
  return (
    <div className="absolute p-1 m-0 left-0 top-0 w-full h-screen">
      <div className="flex w-full h-full">
        {/* Sidebar */}
        <div className="w-16 lg:w-1/14 h-full">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-grow lg:w-13/14 h-full">
          <div className="p-2 lg:p-2"> {/* Reduced padding to minimize gaps */}
            <TopHeader />
            <hr />
              <ErequestHeader/>
             <ErequestTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;