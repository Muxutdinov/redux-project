import React from 'react';
import news from '../assets/imgs/news.jpg'

function NewsListItem({title,text,category}) {
let elementclassName
  switch(category){
      case "Hot" :
          elementclassName = 'bg-success bg-gradient'
          break;
          case "world":
              elementclassName = 'bg-primary bg-gradient'
              break;
              case "sport":
                  elementclassName = 'bg-secondary bg-gradient'
                  break;
                  case 'footbal':
                      elementclassName = 'bg-info bg-gradient'
                      break;
                      default:
                          elementclassName = 'bg-blue bg-gradient'
                          break;
  }
  return <li className={`card flex-row shadow-lg text-white ${elementclassName}`}>
          <img src={news}  alt="img news" className='img-fluid w-25 d-inline' />
          <div className='card-body'>
              <h3 className='card-title'>{title}</h3>
              <p className='card-text'>{text}</p>
          </div>
          {/* <span className='position-absalute top-0 start-100 translate-middle badge border rounded-pill bg-light text-align-center'> */}
          <button type="button" className="btn btn-danger">Delete</button>
          {/* </span> */}
  </li>;
}

export default NewsListItem;
