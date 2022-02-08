import { Model, Schema as MongooseSchema } from 'mongoose';
import { Person, PersonDocument } from './person.model';
import { CreatePersonInput, ListPersonInput, UpdatePersonInput } from './person.inputs';
export declare class PersonService {
    private personModel;
    constructor(personModel: Model<PersonDocument>);
    create(payload: CreatePersonInput): Promise<Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getById(_id: MongooseSchema.Types.ObjectId): Promise<Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    list(filters: ListPersonInput): Promise<(Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    update(payload: UpdatePersonInput): Promise<Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(_id: MongooseSchema.Types.ObjectId): Promise<Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
