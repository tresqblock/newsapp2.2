export function loadNews(category){
    return dispatch => {
        return fetch(`https://newsapi.org/v2/top-headlines?country=us&${category}pageSize=40&apiKey=ef4ff6c5894a400a9a441e35e1a3c915`)
        .then(res =>  res.json())
        .then(res => dispatch(updateNews(res.articles)))
    }
}

export function updateNews(newArticles){
    return{
        type: 'UPDATE_NEWS',
        payload: newArticles
    }
}


