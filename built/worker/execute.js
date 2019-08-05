"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const worker_threads_1 = require("worker_threads");
const configuration_1 = require("../configuration");
const collector_1 = require("./collector");
const run_1 = require("./run");
const { specPath, suiteName, testName } = worker_threads_1.workerData;
const collector = collector_1.Collector.initialize(specPath, suiteName, testName);
collector.addListener(configuration_1.Configuration.DEFAULT_LISTENER);
const testRun = new run_1.Run(collector.getData());
testRun.run().then((result) => {
    worker_threads_1.parentPort.postMessage(JSON.stringify(result));
});
//# sourceMappingURL=execute.js.map