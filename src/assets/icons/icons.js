import React from 'react';

export const returnIcon = (selectedIcon) => {
    if(selectedIcon == 'chevron-up'){
        return (
            <i>
                <svg aria-hidden="true" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>  
            </i>
        )
    }
    else if(selectedIcon == 'chevron-down'){
        return (
            <i>
                <svg aria-hidden="true" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
            </i>
        )
    }

    else if(selectedIcon == 'chevron-rigth'){
        return (
            <i>
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
            </i>
        )
    }

    else if(selectedIcon == 'chevron-left'){
        return (
            <i>
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>
            </i>
        )
    }

    else if(selectedIcon == 'moon-icon'){
        return (
            <i>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 90 90" space="preserve"> <g><path d="M44.18,3.05c-18.87,35.44,0.74,60.07,39.23,52.54c-5.05,18.17-23.62,29.77-41.89,26.14 C20.61,77.59,4.69,57.6,6.77,38.1C8.98,17.42,24.22,3.14,44.18,3.05z"></path> </g></svg>
            </i>
        )
    }

    else if(selectedIcon == 'sun-icon'){
        return (
            <i>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 612.001 612.001"> <g> <g> <path d="M306,149.341c-86.382,0-156.661,70.278-156.661,156.661c0,86.382,70.278,156.66,156.661,156.66    s156.66-70.278,156.66-156.66C462.66,219.618,392.382,149.341,306,149.341z"></path> <path d="M274.194,117.278h63.612c5.032,0,9.356-2.101,11.863-5.763c2.508-3.662,2.9-8.453,1.079-13.146L315.749,8.257    c-2.789-7.184-7.305-8.256-9.749-8.256s-6.96,1.073-9.749,8.255l-35,90.114c-1.821,4.692-1.427,9.482,1.079,13.145    C264.837,115.178,269.162,117.278,274.194,117.278z"></path><path d="M337.806,494.723h-63.612c-5.032,0-9.357,2.102-11.863,5.764c-2.506,3.663-2.9,8.453-1.079,13.145l34.999,90.114    c2.789,7.182,7.305,8.254,9.749,8.254c2.444,0,6.96-1.072,9.749-8.254l34.999-90.115c1.821-4.69,1.429-9.48-1.079-13.144    C347.162,496.825,342.838,494.723,337.806,494.723z"></path><path d="M127.54,190.824c2.412,5.477,7.028,8.746,12.348,8.746c3.644,0,7.257-1.608,10.174-4.526l44.981-44.98    c3.558-3.558,5.13-8.102,4.312-12.466c-0.819-4.362-3.928-8.028-8.532-10.056l-88.467-38.973c-2.233-0.983-4.336-1.482-6.25-1.482    c-3.201,0-5.959,1.415-7.568,3.882c-1.357,2.081-2.454,5.747,0.031,11.389L127.54,190.824z"></path><path d="M484.46,421.178c-2.412-5.477-7.027-8.746-12.346-8.746c-3.645,0-7.259,1.609-10.177,4.527l-44.981,44.98    c-3.558,3.559-5.13,8.104-4.312,12.466c0.818,4.362,3.929,8.028,8.532,10.055l88.466,38.974c2.233,0.983,4.336,1.482,6.25,1.482    c3.201,0,5.959-1.417,7.568-3.882c1.358-2.083,2.455-5.748-0.03-11.389L484.46,421.178z"></path><path d="M461.937,195.044c2.918,2.918,6.532,4.526,10.176,4.526c5.319,0,9.934-3.269,12.348-8.746l38.972-88.465    c2.486-5.643,1.389-9.308,0.031-11.389c-1.609-2.467-4.367-3.882-7.568-3.882c-1.914,0-4.017,0.499-6.251,1.483l-88.466,38.97    c-4.604,2.029-7.715,5.694-8.532,10.057c-0.818,4.363,0.754,8.908,4.312,12.466L461.937,195.044z"></path><path d="M150.063,416.959c-2.918-2.918-6.532-4.527-10.177-4.527c-5.319,0-9.934,3.269-12.346,8.746l-38.972,88.465    c-2.486,5.643-1.389,9.308-0.031,11.39c1.609,2.466,4.368,3.882,7.568,3.882c1.914,0,4.017-0.499,6.251-1.484l88.466-38.972    c4.604-2.028,7.715-5.694,8.532-10.056c0.818-4.362-0.753-8.907-4.312-12.466L150.063,416.959z"></path><path d="M603.745,296.251l-90.111-34.996c-1.942-0.755-3.896-1.137-5.806-1.137c-7.593,0-13.104,5.921-13.104,14.078l0.001,63.613    c0,8.157,5.511,14.078,13.104,14.078c1.912,0,3.866-0.382,5.806-1.136l90.112-34.999c7.182-2.79,8.254-7.306,8.254-9.751    C612.001,303.558,610.926,299.04,603.745,296.251z"></path><path d="M104.173,351.886c7.594,0,13.106-5.921,13.106-14.078v-63.613c0-8.157-5.511-14.078-13.106-14.078    c-1.912,0-3.864,0.382-5.805,1.136L8.255,296.251C1.073,299.04,0,303.556,0,306.001c0,2.444,1.072,6.96,8.255,9.752l90.111,34.996    C100.308,351.503,102.261,351.886,104.173,351.886z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </i>
        )
    }

    else if(selectedIcon == 'bars'){
        return (
            <i>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
            </i>
        )
    }

    else if(selectedIcon == 'close'){
        return (
            <i>
                <svg aria-hidden="true" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg=""><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
            </i>
        )
    }

    else if(selectedIcon == 'mail-fill'){
        return (
            <i>
                <svg aria-hidden="true" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
            </i>
        )
    }

    else if(selectedIcon == 'star-fill'){
        return (
            <i>
                <svg aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            </i>
        )
    }

    else if(selectedIcon == 'search-fill'){
        return (
            <i>
                <svg aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
            </i>
        )
    }
}