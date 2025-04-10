const account_id = 123433
let account_email = "shubham@gmail.com"
var account_password = "12345"
account_city ="jaipur"

console.log(account_id);

// prefer not to use var because of issue in block scope and functional scope
account_email = "shhhhhhh@gmail.com"
account_password = "4332"
account_city = "noida"
console.table([account_email, account_id, account_password, account_city]);

