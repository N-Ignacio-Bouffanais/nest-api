export class CreateProductDTO{
    readonly name: string;
    readonly price: number;
    readonly description: string;
    readonly imageURL: string;
    readonly createdAt: Date;
}