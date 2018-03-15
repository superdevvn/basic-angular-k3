class customer {  
    Name : string;  
    constructor (firstName: string, lastName: string)  
    {  
        this.Name = firstName + "  " + lastName;  
    }  
    GetName()  
    {  
        return "Hello, " + this.Name;  
    }  
}  
let cust = new customer("Jimi","Scott");