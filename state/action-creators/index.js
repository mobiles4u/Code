export const addMobile = (amount) => {
return (dispatch)=>{
    dispatch({
        type:'deposit',
        payload: amount
    })

}
} 
export const updateMobile = (amount) => {
return (dispatch)=>{
    dispatch({
        type:'withdraw',
        payload: amount
    })

}
} 