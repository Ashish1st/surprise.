const box = document.querySelectorAll('.box');

let box1 = document.querySelector('#box');

box.forEach((elem, indx) => {

    elem.onmousedown = e => {
        let offsetX = e.clientX - elem.getBoundingClientRect().left
        let offsetY = e.clientY - elem.getBoundingClientRect().top

        document.onmousemove = e => {
            elem.style.left = e.clientX - offsetX + 'px'
            elem.style.top = e.clientY - offsetY + 'px'
        }
        document.onmouseup = () => document.onmousemove = null
    }
})


// box1.onmousedown = e => {
//     let offsetX = e.clientX - box1.getBoundingClientRect().left
//     let offsetY = e.clientY - box1.getBoundingClientRect().top

//     document.onmousemove = e => {
//         box1.style.left = e.clientX - offsetX + 'px'
//         box1.style.top = e.clientY - offsetY + 'px'
//     }
//     document.onmouseup = () => document.onmousemove = null
// }
