
import * as React from 'react';

import { Lift } from './Lift';
import { Floor } from './Floor';

interface BuildingProps {
    floors: number;
    DELAY?: number;
    onLiftAtFloor?: (i: number) => void;
}

interface DefaultProps {
    floors: number;
    DELAY: number;
}

interface BuildState {
    lift: {
        currentLevel: number;
    };
}

export class Building extends React.Component<BuildingProps & DefaultProps> {

    public static defaultProps: DefaultProps = {
        floors: 1,
        DELAY: 1000,
    }

    public state: BuildState = {
        lift: {
            currentLevel: 1,
        }
    }

    private moveLiftToFloor = (i: number): void => {
        (this.state.lift.currentLevel !== i) && setTimeout((): void => {
            if (this.state.lift.currentLevel !== i) {
                this.setState((state: BuildState): BuildState => {
                    let nextFloor = state.lift.currentLevel;
                    if (state.lift.currentLevel < i) {
                        nextFloor++;
                    }
                    if (state.lift.currentLevel > i) {
                        nextFloor--;
                    }
                    this.props.onLiftAtFloor && this.props.onLiftAtFloor(nextFloor);
                    return {...state, lift: { currentLevel: nextFloor }};
                });
                this.moveLiftToFloor(i);
            }
        }, this.props.DELAY);
    }

    private createFloors = (): JSX.Element[] => new Array(this.props.floors)
        .fill(undefined)
        .map((v: undefined, i: number, arr: undefined[]): JSX.Element => {
            if (i === 0) {
                return <Floor
                    currentLevel={this.state.lift.currentLevel}
                    key={i} level={i + 1}
                    firstLevel={true} />;
            }
            if (i + 1 === arr.length) {
                return <Floor
                    currentLevel={this.state.lift.currentLevel}
                    key={i} level={i + 1}
                    lastLevel={true} />;
            }
            return <Floor
                currentLevel={this.state.lift.currentLevel}
                key={i} level={i + 1}/>;
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
                <Lift
                    onCallLift={this.moveLiftToFloor}
                    floors={this.props.floors}
                    currentLevel={this.state.lift.currentLevel} />
                {this.createFloors()}
            </div>
        );
    }
}
