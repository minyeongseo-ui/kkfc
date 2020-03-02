import { ResultCode, Runner, Task } from '../src/core';

describe( 'runner', () => {
  it( 'runner - change zone properties', () => {
    const t = new Task( 'print', ( a: number ) => a );
    const r = new Runner( 'r1', undefined, [ t ] );

    const r1 = t.fn( 100 );
    r.getCurrentZone().get( 'props' )['status'].code = ResultCode.SUCCESS;
    r.getCurrentZone().get( 'props' )['status'].result.push( r1 );
    expect( r1 ).toEqual( 100 );
    console.log( r.getProps( 'status' ) );
    expect( r.getCurrentZone().get( 'props' )['status'].code ).toEqual( ResultCode.SUCCESS );
    expect( r.getCurrentZone().get( 'props' )['status'].result ).toEqual( [ 100 ] );
  } );

  it( 'runner - go', () => {
    const t1 = new Task( 'print',  200 );
    const t2 = new Task( 'print', ( a: number ) => console.log(a) );
    const r2 = new Runner( 'r2', undefined, [ t1, t2 ] );
    r2.start();
  } );
} );
