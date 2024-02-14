import { makeObservable, observable, action} from "mobx";

class userStore {
    constructor() {
        this.user = {};
        makeObservable(this, {user: observable, setUser: action, setBalance: action}) 
    }

    setUser = (user) => {
        this.user = user;
    }

    setBalance = (balance) => {
        this.user.balance = balance;
    }
    

}

export default userStore