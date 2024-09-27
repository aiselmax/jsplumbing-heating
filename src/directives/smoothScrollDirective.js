// Create a custom directive for smooth scrolling
const smoothScrollDirective = {
    mounted(el, binding) {
        // Handle both string and object binding values
        const options = typeof binding.value === 'string'
            ? { target: binding.value }  // If it's a string, treat it as the target
            : binding.value;  // Otherwise, it's an object with multiple options

        // Destructure the binding value or set defaults
        const {
            target,               // Required: section ID to scroll to
            easing = 'easeInOutCubic', // Default easing function
            duration = 1000,          // Default duration (1 second)
            offset = 0                // Default offset (no offset)
        } = options;

        // Define easing functions
        const easingFunctions = {
            easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
            easeOutCubic: (t) => (--t) * t * t + 1,
            linear: (t) => t,
            easeInQuad: (t) => t * t,
            easeOutQuad: (t) => t * (2 - t),
            easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
        };

        // Function to scroll to the specified section
        const scrollToSection = () => {
            const element = document.getElementById(target);
            if (element) {
                // Get the target position of the element in the document, adjusted by the offset
                const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;

                // Get the current scroll position
                const startPosition = window.scrollY;

                // Calculate the distance to scroll
                const distance = targetPosition - startPosition;

                let startTime = null;

                // Animation function for smooth scrolling
                const animateScroll = (currentTime) => {
                    if (startTime === null) startTime = currentTime; // Set start time if not already set
                    const timeElapsed = currentTime - startTime;

                    // Use the selected easing function
                    const progress = Math.min(timeElapsed / duration, 1);
                    const easingFunction = easingFunctions[easing] || easingFunctions.easeInOutCubic;
                    const easingProgress = easingFunction(progress);

                    // Scroll to the new position
                    window.scrollTo(0, startPosition + distance * easingProgress);

                    // Continue animating until the duration is reached
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animateScroll);
                    }
                };

                // Start the animation
                requestAnimationFrame(animateScroll);
            }
        };

        // Attach the scrollToSection function to the element's click event
        el.addEventListener('click', scrollToSection);

        // Store the function reference for cleanup
        el.__scrollToSection__ = scrollToSection;
    },
    unmounted(el) {
        // Clean up the event listener when the directive is unmounted
        el.removeEventListener('click', el.__scrollToSection__);
        delete el.__scrollToSection__; // Clean up the reference
    }
};

export default smoothScrollDirective;
