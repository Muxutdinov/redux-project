import React from 'react';
import { useEffect } from 'react';
import useHttp from '../hook/useHttp';
import { useSelector,useDispatch } from 'react-redux';
import {newsFetching,newsFetched,newsFetchingError} from '../redux/actions'
import Spinner from './Spinner';


const NewsList = () => {

  const {news,newsLoadingStatus} = useSelector(state=>state)
  const dispatch = useDispatch()
  const {request} = useHttp()
  // console.log(news);

  useEffect(()=>{
    dispatch(newsFetching())
    request("http://localhost:3001/news")
    .then(data=>dispatch(newsFetched(data)))
    .catch(()=>dispatch(newsFetchingError()))
  },[])
  return <div>NewsList</div>;
};

export default NewsList;
