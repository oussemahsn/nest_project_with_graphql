import { Schema as MongooseSchema } from 'mongoose';
export declare class CreateHobbyInput {
    name: string;
}
export declare class ListHobbyInput {
    _id?: MongooseSchema.Types.ObjectId;
    name?: string;
}
export declare class UpdateHobbyInput {
    _id: MongooseSchema.Types.ObjectId;
    name?: string;
}
