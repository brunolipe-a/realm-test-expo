import { Realm } from "@realm/react";

type GenerateRepositoryData = {
  name: string;
  fullName: string;
  description: string;
  stars: number;
  forks: number;
};

export class Repository extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  fullName!: string;
  description?: string;
  stars!: number;
  forks!: number;

  static generate(data: GenerateRepositoryData) {
    return {
      _id: new Realm.BSON.ObjectId(),
      ...data,
      createdAt: new Date(),
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: "Repository",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      name: "string",
      fullName: "string",
      description: { type: "string", optional: true },
      stars: "int",
      forks: "int",
      createdAt: "date",
    },
  };
}
