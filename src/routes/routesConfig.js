import HomePage from "@containers/HomePage/HomePage";
import PeoplePage from "@containers/PeoplePage/PeoplePage";
import NotFoundPage from "@containers/NotFoundPage/NotFoundPage";
import PersonPage from "@containers/PersonPage/PersonPage";
import FavoritePage from "@containers/FavoritePage/FavoritePage";
import SearchPage from "@containers/SearchPage/SearchPage";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

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
  {
    path: "/search",
    component: SearchPage,
  },
  {
    path: "/fail",
    component: ErrorMessage,
  },
];

export default routesConfig;
