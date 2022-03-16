import { domOn  } from '../lib/easyManipulation.js'

domOn("#test", "click", async (evt) => {
    evt.preventDefault()

    console.log(5)

})

console.log(7)