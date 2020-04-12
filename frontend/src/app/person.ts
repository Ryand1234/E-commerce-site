import { HttpSentEvent } from  '@angular/common/http'

export class Person {
	
	constructor(
	public username: string,
	public email: string,
	public number: string,
	public password: string
//	public httpSentEvent: HttpSentEvent.sent
	) { }
}
