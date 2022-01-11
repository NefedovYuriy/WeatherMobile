import React, { useContext, useMemo } from "react";

import { ListItemShort } from "../../components";
import { AppContext } from "../../context/AppContext";


export const Menu = () => {

    const {cities} = useContext(AppContext)

    const renderItems = useMemo(() => 
        cities.map((item) => <ListItemShort data={item} key={item.name} />)
    , [cities])


    return (
        <>
            {
                renderItems
            }
        </>
    )
}