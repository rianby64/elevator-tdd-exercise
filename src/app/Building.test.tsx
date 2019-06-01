
import * as React from 'react';
import { mount } from 'enzyme';
import { Building } from './Building';

test('Building exists', (): void => {
    const el = (<Building />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});
