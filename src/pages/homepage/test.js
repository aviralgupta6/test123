import { useEffect, useRef } from "react";

const Test = () => {
  const ref = useRef(null);
  useEffect(() => {
    const frame = document.getElementById("myIframe");
    console.log(frame.contentWindow.document);
    console.log(frame.contentWindow);
  });

  return (
    // <iframe src="https://crsorgi.gov.in/web/index.php/auth/login.php"></iframe>
    <iframe src="https://crsorgi.gov.in/" id="myIframe" ref={ref} />
  );
};
export default Test;
