import { combineReducers } from "redux";

import commonReducer from "./commonReducer";
import astrologerReducer from "./astrologerReducer";
import customerReducer from "./customerReducer";
import skillReducer from "./skillReducer";
import remediesReducer from "./remediesReducer";
import expertiseReducer from "./expertiseReducer";
import historyReducer from "./historyReducer";
import masterReducer from "./masterReducer";
import staticPageReducer from "./staticPageReducer";

import dashboard from "./dashboard";
import review from "./review";
import banners from "./banner";
import notification from './notification'
import reports from "./reports";
import language from './language';
import recharge from "./recharge";
import gift from "./gift";
import pages from "./pages";
import appAstrokunj from "./appAstrokunj";
import astromallReducer from "./astromallReducer";
import astropujaReducer from "./astropujaReducer";
import blogs from "./astroBlog";

const rootReducer = combineReducers({
  commonReducer,
  astrologerReducer,
  customerReducer,
  skillReducer,
  remediesReducer,
  expertiseReducer,
  historyReducer,
  staticPageReducer,
  masterReducer,

  dashboard,
  review,
  banners,
  notification,
  reports,
  language,
  recharge,
  gift,
  pages,
  appAstrokunj,
  astromallReducer,
  astropujaReducer,
  blogs
});

export default rootReducer;