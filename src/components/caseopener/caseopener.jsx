import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import {React, useEffect, useState} from "react";
import styles from "./caseopener.module.css";

const CaseOpener = () => {
    const {
        userStore: { user },
    } = useContextStore();

    const items = [];

    for (const key in user.inventory) {
      const item = user.inventory[key];
  
      if (item.purchasable == 0) {
        for (let i = 0; i < 1; i++) {
          items.push({
            title: item.viewname,
            price: item.price,
            image: item.image,
            entityName: key
          });
          
        }
      }
    }
  
    return (
        <div onClick={() => console.log(items)}>hey</div>
    )

};

export default observer(CaseOpener);
