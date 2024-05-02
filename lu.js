// let fondo = document.getElementById('body');
// let boton = document.getElementById('buton');
// let boton2 = document.getElementById('buton2');
// let curri = document.getElementById('curriculum');


// boton2.addEventListener('click', function(){
//     if (this.cheked) {
        
//     }else{
//         fondo.setAttribute('style','background-color:black;')
//     }
// })

// boton.addEventListener('click', function(){
//     if (this.cheked) {
        
//     }else{
//         fondo.setAttribute('style','background-color:rgb(225, 225, 200);')
//     }
// })
// // ------------------------------------------------------------------------------------------------

// boton2.addEventListener('click', function(){
//     if (this.cheked) {
        
//     }else{
//         curri.setAttribute('style','background-color: rgb(4, 255, 0);')
//     }
// })

// boton.addEventListener('click', function(){
//     if (this.cheked) {
       
//     }else{
//         curri.setAttribute('style','color :rgb(225, 225, 200);')                                  
//     }
// })


// lo de arriba no


let input1 = document.getElementById('input1');
let agregar = document.getElementById('agregar');
let tex1 = document.getElementById('div2');


agregar.addEventListener('click' , function(){
    if (input1 === '') {
        
    } else {
        let tex2 = document.createElement('li')
        tex2.innerHTML = input1.value
        tex1.appendChild(tex2)
    }

})


let input2 = document.getElementById('input2');
let agregar2 = document.getElementById('agregar2');
let tex2 = document.getElementById('div3');


agregar2.addEventListener('click' , function(){
    if (input2 === '') {
        
    } else {
        let tex3 = document.createElement('li')
        tex3.innerHTML = input2.value
        tex2.appendChild(tex3)
    }

})

