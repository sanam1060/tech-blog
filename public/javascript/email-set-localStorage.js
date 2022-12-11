function handleSubmit() {
  const email = document.getElementById("email-login").value;

  localStorage.setItem("EMAIL", email);

  return;
}
