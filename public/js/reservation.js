const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#reservation-name").value.trim();
  const email = document.querySelector("#reservation-email").value.trim();
  // const password = document.querySelector("#password-signup").value.trim();
  const phone = document.querySelector("#reservation-phone").value.trim();
  const address = document.querySelector("#reservation-address").value.trim();
  const age = document.querySelector("#reservation-age").value.trim();
  const license = document.querySelector("#reservation-license").value.trim();
  const insurance = document
    .querySelector("#reservation-insurance")
    .value.trim();
  const description = document.querySelector("#reservation-desc").value.trim();

  if (
    name &&
    email &&
    phone &&
    address &&
    age &&
    license &&
    insurance &&
    description
  ) {
    const response = await fetch(`/api/reservation`, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
        address,
        age,
        license,
        insurance,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // MB: NEED TO ESTABLISH BETTER LOCATION TO REPLACE AFTER SUBMITING RESERVATION OR WRITE A MESSAGE/ALERT SAYING RESERVATION SUCCESFUL
      console.log(response);
      // document.location.replace("/success/" + response.body.id);
      alert(
        "Your reservation was submitted. Check your email for follow-up steps"
      );
      document.location.replace("/");
    } else {
      alert("Failed to create reservation");
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/projects/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/profile");
//     } else {
//       alert("Failed to delete project");
//     }
//   }
// };

document
  .querySelector(".new-reservation-form")
  .addEventListener("submit", newFormHandler);

// document
//   .querySelector(".project-list")
//   .addEventListener("click", delButtonHandler);
