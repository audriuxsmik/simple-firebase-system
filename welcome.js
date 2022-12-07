firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("https://auth.cyplionk.xyz")
      
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
    
  
}