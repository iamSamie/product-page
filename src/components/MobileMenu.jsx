import { useContext } from 'react'
import { Context } from '../context'

function MobileMenu() {
    const { setMobileMenu } = useContext(Context)

    const closeMenu = () => {
        setMobileMenu(false)
    }

    return (
        <div className="mobile-menu" onClick={closeMenu}>
            <div
                className="menu"
                onClick={(event) => {
                    event.stopPropagation()
                }}>
                <div className="menu-close">
                    <svg
                        onClick={() => setMobileMenu(false)}
                        style={{ margin: '20px 20px' }}
                        width="14"
                        height="15"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fill="#69707D"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="mobile-navbar">
                    <p className="mobile-menu-text">Collections</p>
                    <p className="mobile-menu-text">Man</p>
                    <p className="mobile-menu-text">Woman</p>
                    <p className="mobile-menu-text">About</p>
                    <p className="mobile-menu-text">Contacts</p>
                </div>
            </div>
        </div>
    )
}

export { MobileMenu }
