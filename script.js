let container = document.querySelector('.container');
let generateBtn = document.querySelector('.generate_btn');
let qrInput = document.querySelector('.qr_input');
let qrImg = document.querySelector('.qr_img');

generateBtn.addEventListener('click', () => {
    if (qrInput.value) {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrInput.value}`;
        qrImg.onload = () => {
            container.classList.add('active');
        };
    };
});