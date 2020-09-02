require('./url');

test('?param=abc to equal abc', () => {
    
    expect(getQueryStringParameter('?param=abc', 'param')).toBe('abc');
    
});