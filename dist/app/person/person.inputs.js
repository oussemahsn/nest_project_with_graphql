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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonInput = exports.ListPersonInput = exports.CreatePersonInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
let CreatePersonInput = class CreatePersonInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreatePersonInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], CreatePersonInput.prototype, "hobbies", void 0);
CreatePersonInput = __decorate([
    (0, graphql_1.InputType)()
], CreatePersonInput);
exports.CreatePersonInput = CreatePersonInput;
let ListPersonInput = class ListPersonInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], ListPersonInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ListPersonInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], ListPersonInput.prototype, "hobbies", void 0);
ListPersonInput = __decorate([
    (0, graphql_1.InputType)()
], ListPersonInput);
exports.ListPersonInput = ListPersonInput;
let UpdatePersonInput = class UpdatePersonInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", mongoose_1.Schema.Types.ObjectId)
], UpdatePersonInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdatePersonInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], UpdatePersonInput.prototype, "hobbies", void 0);
UpdatePersonInput = __decorate([
    (0, graphql_1.InputType)()
], UpdatePersonInput);
exports.UpdatePersonInput = UpdatePersonInput;
//# sourceMappingURL=person.inputs.js.map