let DEBUG = false;
if (window.location.hostname === "localhost" || window.location.hostname === "localhost") {
    DEBUG = true;
}

let BACKEND_URL = "";
if (DEBUG) {
    BACKEND_URL = "http://localhost:5000/graphql/";
}

export { DEBUG, BACKEND_URL };
