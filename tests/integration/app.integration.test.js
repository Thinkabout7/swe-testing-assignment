import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadHtml() {
  const htmlPath = path.join(__dirname, "../../public/index.html");
  const html = fs.readFileSync(htmlPath, "utf8");
  document.documentElement.innerHTML = html;
}

function click(text) {
  const buttons = Array.from(document.querySelectorAll("button"));
  const button = buttons.find(b => b.textContent.trim() === text);
  if (!button) throw new Error(`Button "${text}" not found`);
  button.click();
}

function displayValue() {
  return document.getElementById("display").value;
}

describe("Quick-Calc Integration Tests", () => {

  beforeEach(async () => {
    loadHtml();
    await import(`../../src/app.js?${Date.now()}`);
  });

  test("Integration Test 1: 5 + 3 = 8", () => {
    click("5");
    click("+");
    click("3");
    click("=");

    expect(displayValue()).toBe("8");
  });

  test("Integration Test 2: Clear resets display to 0", () => {
    click("9");
    click("*");
    click("2");
    click("=");

    expect(displayValue()).toBe("18");

    click("C");

    expect(displayValue()).toBe("0");
  });

  test("Integration Test 3: Decimal calculation 2.5 + 1.5 = 4", () => {
    click("2");
    click(".");
    click("5");
    click("+");
    click("1");
    click(".");
    click("5");
    click("=");

    expect(displayValue()).toBe("4");
  });

});