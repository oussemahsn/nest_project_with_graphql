import { Document, Schema as MongooseSchema } from 'mongoose';
export declare class Hobby {
    _id: MongooseSchema.Types.ObjectId;
    name: string;
}
export declare type HobbyDocument = Hobby & Document;
export declare const HobbySchema: MongooseSchema<Document<Hobby, any, any>, import("mongoose").Model<Document<Hobby, any, any>, any, any, any>, any, any>;
