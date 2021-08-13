function redColor (){
    document.body.style.backgroundColor='red'
}

function yelloColor (){
    document.body.style.backgroundColor='#660099'
}


//diffreent system btn color change  button number 3
const orange =document.getElementById('yellow')
yellow.onclick=orangeClr;

function orangeClr(){
    document.body.style.backgroundColor='#F75C1E' 
}

// handale event used annonimus function

var button4 = document.getElementById('extra')
button4.onclick=function(){
    document.body.style.backgroundColor='#0000F7'
}


// Different ways to use addEventListener on a button
const myGoldenColor = document.getElementById('gold')
myGoldenColor.addEventListener('click',myFunction)
    function myFunction(){
        document.body.style.backgroundColor='rgb(172, 117, 43)';
    }

const my5thbtn = document.getElementById('extra2')

my5thbtn.addEventListener('click',function(){
    document.body.style.backgroundColor='#F55A94'
})




