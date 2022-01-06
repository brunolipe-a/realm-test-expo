import { createRealmContext } from "@realm/react";
import { Repository } from "../models/Repository";

const RealmContext = createRealmContext({
  schema: [Repository],
  deleteRealmIfMigrationNeeded: true,
});

export const useObject = RealmContext.useObject;
export const useRealm = RealmContext.useRealm;
export const useQuery = RealmContext.useQuery;
export const RealmProvider = RealmContext.RealmProvider;
