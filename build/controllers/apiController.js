"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiController = void 0;
var ApiController = /** @class */ (function () {
    function ApiController() {
    }
    ApiController.prototype.index = function (req, res) {
        res.send('API running');
    };
    return ApiController;
}());
exports.apiController = new ApiController();
