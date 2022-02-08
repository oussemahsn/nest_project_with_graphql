import { Schema as MongooseSchema } from 'mongoose';
import { Hobby } from './hobby.model';
import { HobbyService } from './hobby.service';
import { CreateHobbyInput, ListHobbyInput, UpdateHobbyInput } from './hobby.inputs';
export declare class HobbyResolver {
    private hobbyService;
    constructor(hobbyService: HobbyService);
    hobby(_id: MongooseSchema.Types.ObjectId): Promise<Hobby & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    hobbies(filters?: ListHobbyInput): Promise<(Hobby & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createHobby(payload: CreateHobbyInput): Promise<Hobby & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateHobby(payload: UpdateHobbyInput): Promise<Hobby & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    deleteHobby(_id: MongooseSchema.Types.ObjectId): Promise<Hobby & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
