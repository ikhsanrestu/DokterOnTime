const buttomSubmit = document.getElementById("login-submit");

buttomSubmit.addEventListener("click", async()=>{
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const sendData = {
      email : email.value,
      kataSandi: password.value,
    }

    const res = await fetch("http://localhost:4000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendData)
    })
    const data = await res.json();
    console.log("Respon", data)
})