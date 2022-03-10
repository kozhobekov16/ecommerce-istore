export const addToCard = (elem) => {
    return {
        type: 'ADDITEM',
        payload: elem
    }
}
export const removeInCard = () => {
    return {
        type: 'REMOVEITEM'
    }
}