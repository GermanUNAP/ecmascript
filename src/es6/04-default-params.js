function newUser(name, age, country){
    var name = name || 'German';
    console.log(name);
    var age = age || '18';
    console.log(age);
    var country = country || 'Perú';
    console.log(country);
}
newUser();
newUser('Oliver', '20', 'English');

//second way

function defaultParam(name = 'German', age = 12, contry = "Peru"){
    console.log(name, age, contry);
}
defaultParam();
defaultParam('asd', 123, "ad");