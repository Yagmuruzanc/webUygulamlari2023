//name="yagmur"
//Ecmascript 9 dan önce kullanılan bir değişken
//Değişken Tanımlama type safe değil
var name1="yagmur"
//Ecmascript 9 dan sonra let ve const
//Değişken tanımlama
let name2="yagmur"
//var ve let farkları
//var function scope let block scope
//Sabit Tanımlama
console.log(name2)
// Sabit tanımlama
//const name="yagmur"
/* function test(){
    if(true){
       var degisken="Merhaba Dünya"
   }
   if(true){
       console.log(degisken)
   }
}
test() */

//var keyword değişkenler tekrar tanımlanabilir
/*let degisken="Merhaba dünya"
let degisken="hello world"
console.log(degisken) */

//Hoisting: Bir değişkeni önce tanımlama sonra kullanmak
/*degisken="Merhaba Dünya"
console.log(degisken)
var degisken */
//let -const farkları
//let mutable const imutable
/*let name="yagmur"
const adi="yagmur"
name="Ahmet"
adi="Ahmet" */
/* var agirlik=50
if(agirlik>49){
    var miktar=1.4
    console.log(`${miktar} su içmelisin`)
}
console.log(miktar) */
//geleneksel yöntem
function topla(a,b){
    return a+b
}
//arrow function
 const topla=(a,b)=>a+b */
/*function test(){
    console.log("Merhaba"+this.name)
}
const person={
    name: "Yağmur",
    soyle:test,
}
person.soyle() */
//Arrow function

/*const test=()=>{
    console.log("Merhaba dünya"+this.name)
}
const person={
    name:"Yağmur",
    soyle:test,
}
person.soyle() */

/*function addToCart(urun_adi,adet,fiyat){

}
addToCart("elma",5,10)
addToCart("armut",2,20)
addToCart("Limon",3,15)

let urunler=[{urun_adi:"Elma",fiyat:5,adet:20},
             {urun_adi:"Armut",fiyat:2,adet:11},
             {urun_adi:"Elma",fiyat:4,adet:23}]

function addToCart(urun){
    console.log(urun.urun_adi)
    console.log(urun.adet)
    console.log(urun.fiyat)

}             
console.log(urunler[0]) /*
//Rest Operatörü

/*function topla(... sayilar){
    let toplam=0
    for(let i=0<sayilar.length;i++){
        toplam=toplam+sayilar[i]
    
    }
    console.log(toplam)
}
sum=(10,20,30,40,50,60,70)

*/

let bolgeler[icanadolu,marmara,karadeniz]=["İç Anadolu","marmara","karadeniz"]
console.log(birinci)

let[birinci,ikinci,ucuncu]=[{adi: "İç Anadolu",nufus:"20m"},
                            {adi:"Marmara", nufus: "10m"},
                            {adi: "Karadeniz", nufus: "30m"}]

console.log(birinci)

//Spread Operatörü
/* let sayilar=[30,100,200,300,350]
console.log(...sayilar) /*

const test=()=>{
    a+100
}
(test)=>a+100
test=>a+100 */

//Conditional ternary operator
/*if(a<100){
    console.log("100 den küçük")
}else if(a==100){
    console.log("100 e eşit")
}else{
    console.log("100 e eşit değil")
}
const sonuc=a==100?"100 e eşit değil"
*/

/*function example(){
    if(condition1){
        return value1
    }else if (condition2){
        return value2
    }else if (condition3){
        return value3
    }else {
        return value4
    }
}
function example(){
    return condition1?value1:
    condition2?value2:
    condition3?value3:
    value4
} */

const sayilar=[1,2,3,4,5,6,7,8,9]
/*const ciftsayilar=sayilar.filter(function(sayilar){
    return sayilar%2===0  
})
console.log(ciftsayilar) */


                           