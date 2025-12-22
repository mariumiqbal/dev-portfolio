import { test, expect } from "@playwright/test";

test("homepage loads and shows portfolio title", async ({ page }) => {
  const url = "https://mariumiqbal.github.io/dev-portfolio/";

  await page.goto(url);

  // Check that name or main heading is visible
  const heading = page.getByRole("heading", { name: /Marium/i });
  await expect(heading).toHaveText(/Marium/i);

  await expect(page).toHaveTitle(/Portfolio/i);
});
