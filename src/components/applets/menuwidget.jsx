import { useState } from "react";
import "./widgets.css";
import { Link } from "react-router-dom";

function MenuItem({ navLink, MenuItems, itemName = MenuItems.name }) {
  //for a non-folding menu, navlink determines the link and
  const [expanded, toggleExpand] = useState(false);
  if (MenuItems) {
    //checks if menuItems exixst, which means that the item has submenus
    return (
      <div className="menuItemList">
        <div className="menuBundle" onClick={() => toggleExpand(!expanded)}>
          {itemName}
          <h4>arrow</h4>
        </div>
        {/* the parent element of the folding menu */}
        {expanded && (
          <ul className="menuExpand">
            {MenuItems.map((item) => (
              <li className="subMenuItem">
                <Link id={item.id} className="subMenuLink" to={item.link}>
                  {" "}
                  {/* is the submenu item*/}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  return (
    <Link className="menuItem" to={navLink}>
      {itemName}
    </Link>
  );
}

export default function MenuWidget(props) {
  return (
    <div className="menuContainer">
      <MenuItem
        itemName="test1"
        hasSubMenu={true}
        MenuItems={[
          { id: 1, name: "sub1", link: "/home" },
          { id: 2, name: "sub2", link: "/home/sub2" },
          { id: 3, name: "sub3", link: "/home/sub3" },
        ]}
      />
      <MenuItem navLink={"/"} itemName={"test2"} />
    </div>
  );
}
