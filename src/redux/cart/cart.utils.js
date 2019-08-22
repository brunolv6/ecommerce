export const addItemToCart = (itemList, newItem) => {
    let itemAlreadyOnCart = itemList.find(cartItem => (
        cartItem.id === newItem.id
    ))

    if(itemAlreadyOnCart){
        return itemList.map(cartItem => (
            cartItem === itemAlreadyOnCart
            ? {...cartItem, quantity: cartItem.quantity+1}
            : cartItem
        ))
    }else{
        return [...itemList, {...newItem, quantity: 1}]
    }   
}