
////////////the animation will happend each 5 sec
export const handleAnimation = (componentRef, animationClass) => {
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
                    }, 5000);
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
