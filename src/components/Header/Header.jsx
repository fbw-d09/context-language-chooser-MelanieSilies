import React, { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import { LanguageSwitch } from "../LanguageSwitch";

export const Header = ({language}) =>
{
    const languageHook = useContext(LanguageContext);

    return(
        <>
        <div className="content">
        <h3>Witch Language do you prefer?</h3>
        <LanguageSwitch />
        </div>
        </>

    )
}