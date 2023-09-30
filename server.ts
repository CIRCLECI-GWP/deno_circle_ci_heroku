import { Application, Router } from "https://deno.land/x/oak@v10.4.0/mod.ts";
import { parse } from "https://deno.land/std@0.99.0/flags/mod.ts";

const app = new Application();
const { args } = Deno;

const DEFAULT_PORT = 8000;
const port = parse(args).port ?? DEFAULT_PORT;

const router = new Router();

router.get("/", (context) => {
  context.response.type = "application/json";
  context.response.body = { data: "This API is under construction" };
});

app.addEventListener("error", (event) => {
  console.error(event.error);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port });
console.log(`Server is running on port ${port}`);

export default app;
