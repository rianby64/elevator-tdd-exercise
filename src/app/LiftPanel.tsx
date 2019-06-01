
import * as React from 'react';

interface LiftPanelProps {
    floors: number;
    currentLevel: number;
    highlightedButtons?: Set<number>;
    highlightButton?: (i: number) => () => void;
}

interface DefaultProps {
    highlightedButtons: Set<number>;
}

export class LiftPanel extends React.Component<LiftPanelProps & DefaultProps> {

    public static defaultProps: DefaultProps = {
        highlightedButtons: new Set([])
    }

    private createButtons = (): JSX.Element[] => new Array(this.props.floors)
        .fill(undefined)
        .map((v: undefined, i: number): JSX.Element => {
            return <li
                key={i}
                className={this.props.currentLevel === (i + 1) ?
                    "active" : undefined}>
                <button
                    className={this.props.highlightedButtons.has(i + 1) ?
                        "highlight" : undefined}
                    onClick={this.props.highlightButton && this.props.highlightButton(i + 1)}>{i + 1}</button>
            </li>;
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
