import { useRef, useState, useEffect } from 'react';
import jsQR from 'jsqr';

function QRCodeScanner() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    navigator.mediaDevices
      .getDisplayMedia({ video: { mediaSource: 'screen' } })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      });

    const tick = () => {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          setQrCode(code.data);
        }
      }

      requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return (
    <div>
      <video ref={videoRef} style={{ display: 'none' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <p>{qrCode}</p>
    </div>
  );
}

export default QRCodeScanner;
