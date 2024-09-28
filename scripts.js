const pngImage = document.getElementById("png-animation");

function rotatePng() {
    let rotation = 0;
    const totalRotation = 360; 
    const duration = 5000; 
    const intervalTime = 10;
    const totalFrames = duration / intervalTime;
    const rotationIncrement = totalRotation / totalFrames; 

    setInterval(() => {
        rotation += rotationIncrement;
        pngImage.style.transform = `rotate(${rotation}deg)`;
    }, intervalTime);
}

rotatePng();
