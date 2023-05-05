import { useRef } from 'react';

function QRCodeScanner({ onScan }) {
  const videoRef = useRef(null);
  const codeReader = new BrowserQRCodeReader();

  const scan = async () => {
    try {
      const result = await codeReader.decodeFromVideoDevice(undefined, videoRef.current);
      onScan(result.getText());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} autoPlay muted onLoadedMetadata={scan} />
    </div>
  );
}

export default QRCodeScanner;
