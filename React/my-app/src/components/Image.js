import React from 'react';
import Logo from '../logo.svg';        // logo trzeba zaimportować


function Image() {
    return <img src="https://picsum.photos/400?random" alt="obrazek" />;
}
function ImageSVG() {
    return <img src={Logo} alt="obrazek SVG" />;
}

export {Image, ImageSVG};