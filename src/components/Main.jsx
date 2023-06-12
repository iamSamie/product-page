import { useContext } from 'react'
import { Context } from '../context'
import { Slider } from './Slider'
import { ModalPicture } from './ModalPicture'
import { GoodCart } from './GoodCart'
import { MobileMenu } from './MobileMenu'
import { CounterButton } from './CounterButton'

function Main() {
    const { modalActive, activeCart, mobileMenu } = useContext(Context)

    return (
        <>
            <div className="main">
                <Slider />
                {activeCart ? <GoodCart /> : null}
                {mobileMenu ? <MobileMenu /> : null}
                <div id="text">
                    <h6>SNEAKER COMPANY</h6>
                    <h3>Fall Limited Edition Sneakers</h3>
                    <p className="text">
                        These low-profile sneakers are your perfect casual wear companion. Featuring
                        a durable rubber outer sole, they'll withstand everything the weather can
                        offer.
                    </p>
                    <div id="price">
                        <div className="price-number">
                            <p className="price">$125.00</p>
                            <p className="sell">50%</p>
                        </div>
                        <p className="previous-price">$250.00</p>
                    </div>
                    <CounterButton />
                </div>
            </div>
            {modalActive ? <ModalPicture /> : null}
        </>
    )
}

export { Main }
