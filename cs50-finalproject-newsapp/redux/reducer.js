
let defaultState ={
    articles: null,
    search: null
}

const reducer = (state=defaultState, action) => {
    switch (action.type){
        case 'UPDATE_NEWS':
            return ({articles: action.payload})
        default: 
            return state    
    }
}

export default reducer