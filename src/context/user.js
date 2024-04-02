import { makeObservable, observable, action } from "mobx";

class userStore {
  constructor() {
    this.user = {};
    makeObservable(this, { user: observable, setUser: action, setItemAdd: action, setPremiumBalance: action, setItem: action, setBalance: action, setNetWorth: action, setPassiveUpgrade: action, setPassiveUpgradeLevel: action });
  }

  setUser = (user) => {
    this.user = user;
  };

  setBalance = (balance) => {
    this.user.balance = balance;
  };

  setPremiumBalance = (premiumBalance) => {
    this.user.premiumBalance = premiumBalance;
  };

  setPassiveUpgrade = (upgradeNumber, purchased) => {
    this.user.passiveUpgrades[upgradeNumber] = { ...this.user.passiveUpgrades[upgradeNumber], value: purchased };
  };

  setPassiveUpgradeLevel = (upgradeNumber, level) => {
    this.user.passiveUpgrades[upgradeNumber] = { ...this.user.passiveUpgrades[upgradeNumber], level: level };
  };

  setItem = (item, value) => {
    this.user.inventory[item].value = value;
  };

  setItemAdd = (item, add) => {
    console.log(item, add, this.user.inventory[item]?.value, "FIRST LOG");
    if (add === true) {
      this.user.inventory[item].value++;
    }

    if (add === false) {
      this.user.inventory[item].value--;
    }
    console.log(item, add, this.user.inventory[item]?.value, "SECOND LOG");
  };

  setNetWorth = (newValue) => {
    this.user.netWorth = newValue;
  }
}

export default userStore;
