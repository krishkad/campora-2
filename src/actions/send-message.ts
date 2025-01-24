"use server";
import { format } from "date-fns";
import puppeteer from "puppeteer";

export interface BookingData {
  phoneNumber: string;
  amount: number;
  name: string;
  checkInAndOutDate: {
    form: string;
    to: string;
  };
  _id: string;
}

// async function openWhatsAppWeb() {
//   const browser = await puppeteer.launch({
//     headless: false, // Launch in non-headless mode for debugging
//     defaultViewport: null, // Full-size viewport for better view
//     args: ["--start-maximized"], // Open browser maximized
//   });

//   const page = await browser.newPage();

//   // Navigate to WhatsApp Web
//   await page.goto("https://web.whatsapp.com/", { waitUntil: "networkidle2" });

//   console.log("Waiting for QR code scan...");

//   // Wait for the QR code element to appear (this ensures the page is ready)
//   await page.waitForSelector(
//     'canvas[aria-label="Scan this QR code to link a device!"]',
//     { timeout: 0 }
//   );

//   console.log("QR code scanned!");

//   // Wait for WhatsApp Web to fully load before proceeding
//   await page.waitForSelector('div[title="Chats"]', { timeout: 0 });

//   console.log('WhatsApp Web is fully loaded and ready!');

//   return { browser, page };
// }

async function connectToExistingBrowser() {
  const browser = await puppeteer.connect({
    browserURL: "http://localhost:9222", // Connect to the remote browser with the specified port
  });

  return browser;
}

async function openWhatsAppWeb(browser: any) {
  const pages = await browser.pages(); // Get all open tabs in the browser
  let page = null;

  // Check if WhatsApp Web tab is already open
  for (let i = 0; i < pages.length; i++) {
    const tab = pages[i];
    const url = await tab.url();
    if (url.includes("web.whatsapp.com")) {
      page = tab; // Found existing WhatsApp Web tab
      console.log("Using existing WhatsApp Web tab");
      break;
    }
  }

  // If WhatsApp Web tab is not open, create a new one
  if (!page) {
    console.log("WhatsApp Web tab not found, opening a new tab...");
    page = await browser.newPage();
    await page.goto("https://web.whatsapp.com/", { waitUntil: "networkidle2" });
    console.log("Scan QR code to connect");
    // Wait for the QR code element to appear (this ensures the page is ready)
    await page.waitForSelector(
      'canvas[aria-label="Scan this QR code to link a device!"]',
      { timeout: 0 }
    );

    console.log("QR code scanned!");
  }

  // Wait for the <div> with title="Chats" to ensure page is fully loaded
  await page.waitForSelector('div[title="Chats"]', { timeout: 0 });
  console.log("WhatsApp Web is fully loaded and ready!");

  return page;
}

async function sendMessage(page: any, phoneNumber: string, message: string) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  // Navigate to the WhatsApp chat page for the provided phone number
  await page.goto(url, { waitUntil: "networkidle2" });

  // Wait for the send button to be enabled and visible
  await page.waitForSelector('span[data-icon="send"]', { timeout: 60000 });

  // Click the send button
  await page.click('span[data-icon="send"]');
  console.log("Message sent!");
}

export const sendWhatsApp = async ({
  phoneNumber,
  amount,
  name,
  checkInAndOutDate,
  _id,
}: BookingData): Promise<void> => {
  try {
    const browser = await puppeteer.launch({
      headless: false,  // Launch in non-headless mode for debugging
      defaultViewport: null,  // Full-size viewport for better view
      args: ['--start-maximized'], // Open browser maximized
    });

    const page = await openWhatsAppWeb(browser);

    // Send message

    // Replace with the user's phone number and message
    const message = `Hello ${name}!
Your booking has been successfully confirmed! 🎉
Booking Details:

Amount Paid: ₹${amount}
Booking ID: ${_id}
Date & Time: ${format(new Date(checkInAndOutDate.form), "dd MMM yyyy")}
We look forward to serving you! 😊
If you have any questions, feel free to reach out.`;

    await sendMessage(page, phoneNumber, message);
  } catch (error: any) {
    console.log("error while sending message", error.message);
  }
};
