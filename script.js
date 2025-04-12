
let emailData = {};
let refreshInterval;

async function generateEmail() {
  clearInterval(refreshInterval);
  document.getElementById("emailBox").innerText = "Generating...";
  const domainRes = await fetch("https://api.mail.tm/domains");
  const domains = await domainRes.json();
  const domain = domains["hydra:member"][0].domain;

  const randomName = Math.random().toString(36).substring(2, 10);
  const address = `${randomName}@${domain}`;
  const password = "TempPass123!";

  await fetch("https://api.mail.tm/accounts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address, password })
  });

  const tokenRes = await fetch("https://api.mail.tm/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ address, password })
  });

  const tokenData = await tokenRes.json();
  emailData = { address, token: tokenData.token };
  document.getElementById("emailBox").innerText = address;

  refreshMessages();
  refreshInterval = setInterval(refreshMessages, 10000);
}

async function refreshMessages() {
  const messageList = document.getElementById("messageList");
  messageList.innerHTML = "Checking for messages...";
  try {
    const res = await fetch("https://api.mail.tm/messages", {
      headers: { Authorization: `Bearer ${emailData.token}` }
    });
    const data = await res.json();
    const messages = data["hydra:member"];
    if (messages.length === 0) {
      messageList.innerHTML = "No messages yet.";
    } else {
      messageList.innerHTML = "";
      messages.forEach((msg) => {
        const div = document.createElement("div");
        div.className = "message";
        div.innerHTML = `<strong>${msg.from.address}</strong><br><em>${msg.subject}</em><br>${msg.intro}`;
        messageList.appendChild(div);
      });
    }
  } catch (err) {
    messageList.innerHTML = "Error fetching messages.";
  }
}

generateEmail();
