const { toBase64 } = require('../dist/index');

test('toBase64 converts Blob to base64 data URL', async () => {
    const blob = new Blob(['hello'], { type: 'text/plain' });

    // Ensure a FileReader is available (jsdom may not provide a full implementation in some setups).
    const RealFileReader = global.FileReader;
    if (!global.FileReader) {
        global.FileReader = function () {
            this.onloadend = null;
            this.readAsDataURL = function () {
                // base64 for "hello" is aGVsbG8=
                this.result = 'data:text/plain;base64,aGVsbG8=';
                if (typeof this.onloadend === 'function') this.onloadend();
            };
        };
    }

    const res = await toBase64(blob);
    expect(res).toMatch(/^data:text\/plain;base64,/);
    expect(res.endsWith('aGVsbG8=')).toBe(true);

    if (!RealFileReader && global.FileReader) delete global.FileReader;
    if (RealFileReader) global.FileReader = RealFileReader;
});
