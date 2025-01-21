import puppeteer from "puppeteer";

export const sendWhatsApp = async (
  phoneNumber: string,
  amount: number,
  bookingStatus: string,
  paymentStatus: string
) => {
  const browser = await puppeteer.launch({ headless: false }); // Launch in non-headless mode to see the browser
  const page = await browser.newPage();

  // Navigate to WhatsApp Web
  await page.goto("https://web.whatsapp.com/");

  // Wait for the user to scan the QR code (useful for initial setup)
  await page.waitForSelector("._1vZx3");

  // Replace with the user's phone number and message
  const message = "Hello, this is an automated message from my account";

  // Open chat by phone number
  await page.goto(
    `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`
  );

  // Wait for the send button to be clickable
  await page.waitForSelector('span[data-icon="send"]');

  // Click the send button
  await page.click('span[data-icon="send"]');
};
