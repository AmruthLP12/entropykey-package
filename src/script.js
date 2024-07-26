async function generateTokenFromVideo(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:",.<>?/~`';
    let token = '';

    // Access the webcam
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.getElementById('video');
    video.srcObject = stream;
    await video.play();

    // Capture a frame from the video
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the pixel data
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

    // Generate the token
    for (let i = 0; i < length; i++) {
        const randomIndex = imageData[i % imageData.length];
        token += characters[randomIndex % characters.length];
    }

    // Stop the video stream
    stream.getTracks().forEach(track => track.stop());

    return token;
}

// document.getElementById('generateTokenBtn').addEventListener('click', async () => {
//     const tokenLength = 16; // Change this to your desired token length
//     const token = await generateTokenFromVideo(tokenLength);
//     document.getElementById('tokenOutput').value = token;
//     document.getElementById('tokenContainer').classList.remove('d-none');
// });

// document.getElementById('copyIcon').addEventListener('click', () => {
//     const tokenOutput = document.getElementById('tokenOutput');
//     tokenOutput.select();
//     document.execCommand('copy');
//     alert('Token copied to clipboard');
// });


export default generateTokenFromVideo;
