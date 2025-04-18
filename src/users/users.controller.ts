import { Controller, Get, Param, Post } from "@nestjs/common";
import { usersService } from "./users.service";


@Controller("/users")

export class usersController{

    constructor(private readonly usersService:usersService){}
// get 
    @Post("/resiter")
        login():string{ return this.usersService.register();}
    @Get("/loginuser/:id")
        data(@Param() params):string{ return this.usersService.login(params.id);}
    
}