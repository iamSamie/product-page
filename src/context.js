import { createContext, useState } from 'react'

export const Context = createContext()

export const ContextFunction = ({ children }) => {
    const [count, setCount] = useState(0)
    const [modalActive, setModalActive] = useState(false)
    const [number, setNumber] = useState(1)
    const [activeCart, setActiveCart] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [addToBasket, setAddToBasket] = useState(false)
    return (
        <Context.Provider
            value={{
                count,
                setCount,
                modalActive,
                setModalActive,
                number,
                setNumber,
                activeCart,
                setActiveCart,
                mobileMenu,
                setMobileMenu,
                addToBasket,
                setAddToBasket,
            }}>
            {children}
        </Context.Provider>
    )
}
