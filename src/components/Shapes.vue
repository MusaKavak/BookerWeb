<template>
    <div id="container">
        <div id="one" class="shape">
            <svg class="shape-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                        <stop id="stop1" stop-color="rgba(255, 0, 62, 1)" offset="0%"></stop>
                        <stop id="stop2" stop-color="rgba(0, 186, 113, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path fill="url(#sw-gradient)"
                    d="M21.5,-36.4C28.7,-33.1,35.9,-29,39.6,-22.8C43.3,-16.6,43.5,-8.3,41.9,-0.9C40.3,6.4,36.9,12.9,33.1,18.9C29.3,25,25.2,30.7,19.6,35.1C14,39.5,7,42.7,-0.4,43.5C-7.9,44.3,-15.8,42.6,-21.9,38.5C-28.1,34.4,-32.4,27.8,-36.7,21C-41,14.2,-45.1,7.1,-45.9,-0.4C-46.7,-8,-44.1,-16,-39.8,-22.8C-35.5,-29.5,-29.5,-35.2,-22.6,-38.7C-15.7,-42.2,-7.8,-43.6,-0.3,-43C7.2,-42.4,14.3,-39.8,21.5,-36.4Z"
                    width="100%" height="100%" transform="translate(50 50)" stroke-width="0"
                    style="transition: all 0.3s ease 0s;" stroke="url(#sw-gradient)"></path>
            </svg>
        </div>
        <div id="two" class="shape">
            <svg id="shape-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                        <stop id="stop1" stop-color="rgba(255, 0, 62, 1)" offset="0%"></stop>
                        <stop id="stop2" stop-color="rgba(0, 148, 90, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path fill="none"
                    d="M17.5,-30.3C21.3,-28,22.3,-20.7,26.6,-14.8C30.8,-9,38.3,-4.5,41.6,1.9C44.9,8.3,44,16.6,39.6,22.2C35.3,27.8,27.4,30.8,20.2,30.9C13,31,6.5,28.4,0.9,26.8C-4.6,25.2,-9.3,24.7,-16.4,24.5C-23.5,24.3,-33,24.4,-36.6,20.4C-40.2,16.4,-37.9,8.2,-35.3,1.5C-32.8,-5.2,-29.9,-10.4,-27.4,-16.3C-24.8,-22.2,-22.6,-28.7,-18.1,-30.6C-13.6,-32.6,-6.8,-29.9,0,-29.9C6.8,-29.9,13.6,-32.6,17.5,-30.3Z"
                    width="100%" height="100%" transform="translate(50 50)" stroke-width="1"
                    style="transition: all 0.3s ease 0s;" stroke="url(#sw-gradient)"></path>
            </svg>
        </div>
    </div>
</template>

<style scoped>
#container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.shape-svg {
    width: inherit;
    height: auto;
}

.shape {
    position: absolute;
}

#one {
    width: 30rem;
    top: -5rem;
    right: 0;
    transform: rotate(180deg);
}

#two {
    left: -15rem;
    top: -20rem;
    width: 50rem;
}
</style>