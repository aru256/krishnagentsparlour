/**
 * Krishna Gents Parlour — full landing page E2E checks
 * Mirrors test_reports/iteration_1.json checklist
 */
import { test, expect } from "@playwright/test";

const BASE = process.env.BASE_URL || "http://localhost:3000";
const WA = "919279857592";
const TEL = "+919279857592";

test.describe("Krishna Gents Parlour landing page", () => {
  test.beforeEach(async ({ page }) => {
    const errors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));
    await page.goto(BASE, { waitUntil: "domcontentloaded" });
    await page.waitForSelector('[data-testid="landing-page"]');
    const appErrors = errors.filter(
      (e) =>
        !/Failed to load resource|ERR_CONNECTION|ERR_NAME_NOT_RESOLVED|net::ERR_/i.test(
          e
        )
    );
    expect(appErrors, "app console errors on load").toEqual([]);
  });

  test("landing page loads with hero section", async ({ page }) => {
    await expect(page.getByTestId("landing-page")).toBeVisible();
    await expect(page.getByTestId("hero-section")).toBeVisible();
  });

  test("navbar brand, nav links, and CTAs", async ({ page }) => {
    for (const id of [
      "nav-services",
      "nav-pricing",
      "nav-gallery",
      "nav-reviews",
      "nav-visit",
    ]) {
      await expect(page.getByTestId(id)).toBeVisible();
    }
    const book = page.getByTestId("navbar-book-btn");
    await expect(book).toBeVisible();
    await expect(book).toHaveAttribute("href", new RegExp(`wa\\.me/${WA}`));
    const call = page.getByTestId("navbar-call-btn");
    await expect(call).toHaveAttribute("href", `tel:${TEL}`);
  });

  test("hero WhatsApp and call buttons", async ({ page }) => {
    const wa = page.getByTestId("hero-whatsapp-btn");
    await expect(wa).toHaveAttribute("href", new RegExp(`wa\\.me/${WA}`));
    await expect(wa).toHaveAttribute("target", "_blank");
    await expect(page.getByTestId("hero-call-btn")).toHaveAttribute(
      "href",
      `tel:${TEL}`
    );
  });

  test("offers banner shows ₹20 off", async ({ page }) => {
    const banner = page.getByTestId("offers-banner");
    await expect(banner).toBeVisible();
    await expect(banner).toContainText("₹20");
  });

  test("6 service cards", async ({ page }) => {
    for (let i = 0; i < 6; i++) {
      await expect(page.getByTestId(`service-card-${i}`)).toBeVisible();
    }
  });

  test("4 pricing groups", async ({ page }) => {
    for (let i = 0; i < 4; i++) {
      await expect(page.getByTestId(`pricing-group-${i}`)).toBeVisible();
    }
  });

  test("6 gallery images", async ({ page }) => {
    for (let i = 0; i < 6; i++) {
      await expect(page.getByTestId(`gallery-img-${i}`)).toBeVisible();
    }
  });

  test("3 testimonials", async ({ page }) => {
    for (let i = 0; i < 3; i++) {
      await expect(page.getByTestId(`testimonial-${i}`)).toBeVisible();
    }
  });

  test("visit section with map and Thursday closed", async ({ page }) => {
    await expect(page.getByTestId("visit-section")).toBeVisible();
    await expect(page.getByTestId("visit-map")).toBeVisible();
    await expect(page.getByTestId("directions-btn")).toBeVisible();
    const visit = page.getByTestId("visit-section");
    await expect(visit).toContainText("Thursday");
    await expect(visit).toContainText("Closed");
  });

  test("footer book button", async ({ page }) => {
    const btn = page.getByTestId("footer-book-btn");
    await expect(btn).toHaveAttribute("href", new RegExp(`wa\\.me/${WA}`));
  });

  test("floating WhatsApp button", async ({ page }) => {
    const fab = page.getByTestId("whatsapp-floating-button");
    await expect(fab).toBeVisible();
    await expect(fab).toHaveAttribute("href", new RegExp(`wa\\.me/${WA}`));
    await expect(fab).toHaveAttribute("target", "_blank");
  });

  test("all wa.me and tel links use correct numbers", async ({ page }) => {
    const waHrefs = await page.locator('a[href*="wa.me"]').evaluateAll((els) =>
      els.map((e) => e.getAttribute("href"))
    );
    expect(waHrefs.length).toBeGreaterThan(0);
    for (const href of waHrefs) {
      expect(href).toMatch(new RegExp(`wa\\.me/${WA}`));
      expect(href).not.toMatch(/wa\.me\/(?!919279857592)/);
    }
    const telHrefs = await page.locator('a[href^="tel:"]').evaluateAll((els) =>
      els.map((e) => e.getAttribute("href"))
    );
    for (const href of telHrefs) {
      expect(href).toBe(`tel:${TEL}`);
    }
  });

  test("smooth scroll: nav-pricing scrolls pricing into view", async ({
    page,
  }) => {
    await page.getByTestId("nav-pricing").click();
    const pricing = page.getByTestId("pricing-section");
    await expect(pricing).toBeInViewport({ ratio: 0.2 });
  });

  test("mobile menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle" });
    const toggle = page.getByTestId("navbar-menu-toggle");
    await expect(toggle).toBeVisible();
    await expect(page.getByTestId("navbar-mobile-menu")).toHaveCount(0);
    await toggle.click();
    await expect(page.getByTestId("navbar-mobile-menu")).toBeVisible();
    await toggle.click();
    await expect(page.getByTestId("navbar-mobile-menu")).toHaveCount(0);
  });
});
