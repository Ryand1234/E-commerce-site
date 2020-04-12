export interface Product {
	constructor(
	public name: string,
	public price: int,
	public quantity: int,
	public description: string,
	public imageUrl: string
	){ }
}
