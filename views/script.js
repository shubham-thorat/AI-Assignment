
async function run(e) {
    // e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let enrollno = document.getElementById('enrollno').value;
    let phone = document.getElementById('phone').value;
    let comment = document.getElementById('comment').value;

    const obj = {
        name: name,
        email: email,
        enrollno: enrollno,
        phone: phone,
        comment: comment
    }
    const response = await fetch("http://192.168.43.102:3000/user/login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    });
    response.json().then(data => {
        console.log(data);
    });
}