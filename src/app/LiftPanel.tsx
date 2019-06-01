
import * as React from 'react';

interface LiftPanelProps {

}

type LiftPanelElement = React.ReactElement<LiftPanelProps>;

export const LiftPanel = (props: LiftPanelProps): LiftPanelElement => {
    return (
        <div>
            <span>Lift&apos;s panel</span>
            <ul>
                <li>5</li>
                <li>4</li>
                <li>3</li>
                <li>2</li>
                <li>1</li>
            </ul>
        </div>
    );
}
