const { formatVolumeIconPath } = require('../assets/scripts/main');

describe('formatting tests', () => {
    test('above 66', () => {
        expect(formatVolumeIconPath(67)).toContain('3');
    });

    test('exactly 66', () => {
        expect(formatVolumeIconPath(66)).toContain('2');
    });

    test('above 33, below 67', () => {
        expect(formatVolumeIconPath(38)).toContain('2');
    });

    test('exactly 33', () => {
        expect(formatVolumeIconPath(33)).toContain('1');
    });

    test('above 0, below 33', () => {
        expect(formatVolumeIconPath(15)).toContain('1');
    });

    test('exactly 0', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
});