import HomePage from "@containers/HomePage/HomePage";
import PeoplePage from "@containers/PeoplePage/PeoplePage";
import NotFoundPage from "@containers/NotFoundPage/NotFoundPage";
import PersonPage from "@containers/PersonPage/PersonPage";
import FavoritePage from "@containers/FavoritePage/FavoritePage";

const routesConfig = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/people/",
    component: PeoplePage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
  {
    path: "/not-found",
    component: NotFoundPage,
  },
  {
    path: "/people/:id",
    component: PersonPage,
  },
  {
    path: "/favorite",
    component: FavoritePage,
  },
];

export default routesConfig;
