import { useRef } from 'react';

function QRCodeScanner({ onScan }) {

  // useEffect(() => {
  //   const video = videoRef.current;
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext('2d');

  //   navigator.mediaDevices
  //     .getDisplayMedia({ video: { mediaSource: 'screen' } })
  //     .then((stream) => {
  //       video.srcObject = stream;
  //       video.play();
  //     });

  //   const tick = () => {
  //     if (video.readyState === video.HAVE_ENOUGH_DATA) {
  //       canvas.width = video.videoWidth;
  //       canvas.height = video.videoHeight;
  //       context.drawImage(video, 0, 0, canvas.width, canvas.height);

  //       const imageData = context.getImageData(
  //         0,
  //         0,
  //         canvas.width,
  //         canvas.height
  //       );
  //       const code = jsQR(imageData.data, imageData.width, imageData.height);

  //       if (code) {
  //         setQrCode(code.data);
  //       }
  //     }

  //     requestAnimationFrame(tick);
  //   };

  //   tick();
  // }, []);

  return (
    <div>
      <video  style={{ width: '100%' }} autoPlay muted onLoadedMetadata />
    </div>
  );
}

export default QRCodeScanner;
