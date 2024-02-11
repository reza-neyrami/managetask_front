import {
  Button,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { CollapseListStyles } from "./styles";
function CollapseList({ items }) {
  const [openItems, setOpenItems] = useState({});
  const history = useNavigate();


  const handleClick = (link, itemId) => () => {
    history(link);
    setOpenItems((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <CollapseListStyles>
      <List>
        {items.map((item) => (
          <div key={item.id}>
            <ListItem
              components={Button}
              key={item.id}
              onClick={handleClick(item.link, item.id)}
            >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
              {item.children &&
                (openItems[item.id] ? <ExpandLessIcon /> : <ExpandMore />)}
            </ListItem>
            {item.children && (
              <Collapse in={openItems[item.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItem components={Button} key={child.id}>
                      <ListItemText
                        primary={child.title}
                        components={Button}
                        onClick={handleClick(child.link)}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </CollapseListStyles>
  );
}

export default CollapseList;
