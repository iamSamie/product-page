import { useContext } from 'react'
import { Context } from '../context'

function ModalPicture() {
    const { setModalActive, number, setNumber } = useContext(Context)
    const mainPhoto = {
        // backgroundImage: `url(../images/image-product-${number}.jpg)`,
        backgroundImage: `url(iamsamie.github.io/product-page/build/images/image-product-${number}.jpg)`,
    }
    const handleOne = () => {
        setNumber(1)
    }
    const handleTwo = () => {
        setNumber(2)
    }
    const handleThree = () => {
        setNumber(3)
    }
    const handleFour = () => {
        setNumber(4)
    }
    const next = () => {
        if (number > 0 && number < 4) setNumber(number + 1)
        if (number === 4) setNumber(1)
    }
    const previous = () => {
        if (number > 0 && number <= 4) setNumber(number - 1)
        if (number === 1) setNumber(4)
    }

    return (
        <div
            className="modal"
            onClick={() => {
                setModalActive(false)
            }}>
            <div
                className="modal-content"
                onClick={(event) => {
                    event.stopPropagation()
                }}>
                <div className="next" onClick={next}>
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m2 1 8 8-8 8"
                            stroke="#1D2026"
                            strokeWidth="3"
                            fill="none"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="previous" onClick={previous}>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11 1 3 9l8 8"
                            stroke="#1D2026"
                            strokeWidth="3"
                            fill="none"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="close">
                    <svg
                        onClick={() => {
                            setModalActive(false)
                        }}
                        className="modal-close"
                        width="14"
                        height="15"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fill="white"
                            fillRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="modal-photo">
                    <div className="modal-main-photo" style={mainPhoto}></div>
                    <div className="modal-sub-photo">
                        <div className={number === 1 ? 'one act' : 'one'} onClick={handleOne}></div>
                        <div className={number === 2 ? 'two act' : 'two'} onClick={handleTwo}></div>
                        <div
                            className={number === 3 ? 'three act' : 'three'}
                            onClick={handleThree}></div>
                        <div
                            className={number === 4 ? 'four act' : 'four'}
                            onClick={handleFour}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ModalPicture }
