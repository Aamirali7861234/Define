<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Temp Email Generator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f4f7fa;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }
    h1 {
      text-align: center;
      color: #333;
    }
    #email-box {
      background: #fff;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
      text-align: center;
    }
    #email {
      font-weight: bold;
      font-size: 18px;
      word-break: break-all;
      margin: 10px 0;
    }
    button {
      margin: 5px;
      padding: 10px 15px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      background: #007bff;
      color: #fff;
      cursor: pointer;
    }
    button:hover {
      background: #0056b3;
    }
    #messages {
      margin-top: 20px;
      text-align: left;
      width: 100%;
      max-width: 400px;
    }
    .message {
      background: #fff;
      margin: 5px 0;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
      box-shadow: 0 0 5px rgba(0,0,0,0.05);
    }
    .error {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h1>Temporary Email Generator</h1>

  <div id="email-box">
    <div id="email">Loading...</div>
    <button onclick="copyEmail()">Copy Email</button>
    <button onclick="generateEmail()">Change Email</button>
    <div id="error" class="error"></div>
  </div>

  <div id="messages">
    <h3>Messages:</h3>
    <div id="messageList">Loading...</div>
  </div>

  <script>
    let account = {};
    let token = '';
    let interval;

    async function generateEmail() {
      clearInterval(interval);
      document.getElementById("error").innerText = "";
      document.getElementById("messageList").innerHTML = "Loading...";
      try {
        const domains = await (await fetch("https://api.mail.tm/domains")).json();
        const domain = domains["hydra:member"][0].domain;
        const random = Math.random().toString(36).substring(2, 10);
        const address = `${random}@${domain}`;
        const password = "TempPass123!";

        const register = await fetch("https://api.mail.tm/accounts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ address, password })
        });

        if (!register.ok) throw new Error("Failed to create account");

        account = { address, password };
        document.getElementById("email").innerText = address;

        const login = await fetch("https://api.mail.tm/token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(account)
        });

        const loginData = await login.json();
        token = loginData.token;

        fetchMessages();
        interval = setInterval(fetchMessages, 10000);
      } catch (err) {
        document.getElementById("error").innerText = "Error initializing email.";
        console.error(err);
      }
    }

    async function fetchMessages() {
      try {
        const res = await fetch("https://api.mail.tm/messages", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        const messages = data["hydra:member"];
        const list = messages.map(msg => `<div class="message"><b>${msg.from.address}</b><br>${msg.subject}</div>`).join("");
        document.getElementById("messageList").innerHTML = list || "No messages yet.";
      } catch (err) {
        document.getElementById("messageList").innerHTML = "<span class='error'>Failed to load messages.</span>";
      }
    }

    function copyEmail() {
      const email = document.getElementById("email").innerText;
      navigator.clipboard.writeText(email).then(() => {
        alert("Email copied!");
      }).catch(err => {
        alert("Failed to copy email.");
      });
    }

    generateEmail(); // auto-generate on load
  </script>

</body>
</html>
