import { makeObservable, observable, action } from "mobx";

class userStore {
  constructor() {
    this.user = {};
    makeObservable(this, { user: observable, setUser: action, setBadgePosition: action, setPassiveIncomeStore: action, setPassiveLimit: action, setItemAdd: action, setPremiumBalance: action, setItem: action, setPassivePower: action, setBalance: action, setNetWorth: action, setPassiveUpgrade: action, setPassiveUpgradeLevel: action });
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
    if (add === true) {
      this.user.inventory[item].value++;
    }

    if (add === false) {
      this.user.inventory[item].value--;
    }
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

  getBalance = () => {
    return this.user.balance;
  }

  getJoinDate = () => {
    this.user.registeredAt;

    const date = new Date(this.user.registeredAt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(-2);

    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;

    const finalDate = `${formattedDay}/${formattedMonth}/${year}`;

    return finalDate;
  }

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
