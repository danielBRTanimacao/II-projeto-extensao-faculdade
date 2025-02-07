import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./assets/css/Remedy.css";
import "./assets/css/Index.css";

createRoot(document.getElementById("root")!).render(
    <>
        <App />
    </>
);
