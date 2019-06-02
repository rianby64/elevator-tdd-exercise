
import * as React from 'react';

interface FloorPanelProps {
    upButton: boolean;
    downButton: boolean;
    callLift?: () => void;
    highlight?: boolean;
}

type FloorPanelElement = React.ReactElement<FloorPanelProps>;

export const FloorPanel = (props: FloorPanelProps): FloorPanelElement => {
    if (!props.upButton && !props.downButton) {
        return (<div></div>);
    }
    return (
        <ul className={props.highlight ? "highlight" : undefined}>
            {props.upButton && (<button onClick={props.callLift}>Up</button>)}
            {props.downButton && (<button onClick={props.callLift}>Down</button>)}
        </ul>
    );
}
