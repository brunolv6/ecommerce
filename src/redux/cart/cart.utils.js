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

export const removeItemFromCart = (itemList, newItem) => {
    console.log("ta aqui");
    let itemAlreadyOnCart = itemList.find(cartItem => (
        cartItem.id === newItem.id
    ))

    if(itemAlreadyOnCart){
        if(itemAlreadyOnCart.quantity === 1){
            return itemList.filter(item => (item.id !== itemAlreadyOnCart.id))
        }else{
            return itemList.map(item => (item.id===itemAlreadyOnCart.id)? {...item, quantity: item.quantity-1}: item)
        }
    } else {
        return itemList
    }
}

export const deleteItemFromCart = (itemList, newItem) => {
    return itemList.filter((item) => (item.id!==newItem.id))
}