const form = document.getElementById("message-form");
const messageList = document.getElementById("message-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("user-name").value.trim();
  const message = document.getElementById("user-message").value.trim();

  if (!name || !message) return;

  const li = document.createElement("li");
  li.innerHTML = `<strong>${name}:</strong> ${message}`;
  messageList.prepend(li); // newest first

  form.reset();
});
