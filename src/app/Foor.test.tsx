
import * as React from 'react';
import { mount } from 'enzyme';
import { Floor } from './Floor';

test('Floor exists', (): void => {
    const el = (<Floor level={1} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});
