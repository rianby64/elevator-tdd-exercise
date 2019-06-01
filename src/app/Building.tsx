
import * as React from 'react';

import { LiftPanel } from './LiftPanel';
import { FloorPanel } from './FloorPanel';

interface BuildingProps {
    floors: number;
}

interface DefaultProps {
    floors: number;
}

export class Building extends React.Component<BuildingProps> {

    public static defaultProps: DefaultProps = {
        floors: 1,
    }

    private renderOneFloor(): JSX.Element {
        return (
            <div>This is just a House</div>
        );
    }

    public render(): JSX.Element {
        return this.props.floors == 1 ? this.renderOneFloor() : (
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
}
