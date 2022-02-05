import React from 'react';

const AddForms = () => {
  return <form className='border p-4 shadow-lg rounded'>
    <div className='mb-3'>
       <label className='form-label fs-4'>Title for new news?</label>
       <input type='text' required name='name' className='form-control' id="name" placeholder='Write title news' />
    </div>
    <div className='mb-3'>
       <label className='form-label fs-4'>Text</label>
       <textarea type='text' required name='name' className='form-control' id="name"  placeholder='Text' />
    </div>
    <div className='mb-3'>
       <label htmlFor="category" className='from-label'>Choose Category of news</label>
       <select required className='form-select' id='category' name='category'> 
         <option>Choose category of news</option>
         <option value='Hot'>Hot</option>
         <option value='world'>world</option>
         <option value='Sport'>Sport</option>
         <option value='football'>football</option>
       </select>
    </div>
    <button type='submit' className='btn-dark btn shadow-lg'>Add new news</button>
  </form>;
};

export default AddForms;
