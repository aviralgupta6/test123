import React from "react";
import QRCode from "react-qr-code";
import Barcode from "react-barcode";
const QR = () => {
  return (
    <div>
      <QRCode value="https://www.facebook.com" size={65} level="H" />
    </div>
  );
};

export const Bar = () => {
  return (
    <div>
      {/* <div style={{ background: "white", padding: "16px" }}> */}
      <Barcode
        value="http://github.com/kciter"
        fontSize={0}
        width={1}
        height={30}
        margin={0}
        textMargin={0}
      />
      {/* </div> */}
    </div>
  );
};

export default QR;
