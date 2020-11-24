import React, { useState, useEffect } from "react";

const LightBox = ({ images, showModal, toggleModal }) => {
    const [slideIndex, setSlideIndex] = useState(-1);

    // handle looping of image viewing
    useEffect(() => {
        if (slideIndex > images.length - 1) {
            setSlideIndex(0);
        }
        if (slideIndex < 0) {
            setSlideIndex(images.length - 1);
        }
    }, [slideIndex, images]);

    // which direction do we want to go?
    const slideDirection = n => {
        if (!showModal) {
            toggleModal(true);
        }
        let slideI = slideIndex;
        setSlideIndex((slideI += n));
    };

    // open selected slide directly in lightbox
    const openSlides = n => {
        toggleModal(true);
        setSlideIndex(n);
    };

    // simple Thumbnail component for lightbox
    const Thumbnail = ({ image, index }) => (
        <div className="thumbRow">
            <img
                className="thumbnail "
                src={image}                
                alt="gallery"
            />
            <span onClick={() => openSlides(index)}>***</span>
        </div>
    );

    // Component that opens in the lightbox
    const FullsizeSlide = ({ index, length, image, caption, isShown }) => (
        <>
            {isShown && (
                <div>
                    <div className="numbertext whiteFont absolute">
                        {index}/{length}
                    </div>
                    <img src={image} className="fullWidth slide" alt="gallery" />
                    <div className="whiteFont">{caption}</div>
                </div>
            )}
        </>
    );

    return (
        <>
                    {images.map((elem, index) => (
                        <Thumbnail
                            key={index.toString()}
                            image={elem.image}
                            index={index}
                        />
                    ))}
            {/* Handle lightbox */}
            {showModal && (
                <div className="popup">
                    <span
                        className="close cursor whiteFont absolute"
                        onClick={() => toggleModal(false)}
                    >
                        &times;
          </span>
                    <div className="popup-content">
                        {/* FullSize images */}
                        {images.map((elem, index) => (
                            <FullsizeSlide
                                key={index.toString()}
                                index={index + 1}
                                length={images.length}
                                image={elem.image}
                                isShown={slideIndex === index}
                                caption={elem.caption}
                            />
                        ))}

                        <button className="prev" onClick={() => slideDirection(-1)}>
                            &#10094;
            </button>
                        <button className="next" onClick={() => slideDirection(1)}>
                            &#10095;
            </button>
                    </div>
                </div>
            )}
        </>
    );
};
export default LightBox;
