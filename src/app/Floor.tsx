
import * as React from 'react';
import { FloorPanel } from './FloorPanel';

interface FloorProps {

}

type FloorElement = React.ReactElement<FloorProps>;

export const Floor = (props: FloorProps): FloorElement => {
    return (
        <div>
            <span>Floor 3</span>
            <FloorPanel />
        </div>
    );
}
