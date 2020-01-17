import React from "react";

function Footer() {
    const time = new Date().getFullYear();
    console.log(time);
  return (
    <footer>
<p>Copyright ⓒ {time}</p>
    </footer>
  );
}

export default Footer;
