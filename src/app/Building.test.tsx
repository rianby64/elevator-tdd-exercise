
import * as React from 'react';
import { mount } from 'enzyme';
import { Building } from './Building';

test('Building exists', (): void => {
    const el = (<Building />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Building draws two floors', (): void => {
    const el = (<Building floors={2} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Building draws three floors', (): void => {
    const el = (<Building floors={3} />);
    const sh = mount(el);
    expect(sh).toMatchSnapshot();
});

test('Lift in Building goes from first to second floor', (done): void => {
    const onLiftAtFloor = (i: number): void => {
        expect(i).toBe(2);
        done();
    }
    const el = (<Building floors={3} DELAY={1} onLiftAtFloor={onLiftAtFloor} />);
    const sh = mount(el);
    sh.find('LiftPanel ul').findWhere((el): boolean => el.key() === '1').find('button').simulate('click');
    expect(sh).toMatchSnapshot();
});

test('Lift in Building goes from first to third floor passing the second', (done): void => {
    const visited: number[] = [];
    const onLiftAtFloor = (i: number): void => {
        visited.push(i);
        if (visited.length === 2) {
            expect(visited[0]).toBe(2)
            expect(visited[1]).toBe(3);
            done();
        }
    }
    const el = (<Building floors={3} DELAY={1} onLiftAtFloor={onLiftAtFloor} />);
    const sh = mount(el);
    sh.find('LiftPanel ul').findWhere((el): boolean => el.key() === '2').find('button').simulate('click');
    expect(sh).toMatchSnapshot();
});
