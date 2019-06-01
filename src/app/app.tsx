
import * as React from 'react';
import { render } from 'react-dom';
import { Building } from './Building';

render(
    (
        <Building floors={5} />
    ),
    document.getElementById("root")
);
