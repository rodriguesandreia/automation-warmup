import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://playground-drab-six.vercel.app/form");

  await test.step("Fill in form", async () => {
    await page.getByRole("textbox", { name: "Name *" }).fill("teste1");
    await page.getByRole("textbox", { name: "Email *" }).fill("test@test.com");
    await page.getByRole("textbox", { name: "Password *" }).fill("psw123");
    await page.getByLabel("Country *").selectOption("brazil");
    await page.getByRole("radio", { name: "Male", exact: true }).check();
    await page.getByText("Read books").click();
  });

  await test.step("Click button", async () => {
    await page.getByRole("button", { name: "Send" }).click();
  });

  await test.step("Verify message", async () => {
    await expect(page.getByText("Success!")).toBeVisible();
    await expect(
      page.getByText("The form has been submitted successfully.")
    ).toBeVisible();
  });
});

const users = [
  {
    name: "Andreia",
    email: "andreia@example.com",
    password: "correct123",
    country: "brazil",
    gender: "Female",
    hobbies: ["Read books", "Video Games"],
  },
  {
    name: "Graça",
    email: "graca@example.com",
    password: "correct123",
    country: "usa",
    gender: "Female",
    hobbies: ["Movies"],
  },
  {
    name: "Cristina",
    email: "cristina@example.com",
    password: "correct123",
    country: "canada",
    gender: "Female",
  },
  {
    name: "Mozzy",
    email: "mozzy@example.com",
    password: "correct123",
    country: "mexico",
    gender: "Other",
  },
  {
    name: "Dinis",
    email: "dinis@example.com",
    password: "correct123",
    country: "portugal",
    gender: "Male",
  },
];

for (const user of users) {
  test(`Create user: ${user.name}`, async ({ page }) => {
    await page.goto("https://playground-drab-six.vercel.app/form");

    await test.step("Fill in form", async () => {
      await page.getByRole("textbox", { name: "Name *" }).fill(user.name);
      await page.getByRole("textbox", { name: "Email *" }).fill(user.email);
      await page
        .getByRole("textbox", { name: "Password *" })
        .fill(user.password);
      await page.getByLabel("Country *").selectOption(user.country);
      await page.getByRole("radio", { name: user.gender, exact: true }).check();
      if (user.hobbies) {
        for (const hobbie of user.hobbies) {
          await page.getByText(hobbie).click();
        }
      }
    });

    await test.step("Click button", async () => {
      await page.getByRole("button", { name: "Send" }).click();
    });

    await test.step("Verify message", async () => {
      await expect(page.getByText("Success!")).toBeVisible();
      await expect(
        page.getByText("The form has been submitted successfully.")
      ).toBeVisible();
    });
  });
}
