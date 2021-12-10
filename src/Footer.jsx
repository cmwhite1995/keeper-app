import React from 'react'

function Footer() {
    var copyRightDate = new Date().getFullYear();

    return <footer>&copy; Christopher White {copyRightDate}</footer>;
}
export default Footer;