function login(){
    let uname = document.getElementById('username');
    let pass = document.getElementById('password');

    console.log('Username :' + uname.value);
    console.log('Password :' + pass.value);

    if(uname.value=="admin" && pass.value=="123"){
        alert('Selamat Datang');
        window.location = "index.html";
    }else{
        alert('Username atau Password salah')
    }

}
