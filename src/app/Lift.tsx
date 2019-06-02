
import * as React from 'react';
import { LiftPanel } from './LiftPanel';

export enum Direction {
    Up = "UP",
    Down = "DOWN",
}

interface LiftProps {
    direction?: Direction;
    floors: number;
    currentLevel?: number;
    onCallLift?: (i: number) => void;
}
interface DefaultProps {
    currentLevel: number;
}

interface LiftState {
    highlightedButtons: Set<number>;
}

export class Lift extends React.Component<LiftProps & DefaultProps> {

    public static defaultProps: DefaultProps = {
        currentLevel: 1,
    }

    public state: LiftState = {
        highlightedButtons: new Set([]),
    }

    private callLift = (i: number): () => void => {
        return (): void => {
            this.setState((state: LiftState): LiftState => {
                const highlightedButtons = new Set([...state.highlightedButtons, i]);
                return {...state, highlightedButtons: highlightedButtons};
            });
            if (this.props.onCallLift) {
                this.props.onCallLift(i);
            }
        }
    }

    public componentDidUpdate(): void {
        if (this.state.highlightedButtons.has(this.props.currentLevel)) {
            this.setState((state: LiftState): LiftState => {
                const highlightedButtons = new Set(state.highlightedButtons)
                highlightedButtons.delete(this.props.currentLevel);
                return {...state, highlightedButtons: highlightedButtons}
            });
        }
    }

    public render(): JSX.Element {
        return (
            <div>
                {this.props.direction ?
                    <span>Going {this.props.direction}</span> : null}
                <LiftPanel
                    callLift={this.callLift}
                    highlightedButtons={this.state.highlightedButtons}
                    floors={this.props.floors}
                    currentLevel={this.props.currentLevel} />
            </div>
        );
    }
}
