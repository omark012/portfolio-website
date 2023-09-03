import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const GoToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    const listenToScroll = () => {
        if (window.scrollY > 350) {
            setShowTopBtn(true)
        }
        else {
            setShowTopBtn(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll)
    }, [])


    const goToHandle = () => {
        window.scrollTo({ top: 0, left: 0 })
    }

    return (
        <div className={`top-button ${showTopBtn && "show"}`} onClick={goToHandle}>
            <FaChevronUp className="icon-up" />
        </div>
    )
}

export default GoToTop;