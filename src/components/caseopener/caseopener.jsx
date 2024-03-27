import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import { React, useEffect, useState } from "react";
import styles from "./caseopener.module.css";

const CaseOpener = () => {
    const {
        userStore: { user },
    } = useContextStore();

    const items = [];
    const rarityChances = {
        'Contraband': 0.0025,    // 0.25%
        'Ultra Rare': 0.005,      // 0.5%
        'Rare': 0.02,             // 2%
        'Uncommon': 0.0975,       // 9.75%
        'Common': 0.1875          // 18.75%
    };

    const case1 = [
        'karambit_fade',
        'glock_fade',
        'deagle_codered',
        'mp7_bloodsport',
        'scar20_emerald',
        'usp_stainless',
        'awp_suninleo',
        'deagle_mudder',
        'glock_candyapple',
        'mp7_gunsmoke',
        "glock_sanddune"
    ];

    case1.forEach(entname => {
        const item = user.inventory && user.inventory[entname];
        if (item && item.purchasable === 0) {
            const rarity = item.rarity;
            const chance = rarityChances[rarity];
            items.push({
                title: item.viewname,
                price: item.price,
                image: item.image,
                rarity: rarity,
                entityName: entname,
                chance: chance,
            });
        }
    });

    return (
        <div onClick={() => console.log(items)}>hey</div>
    )

};

export default observer(CaseOpener);