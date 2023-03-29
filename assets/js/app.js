// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
// import "./user_socket.js"

// You can include dependencies in two ways.
//
// The simplest option is to put them in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//

// Include phoenix_html to handle method=PUT/DELETE in forms and buttons.
import "phoenix_html";
// Establish Phoenix Socket and LiveView configuration.
import { Socket } from "phoenix";
import { LiveSocket } from "phoenix_live_view";
import topbar from "../vendor/topbar";
import { getHooks } from "live_svelte";
import * as SvelteComponents from "../svelte/**/*";

// Shoelace Web Components
import "@shoelace-style/shoelace/dist/components/rating/rating.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/badge/badge.js";
import "@shoelace-style/shoelace/dist/components/tag/tag.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/checkbox/checkbox.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";

// Set the base path to the folder you copied Shoelace's assets to
setBasePath("../vendor/shoelace/assets");

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
let liveSocket = new LiveSocket("/live", Socket, {
	hooks: getHooks(SvelteComponents),
	params: { _csrf_token: csrfToken },
});

// Show progress bar on live navigation and form submits
topbar.config({ barColors: { 0: "#29d" }, shadowColor: "rgba(0, 0, 0, .3)" });
window.addEventListener("phx:page-loading-start", (_info) => topbar.show(300));
window.addEventListener("phx:page-loading-stop", (_info) => topbar.hide());

// connect if there are any LiveViews on the page
liveSocket.connect();

// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
window.liveSocket = liveSocket;

// Light/Dark themes
// function setColorScheme(scheme) {
// 	switch (scheme) {
// 		case "dark":
// 			document.documentElement.classList.add("sl-theme-dark");
// 			break;
// 		case "light":
// 			document.documentElement.classList.remove("sl-theme-dark");
// 			break;
// 		default:
// 			document.documentElement.classList.remove("sl-theme-dark");
// 			break;
// 	}
// }
// function getPreferredColorScheme() {
// 	if (window.matchMedia) {
// 		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
// 			return "dark";
// 		} else {
// 			return "light";
// 		}
// 	}
// 	return "light";
// }
// function updateColorScheme() {
// 	setColorScheme(getPreferredColorScheme());
// }
// if (window.matchMedia) {
// 	var colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
// 	colorSchemeQuery.addEventListener("change", updateColorScheme);
// }

// updateColorScheme();
