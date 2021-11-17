const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the reservation page
      document.location.replace("/reservation");
      document.querySelector("#logged-in-link").style.display = "block";
      document.querySelector(".login-form").style.display = "none";
      document.querySelector(".signup-form").style.display = "none";
    } else {
      alert(response.statusText);
    }
    console.log(response);
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  // const phone = document.querySelector("#phone-signup").value.trim();

  // const address = document.querySelector("#address-signup").value.trim();

  // const age = document.querySelector("#age-signup").value.trim();

  // const license = document.querySelector("#license-signup").value.trim();

  // const insurance = document.querySelector("#insurance-signup").value.trim();

  if (
    name &&
    email &&
    password
    // &&
    // phone &&
    // address &&
    // age &&
    // license &&
    // insurance
  ) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
        // phone,
        // address,
        // age,
        // license,
        // insurance,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      // MB TEST: changed /reservation to /
      document.location.replace("/reservation");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
