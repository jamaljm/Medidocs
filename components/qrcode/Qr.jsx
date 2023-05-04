/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Image from "next/image";
import QRCode from "qrcode";
import { useState, useEffect } from "react";

export default function qr({ obj,style }) {
  console.log(obj);

  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      obj,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );
  };

  useEffect(() => {
    GenerateQRCode();
  }, []);

  return(<img src={qr} className={style}/>);
}
