
import * as React from 'react';

interface FloorPanelProps {
    upButton: boolean;
    downButton: boolean;
}

type FloorPanelElement = React.ReactElement<FloorPanelProps>;

export const FloorPanel = (props: FloorPanelProps): FloorPanelElement => {
    if (!props.upButton && !props.downButton) {
        return (<div></div>);
    }
    return (
        <ul>
            {props.upButton && (<li>Up</li>)}
            {props.downButton && (<li>Down</li>)}
        </ul>
    );
}
