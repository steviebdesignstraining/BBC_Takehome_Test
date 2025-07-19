import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import { request, APIRequestContext } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export let apiContext: APIRequestContext;

BeforeAll(async () => {
  apiContext = await request.newContext();
});

AfterAll(async () => {
  await apiContext.dispose();
});
