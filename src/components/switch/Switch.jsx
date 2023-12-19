import { Button } from "@mui/material";
import useToggler from "../../hooks/toggler/useToggler";

export default function Switch() {

    const [on, handleOn] = useToggler(true)

    return (
        <Button onClick={()=> handleOn()}>{on ? 'ON': "OFF"}</Button>
    )
}