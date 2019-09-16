var tracker = []
tracker.length = 9
const playerSpan = document.getElementById("player")

function reset(){
    tracker.forEach((element, index, array)=>{
        document.getElementById(index).innerText = ""
        playerSpan.innerText = "X"
        tracker[index] = ""
    })
}

function play(boxId){
    let box = document.getElementById(boxId)
    if(playerSpan.innerText === "X"){
        playerSpan.innerText = "O"
        box.innerText = "X"
    } else {
        playerSpan.innerText = "X"
        box.innerText = "O"
    }
    tracker[boxId] = box.innerText
    console.log(tracker)

    if (tracker[0]){
        if(tracker[0] === tracker[1] && tracker[0] === tracker [2]){
            window.alert(`${tracker[0]} wins!`)
            reset()
        } else if (tracker[0] === tracker [3] && tracker [0] === tracker [6]){
            window.alert(`${tracker[0]} wins!`)
            reset()
        } else if (tracker[0] === tracker[4] && tracker[0] === tracker[8]){
            window.alert(`${tracker[0]} wins!`)
            reset()
        }
    }
    
    if (tracker[1]){
        if(tracker[1] === tracker[4] && tracker[1] === tracker[7]){
            window.alert(`${tracker[1]} wins!`)
            reset()
        } 
    } 
    
    if (tracker[3]){
        if(tracker[3] === tracker[4] && tracker[3] === tracker [5]){
            window.alert(`${tracker[3]} wins!`)
            reset()
        }
    }
    
    if (tracker[2]){
        if(tracker[2] === tracker[4] && tracker[2] === tracker[6]){
           window.alert(`${tracker[2]} wins!`)
           reset()
        } 
        if (tracker[2] === tracker[5] && tracker[2] === tracker[8]){
            window.alert(`${tracker[2]} wins!`)
            reset()
        }
    }
    
    if (tracker[6]){
        if(tracker[6] === tracker[7] && tracker[6] === tracker[8]){
            window.alert(`${tracker[6]} wins!`)
            reset()
        }
    }
    let boardFull = true;
    for (i=0; i<tracker.length; i++){
        if (!tracker[i]){
            boardFull = false
        } 
    }
    if (boardFull === true){
        window.alert(`Cat's game, no winner`)
        reset()
    }

}
// combinations:
// 012
// 345
// 678
// 036
// 147
// 258
// 048
// 246
// 3 @ 0
// 1 @ 1
// 2 @ 2
// 1 @ 3
// 1 @ 6