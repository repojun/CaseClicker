import { observer } from "mobx-react-lite";
import useContextStore from "../../context";
import { React } from "react";
import styles from "./caseopener.module.css";

const CaseOpener = (caseName) => {
    const {
        userStore: { user },
    } = useContextStore();

   
    return (
        <div>
            <button>Select Random Items</button>
        </div>
    );
};

export default observer(CaseOpener);