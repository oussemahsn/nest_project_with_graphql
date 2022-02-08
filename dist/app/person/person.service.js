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
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const person_model_1 = require("./person.model");
let PersonService = class PersonService {
    constructor(personModel) {
        this.personModel = personModel;
    }
    create(payload) {
        const createdPerson = new this.personModel(payload);
        return createdPerson.save();
    }
    getById(_id) {
        return this.personModel.findById(_id).exec();
    }
    list(filters) {
        return this.personModel.find(Object.assign({}, filters)).exec();
    }
    update(payload) {
        return this.personModel
            .findByIdAndUpdate(payload._id, payload, { new: true })
            .exec();
    }
    delete(_id) {
        return this.personModel.findByIdAndDelete(_id).exec();
    }
};
PersonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(person_model_1.Person.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PersonService);
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map