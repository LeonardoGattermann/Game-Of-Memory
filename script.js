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

//Area de teste, comente e descomente para pular a tela inicial
    const screenOne = document.querySelector('.page-initial')
    const screenTwo = document.querySelector('.screen-game') 
    screenOne.style.display = 'none'
    screenTwo.style.display = 'flex'
//Area de teste, comente e descomente para pular a tela inicial0
    

let numberUtility = [];
function generateImageOrder(){
    
   while(numberUtility.length <= 17){
        let aleatorio = parseInt(Math.random() * 18)
            if(!numberUtility.includes(aleatorio)){
                numberUtility.push(aleatorio)
            }
        
    }}
    generateImageOrder()//aqui ele gera uma ordem aleatoria de numeros dentro da variavel numberUtility

function ShowImagesOnScreen(){
    const board = document.querySelector('.board');
    for(let i = 0 ; i < numberUtility.length;i++){
        let createImg = document.createElement('img')
        createImg.className = 'cards'
        createImg.src = data[numberUtility[i]].src
        board.appendChild(createImg)
    }
}
ShowImagesOnScreen()
    