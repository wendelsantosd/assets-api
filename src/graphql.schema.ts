
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAssetDTO {
    name: string;
    value: number;
    date?: Nullable<string>;
}

export class UpdateAssetDTO {
    id: string;
    name?: Nullable<string>;
    value?: Nullable<number>;
    date?: Nullable<string>;
}

export class Asset {
    id: string;
    name: string;
    value: number;
    date?: Nullable<string>;
}

export abstract class IQuery {
    abstract assets(): Asset[] | Promise<Asset[]>;

    abstract asset(_id: string): Nullable<Asset> | Promise<Nullable<Asset>>;
}

export abstract class IMutation {
    abstract createAsset(data: CreateAssetDTO): string | Promise<string>;

    abstract updateAsset(data: UpdateAssetDTO): Nullable<string> | Promise<Nullable<string>>;

    abstract deleteAsset(_id: string): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
