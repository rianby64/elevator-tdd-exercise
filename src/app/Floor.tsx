
import * as React from 'react';
import { FloorPanel } from './FloorPanel';

interface FloorProps {
    level: number;
    firstLevel?: boolean;
    lastLevel?: boolean;
    currentLevel?: number;
}

interface DefaultProps {
    firstLevel: boolean;
    lastLevel: boolean;
    currentLevel: number;
}

export class Floor extends React.Component<FloorProps> {

    public static defaultProps: DefaultProps = {
        firstLevel: false,
        lastLevel: false,
        currentLevel: 1,
    }

    public render(): JSX.Element {
        return (
            <div>
                <span className={this.props.currentLevel === this.props.level ?
                    "active" : undefined}>Floor {this.props.level}</span>
                <FloorPanel
                    upButton={!this.props.lastLevel}
                    downButton={!this.props.firstLevel} />
            </div>
        );
    }
}
