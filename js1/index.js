let form=document.querySelector('form')
let submitButton=document.querySelector('button')
let input=document.querySelector('input')
let userList=document.querySelectorAll('section')

let getUsers=async()=>{
    let response=await fetch('http://localhost:3000/user')
    let finalusers=await response.json()

    finalusers.map(user =>{
        let container=document.createElement('aside')
        let name=document.createElement('p')
        let deleteButton=document.createElement('button')
        let editButton=document.createElement('button')
        let buttonscontainer=document.createElement('div')

        name.innerHTML=user.name
        deleteButton.innerHTML='Delete'
        editButton.innerHTML='Edit'

        //!ADDING EVENTS

        deleteButton.addEventListener('click',()=>{
            deleteUser(user.id)
        })

        editButton.addEventListener('click',()=>{
            editUser(user)
        })

        buttonscontainer.append(editButton,deleteButton)
        container.append(name,buttonscontainer)
        userList.append(container)
    })
}
getUsers()

//! Create user
let CreateUser=async()=>{
    await fetch('http://localhost:3000/user',{
        method:'POST',
    })
}