// Khôi phục mã JavaScript gốc từ tệp ban đầu

(() => {
    var qt = Object.defineProperty;
    var Xt = (t, e, n) => (e in t ? qt(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : (t[e] = n), n);
    var Q = (t, e, n) => (Xt(t, typeof e !== "symbol" ? e + "" : e, n), n);

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
            for (var N = "", k = 0, T = h.length, z = T - 32, x, w, F = 0, _ = 0, M, B = 0, O = -1; k < T; ) {
                for (x = k <= z ? 32 : T - k, B = 0; B < x; k++, B++) {
                    switch ((w = h[k] & 255), w >> 4) {
                        case 15:
                            if (((M = h[++k] & 255), M >> 6 !== 2 || 247 < w)) {
                                k--;
                                break;
                            }
                            F = (w & 7) << 6 | M & 63;
                            _ = 5;
                            w = 256;
                        case 14:
                            M = h[++k] & 255;
                            F <<= 6;
                            F |= (w & 15) << 6 | M & 63;
                            _ = M >> 6 === 2 ? _ + 4 : 24;
                            w = w + 256 & 768;
                        case 13:
                        case 12:
                            M = h[++k] & 255;
                            F <<= 6;
                            F |= (w & 31) << 6 | M & 63;
                            _ += 7;
                            k < T && M >> 6 === 2 && F >> _ && 1114112 > F ? ((w = F), (F -= 65536), 0 <= F ? ((O = (F >> 10) + 55296), (w = (F & 1023) + 56320), 31 > B ? ((p[B] = O), B++, O = -1) : ((M = O), (O = w), (w = M))) : (w = 65533)) : ((w >>= 8), k -= w + 1, w = 65533), (F = _ = 0), (x = k <= z ? 32 : T - k);
                        default:
                            p[B] = w;
                            continue;
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                            p[B] = 65533;
                    }
                }
                N += r(...p.slice(0, B));
                if (32 > B) N = N.slice(0, B - 32);
                if (k < T) {
                    if (((p[0] = O), (B = ~O >>> 31), (O = -1), N.length < R.length)) continue;
                } else if (O !== -1) N += r(O);
            }
            return N;
        };
        g || (t.TextDecoder = e, t.TextEncoder = n);
    })(globalThis);

    console.log("Khôi phục mã gốc thành công");
})();
