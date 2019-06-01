
import * as React from 'react';
import { mount } from 'enzyme';
import { Lift, Direction } from './Lift';

test('Lift highlighs the currentLevel', (): void => {
    const el = (<Lift currentLevel={3} floors={5} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Lift has the state highlightedButtons', (): void => {
    const el = (<Lift currentLevel={3} floors={5} />);
    const sh = mount(el);
    expect(sh.state()).toHaveProperty('highlightedButtons');
});

test('Lift highlighs the currentLevel and shows the direction', (): void => {
    const el = (<Lift currentLevel={3} floors={5} direction={Direction.Down} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Lift highlighs a pressed button', (): void => {
    const el = (<Lift currentLevel={3} floors={5} />);
    const sh = mount(el);
    sh.find('LiftPanel ul').findWhere(el => el.key() === '2').find('button').simulate('click');
    expect(sh).toMatchSnapshot();
});
