import React, { useContext, useEffect, useMemo } from "react";

import { ListItem, Search } from "../../components";
import { AppContext } from "../../context/AppContext";

export const Home = () => {
  const { cities } = useContext(AppContext);

  const renderItems = useMemo(
    () => cities.map((item) => <ListItem data={item} key={item.name} />),
    [cities]
  );

  return (
    <div className="flex">
      <Search />
      {renderItems}
    </div>
  );
};
