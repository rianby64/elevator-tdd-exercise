
import * as React from 'react';

import { Lift } from './Lift';
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

    private createFloors = (): JSX.Element[] => new Array(this.props.floors)
        .fill(undefined)
        .map((v: undefined, i: number, arr: undefined[]): JSX.Element => {
            if (i === 0) {
                return <Floor key={i} level={i + 1} firstLevel={true} />;
            }
            if (i + 1 === arr.length) {
                return <Floor key={i} level={i + 1} lastLevel={true} />;
            }
            return <Floor key={i} level={i + 1}/>;
        })
        .reverse()

    private renderOneFloor(): JSX.Element {
        return (
            <div>This is just a House</div>
        );
    }

    public render(): JSX.Element {
        return this.props.floors == 1 ? this.renderOneFloor() : (
            <div>
                <span>Building</span>
                <Lift floors={this.props.floors} />
                {this.createFloors()}
            </div>
        );
    }
}
