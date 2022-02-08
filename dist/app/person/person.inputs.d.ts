import { Schema as MongooseSchema } from 'mongoose';
export declare class CreatePersonInput {
    name: string;
    hobbies: MongooseSchema.Types.ObjectId[];
}
export declare class ListPersonInput {
    _id?: MongooseSchema.Types.ObjectId;
    name?: string;
    hobbies?: MongooseSchema.Types.ObjectId[];
}
export declare class UpdatePersonInput {
    _id: MongooseSchema.Types.ObjectId;
    name?: string;
    hobbies?: MongooseSchema.Types.ObjectId[];
}
