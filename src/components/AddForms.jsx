import React,{useState} from 'react';
import useHttp from '../hook/useHttp'
import { v4 } from 'uuid';
import { useDispatch,useSelector } from 'react-redux';
import { newsAdd } from '../redux/actions';

const AddForms = () => {
  const [title,setTitle] = useState("")
  const [text,setText] = useState("")
  const [category,setCategory] = useState("")
  const {newsLoadingStatus,filters} = useSelector(state=>state.news)
  const dispatch = useDispatch()
  const {request} = useHttp()

  const onSubmitHandler = (e)=>{
    e.preventDefault()
    const newNews = {id:v4(),title,text,category}
    request("http://localhost:3001/news","POST",JSON.stringify(newNews))
    .then((res)=>console.log("Success"))
    .then(dispatch(newsAdd(newNews)))
    .catch((err)=>console.log(err))
    setTitle("")
    setText("")
    setCategory("")
  }

  
  return <form className='border p-4 shadow-lg rounded' onSubmit={onSubmitHandler}>
    <div className='mb-3'>
       <label className='form-label fs-4'>Title for new news?</label>
       <input 
       type='text' 
       required name='name' 
       className='form-control' id="name" 
       placeholder='Write title news'
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       />
    </div>
    <div className='mb-3'>
       <label className='form-label fs-4'>Text</label>
       <textarea type='text' 
       required name='name' 
       className='form-control' 
       id="name"  placeholder='Text' 
       value={text}
       onChange={(e)=>setText(e.target.value)}
       />
    </div>
    <div className='mb-3'>
       <label htmlFor="category" className='from-label'>Choose Category of news</label>
       <select 
       required className='form-select' 
       id='category' name='category'
       value={category}
       onChange={(e)=>setCategory(e.target.value)}
       > 
         <option>Choose category of news</option>
         <option value='Hot News'>Hot</option>
         <option value='World News'>world</option>
         <option value='Sport News'>Sport</option>
         <option value='Football News'>football</option>
       </select>
    </div>
    <button type='submit' className='btn-dark btn shadow-lg' >Add new news</button>
  </form>;
};

export default AddForms;
