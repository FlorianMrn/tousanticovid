export const handleCarrousel = (event, carrousel, articles, setCarrousel) => {

    if ((event.target.id === "right") && carrousel.end !== articles.length - 1) {
        return setCarrousel((prevState) => ({
            start : prevState.start + 4,
            end : (prevState.end + 4) <= articles.length - 1 ? prevState.end + 4 : articles.length - 1
        }));
    }

    if (event.target.id === "left"  && carrousel.start > 0) {

        if ((carrousel.end - carrousel.start) !== 4) {
            
            return setCarrousel((prevState) => ({
                start : carrousel.start - 4 ,
                end : carrousel.end - (carrousel.end - carrousel.start)
            }));
        }
        return setCarrousel((prevState) => ({
            start : prevState.start - 4,
            end : prevState.end - 4
        }));
    }

};