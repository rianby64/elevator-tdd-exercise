
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
}
interface DefaultProps {
    currentLevel: number;
}

export class Lift extends React.Component<LiftProps & DefaultProps> {

    public static defaultProps: DefaultProps = {
        currentLevel: 1,
    }

    public render(): JSX.Element {
        return (
            <div>
                {this.props.direction ?
                    <span>Going {this.props.direction}</span> : null}
                <LiftPanel
                    floors={this.props.floors}
                    currentLevel={this.props.currentLevel} />
            </div>
        );
    }
}
