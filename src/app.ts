import express from "express";

export interface AppConfig {
    cachePath: string,
    deviceId: string
}

const createApp = (cfg: AppConfig) => {
    const app = express();

    // Listen for any GET requests
    // Return 404 if file is not found
    // return the contents of file at the PATH specified

    // Listen for PUT requests
    // Save the file contents at PATH
    // Return 201 on success

    return app;
};

export default createApp;