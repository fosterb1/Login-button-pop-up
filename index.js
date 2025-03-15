var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function loginLogin() {
  var username = document.getElementById("uname").value;
  var password = document.getElementById("psw").value;
  
  console.log("uname: " + username);
  console.log("psw: " + password);
}


function login1(){
  document.getElementById('id01').style.display='block';
  document.getElementById('id02').style.display = 'none';
}
function signUp(){
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display= 'block';
  console.log("sign up button");
}
function main() {
    document.getElementById('id02').style.display= 'none';
    console.log("main: ");
}

main();