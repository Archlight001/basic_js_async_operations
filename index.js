// fetch("https://randomuser.me/api/")
//   .then((response) => response.json())
//   .then((data) => {
//     const { results } = data;
//     const user = results[0];
//     gender = user.gender;
//   })
//   .catch((error) => console.log(error));

async function fetchUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const { results } = data;
    const user = results[0];
    const name = user.name.title + " " + user.name.first + " " + user.name.last;
    const email = user.email;
    const picture = user.picture.large;

    const newUser = createUser(name, email, picture);
    document.getElementById("user_container").appendChild(newUser);
  } catch (error) {
    console.log("ERROR HAS OCCURED ", error);
  }
}

function createUser(name, email, picture) {
  let user = document.createElement("div");
  user.classList.add("user");

  let imageDiv = document.createElement("div");
  imageDiv.classList.add("user_img");

  let image = document.createElement("img");
  image.src = picture;
  image.alt = "random user";

  //Add image to image div
  imageDiv.appendChild(image);

  let detailsDiv = document.createElement("div");
  detailsDiv.classList.add("user_details");

  let nameElement = document.createElement("p");
  nameElement.innerText = name;

  let emailElement = document.createElement("p");
  emailElement.innerText = email;

  //Add name and email element to details div
  detailsDiv.appendChild(nameElement);
  detailsDiv.appendChild(emailElement);

  //Add both details div and image div to user element
  user.appendChild(imageDiv);
  user.appendChild(detailsDiv);

  return user;
}

fetchUser();

// GET - Retrieve data from server/endpoint/api
// POST - Send data to server
// PUT - Modify Data already on server
// DELETE - Delete data already on server
