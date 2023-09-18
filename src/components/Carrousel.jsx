/* eslint-disable no-unused-vars */
import { Circle, NavigateBefore, NavigateNext } from "@mui/icons-material";
import { useCallback, useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
function Carrousel({ slides }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef(null);

    const sliderStyles = {
        height: '100%',
        width: '95%',        
        position: 'relative',
    }
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${new URL(`../images/publicidades/${slides[currentIndex].url}`, import.meta.url)})`,
    }
    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: 'black',
        zIndex: 1,
        cursor: 'pointer',
    }

     const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',       
        color: 'black',
        zIndex: 1,
        cursor: 'pointer',
    }

    const dotContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
    }

    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            goToNext();
        }, 5000);

        return () => clearTimeout(timerRef.current);
    }, [goToNext]);

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>
                <NavigateBefore sx={{ fontSize: '45px'}} />
            </div>
            <div style={rightArrowStyles} onClick={goToNext}>
                <NavigateNext sx={{ fontSize: '45px'}} />
             </div>
            <div style={slideStyles}> </div>
            <div style={dotContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>
                        <Circle sx={{ fontSize: '15px' }} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carrousel;