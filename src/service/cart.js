// Adicionar Item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//Calcular o total dos valores do carrinho
async function calculeTotal(userCart) {
    const response = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("\nTotal do carrinho: ")
    console.log(`R$: ${response}`);
}

// Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((e) => e.name === name);

    if (index > -1) {
        userCart.splice(index, 1);
    }
}

// Remover item do carrinho
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((e) => e.name === item.name);

    console.log(`Index do item ${indexFound}`);
    if (indexFound === -1) {
        console.log("Item não existe");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

//Listar itens do carrinho
async function displayCart(userCart) {
    userCart.forEach(async (item, index) => {
        console.log(`${index + 1} ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    })
}

export {addItem, calculeTotal, deleteItem, removeItem, displayCart};
