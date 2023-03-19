
////////////the animation will happend each 1000 sec
export const handleAnimation = (componentRef, animationClass) => {
    let isAnimating = false;
    let animationCount = 0;
    let interval = null;

    const handleScroll = () => {
        const element = componentRef.current;
        if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            const windowHeight = window.innerHeight ;

            if (top  < windowHeight && bottom > 0) {
                if (!isAnimating) {
                    isAnimating = true;
                    animationCount++;
                    element.classList.add(animationClass);
                    interval = setInterval(() => {
                        animationCount++;
                        element.classList.toggle(animationClass);
                        element.classList.toggle(animationClass + '-reverse');
                    }, 30000);
                }
            } else {
                clearInterval(interval);
                isAnimating = false;
                element.classList.remove(animationClass);
                element.classList.remove(animationClass + '-reverse');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearInterval(interval);
        isAnimating = false;
        animationCount = 0;
    };
};


////////////the animation will happend once
export const handleAnimation2 = (componentRef, animationClass) => {
    let isAnimating = false;
    let animationCount = 0;
    let interval = null;

    const handleScroll = () => {
        const element = componentRef.current;
        if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top < windowHeight && bottom > 0) {
                if (!isAnimating) {
                    isAnimating = true;
                    animationCount++;
                    element.classList.add(animationClass);
                    interval = setInterval(() => {
                        animationCount++;
                        element.classList.toggle(animationClass);
                        element.classList.toggle(animationClass + '-reverse');
                    }, 30000);
                }
            } else {
                clearInterval(interval);
                isAnimating = false;
                element.classList.remove(animationClass);
                element.classList.remove(animationClass + '-reverse');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearInterval(interval);
        isAnimating = false;
        animationCount = 0;
    };
};

