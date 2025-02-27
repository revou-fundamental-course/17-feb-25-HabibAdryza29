// Ini Javascript Eksternal
function replaceName() {
    let name = prompt("Siapakah namamu", "")
    document.getElementById("namebuka").innerHTML = name
    }
    replaceName();

console.log('Success Load External JS');

function validateForm() {
   let nameInput = document.getElementById('name');
   console.log(nameInput.value);

   let emailInput = document.getElementById('email');
   console.log(emailInput.value);

   let messageInput = document.getElementById('message');
   console.log(messageInput.value);


   if (nameInput.value == '') {
    alert('Nama tidak boleh kosong');
   } else {
    alert('Welcome' + nameInput.value);
   }
}

// For Index Identifier
let indexBanner = 0;

showBanner();

function nextBanner() {
   // Increment indexBanner
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName('main-banner');

    //Reset Condition
    if (indexBanner > banner.length - 1) {
       indexBanner = 0;
    }

    //Loop untuk hide semua
    for (let i = 0; i < banner.length; i++) {
       banner[i].style.display = 'none';
    }

    //Show Banner
     banner[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);