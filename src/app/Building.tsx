
import * as React from 'react';

import { LiftPanel } from './LiftPanel';
import { FloorPanel } from './FloorPanel';

interface BuildingProps {
}

type BuildingElement = React.ReactElement<BuildingProps>;

export const Building = (props: BuildingProps): BuildingElement => {
    return (
        <div>
            <span>Building</span>
            <LiftPanel />
            <div>
                <span>Floor 3</span>
                <FloorPanel />
            </div>
            <div>
                <span>Floor 2</span>
                <FloorPanel />
            </div>
            <div>
                <span>Floor 1</span>
                <FloorPanel />
            </div>
        </div>
    );
}
