const addItem = 0

const addToCard = (state = addItem, action) => {
    switch (action.type) {
        case 'ADDITEM':
            return state + 1
        case 'REMOVEITEM':
            return state - 1
        default:
            return state
    }
}
export default addToCard