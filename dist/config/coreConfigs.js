"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CoreConfig {
    constructor() {
        this.hostname = 'bugs.djaty.com';
        this.apiPath = '/api';
        // If user doesn't define a value for timelineLimit this value will be used.
        this.timelineDefaultMaxLimit = 30;
        this.allowAutoSubmission = true;
        // If user defines a value for timelineLimit higher than this value this value will be used.
        this.timelineMaxLimit = 100;
        // If user doesn't define a value for stacktraceLimit this value will be used.
        this.stacktraceDefaultMaxLimit = 40;
        // If user defines a value for stacktraceLimit higher than this value this value will be used.
        this.stacktraceMaxLimit = 100;
        // Skip bug report submission if it takes more than this value.
        // This value should be small as possible as the server state at this duration may be inconsistent
        // due to the exception thrown and it may go further with this state or even receive new requests.
        // noinspection PointlessArithmeticExpressionJS
        this.submissionTimeout = 1 * 1000;
        this.djatyIsTracking = true;
        this.allowedWrappers = {
            console: true,
            http: true,
        };
        this.parseUser = {
            userId: 'userId',
            logon: 'username',
        };
    }
}
exports.CoreConfig = CoreConfig;
//# sourceMappingURL=coreConfigs.js.map