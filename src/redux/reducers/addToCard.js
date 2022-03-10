const addItem = []

const addToCard = (state = addItem, action) => {
    switch (action.type) {
        case 'ADDITEM':
            return [...state, action.payload]
        case 'REMOVEITEM':
            return state - 1
        default:
            return state
    }
}
export default addToCard