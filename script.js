function gridCreator() {
    const boxNum = [1,2,3,4,5,6,7,8,9]

    boxNum.forEach((num) => {
        document.querySelector(".js-grid").innerHTML += `
            <div class = "box js-box js-${num}">
              
            </div>
        `
    })
}

gridCreator()
clicksHandler()

document.querySelector('.js-new-game').
    addEventListener("click", () => {
        document.querySelector('.js-grid').innerHTML = "";
        document.querySelector('.js-win-1').innerHTML = "";
        document.querySelector('.js-win-2').innerHTML = "";

        gridCreator()
        clicksHandler()
})


function clicksHandler(){

    const first = document.querySelector(".js-1")
    const second = document.querySelector(".js-2")
    const third = document.querySelector(".js-3")
    const fourth = document.querySelector(".js-4")
    const fifth = document.querySelector(".js-5")
    const sixth = document.querySelector(".js-6")
    const seventh = document.querySelector(".js-7")
    const eigth= document.querySelector(".js-8")
    const ninth = document.querySelector(".js-9")

    
    
    let i = 1;
    document.querySelectorAll(".js-box").forEach((box) => {
        box.addEventListener("click", () => {

            if (i>9){
                i = i
            }

            else if ( box.innerHTML == "<b>X</b>" || box.innerHTML === "<b>O</b>" ){

                box.innerHTML = box.innerHTML

            }
            
            else if (i % 2 != 0) {
                console.log(i)
                box.innerHTML = "<b>X</b>"
                i = i+1;
                if (box.innerHTML != "<b>X</b>"){
                    console.log(box.innerHTML)
                }  else {
                    console.log("else" + box.innerHTML)
                }
                

            } else {
                console.log(i)
                box.innerHTML = "<b>O</b>"
                i = i+1;
            }
            

            if (i>4){

                if ( (first.innerHTML == "<b>X</b>" && second.innerHTML == "<b>X</b>" && third.innerHTML =="<b>X</b>") || (first.innerHTML == "<b>O</b>" && second.innerHTML == "<b>O</b>" && third.innerHTML =="<b>O</b>") ) {
                    i = 10
                    if (first.innerHTML == "<b>X</b>"){
                        
                        classHandler(first,second, third, 1)
                    } else {                       
                        classHandler(first, second, third ,2)
                    }                   
                }

                else if ( (fourth.innerHTML == "<b>X</b>" && fifth.innerHTML == "<b>X</b>" && sixth.innerHTML =="<b>X</b>") || (fourth.innerHTML == "<b>O</b>" && fifth.innerHTML == "<b>O</b>" && sixth.innerHTML =="<b>O</b>") ) {
                    
                    i = 10;
                    
                    if (fourth.innerHTML === "<b>X</b>"){
                        classHandler(fourth, fifth, sixth, 1)
                    } else {                       
                        classHandler(fourth, fifth, sixth, 2)
                    }                   
                }

                else if ((seventh.innerHTML == "<b>X</b>" && eigth.innerHTML == "<b>X</b>" && ninth.innerHTML =="<b>X</b>") || (seventh.innerHTML == "<b>O</b>" && eigth.innerHTML == "<b>O</b>" && ninth.innerHTML =="<b>O</b>") ) {
                    i = 10;
                    if (seventh.innerHTML == "<b>X</b>"){
                        classHandler(seventh, eigth, ninth, 1)
                    } else{
                        classHandler(seventh, eigth, ninth, 2)
                    }
                }

                else if ((first.innerHTML == "<b>X</b>" && fourth.innerHTML == "<b>X</b>" && seventh.innerHTML =="<b>X</b>") || (first.innerHTML == "<b>O</b>" && fourth.innerHTML == "<b>O</b>" && seventh.innerHTML =="<b>O</b>")  ) {
                    i = 10;
                    if (seventh.innerHTML == "<b>X</b>"){
                        classHandler(first, fourth, seventh, 1)
                    } else{
                        classHandler(first, fourth, seventh, 2)
                    }
                }

                else if ((second.innerHTML == "<b>X</b>" && fifth.innerHTML == "<b>X</b>" && eigth.innerHTML =="<b>X</b>") || (fifth.innerHTML == "<b>O</b>" && second.innerHTML == "<b>O</b>" && eigth.innerHTML =="<b>O</b>") ) {
                    i = 10;
                    if (second.innerHTML == "<b>X</b>"){
                        classHandler(second, fifth,eigth, 1)
                    } else{
                        classHandler(second, fifth, eigth, 2)
                    }
                }

                else if ((third.innerHTML == "<b>X</b>" && sixth.innerHTML == "<b>X</b>" && ninth.innerHTML =="<b>X</b>") || (third.innerHTML == "<b>O</b>" && sixth.innerHTML == "<b>O</b>" && ninth.innerHTML =="<b>O</b>") ) {
                    i = 10;
                    if (third.innerHTML == "<b>X</b>"){
                        classHandler(third, sixth, ninth, 1)
                    } else{
                        classHandler(third, sixth, ninth, 2)
                    }
                }

                else if ((first.innerHTML == "<b>X</b>" && fifth.innerHTML == "<b>X</b>" && ninth.innerHTML =="<b>X</b>") || (first.innerHTML == "<b>O</b>" && fifth.innerHTML == "<b>O</b>" && ninth.innerHTML =="<b>O</b>") ) {
                    i = 10;
                    if (first.innerHTML == "<b>X</b>"){
                        classHandler(fifth, first, ninth, 1)
                    } else{
                        classHandler(fifth, first, ninth, 2)
                    }
                }

                else if ((seventh.innerHTML == "<b>X</b>" && fifth.innerHTML == "<b>X</b>" && third.innerHTML =="<b>X</b>") || (third.innerHTML == "<b>O</b>" && fifth.innerHTML == "<b>O</b>" && seventh.innerHTML =="<b>O</b>")  ) {
                    
                    i = 10;
                    if (seventh.innerHTML == "<b>X</b>"){
                        classHandler(third,  fifth,seventh, 1)
                    } else{
                        classHandler(third,  fifth,seventh, 2)
                    }
                }
            }                       
        })       
    })   
}



function classHandler(a,b,c, player) {

    a.classList.remove("box")
    b.classList.remove("box")
    c.classList.remove("box")

    a.classList.add("new-box")
    b.classList.add("new-box")
    c.classList.add("new-box")

    a.innerHTML = player == 1?"<b>----X----</b>":"<b>----O-----</b>"
    b.innerHTML = player == 1?"<b>-----X----</b>":"<b>----O-----</b>"
    c.innerHTML = player == 1?"<b>----X----</b>":"<b>----O-----</b>"
    console.log(a)
    
    if (player == 1) {
        winDec(1)
    } else {
        winDec(2)
    }
}

function winDec (a) {
    document.querySelector(`.js-win-${a}`).innerHTML = `
    <div>
    <img src = "cong.webp" class="win-image">
    </div>

    <div class="wish">
    Congrats! You Won 
   </div>
`;
}


