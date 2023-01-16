class ErrorHander extends Error{
    constructor(message,statusCode){
        super(message);                 //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
        this.statusCode =statusCode           //video1:11:05
                                                   
       Error.captureStackTrace(this,this.constructor); //stack add garcha , //error ko location track garna
       //Inherite  Error and use its  methos "captureStackTrace"                                       

    }
}

module.exports = ErrorHander