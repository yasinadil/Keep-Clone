import React from "react";

function Footer(){
    var currentTime = new Date()
    var year = currentTime.getFullYear()
return (
    <footer>
        <p>Copyright ⓒ {year} Adil Yasin</p>
    </footer>
);
}

export default Footer;