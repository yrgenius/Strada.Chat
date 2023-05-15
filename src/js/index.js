import { showModalPage } from "./modals/global.js";
import { showAuthorizationPage } from "./modals/settings.js";
import { getCodeHandler } from "./modals/authorization.js";
import { inputCodeHandler } from "./modals/confirm.js";
import { testRequest, getTime } from "./services.js";
import { ELEMENTS } from "./constants.js";
import { loadPosts } from "./loadPosts.js";
import { FORM } from "./sendMessage.js";

//TODO: сделать скролл
loadPosts();




