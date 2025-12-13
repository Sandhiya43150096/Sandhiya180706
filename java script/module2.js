//DEFAULT EXPORT

//!FUNCTION

// function raja(){
//     console.log("Heyy Raja...")
// }
// export default raja

//!ARRAY

// let arr=[12,23,34,45,56,67]
// export default arr

//!object

// let obj={
//     name:"Dany",
//     age:23,
//     city:"chennai",
//     country:"india"

// }
// export default obj


//NAMED EXPORT 

//!FUNCTION
 export function raja(){
    console.log("hello guru")
}

//!ARRAY
let arr=[12,23,34,"Raja","Bunny","Bunny"]
export{arr as dinga}

//!OBJECT
let obj={
    name:"Mintu",
    age:23,
    city:"Kochi"
}
export{obj as sony}




