// Định dạng lại mã JavaScript liên quan đến YouTube

(() => {
    var qt = Object.defineProperty;
    var Xt = (t, e, n) => (e in t ? qt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n), n);
    var Q = (t, e, n) => (Xt(t, typeof e != "symbol" ? e + "" : e, n), n);

    (function (t) {
        function e() {}
        function n() {}
        var r = String.fromCharCode,
            s = {}.toString,
            o = s.call(t.SharedArrayBuffer),
            i = s(),
            a = t.Uint8Array,
            c = a || Array,
            d = a ? ArrayBuffer : c,
            f = d.isView || function (h) {
                return h && "length" in h;
            },
            l = s.call(d.prototype);
        d = n.prototype;
        var g = t.TextEncoder,
            p = new (a ? Uint16Array : c)(32);
        e.prototype.decode = function (h) {
            if (!f(h)) {
                var R = s.call(h);
                if (R !== l && R !== o && R !== i) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
                h = a ? new c(h) : h || [];
            }
            for (var N = R = "", k = 0, T = h.length | 0, z = T - 32 | 0, x, w, F = 0, _ = 0, M, B = 0, O = -1; k < T; ) {
                for (x = k <= z ? 32 : T - k | 0; B < x; k = k + 1 | 0, B = B + 1 | 0) {
                    switch ((w = h[k] & 255), w >> 4) {
                        case 15:
                            if (((M = h[(k = k + 1 | 0)] & 255), M >> 6 !== 2 || 247 < w)) {
                                k = k - 1 | 0;
                                break;
                            }
                            F = (w & 7) << 6 | M & 63;
                            _ = 5;
                            w = 256;
                        case 14:
                            M = h[(k = k + 1 | 0)] & 255;
                            F <<= 6;
                            F |= (w & 15) << 6 | M & 63;
                            _ = M >> 6 === 2 ? _ + 4 | 0 : 24;
                            w = w + 256 & 768;
                        case 13:
                        case 12:
                            M = h[(k = k + 1 | 0)] & 255;
                            F <<= 6;
                            F |= (w & 31) << 6 | M & 63;
                            _ = _ + 7 | 0;
                            k < T && M >> 6 === 2 && F >> _ && 1114112 > F ? ((w = F), (F = F - 65536 | 0), 0 <= F ? ((O = (F >> 10) + 55296 | 0), (w = (F & 1023) + 56320 | 0), 31 > B ? ((p[B] = O), (B = B + 1 | 0), (O = -1)) : ((M = O), (O = w), (w = M)))) : ((w >>= 8), (k = k - w - 1 | 0), (w = 65533)), (F = _ = 0), (x = k <= z ? 32 : T - k | 0);
                        default:
                            p[B] = w;
                            continue;
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                    }
                    p[B] = 65533;
                }
                if ((N += r(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15], p[16], p[17], p[18], p[19], p[20], p[21], p[22], p[23], p[24], p[25], p[26], p[27], p[28], p[29], p[30], p[31])), 32 > B && (N = N.slice(0, B - 32 | 0)), k < T) {
                    if (((p[0] = O), (B = ~O >>> 31), (O = -1), N.length < R.length)) continue;
                } else O !== -1 && (N += r(O));
                R += N;
                N = "";
            }
            return R;
        };
        g || (t.TextDecoder = e, t.TextEncoder = n);
    })(globalThis);
})();
