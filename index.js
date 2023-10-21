function reviewDetails(event) {
    event.preventDefault();
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let number = document.getElementById("phoneNumber").value;
    let date = document.getElementById("callingDate").value;
    let time = document.getElementById("callingTime").value;
    console.log(`User name is ${name}`);
    console.log(`User email is ${email}`);
    console.log(`User number is ${number}`);
    console.log(`User date is ${date}`);
    console.log(`User time is ${time}`);
}
