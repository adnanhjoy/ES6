const userInfo = (Name, Age) => {
    return{
        Name,
        Age,
    };
};
console.log(userInfo('Adnan Hossain', 21));

let message = {
    SMS(){
        return `Hello ! I am Adnan Hossain`
    }
}
console.log(message.SMS());

let emailSend ={
    'Mail Type'(){
        return `Hello ! I am Adnan Hossain`
    }
}
console.log(emailSend["Mail Type"]()) 