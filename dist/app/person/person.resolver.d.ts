import { Schema as MongooseSchema } from 'mongoose';
import { Person, PersonDocument } from './person.model';
import { PersonService } from './person.service';
import { CreatePersonInput, ListPersonInput, UpdatePersonInput } from './person.inputs';
import { Hobby } from '../hobby/hobby.model';
export declare class PersonResolver {
    private personService;
    constructor(personService: PersonService);
    person(_id: MongooseSchema.Types.ObjectId): Promise<Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    persons(filters?: ListPersonInput): Promise<(Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createPerson(payload: CreatePersonInput): Promise<Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updatePerson(payload: UpdatePersonInput): Promise<Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    deletePerson(_id: MongooseSchema.Types.ObjectId): Promise<Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    hobbies(person: PersonDocument, populate: boolean): Promise<MongooseSchema.Types.ObjectId[] | Hobby[]>;
}
