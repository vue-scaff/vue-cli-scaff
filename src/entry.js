// Import Scaff
import Scaff from "@scaff/vue-cli-scaff";

// Import Main
import Main from "@/main.js";

// Import Sheet
import "@/sheet/index.scss";

// Import App
const App = require(`@/${process.env.rc.main.app}`).default;

// Init
new Scaff({}).then((face, next) => Main(App, face, next));
