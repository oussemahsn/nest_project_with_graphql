import { Model, Schema as MongooseSchema } from 'mongoose';
import { Hobby, HobbyDocument } from './hobby.model';
import { CreateHobbyInput, ListHobbyInput, UpdateHobbyInput } from './hobby.inputs';
export declare class HobbyService {
    private hobbyModel;
    constructor(hobbyModel: Model<HobbyDocument>);
    create(payload: CreateHobbyInput): Promise<Hobby & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getById(_id: MongooseSchema.Types.ObjectId): Promise<Hobby & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    list(filters: ListHobbyInput): Promise<(Hobby & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    update(payload: UpdateHobbyInput): Promise<Hobby & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(_id: MongooseSchema.Types.ObjectId): Promise<Hobby & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
