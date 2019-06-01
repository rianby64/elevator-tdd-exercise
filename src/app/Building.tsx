
import * as React from 'react';

import { LiftPanel } from './LiftPanel';
import { Floor } from './Floor';

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

    private createFloors(): JSX.Element[] {
        return new Array(this.props.floors).fill(undefined).map((v: undefined, i: number): JSX.Element => {
            return <Floor key={i}/>
        });
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
                {this.createFloors()}
            </div>
        );
    }
}
