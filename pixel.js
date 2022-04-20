PixelArt(".parent", 10, 10)
// fillColorPallete()

// window.onbeforeunload=function(){
//     const targetElement=document.querySelector(".secondChallenge")
//     targetElement.scrollIntoView()
// }

window.onload=function(){
    // window.scrollTo(-200,100)
    const targetElement=document.querySelector(".secondChallenge")
    targetElement.scrollIntoView()
}

var currentColor = "#FFFFFF"
var currentElement = null

document.getElementById("reset").onclick = () => {
    currentColor = "#FFFFFF"
    currentElement = null
    const list1 = document.querySelectorAll('.box:not(.color-pallete)')
    const list2 = document.querySelectorAll('.color-pallete')

    console.log(list1);

    list1.forEach(item => {
        item.style.background = "#FFFFFF"
    });
    list2.forEach(item => {
        item.innerHTML = ""
    });
}

function PixelArt(el, rows, cols) {
    // write logic to create pixel art grid.
    element = document.querySelector(el);
    fragment = document.createDocumentFragment()
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            // const cclass=i+"d"+j
            const para = document.createElement("div")
            para.classList.add("box")
            // para.classList.add(cclass)
            para.dataset.position = [i, j]
            para.dataset.color = "#FFFFFF"
            fragment.append(para)
        }
        element.append(fragment)
    }

    for (i = 0; i < cols; i++) {
        const para = document.createElement("div")
        const randomColor = generateColor()
        console.log(randomColor);
        para.classList.add("box")
        para.classList.add("color-pallete")
        para.dataset.position = [rows, i]
        para.dataset.color = randomColor
        para.style.backgroundColor = randomColor
        fragment.append(para)

    }

    element.append(fragment)

    element.addEventListener("click", fillColor)
    element.addEventListener("dragover", dragColor)
    // element.addEventListener("drag",fillColor)



    function dragColor(e) {
        if (!e.target.classList.contains("color-pallete") && e.target.classList.contains("box")) {
            e.target.style.background = currentColor
        }
    }

    function fillColor(e) {
        let color = e.target.dataset.color
        let position = e.target.dataset.position
        let i = position.split(',')
        let j = i[0] * i[1]

        // console.log(color + "Ssa" + position + "pos" + i[0] + "sds" + i[1]);

        if (e.target.classList.contains("color-pallete")) {
            // currentElement.innerHTML="" 

            if (currentElement != null) {
                currentElement.innerHTML = null
            }

            currentElement = e.target
            currentElement.innerHTML = "🤩"
            console.log("sdafg");
            currentColor = color
        }
        else {
            // console.log(e.style.backgroundColor);
            // currentElement = false
            e.target.style.background = currentColor
        }
    }



}



function generateColor() {
    const minValue = 0x000000
    const maxValue = 0xFFFFFF
    let randomNumber = Math.random() * maxValue;
    randomNumber = Math.floor(randomNumber)
    randomNumber = randomNumber.toString(16)
    randomNumber = randomNumber.padStart(6, '0')
    randomNumber = randomNumber.toUpperCase()
    return '#' + randomNumber
}
