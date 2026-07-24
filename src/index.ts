import { displayDisclaimer } from "./UI/Disclaimer";
import "./Window";

const editorVersion = "69";
const gameVersion = "0.9.2";
const lastBreakingVersion = "62";

document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(displayDisclaimer(editorVersion, gameVersion, lastBreakingVersion));
});
