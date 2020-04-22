const reducer = {

}

export const login = (state = {}, action) => reducer[action.type] ?
    reducer[action.type](state, action) : state