import { HttpSentEvent } from  '@angular/common/http'

export class Person {
	
	constructor(
	public name: string,
	public email: string,
	public number: string,
	public password: string,
	public dob: string,
	public sex: string
//	public httpSentEvent: HttpSentEvent.sent
	) { }
}
