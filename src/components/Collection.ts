import { OptionalUnlessRequiredId, Collection as Col } from "mongodb";
import { mongodb } from "../services/db";

export class Collection<T>{
    constructor(
        public collectionName: string,
        public indexes: { field: string, mode: string }[],
        public callBack?: (collection: Col<T>) => Promise<void>
    ) { }

    async getCollection() {
        return mongodb.cachedDb.collection<T>(this.collectionName)
    };

    async createCollection() {

        const collections = await mongodb.cachedDb.listCollections().toArray();

        let exists = false;

        collections.forEach(collection => {
            if (collection.name.normalize() === this.collectionName.normalize()) {
                return exists = collection.name.normalize() == this.collectionName.normalize()
            }
        })

        const collection = mongodb.cachedDb.collection<T>(this.collectionName);

        if (this.indexes.length > 0 && !exists)
            this.indexes.forEach(async (index) => {
                collection.createIndex({ [index.field]: 1 }, { [index.mode]: true });
            });

        if (this.callBack && !exists)
            await this.callBack(collection);

    }
}