const User = {
    _email: 'H@hc.com',
    _password: "abc",
    
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
      this._email=value
    }
}
const t = Object.create(User)
console.log(t.email);
