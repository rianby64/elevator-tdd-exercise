
import * as React from 'react';

interface LiftPanelProps {
    floors: number;
    currentLevel: number;
}

interface LiftPanelState {
    highlightButtons: Set<number>;
}

export class LiftPanel extends React.Component<LiftPanelProps> {

    public state: LiftPanelState = {
        highlightButtons: new Set([])
    }

    private highlightButton(i: number): () => void {
        return (): void => {
            this.setState((state: LiftPanelState): LiftPanelState => {
                const highlightButtons = new Set([...state.highlightButtons, i]);
                return {...state, highlightButtons: highlightButtons};
            });
        }
    }

    private createButtons = (): JSX.Element[] => new Array(this.props.floors)
        .fill(undefined)
        .map((v: undefined, i: number): JSX.Element => {
            return <li
                key={i}
                className={this.props.currentLevel === (i + 1) ?
                    "active" : undefined}>
                <button
                    className={this.state.highlightButtons.has(i + 1) ?
                        "highlight" : undefined}
                    onClick={this.highlightButton(i + 1)}>{i + 1}</button>
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
