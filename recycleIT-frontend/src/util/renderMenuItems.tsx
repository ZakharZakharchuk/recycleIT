import { MenuItem } from "@mui/material";

export function renderMenuItems(arr: any) {
    return arr.map((item: any, i: string) => {
        // const maxStringLength = 27;
        // let itemName = item.name;
        // if (item.name.length > maxStringLength) {
        //     itemName = itemName.slice(0, maxStringLength) + '...'
        // }
        return <MenuItem key={i} value={item.id} title={item.name}>{item.name}</MenuItem>
    })
}