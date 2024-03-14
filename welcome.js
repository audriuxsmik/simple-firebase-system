firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("") //your login page
      
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
    
  
}
