let intervalId;
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let stopButton = document.getElementById('stop');
pauseButton.disabled = true;
stopButton.disabled= true;
let t=parseInt(document.getElementById("count_of_timer").textContent)
let statusele=document.getElementById("status");
function Start(){
    let timervalue=document.getElementById("count_of_timer");
    statusele.textContent="Started/Resumed";
    pauseButton.textContent="Pause";
    pauseButton.disabled = false;
    stopButton.disabled= false;
    intervalId=setInterval(()=>{
        t++;
        timervalue.textContent=t;
    },500);
    
    startButton.disabled = true;
    

}
function Pause(){
    if(pauseButton.textContent==="Pause"){
        clearInterval(intervalId);
        pauseButton.textContent="Resume";
        statusele.textContent="Paused";
    }
    else{
        Start();
    }
    

}
function Stop(){
    let timervalue=document.getElementById("count_of_timer");
    clearInterval(intervalId);
    t=0;
    timervalue.textContent=t;
    startButton.disabled = false;
    statusele.textContent="Stopped";
    pauseButton.disabled = true;
    stopButton.disabled= true;

}
// function show(tag_name){
//     class_names = document.getElementsByClassName('common');
//     for(let a of class_names){
//         a.style.display = 'none';
//     }
//     let tag_id=document.getElementById(tag_name);
//     console.log(tag_id);
//     tag_id.style.display="flex";
// }

document.getElementById('form').addEventListener('mouseenter',()=>{show('form-div')});
document.getElementById('session').addEventListener('mouseenter',()=>{show('section-div')});
document.getElementById('dummy').addEventListener('mouseenter',()=>{show('dummy-div')});
document.getElementById('timer').addEventListener('mouseenter',()=>{show('timer-div')});
document.getElementById('list').addEventListener('mouseenter',()=>{show('list-div')});
document.getElementById('objects').addEventListener('mouseenter',()=>{show('objects-div')});
function show(tag_name){
    class_names = document.getElementsByClassName('common');
    for(let a of class_names){
        a.style.display = 'none';
    }
    let tag_id=document.getElementById(tag_name);
    console.log(tag_id);
    tag_id.style.display="flex";
}

// function SignIn(){
//     let paraelement = document.getElementById("para-ele");
//     let uname = document.getElementById("uname").value;
//     let password=document.getElementbyId("pwd").value;
//     let content="<p>Username:" + uname + "</p> <p>Password:" + password +"</p>"
//     console.log(content);
//     paraelement.innerHTML=content;

// }

function signIn() {
    let inputElement = document.getElementById("inputElement");
    let passwordele=document.getElementById("password");
    let signInTextElement = document.getElementById("signInText");
    let inputValue = inputElement.value;
    let passvalue = passwordele.value;
    let verifyText = "Hi " + inputValue + ", verifying your account... your entered password is " + passvalue ;
    signInTextElement.textContent = verifyText;
    inputElement.value="";
    passwordele.value="";

}


const array = [
    { id: 1, name: "Usha" },
    { id: 2, name: "Anil" },
    { id: 3, name: "Achyu" },
    { id: 4, name: "Varun" }
 ];
 

function render(){
    const table_body=document.querySelector("#table-list tbody")
    table_body.innerHTML = "";
    array.forEach(item=>{
        const row=document.createElement("tr");
        row.innerHTML=`<td>${item.name}</td>
                        <td><button class="delete-btn" data-id=${item.id}">Delete</button></td>
                        `
        table_body.appendChild(row);
    })
}
render();

function handleDelete(event) {
    const id = parseInt(event.target.dataset.id);
    const index = array.findIndex(item => item.id === id);
    if (index !== -1) {
      array.splice(index, 1);
      render();
    }
 }

document.querySelector("#table-list tbody").addEventListener("click", function(event) {
    if(event.target.classList.contains("delete-btn")) {
      handleDelete(event);
    }
 });

 const obj=[
    {
      Name:"Usha",
      ID:"B181852",
      Department:"CSE",
      email:"usha@gmail.com"
    },
    {
      Name:"Anil",
      ID:"B181884",
      Department:"CSE",
      email:"anil@gmail.com"
    },
    {
      Name:"Nandu",
      ID:"B181601",
      Department:"CSE",
      email:"nandu@gmail.com"
    },
    {
      Name:"Ruchi",
      ID:"B181455",
      Department:"CSE",
      email:"ruchi@gmail.com"
    },
  ]

  function renderobj(){
    const table_body=document.querySelector("#table-objects tbody")
    table_body.innerHTML = "";
    obj.forEach(item=>{
        const row=document.createElement("tr");
        row.innerHTML=`<td>${item.Name}</td>
                        <td>${item.ID}</td>
                        <td>${item.Department}</td>
                        <td>${item.email}</td>
                        `
        table_body.appendChild(row);
    })
}
renderobj();