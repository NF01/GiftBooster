
/**
 * Function which select all DOM selectors transmited and add an eventlistener for each of them 
 * Licence: GNU General Public License v3.0  
 * Author: Nicolas Chabloz (remasterized by NF01) 
 */
const domOn = (selector, event, callback) => {
    document.querySelectorAll(selector).forEach(el => el.addEventListener(event, callback))
}



export { domOn};
