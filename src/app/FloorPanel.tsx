
import * as React from 'react';

interface FloorPanelProps {

}

type FloorPanelElement = React.ReactElement<FloorPanelProps>;

export const FloorPanel = (props: FloorPanelProps): FloorPanelElement => {
    return (
        <ul>
            <li>Up</li>
            <li>Down</li>
        </ul>
    );
}
