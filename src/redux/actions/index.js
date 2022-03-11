export const addToCard = (elem) => {
    return {
        type: 'ADDITEM',
        payload: elem
    }
}
export const removeInCard = (elem) => {
    return {
        type: 'REMOVEITEM',
        payload: elem
    }
}