
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
    highlightedFloors: Set<number>;
}

export class Building extends React.Component<BuildingProps & DefaultProps> {

    public static defaultProps: DefaultProps = {
        floors: 1,
        DELAY: 1000,
    }

    public state: BuildState = {
        lift: {
            currentLevel: 1,
        },
        highlightedFloors: new Set([])
    }

    private moveLiftToFloor = (i: number): void => {
        (this.state.lift.currentLevel !== i) && setTimeout((): void => {
            if (this.state.lift.currentLevel !== i) {
                this.setState((state: BuildState): BuildState => {
                    const highlightedFloors = new Set(state.highlightedFloors);
                    let nextFloor = state.lift.currentLevel;
                    if (state.lift.currentLevel < i) {
                        nextFloor++;
                    }
                    if (state.lift.currentLevel > i) {
                        nextFloor--;
                    }
                    this.props.onLiftAtFloor && this.props.onLiftAtFloor(nextFloor);
                    if (highlightedFloors.has(nextFloor)) {
                        highlightedFloors.delete(nextFloor);
                    }
                    return {...state,
                        highlightedFloors,
                        lift: { currentLevel: nextFloor }};
                });
                this.moveLiftToFloor(i);
            }
        }, this.props.DELAY);
    }

    private callLiftFromFloor = (i: number): () => void => {
        return (): void => {
            if (this.state.lift.currentLevel !== i) {
                this.setState((state: BuildState): BuildState => {
                    const highlightedFloors = new Set([...state.highlightedFloors, i]);
                    return {...state, highlightedFloors: highlightedFloors};
                });
                this.moveLiftToFloor(i);
            }
        }
    }

    private createFloors = (): JSX.Element[] => new Array(this.props.floors)
        .fill(undefined)
        .map((v: undefined, i: number, arr: undefined[]): JSX.Element => {
            if (i === 0) {
                return <Floor
                    highlight={this.state.highlightedFloors.has(i + 1)}
                    callLift={this.callLiftFromFloor(i + 1)}
                    currentLevel={this.state.lift.currentLevel}
                    key={i} level={i + 1}
                    firstLevel={true} />;
            }
            if (i + 1 === arr.length) {
                return <Floor
                    highlight={this.state.highlightedFloors.has(i + 1)}
                    callLift={this.callLiftFromFloor(i + 1)}
                    currentLevel={this.state.lift.currentLevel}
                    key={i} level={i + 1}
                    lastLevel={true} />;
            }
            return <Floor
                highlight={this.state.highlightedFloors.has(i + 1)}
                callLift={this.callLiftFromFloor(i + 1)}
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
