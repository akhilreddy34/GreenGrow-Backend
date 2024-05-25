import winston from "winston";
import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** creating the logger for request and error information
 */
const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new DailyRotateFile({
      filename: path.join(__dirname, "..", "logs", "application-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      level: "info",
    }),
    new DailyRotateFile({
      filename: path.join(__dirname, "..", "logs", "errors-%DATE%.log"),
      datePattern: "YYYY-MM-DD",
      level: "error",
    }),
  ],
});

export { logger };
