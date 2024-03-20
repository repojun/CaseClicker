import { makeObservable, observable, action } from "mobx";

class userStore {

    constructor() {
        this.user = {};
        makeObservable(this, { user: observable, setUser: action, setPremiumBalance: action, setItem: action, setBalance: action, setPassiveUpgrade: action, setPassiveUpgradeLevel: action })
    }

    setUser = (user) => {
        this.user = user;
    }

    setBalance = (balance) => {
        this.user.balance = balance;
    }

    setPremiumBalance = (premiumBalance) => {
        this.user.premiumBalance = premiumBalance;
    }

    setPassiveUpgrade = (upgradeNumber, purchased) => {
        this.user.passiveUpgrades[upgradeNumber] = { ...this.user.passiveUpgrades[upgradeNumber], value: purchased };
    }

    setPassiveUpgradeLevel = (upgradeNumber, level) => {
        this.user.passiveUpgrades[upgradeNumber] = { ...this.user.passiveUpgrades[upgradeNumber], level: level };
    }

    setItem = (item, value) => {
        this.user.inventory[item].value = value;
    }

}

export default userStore