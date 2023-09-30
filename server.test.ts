import { superoak } from "https://deno.land/x/superoak@4.7.0/mod.ts";
import { delay } from "https://deno.land/std@0.202.0/async/delay.ts";

import app from "./server.ts";

Deno.test("it should return a JSON response with status code 200", async () => {
  const request = await superoak(app);
  await request
    .get("/")
    .expect(200)
    .expect("Content-Type", /json/)
    .expect({ data: "This API is under construction" });
});

// Forcefully exit the Deno process once all tests are done.
Deno.test({
  name: "exit the process forcefully after all the tests are done\n",
  async fn() {
    await delay(1);
    Deno.exit(0);
  },
  sanitizeExit: false,
});
