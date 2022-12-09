const reducer = (state, action) => {
    if (action.type === "STR-ERR") {
        return {
            ...state,
            msg: true,
            msgContent: 'None must contain Letters'
        }
    }
    if (action.type === "LEN-ERR") {
        return {
            ...state,
            msg: true,
            msgContent: 'CVV too Long'
        }
    }
}

export default reducer