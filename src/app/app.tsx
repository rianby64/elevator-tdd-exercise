
import * as React from 'react';
import { render } from 'react-dom';
import { Building } from './Building';

render(
    (
        <Building floors={3} />
    ),
    document.getElementById("root")
);
