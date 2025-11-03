import test, { expect } from "@playwright/test";
import { users, messages } from "./data/login.js";

test.beforeEach(async ({ page }) => {
  await page.goto("/login");
});

test("Login successful", async ({ page }) => {
  await test.step("Fill in", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(users.validUser.user);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(users.validUser.password);
  });
  await test.step("Click button", async () => {
    await page.getByRole("button", { name: "Login" }).click();
  });
  await test.step("Verify message", async () => {
    await expect(page.getByText(messages.loginSuccess)).toBeVisible();
  });
});

test("Blocked account", async ({ page }) => {
  await test.step("Fill in", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(users.blockedAccount.user);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(users.blockedAccount.password);
  });
  await test.step("Click button", async () => {
    await page.getByRole("button", { name: "Login" }).click();
  });
  await test.step("Verify message", async () => {
    await expect(page.getByText(messages.blockedAccount)).toBeVisible();
  });
});

test("Invalid user", async ({ page }) => {
  await test.step("Fill in", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(users.invalidUser.user);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(users.invalidUser.password);
  });
  await test.step("Click button", async () => {
    await page.getByRole("button", { name: "Login" }).click();
  });
  await test.step("Verify message", async () => {
    await expect(page.getByText(messages.invalidUser)).toBeVisible();
  });
});

test("Wrong password", async ({ page }) => {
  await test.step("Fill in", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(users.wrongPassword.user);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(users.wrongPassword.password);
  });
  await test.step("Click button", async () => {
    await page.getByRole("button", { name: "Login" }).click();
  });
  await test.step("Verify message", async () => {
    await expect(page.getByText(messages.wrongPassword)).toBeVisible();
  });
});

test("Wrong password 3 times", async ({ page }) => {
  await test.step("Fill in", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(users.wrongPassword.user);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(users.wrongPassword.password);
  });
  await test.step("Click button", async () => {
    await page.getByRole("button", { name: "Login" }).click({ clickCount: 3 });
  });
  await test.step("Verify message", async () => {
    await expect(page.getByText(messages.tempBlocked)).toBeVisible();
  });
});
