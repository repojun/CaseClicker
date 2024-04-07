import { makeObservable, observable, action } from "mobx";

class userStore {
  constructor() {
    this.user = {};
    makeObservable(this, { user: observable, setUser: action, setBadgePosition: action, setPassiveLimit: action, setItemAdd: action, setPremiumBalance: action, setItem: action, setPassivePower: action, setBalance: action, setNetWorth: action, setPassiveUpgrade: action, setPassiveUpgradeLevel: action });
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
  };

  getNetworth = () => {
    const items = !this?.user?.inventory
      ? []
      : Object.values(this.user.inventory)
          .filter(({ value }) => value > 0)
          .map((item) => {
            if (item.value > 1) {
              return Array.from({ length: item.value }, () => item);
            }
            return item;
          })
          .flat(Infinity);

    return items?.reduce((acc, item) => acc + item.price, 0);
  };

  setPassivePower = (passiveAdd) => {
    this.user.passivePower += passiveAdd;
  };

  getPassivePower = () => {
    return this.user.passivePower;
  };

  getPassiveLimit = () => {
    return this.user.passiveLimit;
  };

  setPassiveLimit = (limit) => {
    this.user.passiveLimit = limit;
  }

  getPassiveIncomeStore = () => {
    return this.user.passiveIncomeStore;
  };

  setPassiveIncomeStore = (newStore) => {
    this.user.passiveIncomeStore = newStore;
  }

  setBadge = (badgeName) => {
    this.user.badges[badgeName].value = 1;
  };

  setBadgePosition = (badgeName, newPosition) => {
    this.user.badges[badgeName].profilePosition = newPosition;
    
  };
  
}

export default userStore;
