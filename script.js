function doshit() {

let str = document.getElementById('lmao').innerHTML
let str2

for (let i = 0; i < str.length; i++) {
        str2 += `<a href="https://en.wikipedia.org/wiki/`+str.charAt(i)+`">`+str.charAt(i)+`</a>`
}

str2 = str2.replace("undefined", "")
document.getElementById('lmao').innerHTML = str2

}