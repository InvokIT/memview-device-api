import chai from "chai";
import chaiHttp from "chai-http";
chai.use(chaiHttp);

import createApp, { AppConfig } from "./app";

const appConfig: AppConfig = {
    cachePath: "/tmp",
    deviceId: "mocha-test-device-id"
};

const app = createApp(appConfig);

chai.request(app)
    .get("/google/this-is-a-resource-id")