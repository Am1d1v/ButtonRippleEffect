

const buttons = document.querySelectorAll('.rippleButton');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Coordinates of click event
        const x = event.clientX;
        const y = event.clientY;

        const buttonTop = event.target.offsetTop;
        const buttonLeft = event.target.offsetLeft;


        // Calculate where we click inside the button
        const insideClickLeft= x - buttonLeft;
        const insideClickTop = y - buttonTop;

        const circleElement = document.createElement('span');
        circleElement.classList.add('circle');

        // Set coordindates to circle, so it shows in place where user click
        circleElement.style.top = `${insideClickTop}px`;
        circleElement.style.left = `${insideClickLeft}px`;
        button.append(circleElement);

        // Delete added in DOM circles
        setTimeout(() => {
            circleElement.remove();
        }, 1000);

    });
});
