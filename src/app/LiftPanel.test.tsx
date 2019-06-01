
import * as React from 'react';
import { mount } from 'enzyme';
import { LiftPanel } from './LiftPanel';

test('LiftPanel highlighs the currentLevel', (): void => {
    const el = (<LiftPanel currentLevel={3} floors={5} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('LiftPanel highlighs the pressed button', (): void => {
    const buttonPressed: number[] = [];
    const highlightButton = (i: number): () => void =>
        (): void => { buttonPressed.push(i); }

    const el = (<LiftPanel
        currentLevel={3}
        floors={5}
        highlightButton={highlightButton}/>);

    const sh = mount(el);
    sh.findWhere(el => el.key() === '2').find('button').simulate('click');
    expect(buttonPressed).toHaveLength(1);
    expect(buttonPressed[0]).toBe(3);
});
