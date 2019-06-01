
import * as React from 'react';

interface LiftPanelProps {
    floors: number;
    currentLevel?: number;
}
interface DefaultProps {
    currentLevel: number;
}


export class LiftPanel extends React.Component<LiftPanelProps> {

    public static defaultProps: DefaultProps = {
        currentLevel: 1,
    }

    private createButtons = (): JSX.Element[] => new Array(this.props.floors)
        .fill(undefined)
        .map((v: undefined, i: number): JSX.Element => {
            return <li key={i}>{i + 1}</li>
        })
        .reverse()

    public render(): JSX.Element {
        return (
            <div>
                <span>Lift&apos;s panel</span>
                <ul>
                    {this.createButtons()}
                </ul>
            </div>
        );
    }
}
