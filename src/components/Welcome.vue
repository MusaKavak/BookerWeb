<template>
    <div id="container">
        <div id="text-container">
            <span id="bold">Welcome To Booker</span><br>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellendus quo natus deserunt.</span>
        </div>
        <div id="image-container">
            <img src="/medical-team.png" alt="Medical Team">
        </div>
    </div>
</template>

<style scoped>
#container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 2;
}

#text-container {
    width: 30%;
    min-height: 15rem;
    padding: 1rem;
    border-radius: 15px;
    backdrop-filter: blur(1rem);
}

#text-container>#bold {
    font-size: 3rem;
    font-family: 'Domine', serif;
    color: var(--clr-accent-second);
}

#text-container>span {
    font-size: 1rem;
    font-family: 'Jost', sans-serif;
    color: var(--clr-accent-dark);
}

#image-container {
    width: 32rem;
}

#image-container img {
    width: inherit;
}
</style>
