
import * as React from 'react';
import { FloorPanel } from './FloorPanel';

interface FloorProps {
    level: number;
}

type FloorElement = React.ReactElement<FloorProps>;

export const Floor = (props: FloorProps): FloorElement => {
    return (
        <div>
            <span>Floor {props.level}</span>
            <FloorPanel />
        </div>
    );
}
