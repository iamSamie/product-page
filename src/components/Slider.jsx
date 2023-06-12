import { useContext } from 'react'
import { Context } from '../context'

function Slider() {
    const { setModalActive, number, setNumber } = useContext(Context)
    let windowWidth = window.innerWidth
    const mainPhoto = {
        backgroundImage: `url(../images/image-product-${number}.jpg)`,
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
        <div className="left">
            <div
                className="main-photo"
                style={mainPhoto}
                onClick={() => {
                    setModalActive(true)
                }}></div>
            {windowWidth <= 768 ? (
                <div>
                    <div className="next next-mobile" onClick={next}>
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
                    <div
                        className="previous"
                        onClick={previous}
                        style={{ left: '18px', top: '200px' }}>
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
                </div>
            ) : (
                <div className="sub-photo">
                    <div className={number === 1 ? 'one act' : 'one'} onClick={handleOne}></div>
                    <div className={number === 2 ? 'two act' : 'two'} onClick={handleTwo}></div>
                    <div
                        className={number === 3 ? 'three act' : 'three'}
                        onClick={handleThree}></div>
                    <div className={number === 4 ? 'four act' : 'four'} onClick={handleFour}></div>
                </div>
            )}
        </div>
    )
}

export { Slider }
