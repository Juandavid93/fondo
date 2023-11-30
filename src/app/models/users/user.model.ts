export class User{
    user:string;
    password:string;
    constructor(user:string, password:string){
        this.user= user;
        this.password = password;
    }
}
export class UserDetail{
    constructor(public username:string, public pasword:string){}
}