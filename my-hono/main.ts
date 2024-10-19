import { Hono } from "hono";

const app = new Hono();

app.use(async (c, next) => {
  const start = Date.now();
  await next();
  const end = Date.now();
  c.res.headers.set("X-Response-Time", `${end - start}`);
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

Deno.serve(app.fetch);
