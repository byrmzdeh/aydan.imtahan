import { createContext, useState } from "react";

export const BasketContext = createContext()

function BasketProvider({ children }) {

    const [basket, setBasket] = useState([])

    function addBasket(item) {
        const index = basket.findIndex((x) => x.id === item.id)
        if (index === -1) {
            setBasket([...basket, { ...item, count: 1 }])
        } else {
            basket[index].count++
            setBasket([...basket])
        }
    }

    function increase(item) {
        const index = basket.findIndex((x) => x.id === item.id)
        basket[index].count++
        setBasket([...basket])
    }

    
    function decrease(item) {
        const index = basket.findIndex((x) => x.id === item.id)
       if (basket[index].count>1) {
        basket[index].count--
        setBasket([...basket])
       }
        setBasket([...basket])
    }

    function remove(item) {
        setBasket(basket.filter((x)=>x.id !== item.id))
    }

    const data = {addBasket , basket, decrease , increase , remove}
    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )

}

export default BasketProvider