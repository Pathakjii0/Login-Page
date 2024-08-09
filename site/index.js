
function login() {
    let useremail = document.querySelector('#user-email').value
    let userPass = document.querySelector('#user-pass').value
    let found = false;
  
    for (let i = 0; i < items.length; i++) {
      if (useremail === items[i].email && userPass === items[i].pass) {
        found = true;
        break;
      }
    }
  
    if (found) {
      localStorage.setItem('useremail', useremail)
      localStorage.setItem('userpass', userPass)
      window.location.href = 'info.html'
    } else {
      alert('Your account is not found')
    }
  }

  function display(){
    let containerElement=document.querySelector('.display');
    for (let i = 0; i < items.length; i++) {
      let usere=localStorage.getItem('useremail');
      if (usere=== items[i].email) {
        containerElement.innerHTML=`
        <div class="show">Name <div class="data">${items[i].name}</div></div>
        <div class="show">Mobile No. <div class="data">${items[i].mobile}</div></div>
        <div class="show">Email <div class="data">${items[i].email}</div></div>
        <div class="show">gender<div class="data">${items[i].gender}</div></div>
        <div class="show">College<div class="data">${ items[i].college}</div></div>
        <div class="show">year<div class="data">${ items[i].year}</div></div>
    `;
  break;
       }
   }
}

function deleteData(){
  for (let i = 0; i < items.length; i++) {
    let usere=localStorage.getItem('useremail');
    if (usere=== items[i].email) {
      items.splice(1,i);
      localStorage.setItem('userdata',JSON.stringify(items));
      alert(`Your Account is deleted ,
        please go to the login page `);
      break;
    }
}
}
   
  

 