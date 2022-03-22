class CBL 
{
    constructor(){
    }

    func(){
        console.log("tested good")
    }

    makeIt(){
        let li = tag('l1','1','TEST',{})
        tag('input',li,'cbl',{
            type:'checkbox',
            onclick:"ncbl.func();"
        })
    }
}