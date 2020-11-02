import CircularProgress from "@material-ui/core/CircularProgress";
import React, {forwardRef} from "react";

const LoginProgress = forwardRef((props, ref) => {
    return (
        <CircularProgress ref={ref} style={{marginTop: '8px', display: 'inline-block'}}>
            {props}
        </CircularProgress>
    );
})
export default LoginProgress;
