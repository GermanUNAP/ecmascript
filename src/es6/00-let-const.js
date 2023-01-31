var reasign = "adfad";
reasign = 212;
console.log(reasign);
let asd = 23;
asd = "s    sasd";
console.log(asd);
const asaa = "dsfadsf";
//error:
//asaa="sas";
console.log(asaa);

//arrow functions

const fruits = () => {
    if(true){
        var fruit1 = "Apple"; //function scope
        let fruit2 = "Pineapple"; //block scope
        const fruit3 = "Orange"; //block scope
    }
    console.log(fruit1);
    //console.log(fruit2);//error
    //console.log(fruit3);//error
}
fruits();