// AJX -> Vanilla JS

/* --------------- GET --------------------- */

const getMoviesVanillaJs = () => {
  fetch("https://lavarel-rest-ful-api.vercel.app/public/api/movies", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

const getGenresVanillaJs = () => {
  fetch("https://lavarel-rest-ful-api.vercel.app/public/api/genres", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

/* --------------- GET BY ID --------------------- */

const getMoviesVanillaJsById = () => {
  fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" +
      -1 /* add some id */,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

const getGenresVanillaJsById = () => {
  fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" +
      1 /* add some id */,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

/* --------------- CREAT / POST --------------------- */

const createMoviesVanillaJs = () => {
  fetch("https://lavarel-rest-ful-api.vercel.app/public/api/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Juan Carloss vanilla movie",
      synopsis: "jajaj",
      genre_id: 1,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};

const createGenresVanillaJs = () => {
  fetch("https://lavarel-rest-ful-api.vercel.app/public/api/genres", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Juan Carloss vanilla genre",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
};


/* --------------- UPDATE / PUT --------------------- */

const updateMoviesVanillaJs = () => {
  fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" +
      1 /* add some id*/,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Juan Carloss",
        synopsis: "Very good",
        genre_id: 2,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

const updateGenresVanillaJs = () => {
  fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/genres/" +
      1 /* add some id*/,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Love",
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

/* --------------- Delete --------------------- */

const deleteMoviesVanillaJs = () => {
  fetch(
    "https://lavarel-rest-ful-api.vercel.app/public/api/movies/" +
      36 /* add some id*/,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

// -----------------------------------------------------------------------------------------

// Requests

/* --------------- GET --------------------- */

// getMoviesVanillaJs();
// getGenresVanillaJs();

/* --------------- GET BY ID --------------------- */

// getMoviesVanillaJsById();
// getGenresVanillaJsById();

/* --------------- CREATE / POST -------------------- */

// createMoviesVanillaJs();
// createGenresVanillaJs();

/* --------------- UPDATE / PUT --------------------- */

// updateMoviesVanillaJs();
// updateGenresVanillaJs();

/* --------------- Delete --------------------- */

// deleteMoviesVanillaJs();
// getMoviesVanillaJsById();