document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("button");
    button.innerText = 'Change Color';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });
    button.addEventListener('click', () => {
        button.innerText=getText();

    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function getText(){
        const letters = "qwertyuiopasdfghjklzxcvbnm"
        let text = "";
        for (let i = 0; i < 161; i++) {
            text += letters[Math.floor(Math.random() * 26)];
        }
        return text;
    }
});