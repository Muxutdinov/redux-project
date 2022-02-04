const initialState = {
    news:[],
    newsLoadingStatus:"jaxongir",
    filters:[]
}
const reducer = (state = initialState,action)=>{
    switch(action.type){
        case "NEWS_FATCHING":
            return{
                ...state,
                newsLoadingStatus:"loading"
            }
        case "NEWS_FATCHED":
            return {
                ...state,
                news:action.payload,
                newsLoadingStatus:"jaxongir"
            }
        case "NEWS_FATCHING_ERROR":
            return {
                ...state,
                newsLoadingStatus:"error"
            }
        default : return state
    }
}

export default reducer