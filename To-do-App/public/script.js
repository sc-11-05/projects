async function sendTask(){
    const task = document.getElementById("taskInput").value;

    const response = await fetch("http://localhost:3000/test", {
        method: "POST",

        headers: {
            "Content-Type" : "application/json"
        },

        body: JSON.stringify({task})
    });

    const data = await response.json();

    document.getElementById("response").innerText = 
        data.message + ": " + data.yourTask;
}