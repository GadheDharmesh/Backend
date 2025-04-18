import {  Injectable } from "@nestjs/common";



@Injectable()
export class usersService{
    constructor(){
        console.log("e aat lu toh ko pn kre")
    }
    login(id: any):string{
        console.log(id)
        return  `${id} logined`
    }
    register():string{
        return  "login krle"
    }
}