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

    setPassiveUpgrade = (upgradeNumber, purchased) => {
        this.user[`passiveUpgrades.passiveUpgrade${upgradeNumber}`] = purchased;
    }

}

export default userStore