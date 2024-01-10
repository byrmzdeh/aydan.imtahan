import React from 'react'
import BasketProvider from './context/BasketContext'
import WishlistProvider from './context/WishlistContext'

const MainLayout = ({ children }) => {
    return (
        <div>
            <BasketProvider>
                <WishlistProvider>
                    {children}
                </WishlistProvider>
            </BasketProvider>
        </div>
    )
}

export default MainLayout
