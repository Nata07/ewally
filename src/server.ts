import expres from "express";
import { routes } from "./routes";

const app = expres();

app.use(expres.json());

app.use(routes);

app.listen(8080, () => console.log("Server ON EWALLY"));
