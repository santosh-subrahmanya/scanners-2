// import { Deserializable } from "./Deserializable.model";

export class Store {

    id : string;
    name : string;
    description: string;
    imageUrl: string;

    // deserialize(input: any) : this {
    //     Object.assign(this, input);
    //     return this;
    // }

    constructor(public _id: string, public _name, public _description,
      public _imageUrl) {

    }

}