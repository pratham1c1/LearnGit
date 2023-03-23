function add() {
    
    var i = 0;
    var sum = 0;

    for(i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    console.log("The sum : " + sum);
}


add(1,3,4,2,6,1);