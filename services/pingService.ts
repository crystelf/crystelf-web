import { PingStatus } from "../types";

interface PingResult {
  status: PingStatus;
  latency: number | null;
}

/**
 * This is a simulated ping service.
 * In a real application, you would make a network request to a health check endpoint.
 * Browsers cannot perform true ICMP pings, and direct fetch requests
 * to arbitrary URLs are often blocked by CORS policies.
 * This function simulates that behavior for UI purposes.
 */
export const ping = (url: string): Promise<PingResult> => {
  return new Promise((resolve) => {
    // Simulate network delay for the check itself
    const delay = Math.random() * 1500 + 200; // 200ms to 1700ms

    setTimeout(() => {
      // Simulate a 95% success rate
      if (Math.random() < 0.95) {
        resolve({
          status: PingStatus.Online,
          latency: Math.floor(Math.random() * 200 + 10), // 10ms to 210ms latency
        });
      } else {
        resolve({
          status: PingStatus.Offline,
          latency: null,
        });
      }
    }, delay);
  });
};
