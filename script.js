let data = [
{ 
    name:'Batman',
    src: 'img/batman.jpg'
},
{ 
    name:'capitaoAmerica',
    src: 'img/capitaozin.jpg'
},
{ 
    name:'doutorestranho',
    src: 'img/doutorestranho.jpg'
},
{ 
    name:'panteranegra',
    src: 'img/gatinhodark.jpg'
},
{ 
    name:'groot',
    src: 'img/groot.jpg'
},
{ 
    name:'minihulk',
    src: 'img/miniHulk.jpg'
},
{ 
    name:'superMen',
    src: 'img/superMen.jpg'
},
{ 
    name:'thor',
    src: 'img/thor.jpg'
},
{ 
    name:'miranha',
    src: 'img/miranha.jpg'
},{ 
    name:'Batman',
    src: 'img/batman.jpg'
},
{ 
    name:'capitaoAmerica',
    src: 'img/capitaozin.jpg'
},
{ 
    name:'doutorestranho',
    src: 'img/doutorestranho.jpg'
},
{ 
    name:'panteranegra',
    src: 'img/gatinhodark.jpg'
},
{ 
    name:'groot',
    src: 'img/groot.jpg'
},
{ 
    name:'minihulk',
    src: 'img/miniHulk.jpg'
},
{ 
    name:'superMen',
    src: 'img/superMen.jpg'
},
{ 
    name:'thor',
    src: 'img/thor.jpg'
},
{ 
    name:'miranha',
    src: 'img/miranha.jpg'
}
]


let lineContage = 0
 const line1 = document.querySelector('.line-1')
    const line2 = document.querySelector('.line-2')
    const line3 = document.querySelector('.line-3')
function addCardsInScreen(arr){
   
    
    for(let i = 0;i < arr.length; i++){
        lineContage += 1
        if(lineContage < 4){
            let createImg = document.createElement('img')

            createImg.id = 'line-1'
            createImg.className = 'cards'
            createImg.value = i
            createImg.src = arr[i].src

         line1.appendChild(createImg)
         createImg.addEventListener('click', (event) => {
            console.log(event.target);
        
          })
        }
        if(lineContage > 3 && lineContage < 7){
            let createImg = document.createElement('img')

            createImg.id = 'line-2'
            createImg.className = 'cards'
            createImg.value = i
            createImg.src = arr[i].src

         line2.appendChild(createImg)
         createImg.addEventListener('click', (event) => {
            console.log(event.target);
        
          })
         
        }
        if(lineContage > 6 && lineContage < 10){
            let createImg = document.createElement('img')

            createImg.id = 'line-3'

            createImg.className = 'cards'
            createImg.value = i
            createImg.src = arr[i].src

         line3.appendChild(createImg)
         createImg.addEventListener('click', (event) => {
            console.log(event.target);
        
          })
        
    }
}
}

addCardsInScreen(data)
