import compression from "compression";
import express from "express";
import next from "next";
import nextI18NextMiddleware from "next-i18next/middleware";

import nextI18next from "./i18n";
import dotenv from "dotenv";
dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();
    server.use(nextI18NextMiddleware(nextI18next));

    server.use(compression());

    // handle any other requests
    server.get("*", (req, res) => {
        handle(req, res);
    });

    server.listen(process.env.PORT, err => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on port ${process.env.PORT}`);
    });
})();
