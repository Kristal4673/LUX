const newFormHandler = async (event) => {
  event.preventDefault();

  const phone = document.querySelector("#reservation-phone").value.trim();
  const address = document.querySelector("#reservation-address").value.trim();
  const age = document.querySelector("#reservation-age").value.trim();
  const license = document.querySelector("#reservation-license").value.trim();
  const insurance = document
    .querySelector("#reservation-insurance")
    .value.trim();
  const description = document.querySelector("#reservation-desc").value.trim();

  if (

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

document
  .querySelector(".new-reservation-form")
  .addEventListener("submit", newFormHandler);

