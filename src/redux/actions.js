export const newsFetching = ()=>{
    return {
        type:"NEWS_FATCHING"
    }
}


export const newsFetched = (news)=>{
    return {
        type:"NEWS_FATCHED",
        payload:news
    }
}


export const newsFetchingError = ()=>{
    return {
        type:"NEWS_FATCHING_ERROR"
    }
}

export const newsAdd = (news)=>{
    return{
        type:"ADD_NEWS",
        payload:news
    }
}

