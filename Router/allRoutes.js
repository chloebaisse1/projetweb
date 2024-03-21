import Route from "./Route.js"
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "La galerie", "/pages/galerie.html"),
  new Route("/signin", "Connexion", "/pages/signin.html"),
  new Route("/signup", "Inscription", "/pages/signup.html"),
]
export const websiteName = "Quai Antique"
