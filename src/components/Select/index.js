import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Spinner,
} from "reactstrap";
import "../../styles/select.scss";

function Select(props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggle = () => setOpen(!open);
  const handleClickItem = (val) => {
    setSelected(val.name);
    props.dispatch({ type: "SELECT_PRODUCT", payload: val }); // add product to global state
  };
  const { products } = props;
  return (
    <ButtonDropdown className="select-layout" isOpen={open} toggle={toggle}>
      <DropdownToggle className="select-btn" caret>
        {selected ? selected : "Select Product"}         
        <span className="icon" />
      </DropdownToggle>
      <DropdownMenu>
        {products.data ? (
          products.data.map((item, index) => (
            <DropdownItem onClick={() => handleClickItem(item)} key={index}>
              {item.name}
            </DropdownItem>
          ))
        ) : (
          <span>loading...</span>
        )}
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Select;
