function tileSound(tile){
    var n40 = new Audio('sound/40.wav');    //C
    var n42 = new Audio('sound/42.wav');    //D
    var n44 = new Audio('sound/44.wav');    //E
    var n41 = new Audio('sound/41.wav');    //Db
    var n43 = new Audio('sound/43.wav');    //Eb
    var n45 = new Audio('sound/45.wav');    //F

    if (tile == "t1"){
        n40.play();
    }
    else if (tile == "t2") {
        n42.play();
    }
    else if (tile == "t3") {
        n44.play();
    }
    else if (tile == "t4") {
        n45.play();
    }
    else if (tile == "t5") {
        n45.play();
    }
    else if (tile == "t6") {
        n45.play();
    }
    else if (tile == "t7") {
        n45.play();
    }
    else if (tile == "t8") {
        n45.play();
    }
    else if (tile == "bt1") {
        n41.play();
    }
    
    else if (tile == "bt2"){
        n43.play();
    }
    else if (tile == "bt3") {
        n45.play();
    }
    else if (tile == "bt4") {
        n45.play();
    }
    else if (tile == "bt5") {
        n45.play();
    }

}