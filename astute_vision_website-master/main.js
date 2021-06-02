var firebaseConfig = {
    apiKey: "AIzaSyDgUcnKQXsZJ0hLSqRnW2eoo_5tPfegHG8",
    authDomain: "astute-resolutions-website.firebaseapp.com",
    databaseURL: "https://astute-resolutions-website.firebaseio.com",
    projectId: "astute-resolutions-website",
    storageBucket: "astute-resolutions-website.appspot.com",
    messagingSenderId: "815580669162",
    appId: "1:815580669162:web:15b88cd0676ae16241a393",
    measurementId: "G-NWDXBFMDD9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
e.preventDefault();


var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

saveMessage(name, company, email, phone, message);

document.querySelector('.al').style.display = 'block';
setTimeout(function(){
    document.querySelector('.al').style.display = 'none'; 
},3000);
document.getElementById('contactForm').reset();
}


function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,company,email,phone,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}