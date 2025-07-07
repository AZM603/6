    let data = ['olma','anor', 'uzum', 'banan']

    alert(data);

    let a =confirm("malumot qoshasizmi ?")


    
    if(a == true ){
        data.push("kiwi")

    }else{
        data.pop()
    }
    console.log(data);
