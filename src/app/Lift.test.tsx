
import * as React from 'react';
import { mount } from 'enzyme';
import { Lift, Direction } from './Lift';

test('Lift highlighs the currentLevel', (): void => {
    const el = (<Lift currentLevel={3} floors={5} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Lift highlighs the currentLevel and shows the direction', (): void => {
    const el = (<Lift currentLevel={3} floors={5} direction={Direction.Down} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});
