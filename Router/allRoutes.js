import Route from "./Route.js"
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "La galerie", "/pages/galerie.html"),
  new Route(
    "/signin",
    "Connexion",
    "/pages/auth/signin.html",
    "/js/auth/signin.js"
  ),
  new Route(
    "/signup",
    "Inscription",
    "/pages/auth/signup.html",
    "/js/auth/signup.js"
  ),
  new Route("/account", "Mon compte", "/pages/auth/account.html"),
  new Route(
    "/edithPassword",
    "changement de mot de passe",
    "/pages/auth/editPassword.html"
  ),
  new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html"),
  new Route("/reserver", "Réserver", "/pages/reservations/reserver.html"),
]
export const websiteName = "Quai Antique"
