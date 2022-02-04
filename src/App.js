import React from 'react';
import './index.scss'
import Navbar from './components/Navbar'
import NewsList from './components/NewsList';
import AddForms from './components/AddForms';
import FilterContent from './components/FilterContent';




const App = () => {
  return <div className='app'>
    <Navbar/>
    <div className='content'>
      <NewsList/>
      <div className='content_page'>
        <AddForms/>
        <FilterContent/>
      </div>
    </div>
  </div>;
};

export default App;
