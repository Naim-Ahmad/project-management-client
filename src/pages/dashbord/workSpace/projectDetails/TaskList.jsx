import CommentIcon from "@mui/icons-material/Comment";
import { IconButton, ListItem } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";

export default function TaskList({value}) {
    const [checked, setChecked] = React.useState([0]);

    console.log(value)

    const labelId = `checkbox-list-label-${value}`;

    const handleCheck = (value) => () => {
        
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
      };

                        

    return (
        <ListItem
           
            secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onClick={handleCheck(value)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value?.taskTitle} />
            </ListItemButton>
        </ListItem>
    );
}