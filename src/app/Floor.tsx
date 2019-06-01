
import * as React from 'react';
import { FloorPanel } from './FloorPanel';

interface FloorProps {
    level: number;
    firstLevel?: boolean;
    lastLevel?: boolean;
}

interface DefaultProps {
    firstLevel: boolean;
    lastLevel: boolean;
}

export class Floor extends React.Component<FloorProps> {

    public static defaultProps: DefaultProps = {
        firstLevel: false,
        lastLevel: false,
    }

    public render(): JSX.Element {
        return (
            <div>
                <span>Floor {this.props.level}</span>
                <FloorPanel
                    upButton={!this.props.lastLevel}
                    downButton={!this.props.firstLevel} />
            </div>
        );
    }
}
