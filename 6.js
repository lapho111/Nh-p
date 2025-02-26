/******************************
📌 Tác Giả：Lạp Hộ  
📌 Cập Nhật：2025-2-17  
📌 Liên Lạc：Zalo: 0886632736  
📌 Face Book: https://www.facebook.com/lapho111
******************************/
(() => {
    var qt = Object.defineProperty;
    var Xt = (t, e, n) => e in t ? qt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
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
            f = d.isView || function (h) { return h && "length" in h },
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
            for (var N = R = "", k = 0, T = h.length | 0, z = T - 32 | 0, x, w, F = 0, _ = 0, M, B = 0, O = -1; k < T;) {
                for (x = k <= z ? 32 : T - k | 0; B < x; k = k + 1 | 0, B = B + 1 | 0) {
                    switch (w = h[k] & 255, w >> 4) {
                        case 15:
                            if (M = h[k = k + 1 | 0] & 255, M >> 6 !== 2 || 247 < w) { k = k - 1 | 0; break }
                            F = (w & 7) << 6 | M & 63, _ = 5, w = 256;
                        case 14:
                            M = h[k = k + 1 | 0] & 255, F <<= 6, F |= (w & 15) << 6 | M & 63, _ = M >> 6 === 2 ? _ + 4 | 0 : 24, w = w + 256 & 768;
                        case 13:
                        case 12:
                            M = h[k = k + 1 | 0] & 255, F <<= 6, F |= (w & 31) << 6 | M & 63, _ = _ + 7 | 0, k < T && M >> 6 === 2 && F >> _ && 1114112 > F ? (w = F, F = F - 65536 | 0, 0 <= F && (O = (F >> 10) + 55296 | 0, w = (F & 1023) + 56320 | 0, 31 > B ? (p[B] = O, B = B + 1 | 0, O = -1) : (M = O, O = w, w = M))) : (w >>= 8, k = k - w - 1 | 0, w = 65533), F = _ = 0, x = k <= z ? 32 : T - k | 0;
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
                if (N += r(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15], p[16], p[17], p[18], p[19], p[20], p[21], p[22], p[23], p[24], p[25], p[26], p[27], p[28], p[29], p[30], p[31]), 32 > B && (N = N.slice(0, B - 32 | 0)), k < T) {
                    if (p[0] = O, B = ~O >>> 31, O = -1, N.length < R.length) continue;
                } else O !== -1 && (N += r(O));
                R += N, N = "";
            }
            return R;
        };
        d.encode = function (h) {
            h = h === void 0 ? "" : "" + h;
            var R = h.length | 0,
                N = new c((R << 1) + 8 | 0),
                k, T = 0,
                z = !a;
            for (k = 0; k < R; k = k + 1 | 0, T = T + 1 | 0) {
                var x = h.charCodeAt(k) | 0;
                if (127 >= x) N[T] = x;
                else {
                    if (2047 >= x) N[T] = 192 | x >> 6;
                    else {
                        e: {
                            if (55296 <= x)
                                if (56319 >= x) {
                                    var w = h.charCodeAt(k = k + 1 | 0) | 0;
                                    if (56320 <= w && 57343 >= w) {
                                        if (x = (x << 10) + w - 56613888 | 0, 65535 < x) {
                                            N[T] = 240 | x >> 18, N[T = T + 1 | 0] = 128 | x >> 12 & 63, N[T = T + 1 | 0] = 128 | x >> 6 & 63, N[T = T + 1 | 0] = 128 | x & 63;
                                            continue;
                                        }
                                        break e;
                                    }
                                    x = 65533;
                                } else 57343 >= x && (x = 65533);
                            !z && k << 1 < T && k << 1 < (T - 7 | 0) && (z = !0, w = new c(3 * R), w.set(N), N = w);
                        }
                        N[T] = 224 | x >> 12, N[T = T + 1 | 0] = 128 | x >> 6 & 63;
                    }
                    N[T = T + 1 | 0] = 128 | x & 63;
                }
            }
            return a ? N.subarray(0, T) : N.slice(0, T);
        };
        g || (t.TextDecoder = e, t.TextEncoder = n);
    })(globalThis);

    function I(t, e) { if (!t) throw new Error(e); }

    var Wt = 34028234663852886e22,
        jt = -34028234663852886e22,
        Kt = 4294967295,
        zt = 2147483647,
        Qt = -2147483648;

    function Y(t) {
        if (typeof t != "number") throw new Error("invalid int 32: " + typeof t);
        if (!Number.isInteger(t) || t > zt || t < Qt) throw new Error("invalid int 32: " + t);
    }

    function H(t) {
        if (typeof t != "number") throw new Error("invalid uint 32: " + typeof t);
        if (!Number.isInteger(t) || t > Kt || t < 0) throw new Error("invalid uint 32: " + t);
    }

    function se(t) {
        if (typeof t != "number") throw new Error("invalid float 32: " + typeof t);
        if (Number.isFinite(t) && (t > Wt || t < jt)) throw new Error("invalid float 32: " + t);
    }

    var je = Symbol("@bufbuild/protobuf/enum-type");

    function Ke(t) {
        let e = t[je];
        return I(e, "missing enum type on enum object"), e;
    }

    function Re(t, e, n, r) {
        t[je] = Be(e, n.map(s => ({ no: s.no, name: s.name, localName: t[s.no] })), r);
    }

    function Be(t, e, n) {
        let r = Object.create(null),
            s = Object.create(null),
            o = [];
        for (let i of e) {
            let a = Qe(i);
            o.push(a), r[i.name] = a, s[i.no] = a;
        }
        return { typeName: t, values: o, findName(i) { return r[i] }, findNumber(i) { return s[i] } };
    }

    function ze(t, e, n) {
        let r = {};
        for (let s of e) {
            let o = Qe(s);
            r[o.localName] = o.no, r[o.no] = o.localName;
        }
        return Re(r, t, e, n), r;
    }

    function Qe(t) {
        return "localName" in t ? t : Object.assign(Object.assign({}, t), { localName: t.name });
    }

    var E = class {
        equals(e) { return this.getType().runtime.util.equals(this.getType(), this, e); }
        clone() { return this.getType().runtime.util.clone(this); }
        fromBinary(e, n) {
            let r = this.getType(),
                s = r.runtime.bin,
                o = s.makeReadOptions(n);
            return s.readMessage(this, o.readerFactory(e), e.byteLength, o), this;
        }
        fromJson(e, n) {
            let r = this.getType(),
                s = r.runtime.json,
                o = s.makeReadOptions(n);
            return s.readMessage(r, e, o, this), this;
        }
        fromJsonString(e, n) {
            let r;
            try { r = JSON.parse(e); } catch (s) {
                throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${s instanceof Error ? s.message : String(s)}`);
            }
            return this.fromJson(r, n);
        }
        toBinary(e) {
            let n = this.getType(),
                r = n.runtime.bin,
                s = r.makeWriteOptions(e),
                o = s.writerFactory();
            return r.writeMessage(this, o, s), o.finish();
        }
        toJson(e) {
            let n = this.getType(),
                r = n.runtime.json,
                s = r.makeWriteOptions(e);
            return r.writeMessage(this, s);
        }
        toJsonString(e) {
            var n;
            let r = this.toJson(e);
            return JSON.stringify(r, null, (n = e?.prettySpaces) !== null && n !== void 0 ? n : 0);
        }
        toJSON() { return this.toJson({ emitDefaultValues: !0 }); }
        getType() { return Object.getPrototypeOf(this).constructor; }
    };

    function He(t, e, n, r) {
        var s;
        let o = (s = r?.localName) !== null && s !== void 0 ? s : e.substring(e.lastIndexOf(".") + 1),
            i = { [o]: function (a) { t.util.initFields(this); t.util.initPartial(a, this); } }[o];
        return Object.setPrototypeOf(i.prototype, new E),
            Object.assign(i, {
                runtime: t,
                typeName: e,
                fields: t.util.newFieldList(n),
                fromBinary(a, c) { return new i().fromBinary(a, c); },
                fromJson(a, c) { return new i().fromJson(a, c); },
                fromJsonString(a, c) { return new i().fromJsonString(a, c); },
                equals(a, c) { return t.util.equals(i, a, c); }
            }), i;
    }

    var u;
    (function (t) {
        t[t.DOUBLE = 1] = "DOUBLE";
        t[t.FLOAT = 2] = "FLOAT";
        t[t.INT64 = 3] = "INT64";
        t[t.UINT64 = 4] = "UINT64";
        t[t.INT32 = 5] = "INT32";
        t[t.FIXED64 = 6] = "FIXED64";
        t[t.FIXED32 = 7] = "FIXED32";
        t[t.BOOL = 8] = "BOOL";
        t[t.STRING = 9] = "STRING";
        t[t.BYTES = 12] = "BYTES";
        t[t.UINT32 = 13] = "UINT32";
        t[t.SFIXED32 = 15] = "SFIXED32";
        t[t.SFIXED64 = 16] = "SFIXED64";
        t[t.SINT32 = 17] = "SINT32";
        t[t.SINT64 = 18] = "SINT64";
    })(u || (u = {}));

    var C;
    (function (t) {
        t[t.BIGINT = 0] = "BIGINT";
        t[t.STRING = 1] = "STRING";
    })(C || (C = {}));

    // ... (phần tiếp theo sẽ ở phần 2)
})();

class $ {
    name;
    needProcess;
    needSave;
    message;
    version = "1.0";
    whiteNo = [];
    blackNo = [];
    whiteEml = [];
    blackEml = ["inline_injection_entrypoint_layout.eml"];
    msgType;
    argument;
    decoder = new TextDecoder("utf-8", { fatal: !1, ignoreBOM: !0 });

    constructor(e, n) {
        this.name = n;
        this.msgType = e;
        this.argument = this.decodeArgument();
        y.isDebug = Boolean(this.argument.debug);
        y.debug(this.name);
        let r = y.getJSON("YouTubeAdvertiseInfo");
        y.debug(`currentVersion:  ${this.version}`);
        y.debug(`storedVersion:  ${r.version}`);
        r?.version === this.version && Object.assign(this, r);
    }

    decodeArgument() {
        let e = { lyricLang: "zh-Hans", captionLang: "zh-Hans", blockUpload: !0, blockImmersive: !0, debug: !1 };
        return y.decodeParams(e);
    }

    fromBinary(e) {
        return e instanceof Uint8Array ? (this.message = this.msgType.fromBinary(e), y.debug(`raw: ${Math.floor(e.length / 1024)} kb`), this) : (y.log("YouTube can not get binaryBody"), y.exit(), this);
    }

    async modify() {
        let e = this.pure();
        return e instanceof Promise ? await e : e;
    }

    toBinary() { return this.message.toBinary(); }

    listUnknownFields(e) { return e instanceof E ? e.getType().runtime.bin.listUnknownFields(e) : []; }

    save() {
        if (this.needSave) {
            y.debug("Update Config");
            let e = { version: this.version, whiteNo: this.whiteNo, blackNo: this.blackNo, whiteEml: this.whiteEml, blackEml: this.blackEml };
            y.debug(e);
            y.setJSON(e, "YouTubeAdvertiseInfo");
        }
    }

    done() {
        if (this.save(), this.needProcess) {
            y.timeStart("toBinary");
            let e = this.toBinary();
            y.timeEnd("toBinary");
            y.debug(`modify: ${Math.floor(e.length / 1024)} kb`);
            y.done({ bodyBytes: e });
        }
        y.debug("use $done({})");
        y.exit();
    }

    iterate(e = {}, n, r) {
        let s = typeof e == "object" ? [e] : [];
        for (; s.length;) {
            let o = s.pop(),
                i = Object.keys(o);
            for (let a of i) a === n ? r(o, s) : typeof o[a] == "object" && s.push(o[a]);
        }
    }

    // Thêm hàm replaceText để thay "YouTube" thành "Premium"
    replaceText(obj, oldText, newText) {
        this.iterate(obj, "text", (n) => {
            if (n.text.includes(oldText)) {
                n.text = n.text.replace(oldText, newText);
                this.needProcess = true;
            }
        });
    }

    isAdvertise(e) {
        let n = this.listUnknownFields(e)[0];
        return n ? this.handleFieldNo(n) : this.handleFieldEml(e);
    }

    handleFieldNo(e) {
        let n = e.no;
        if (this.whiteNo.includes(n)) return !1;
        if (this.blackNo.includes(n)) return !0;
        let r = this.checkBufferIsAd(e);
        return r ? this.blackNo.push(n) : this.whiteNo.push(n), this.needSave = !0, r;
    }

    handleFieldEml(e) {
        let n = !1,
            r = "";
        return this.iterate(e, "renderInfo", (s, o) => {
            if (r = s.renderInfo.layoutRender.eml.split("|")[0], this.whiteEml.includes(r)) n = !1;
            else if (this.blackEml.includes(r) || /shorts(?!_pivot_item)/.test(r)) n = !0;
            else {
                let i = s?.videoInfo?.videoContext?.videoContent;
                i && (n = this.checkUnknownFiled(i), n ? this.blackEml.push(r) : this.whiteEml.push(r), this.needSave = !0);
            }
            o.length = 0;
        }), n;
    }

    checkBufferIsAd(e) { return !e || e.data.length < 1e3 ? !1 : this.decoder.decode(e.data).includes("pagead"); }

    checkUnknownFiled(e) { return e ? this.listUnknownFields(e)?.some(r => this.checkBufferIsAd(r)) ?? !1 : !1; }

    isShorts(e) {
        let n = !1;
        return this.iterate(e, "eml", (r, s) => { n = /shorts(?!_pivot_item)/.test(r.eml), s.length = 0; }), n;
    }
}
var Bt = m.makeMessageType("youtube.component.ResponseContext", () => [
    { no: 6, name: "serviceTrackingParams", kind: "message", T: pn, repeated: !0 }
]),
pn = m.makeMessageType("youtube.component.ServiceTrackingParam", () => [
    { no: 1, name: "service", kind: "scalar", T: 5 },
    { no: 2, name: "params", kind: "message", T: gn, repeated: !0 }
]),
gn = m.makeMessageType("youtube.component.Param", () => [
    { no: 1, name: "key", kind: "scalar", T: 9 },
    { no: 2, name: "value", kind: "scalar", T: 9 }
]);

var he = m.makeMessageType("youtube.component.FrameworkUpdateTransport", () => [
    { no: 1, name: "entityBatchUpdate", kind: "message", T: yn }
]),
yn = m.makeMessageType("youtube.component.EntityBatchUpdate", () => [
    { no: 1, name: "mutations", kind: "message", T: hn, repeated: !0 }
]),
hn = m.makeMessageType("youtube.component.Mutation", () => [
    { no: 1, name: "entityKey", kind: "scalar", T: 9 },
    { no: 2, name: "type", kind: "scalar", T: 5 },
    { no: 3, name: "payload", kind: "message", T: kn }
]),
kn = m.makeMessageType("youtube.component.Payload", []),
Mo = m.makeMessageType("youtube.component.Entity", () => [
    { no: 2, name: "name", kind: "scalar", T: 9 },
    { no: 4, name: "targetNo", kind: "scalar", T: 5 },
    { no: 5, name: "type", kind: "scalar", T: 5 }
]);

var U = m.makeMessageType("youtube.component.Label", () => [
    { no: 1, name: "runs", kind: "message", T: $e, repeated: !0 }
]),
$e = m.makeMessageType("youtube.component.Run", () => [
    { no: 1, name: "text", kind: "scalar", T: 9 }
]);

var Mt = m.makeMessageType("youtube.response.browse.Browse", () => [
    { no: 1, name: "responseContext", kind: "message", T: Bt },
    { no: 9, name: "content", kind: "message", T: V },
    { no: 10, name: "onResponseReceivedAction", kind: "message", T: V },
    { no: 777, name: "frameworkUpdateTransport", kind: "message", T: he }
]),
V = m.makeMessageType("youtube.response.browse.Content", () => [
    { no: 58173949, name: "singleColumnResultsRenderer", kind: "message", T: bn },
    { no: 153515154, name: "elementRenderer", kind: "message", T: Ot },
    { no: 49399797, name: "sectionListRenderer", kind: "message", T: Ve }
]),
bn = m.makeMessageType("youtube.response.browse.SingleColumnResultsRenderer", () => [
    { no: 1, name: "tabs", kind: "message", T: Tn, repeated: !0 }
]),
Tn = m.makeMessageType("youtube.response.browse.BrowseTabSupportedRenderer", () => [
    { no: 58174010, name: "tabRenderer", kind: "message", T: wn }
]),
wn = m.makeMessageType("youtube.response.browse.TabRenderer", () => [
    { no: 4, name: "content", kind: "message", T: V }
]),
Ve = m.makeMessageType("youtube.response.browse.SectionListRenderer", () => [
    { no: 1, name: "sectionListSupportedRenderers", kind: "message", T: xn, repeated: !0 }
]),
xn = m.makeMessageType("youtube.response.browse.SectionListSupportedRenderer", () => [
    { no: 50195462, name: "itemSectionRenderer", kind: "message", T: Je },
    { no: 51845067, name: "shelfRenderer", kind: "message", T: Un },
    { no: 221496734, name: "musicDescriptionShelfRenderer", kind: "message", T: An }
]),
Je = m.makeMessageType("youtube.response.browse.ItemSectionRenderer", () => [
    { no: 1, name: "richItemContent", kind: "message", T: Ut, repeated: !0 }
]),
Ut = m.makeMessageType("youtube.response.browse.RichItemContent", () => [
    { no: 153515154, name: "videoWithContextRenderer", kind: "message", T: Ot }
]),
Ot = m.makeMessageType("youtube.response.browse.ElementRenderer", () => [
    { no: 172660663, name: "videoRendererContent", kind: "message", T: In }
]),
In = m.makeMessageType("youtube.response.browse.VideoRendererContent", () => [
    { no: 1, name: "videoInfo", kind: "message", T: Nn },
    { no: 2, name: "renderInfo", kind: "message", T: Bn }
]),
Nn = m.makeMessageType("youtube.response.browse.VideoInfo", () => [
    { no: 168777401, name: "videoContext", kind: "message", T: Sn }
]),
Sn = m.makeMessageType("youtube.response.browse.VideoContext", () => [
    { no: 5, name: "videoContent", kind: "message", T: En }
]),
En = m.makeMessageType("youtube.response.browse.VideoContent", () => [
    { no: 465160965, name: "timedLyricsRender", kind: "message", T: Fn }
]),
Fn = m.makeMessageType("youtube.response.browse.TimedLyricsRender", () => [
    { no: 4, name: "timedLyricsContent", kind: "message", T: Rn }
]),
Rn = m.makeMessageType("youtube.response.browse.TimedLyricsContent", () => [
    { no: 1, name: "runs", kind: "message", T: $e, repeated: !0 },
    { no: 2, name: "footerLabel", kind: "scalar", T: 9 }
]),
Bn = m.makeMessageType("youtube.response.browse.RenderInfo", () => [
    { no: 183314536, name: "layoutRender", kind: "message", T: Mn }
]),
Mn = m.makeMessageType("youtube.response.browse.LayoutRender", () => [
    { no: 1, name: "eml", kind: "scalar", T: 9 }
]),
Un = m.makeMessageType("youtube.response.browse.ShelfRenderer", () => [
    { no: 5, name: "richSectionContent", kind: "message", T: On }
]),
On = m.makeMessageType("youtube.response.browse.RichSectionContent", () => [
    { no: 51431404, name: "reelShelfRenderer", kind: "message", T: Cn }
]),
Cn = m.makeMessageType("youtube.response.browse.ReelShelfRenderer", () => [
    { no: 1, name: "richItemContent", kind: "message", T: Ut, repeated: !0 }
]),
An = m.makeMessageType("youtube.response.browse.MusicDescriptionShelfRenderer", () => [
    { no: 3, name: "description", kind: "message", T: U },
    { no: 10, name: "footer", kind: "message", T: U }
]);

var ke = m.makeMessageType("youtube.response.next.Next", () => [
    { no: 7, name: "content", kind: "message", T: vn },
    { no: 8, name: "onResponseReceivedAction", kind: "message", T: V },
    { no: 777, name: "frameworkUpdateTransport", kind: "message", T: he }
]),
vn = m.makeMessageType("youtube.response.next.Content", () => [
    { no: 51779735, name: "nextResult", kind: "message", T: Pn }
]),
Pn = m.makeMessageType("youtube.response.next.NextResult", () => [
    { no: 1, name: "content", kind: "message", T: V }
]);

var Ct = m.makeMessageType("youtube.response.search.Search", () => [
    { no: 4, name: "content", kind: "message", T: V },
    { no: 7, name: "onResponseReceivedCommand", kind: "message", T: Ln }
]),
Ln = m.makeMessageType("youtube.response.search.OnResponseReceivedCommand", () => [
    { no: 50195462, name: "itemSectionRenderer", kind: "message", T: Je },
    { no: 49399797, name: "appendContinuationItemsAction", kind: "message", T: Ve }
]);

var At = m.makeMessageType("youtube.response.shorts.Shorts", () => [
    { no: 2, name: "entries", kind: "message", T: Dn, repeated: !0 }
]),
Dn = m.makeMessageType("youtube.response.shorts.Entry", () => [
    { no: 1, name: "command", kind: "message", T: $n }
]),
$n = m.makeMessageType("youtube.response.shorts.Command", () => [
    { no: 139608561, name: "reelWatchEndpoint", kind: "message", T: Vn }
]),
Vn = m.makeMessageType("youtube.response.shorts.ReelWatchEndpoint", () => [
    { no: 8, name: "overlay", kind: "message", T: Jn }
]),
Jn = m.makeMessageType("youtube.response.shorts.Overlay", () => [
    { no: 139970731, name: "reelPlayerOverlayRenderer", kind: "message", T: _n }
]),
_n = m.makeMessageType("youtube.response.shorts.ReelPlayerOverlayRenderer", () => [
    { no: 12, name: "style", kind: "scalar", T: 5 }
]);

var Lt = m.makeMessageType("youtube.response.browse.Guide", () => [
    { no: 4, name: "items4", kind: "message", T: vt, repeated: !0 },
    { no: 6, name: "items6", kind: "message", T: vt, repeated: !0 }
]),
vt = m.makeMessageType("youtube.response.browse.Item", () => [
    { no: 117866661, name: "guideSectionRenderer", kind: "message", T: Gn }
]),
Gn = m.makeMessageType("youtube.response.browse.GuideSectionRenderer", () => [
    { no: 1, name: "rendererItems", kind: "message", T: Yn, repeated: !0 }
]),
Yn = m.makeMessageType("youtube.response.browse.RendererItem", () => [
    { no: 318370163, name: "iconRender", kind: "message", T: Pt },
    { no: 117501096, name: "labelRender", kind: "message", T: Pt }
]),
Pt = m.makeMessageType("youtube.response.browse.guideEntryRenderer", () => [
    { no: 1, name: "browseId", kind: "scalar", T: 9 }
]);

var be = m.makeMessageType("youtube.response.player.Player", () => [
    { no: 7, name: "adPlacements", kind: "message", T: qn, repeated: !0 },
    { no: 2, name: "playabilityStatus", kind: "message", T: Wn },
    { no: 9, name: "playbackTracking", kind: "message", T: Qn },
    { no: 10, name: "captions", kind: "message", T: Hn },
    { no: 68, name: "adSlots", kind: "message", T: tr, repeated: !0 }
]),
qn = m.makeMessageType("youtube.response.player.AdPlacement", () => [
    { no: 84813246, name: "adPlacementRenderer", kind: "message", T: Xn }
]),
Xn = m.makeMessageType("youtube.response.player.AdPlacementRenderer", () => [
    { no: 4, name: "params", kind: "scalar", T: 9 }
]),
Wn = m.makeMessageType("youtube.response.player.PlayabilityStatus", () => [
    { no: 21, name: "miniPlayer", kind: "message", T: jn },
    { no: 11, name: "backgroundPlayer", kind: "message", T: _e }
]),
jn = m.makeMessageType("youtube.response.player.MiniPlayer", () => [
    { no: 151635310, name: "miniPlayerRender", kind: "message", T: Kn }
]),
_e = m.makeMessageType("youtube.response.player.BackgroundPlayer", () => [
    { no: 64657230, name: "backgroundPlayerRender", kind: "message", T: zn }
]),
Kn = m.makeMessageType("youtube.response.player.MiniPlayerRender", () => [
    { no: 1, name: "active", kind: "scalar", T: 8 }
]),
zn = m.makeMessageType("youtube.response.player.BackgroundPlayerRender", () => [
    { no: 1, name: "active", kind: "scalar", T: 8 }
]),
Qn = m.makeMessageType("youtube.response.player.PlaybackTracking", () => [
    { no: 1, name: "videostatsPlaybackUrl", kind: "message", T: J },
    { no: 2, name: "videostatsDelayplayUrl", kind: "message", T: J },
    { no: 3, name: "videostatsWatchtimeUrl", kind: "message", T: J },
    { no: 4, name: "ptrackingUrl", kind: "message", T: J },
    { no: 5, name: "qoeUrl", kind: "message", T: J },
    { no: 13, name: "atrUrl", kind: "message", T: J },
    { no: 15, name: "videostatsEngageUrl", kind: "message", T: J },
    { no: 18, name: "pageadViewthroughconversion", kind: "message", T: J }
]),
J = m.makeMessageType("youtube.response.player.Tracking", () => [
    { no: 1, name: "baseUrl", kind: "scalar", T: 9 }
]),
Hn = m.makeMessageType("youtube.response.player.Captions", () => [
    { no: 51621377, name: "playerCaptionsTrackListRenderer", jsonName: "playerCaptionsTracklistRenderer", kind: "message", T: Zn }
]),
Zn = m.makeMessageType("youtube.response.player.PlayerCaptionsTrackListRenderer", () => [
    { no: 1, name: "captionTracks", kind: "message", T: Ge, repeated: !0 },
    { no: 2, name: "audioTracks", kind: "message", T: er, repeated: !0 },
    { no: 3, name: "translationLanguages", kind: "message", T: Ye, repeated: !0 },
    { no: 4, name: "defaultAudioTrackIndex", kind: "scalar", T: 5, opt: !0 },
    { no: 6, name: "defaultCaptionTrackIndex", kind: "scalar", T: 5, opt: !0 }
]),
Ge = m.makeMessageType("youtube.response.player.CaptionTrack", () => [
    { no: 1, name: "baseUrl", kind: "scalar", T: 9 },
    { no: 2, name: "name", kind: "message", T: U },
    { no: 3, name: "vssId", kind: "scalar", T: 9 },
    { no: 4, name: "languageCode", kind: "scalar", T: 9 },
    { no: 5, name: "kind", kind: "scalar", T: 9, opt: !0 },
    { no: 6, name: "rtl", kind: "scalar", T: 8, opt: !0 },
    { no: 7, name: "isTranslatable", kind: "scalar", T: 8 }
]),
er = m.makeMessageType("youtube.response.player.AudioTrack", () => [
    { no: 2, name: "captionTrackIndices", kind: "scalar", T: 5, repeated: !0, packed: !1 },
    { no: 3, name: "defaultCaptionTrackIndex", kind: "scalar", T: 5, opt: !0 },
    { no: 4, name: "forcedCaptionTrackIndex", kind: "scalar", T: 5, opt: !0 },
    { no: 5, name: "visibility", kind: "scalar", T: 5, opt: !0 },
    { no: 6, name: "hasDefaultTrack", kind: "scalar", T: 8, opt: !0 },
    { no: 7, name: "hasForcedTrack", kind: "scalar", T: 8, opt: !0 },
    { no: 8, name: "audioTrackId", kind: "scalar", T: 9, opt: !0 },
    { no: 11, name: "captionsInitialState", kind: "scalar", T: 5, opt: !0 }
]),
Ye = m.makeMessageType("youtube.response.player.TranslationLanguage", () => [
    { no: 1, name: "languageCode", kind: "scalar", T: 9 },
    { no: 2, name: "languageName", kind: "message", T: U }
]),
tr = m.makeMessageType("youtube.response.player.AdSlot", () => [
    { no: 424701016, name: "render", kind: "message", T: nr }
]),
nr = m.makeMessageType("youtube.response.player.AdSlot.Render", [], { localName: "AdSlot_Render" });

var $t = m.makeMessageType("youtube.response.setting.Setting", () => [
    { no: 6, name: "settingItems", kind: "message", T: Te, repeated: !0 },
    { no: 7, name: "CollectionItems", kind: "message", T: Te, repeated: !0 }
]),
Te = m.makeMessageType("youtube.response.setting.SettingItem", () => [
    { no: 88478200, name: "backgroundPlayBackSettingRenderer", kind: "message", T: rr },
    { no: 66930374, name: "settingCategoryCollectionRenderer", kind: "message", T: sr }
]),
rr = m.makeMessageType("youtube.response.setting.BackgroundPlayBackSettingRenderer", () => [
    { no: 1, name: "name", kind: "message", T: U },
    { no: 2, name: "backgroundPlayback", kind: "scalar", T: 8 },
    { no: 3, name: "download", kind: "scalar", T: 8 },
    { no: 5, name: "trackingParams", kind: "scalar", T: 12 },
    { no: 9, name: "downloadQualitySelection", kind: "scalar", T: 8 },
    { no: 10, name: "smartDownload", kind: "scalar", T: 8 },
    { no: 14, name: "icon", kind: "message", T: Vt }
]),
sr = m.makeMessageType("youtube.response.setting.SettingCategoryCollectionRenderer", () => [
    { no: 2, name: "name", kind: "message", T: U },
    { no: 3, name: "subSettings", kind: "message", T: qe, repeated: !0 },
    { no: 4, name: "categoryId", kind: "scalar", T: 5 },
    { no: 5, name: "icon", kind: "message", T: Vt }
]),
Vt = m.makeMessageType("youtube.response.setting.Icon", () => [
    { no: 1, name: "iconType", kind: "scalar", T: 5 }
]),
qe = m.makeMessageType("youtube.response.setting.SubSetting", () => [
    { no: 61331416, name: "settingBooleanRenderer", kind: "message", T: or }
]),
or = m.makeMessageType("youtube.response.setting.SettingBooleanRenderer", () => [
    { no: 2, name: "title", kind: "message", T: U },
    { no: 3, name: "description", kind: "message", T: U },
    { no: 5, name: "enableServiceEndpoint", kind: "message", T: Dt },
    { no: 6, name: "disableServiceEndpoint", kind: "message", T: Dt },
    { no: 15, name: "itemId", kind: "scalar", T: 5 }
]),
Dt = m.makeMessageType("youtube.response.setting.ServiceEndpoint", () => [
    { no: 81212182, name: "setClientSettingEndpoint", kind: "message", T: ir }
]),
ir = m.makeMessageType("youtube.response.setting.SetClientSettingEndpoint", () => [
    { no: 1, name: "settingData", kind: "message", T: ar }
]),
ar = m.makeMessageType("youtube.response.setting.SettingData", () => [
    { no: 1, name: "clientSettingEnum", kind: "message", T: cr },
    { no: 3, name: "boolValue", kind: "scalar", T: 8 }
]),
cr = m.makeMessageType("youtube.response.setting.ClientSettingEnum", () => [
    { no: 1, name: "item", kind: "scalar", T: 5 }
]);

var Jt = m.makeMessageType("youtube.response.watch.Watch", () => [
    { no: 1, name: "contents", kind: "message", T: ur, repeated: !0 }
]),
ur = m.makeMessageType("youtube.response.watch.Content", () => [
    { no: 2, name: "player", kind: "message", T: be },
    { no: 3, name: "next", kind: "message", T: ke }
]);

var hi = m.makeMessageType("youtube.response.frameworkUpdate.FrameworkUpdateTransport", () => [
    { no: 1, name: "entityBatchUpdate", kind: "message", T: dr }
]),
dr = m.makeMessageType("youtube.response.frameworkUpdate.EntityBatchUpdate", () => [
    { no: 1, name: "mutations", kind: "message", T: mr, repeated: !0 }
]),
mr = m.makeMessageType("youtube.response.frameworkUpdate.Mutation", () => [
    { no: 1, name: "entityKey", kind: "scalar", T: 9 },
    { no: 2, name: "type", kind: "scalar", T: 5 },
    { no: 3, name: "payload", kind: "message", T: fr }
]),
fr = m.makeMessageType("youtube.response.frameworkUpdate.Payload", []),
_t = m.makeMessageType("youtube.response.frameworkUpdate.Entity", () => [
    { no: 2, name: "name", kind: "scalar", T: 9 },
    { no: 4, name: "targetNo", kind: "scalar", T: 5 },
    { no: 5, name: "type", kind: "scalar", T: 5 }
]);

class K extends $ {
    constructor(e = Mt, n = "Browse") { super(e, n); }

    async pure() {
        this.replaceText(this.message, "YouTube", "Premium"); // Thêm để thay text
        this.iterate(this.message, "sectionListSupportedRenderers", e => {
            for (let n = e.sectionListSupportedRenderers.length - 1; n >= 0; n--)
                this.removeCommonAD(e, n), this.removeShorts(e, n);
        });
        await this.translate();
        return this;
    }

    removeCommonAD(e, n) {
        let s = e.sectionListSupportedRenderers[n]?.itemSectionRenderer?.richItemContent;
        for (let o = s?.length - 1; o >= 0; o--)
            this.isAdvertise(s[o]) && (s.splice(o, 1), this.needProcess = !0);
    }

    removeShorts(e, n) {
        let r = e.sectionListSupportedRenderers[n]?.shelfRenderer;
        this.isShorts(r) && (e.sectionListSupportedRenderers.splice(n, 1), this.needProcess = !0);
    }

    getBrowseId() {
        let e = "";
        this.iterate(this.message?.responseContext, "key", (n, r) => {
            n.key === "browse_id" && (e = n.value, r.length = 0);
        });
        return e;
    }

    async translate() {
        let e = this.argument.lyricLang?.trim();
        if (!(this.name === "Browse" && this.getBrowseId().startsWith("MPLYt")) || e === "off") return;
        let n = "",
            r, s = !1;
        if (this.iterate(this.message, "timedLyricsContent", (c, d) => {
                r = c.timedLyricsContent, n = c.timedLyricsContent.runs.map(f => f.text).join(`
`), s = !0, d.length = 0;
            }), s || this.iterate(this.message, "description", (c, d) => {
                r = c.description.runs[0], n = c.description.runs[0].text, d.length = 0, s = !0;
            }), !s) return;
        let o = e.split("-")[0],
            i = Yt(n, e),
            a = await y.fetch({ method: "GET", url: i });
        if (a.status === 200 && a.body) {
            let c = JSON.parse(a.body),
                d = " & Translated by Google",
                f = c[2].includes(o);
            r.text ? (r.text = c[0].map(l => f ? l[0] : l[1] + l[0] || "").join(`\r
`), this.iterate(this.message, "footer", (l, g) => { l.footer.runs[0].text += d, g.length = 0; })) : r.runs.length <= c[0].length && (r.runs.forEach((l, g) => { l.text = f ? c[0][g][0] : l.text + `
${c[0][g][0]}`; }), r.footerLabel += d), this.needProcess = !0;
        }
    }

    removeFrameworkUpdateAd() {
        let e = this.message?.frameworkUpdateTransport?.entityBatchUpdate?.mutations;
        if (e)
            for (let n = e.length - 1; n >= 0; n--) {
                let r = e[n],
                    s = _t.fromBinary(W.dec(decodeURIComponent(r.entityKey))),
                    o = this.blackEml.includes(s.name);
                !o && this.checkUnknownFiled(r?.payload) && (o = !0, this.blackEml.push(s.name), this.needSave = !0);
                o && (e.splice(n, 1), this.needProcess = !0);
            }
    }
}

class ne extends K {
    constructor(e = ke, n = "Next") { super(e, n); }
}
class re extends $ {
    constructor(e = be, n = "Player") { super(e, n); }

    pure() {
        this.replaceText(this.message, "YouTube", "Premium"); // Thêm để thay text
        this.message.adPlacements?.length && (this.message.adPlacements.length = 0);
        this.message.adSlots?.length && (this.message.adSlots.length = 0);
        delete this.message?.playbackTracking?.pageadViewthroughconversion;
        this.addPlayAbility();
        this.addTranslateCaption();
        this.needProcess = !0;
        return this;
    }

    addPlayAbility() {
        let e = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender;
        typeof e == "object" && (e.active = !0);
        typeof this.message.playabilityStatus == "object" && (this.message.playabilityStatus.backgroundPlayer = new _e({ backgroundPlayerRender: { active: !0 } }));
    }

    addTranslateCaption() {
        let e = this.argument.captionLang;
        this.iterate(this.message, "captionTracks", (n, r) => {
            let s = n.captionTracks, o = n.audioTracks;
            if (e === "off") {
                if (Array.isArray(s)) s.length = 0;
                if (Array.isArray(o)) {
                    for (let l of o) {
                        l.captionTrackIndices = [];
                        l.defaultCaptionTrackIndex = undefined;
                        l.captionsInitialState = 0;
                    }
                }
                n.translationLanguages = [];
                this.needProcess = true;
            } else if (Array.isArray(s)) {
                let a = { [e]: 2, en: 1 }, c = -1, d = 0;
                for (let f = 0; f < s.length; f++) {
                    let l = s[f], g = a[l.languageCode];
                    g && g > c && (c = g, d = f);
                    l.isTranslatable = !0;
                }
                if (c !== 2) {
                    let f = new Ge({
                        baseUrl: s[d].baseUrl + `&tlang=${e}`,
                        name: { runs: [{ text: "Premium" }] }, // Thay "@Enhance" thành "Premium"
                        vssId: `.${e}`,
                        languageCode: e
                    });
                    s.push(f);
                }
                if (Array.isArray(o)) {
                    let f = c === 2 ? d : s.length - 1;
                    for (let l of o) {
                        l.captionTrackIndices?.includes(f) || l.captionTrackIndices.push(f);
                        l.defaultCaptionTrackIndex = f;
                        l.captionsInitialState = 3;
                    }
                }
                let i = {
                    de: "Deutsch", ru: "Русский", fr: "Français", fil: "Filipino",
                    ko: "한국어", ja: "日本語", en: "English", vi: "Tiếng Việt",
                    "zh-Hant": "中文（繁體）", "zh-Hans": "中文（简体）", und: "@VirgilClyne"
                };
                n.translationLanguages = Object.entries(i).map(([a, c]) => new Ye({
                    languageCode: a,
                    languageName: { runs: [{ text: c }] }
                }));
            }
            r.length = 0;
        });
    }
}

class Ie extends K {
    constructor(e = Ct, n = "Search") { super(e, n); }
}

class Ne extends $ {
    constructor(e = At, n = "Shorts") { super(e, n); }

    pure() {
        this.replaceText(this.message, "YouTube", "Premium"); // Thêm để thay text
        let e = this.message.entries?.length;
        if (e)
            for (let n = e - 1; n >= 0; n--)
                this.message.entries[n].command?.reelWatchEndpoint?.overlay || (this.message.entries.splice(n, 1), this.needProcess = !0);
        return this;
    }
}

class Se extends $ {
    constructor(e = Lt, n = "Guide") { super(e, n); }

    pure() {
        this.replaceText(this.message, "YouTube", "Premium"); // Thêm để thay text
        let e = ["SPunlimited"];
        this.argument.blockUpload && e.push("FEuploads");
        this.argument.blockImmersive && e.push("FEmusic_immersive");
        this.iterate(this.message, "rendererItems", n => {
            for (let r = n.rendererItems.length - 1; r >= 0; r--) {
                let s = n.rendererItems[r]?.iconRender?.browseId || n.rendererItems[r]?.labelRender?.browseId;
                e.includes(s) && (n.rendererItems.splice(r, 1), this.needProcess = !0);
            }
        });
        return this;
    }
}

class Ee extends $ {
    constructor(e = $t, n = "Setting") { super(e, n); }

    pure() {
        this.replaceText(this.message, "YouTube", "Premium"); // Thêm để thay text
        this.iterate(this.message.settingItems, "categoryId", n => {
            if (n.categoryId === 10135) {
                let r = new qe({
                    settingBooleanRenderer: {
                        itemId: 0,
                        enableServiceEndpoint: { setClientSettingEndpoint: { settingData: { clientSettingEnum: { item: 151 }, boolValue: !0 } } },
                        disableServiceEndpoint: { setClientSettingEndpoint: { settingData: { clientSettingEnum: { item: 151 }, boolValue: !1 } } }
                    }
                });
                n.subSettings.push(r);
            }
        });
        let e = new Te({
            backgroundPlayBackSettingRenderer: {
                backgroundPlayback: !0,
                download: !0,
                downloadQualitySelection: !0,
                smartDownload: !0,
                icon: { iconType: 1093 }
            }
        });
        this.message.settingItems.push(e);
        this.needProcess = !0;
        return this;
    }
}

class Fe extends $ {
    player;
    next;

    constructor(e = Jt, n = "Watch") {
        super(e, n);
        this.player = new re;
        this.next = new ne;
    }

    async pure() {
        this.replaceText(this.message, "YouTube", "Premium"); // Thêm để thay text
        for (let e of this.message.contents) {
            e.player && (this.player.message = e.player, await this.player.pure());
            e.next && (this.next.message = e.next, await this.next.pure());
            this.needProcess = !0;
        }
        return this;
    }
}

var pr = new Map([
    ["browse", K],
    ["next", ne],
    ["player", re],
    ["search", Ie],
    ["reel_watch_sequence", Ne],
    ["guide", Se],
    ["get_setting", Ee],
    ["get_watch", Fe]
]);

function We(t) {
    for (let [e, n] of pr.entries())
        if (t.includes(e)) return new n;
    return null;
}

async function gr() {
    let t = We(y.request.url);
    if (t) {
        let e = y.response.bodyBytes;
        y.timeStart("fromBinary");
        t.fromBinary(e);
        y.timeEnd("fromBinary");
        y.timeStart("modify");
        await t.modify();
        y.timeEnd("modify");
        t.done();
    } else y.msg("YouTube Enhance", "脚本需要更新", "外部资源 -> 全部更新"), y.exit();
}

gr().catch(t => { y.log(t.toString()); }).finally(() => { y.exit(); });
