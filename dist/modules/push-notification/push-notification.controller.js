"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const push_notification_service_1 = require("./push-notification.service");
let PushNotificationController = class PushNotificationController {
    constructor(pushNotificationService) {
        this.pushNotificationService = pushNotificationService;
        this.data = {};
    }
    async setData(payload) {
        const res = await this.pushNotificationService.push(payload);
        this.data = payload;
        return res;
    }
    async sse() {
        var _a;
        let res = await this.pushNotificationService.pull();
        return (0, rxjs_1.of)({
            data: (_a = Object.assign({}, res)) !== null && _a !== void 0 ? _a : Object.assign({}, this.data)
        });
    }
};
__decorate([
    (0, common_1.Post)("push/send"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PushNotificationController.prototype, "setData", null);
__decorate([
    (0, common_1.Sse)('pull'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PushNotificationController.prototype, "sse", null);
PushNotificationController = __decorate([
    (0, common_1.Controller)('notification'),
    __metadata("design:paramtypes", [push_notification_service_1.PushNotificationService])
], PushNotificationController);
exports.PushNotificationController = PushNotificationController;
//# sourceMappingURL=push-notification.controller.js.map