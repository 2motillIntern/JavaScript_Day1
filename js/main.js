//var dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
//console.log(dog_string)
//console.log(dog_string.toString())
//console.log(dog_string[6].slice(0,100))
//console.log(dog_string.indexOf('Max'))



let dog_strings = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_name = ["Max", "HAS", "PuRple", "dog"]

console.log(dog_strings.length)
function findword(){
    if((dog_string.indexOf('Max')) >= 0){
        return "Matched dog_name"
    }else{
        return "No matches"
    }
}
console.log(findword())

given_arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]
console.log(given_arr)
function replaceEvens(arr){
    for(let i = 0; i <given_arr.length; i++){
        if(i%2 == 0){
            given_arr.splice(i,1,'even index')
        }
    }
    return given_arr
}
console.log(replaceEvens())


//*function findword(){
  //  for(let i = 0; i < dog_names.length; i++){
    //    console.log(dog_names[i])
    //}
    //return 'Matched ${dog_names}'
//}
//console.log(findword())

//function findwords(){
  //  let text = ''
    //let dog_names = ["Max", "HAS", "PuRple", "dog"]
    //let i = 0

    //do{
      //  text =  "Hello Max, my name is Dog, and I have purple eyes!"
        //i++
    //}
    //while (i < 10)
    //return text
//}
//console.log(findwords[0])

//console.log(dog_string)
//*

//funtion findword(){
  //  let i = 0
    //let text = '';
     //for(let i = 0; i < dog_string.length; i++)
    
     //do{
       //  text = ``
     //}
//}
//function findwords()


