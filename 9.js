(() => {
  var qt = Object.defineProperty;
  var Xt = (t, e, n) => e in t ? qt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
  var Q = (t, e, n) => (Xt(t, typeof e != "symbol" ? e + "" : e, n), n);

  (function(t) {
    function e() {}
    function n() {}
    var r = String.fromCharCode, s = {}.toString, o = s.call(t.SharedArrayBuffer), i = s(), a = t.Uint8Array, c = a || Array,
      d = a ? ArrayBuffer : c, f = d.isView || function(h) { return h && "length" in h }, l = s.call(d.prototype);
    d = n.prototype;
    var g = t.TextEncoder, p = new(a ? Uint16Array : c)(32);
    e.prototype.decode = function(h) {
      if (!f(h)) {
        var R = s.call(h);
        if (R !== l && R !== o && R !== i) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
        h = a ? new c(h) : h || [];
      }
      for (var N = R = "", k = 0, T = h.length | 0, z = T - 32 | 0, x, w, F = 0, _ = 0, M, B = 0, O = -1; k < T;) {
        for (x = k <= z ? 32 : T - k | 0; B < x; k = k + 1 | 0, B = B + 1 | 0) {
          switch (w = h[k] & 255, w >> 4) {
            case 15:
              if (M = h[k = k + 1 | 0] & 255, M >> 6 !== 2 || 247 < w) { k = k - 1 | 0; break; }
              F = (w & 7) << 6 | M & 63, _ = 5, w = 256;
            case 14:
              M = h[k = k + 1 | 0] & 255, F <<= 6, F |= (w & 15) << 6 | M & 63, _ = M >> 6 === 2 ? _ + 4 | 0 : 24, w = w + 256 & 768;
            case 13:
            case 12:
              M = h[k = k + 1 | 0] & 255, F <<= 6, F |= (w & 31) << 6 | M & 63, _ = _ + 7 | 0, k < T && M >> 6 === 2 && F >> _ && 1114112 > F ?
                (w = F, F = F - 65536 | 0, 0 <= F && (O = (F >> 10) + 55296 | 0, w = (F & 1023) + 56320 | 0, 31 > B ? (p[B] = O, B = B + 1 | 0, O = -1) : (M = O, O = w, w = M))) :
                (w >>= 8, k = k - w - 1 | 0, w = 65533), F = _ = 0, x = k <= z ? 32 : T - k | 0;
            default:
              p[B] = w;
              continue;
            case 11: case 10: case 9: case 8:
          }
          p[B] = 65533;
        }
        N += r(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15], p[16], p[17], p[18], p[19], p[20], p[21], p[22], p[23], p[24], p[25], p[26], p[27], p[28], p[29], p[30], p[31]);
        if (32 > B && (N = N.slice(0, B - 32 | 0)), k < T) {
          if (p[0] = O, B = ~O >>> 31, O = -1, N.length < R.length) continue;
        } else O !== -1 && (N += r(O));
        R += N, N = "";
      }
      return R;
    };
    d.encode = function(h) {
      h = h === void 0 ? "" : "" + h;
      var R = h.length | 0, N = new c((R << 1) + 8 | 0), k, T = 0, z = !a;
      for (k = 0; k < R; k = k + 1 | 0, T = T + 1 | 0) {
        var x = h.charCodeAt(k) | 0;
        if (127 >= x) N[T] = x;
        else {
          if (2047 >= x) N[T] = 192 | x >> 6;
          else {
            e: {
              if (55296 <= x) {
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
      }
      return a ? N.subarray(0, T) : N.slice(0, T);
    };
    g || (t.TextDecoder = e, t.TextEncoder = n);
  })(globalThis);

  var E = class {
    equals(e) { return this.getType().runtime.util.equals(this.getType(), this, e); }
    clone() { return this.getType().runtime.util.clone(this); }
    fromBinary(e, n) {
      let r = this.getType(), s = r.runtime.bin, o = s.makeReadOptions(n);
      return s.readMessage(this, o.readerFactory(e), e.byteLength, o), this;
    }
    fromJson(e, n) {
      let r = this.getType(), s = r.runtime.json, o = s.makeReadOptions(n);
      return s.readMessage(r, e, o, this), this;
    }
    fromJsonString(e, n) {
      let r;
      try { r = JSON.parse(e); } catch (s) { throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${s instanceof Error ? s.message : String(s)}`); }
      return this.fromJson(r, n);
    }
    toBinary(e) {
      let n = this.getType(), r = n.runtime.bin, s = r.makeWriteOptions(e), o = s.writerFactory();
      return r.writeMessage(this, o, s), o.finish();
    }
    toJson(e) {
      let n = this.getType(), r = n.runtime.json, s = r.makeWriteOptions(e);
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

  var u; (function(t) {
    t[t.DOUBLE = 1] = "DOUBLE"; t[t.FLOAT = 2] = "FLOAT"; t[t.INT64 = 3] = "INT64"; t[t.UINT64 = 4] = "UINT64";
    t[t.INT32 = 5] = "INT32"; t[t.FIXED64 = 6] = "FIXED64"; t[t.FIXED32 = 7] = "FIXED32"; t[t.BOOL = 8] = "BOOL";
    t[t.STRING = 9] = "STRING"; t[t.BYTES = 12] = "BYTES"; t[t.UINT32 = 13] = "UINT32"; t[t.SFIXED32 = 15] = "SFIXED32";
    t[t.SFIXED64 = 16] = "SFIXED64"; t[t.SINT32 = 17] = "SINT32"; t[t.SINT64 = 18] = "SINT64";
  })(u || (u = {}));

  var C; (function(t) { t[t.BIGINT = 0] = "BIGINT"; t[t.STRING = 1] = "STRING"; })(C || (C = {}));
})();
(() => {
  var m = it("proto3", It(), pt(), Object.assign(Object.assign({}, Nt()), {
    newFieldList(t) { return new ge(t, ln); },
    initFields(t) {
      for (let e of t.getType().fields.byMember()) {
        if (e.opt) continue;
        let n = e.localName, r = t;
        if (e.repeated) { r[n] = []; continue; }
        switch (e.kind) {
          case "oneof": r[n] = { case: void 0 }; break;
          case "enum": r[n] = 0; break;
          case "map": r[n] = {}; break;
          case "scalar": r[n] = G(e.T, e.L); break;
        }
      }
    }
  }));

  var Bt = m.makeMessageType("youtube.component.ResponseContext", () => [
    { no: 6, name: "serviceTrackingParams", kind: "message", T: pn, repeated: !0 }
  ]);
  var pn = m.makeMessageType("youtube.component.ServiceTrackingParam", () => [
    { no: 1, name: "service", kind: "scalar", T: 5 },
    { no: 2, name: "params", kind: "message", T: gn, repeated: !0 }
  ]);
  var gn = m.makeMessageType("youtube.component.Param", () => [
    { no: 1, name: "key", kind: "scalar", T: 9 },
    { no: 2, name: "value", kind: "scalar", T: 9 }
  ]);

  var he = m.makeMessageType("youtube.component.FrameworkUpdateTransport", () => [
    { no: 1, name: "entityBatchUpdate", kind: "message", T: yn }
  ]);
  var yn = m.makeMessageType("youtube.component.EntityBatchUpdate", () => [
    { no: 1, name: "mutations", kind: "message", T: hn, repeated: !0 }
  ]);
  var hn = m.makeMessageType("youtube.component.Mutation", () => [
    { no: 1, name: "entityKey", kind: "scalar", T: 9 },
    { no: 2, name: "type", kind: "scalar", T: 5 },
    { no: 3, name: "payload", kind: "message", T: kn }
  ]);
  var kn = m.makeMessageType("youtube.component.Payload", () => []);
  var Mo = m.makeMessageType("youtube.component.Entity", () => [
    { no: 2, name: "name", kind: "scalar", T: 9 },
    { no: 4, name: "targetNo", kind: "scalar", T: 5 },
    { no: 5, name: "type", kind: "scalar", T: 5 }
  ]);

  var U = m.makeMessageType("youtube.component.Label", () => [
    { no: 1, name: "runs", kind: "message", T: $e, repeated: !0 }
  ]);
  var $e = m.makeMessageType("youtube.component.Run", () => [
    { no: 1, name: "text", kind: "scalar", T: 9 }
  ]);

  var Mt = m.makeMessageType("youtube.response.browse.Browse", () => [
    { no: 1, name: "responseContext", kind: "message", T: Bt },
    { no: 9, name: "content", kind: "message", T: V },
    { no: 10, name: "onResponseReceivedAction", kind: "message", T: V },
    { no: 777, name: "frameworkUpdateTransport", kind: "message", T: he }
  ]);
  var V = m.makeMessageType("youtube.response.browse.Content", () => [
    { no: 58173949, name: "singleColumnResultsRenderer", kind: "message", T: bn },
    { no: 153515154, name: "elementRenderer", kind: "message", T: Ot },
    { no: 49399797, name: "sectionListRenderer", kind: "message", T: Ve }
  ]);
  var bn = m.makeMessageType("youtube.response.browse.SingleColumnResultsRenderer", () => [
    { no: 1, name: "tabs", kind: "message", T: Tn, repeated: !0 }
  ]);
  var Tn = m.makeMessageType("youtube.response.browse.BrowseTabSupportedRenderer", () => [
    { no: 58174010, name: "tabRenderer", kind: "message", T: wn }
  ]);
  var wn = m.makeMessageType("youtube.response.browse.TabRenderer", () => [
    { no: 4, name: "content", kind: "message", T: V }
  ]);
  var Ve = m.makeMessageType("youtube.response.browse.SectionListRenderer", () => [
    { no: 1, name: "sectionListSupportedRenderers", kind: "message", T: xn, repeated: !0 }
  ]);
  var xn = m.makeMessageType("youtube.response.browse.SectionListSupportedRenderer", () => [
    { no: 50195462, name: "itemSectionRenderer", kind: "message", T: Je },
    { no: 51845067, name: "shelfRenderer", kind: "message", T: Un },
    { no: 221496734, name: "musicDescriptionShelfRenderer", kind: "message", T: An }
  ]);
  var Je = m.makeMessageType("youtube.response.browse.ItemSectionRenderer", () => [
    { no: 1, name: "richItemContent", kind: "message", T: Ut, repeated: !0 }
  ]);
  var Ut = m.makeMessageType("youtube.response.browse.RichItemContent", () => [
    { no: 153515154, name: "videoWithContextRenderer", kind: "message", T: Ot }
  ]);
  var Ot = m.makeMessageType("youtube.response.browse.ElementRenderer", () => [
    { no: 172660663, name: "videoRendererContent", kind: "message", T: In }
  ]);
  var In = m.makeMessageType("youtube.response.browse.VideoRendererContent", () => [
    { no: 1, name: "videoInfo", kind: "message", T: Nn },
    { no: 2, name: "renderInfo", kind: "message", T: Bn }
  ]);
  var Nn = m.makeMessageType("youtube.response.browse.VideoInfo", () => [
    { no: 168777401, name: "videoContext", kind: "message", T: Sn }
  ]);
  var Sn = m.makeMessageType("youtube.response.browse.VideoContext", () => [
    { no: 5, name: "videoContent", kind: "message", T: En }
  ]);
  var En = m.makeMessageType("youtube.response.browse.VideoContent", () => [
    { no: 465160965, name: "timedLyricsRender", kind: "message", T: Fn }
  ]);
  var Fn = m.makeMessageType("youtube.response.browse.TimedLyricsRender", () => [
    { no: 4, name: "timedLyricsContent", kind: "message", T: Rn }
  ]);
  var Rn = m.makeMessageType("youtube.response.browse.TimedLyricsContent", () => [
    { no: 1, name: "runs", kind: "message", T: $e, repeated: !0 },
    { no: 2, name: "footerLabel", kind: "scalar", T: 9 }
  ]);
  var Bn = m.makeMessageType("youtube.response.browse.RenderInfo", () => [
    { no: 183314536, name: "layoutRender", kind: "message", T: Mn }
  ]);
  var Mn = m.makeMessageType("youtube.response.browse.LayoutRender", () => [
    { no: 1, name: "eml", kind: "scalar", T: 9 }
  ]);
  var Un = m.makeMessageType("youtube.response.browse.ShelfRenderer", () => [
    { no: 5, name: "richSectionContent", kind: "message", T: On }
  ]);
  var On = m.makeMessageType("youtube.response.browse.RichSectionContent", () => [
    { no: 51431404, name: "reelShelfRenderer", kind: "message", T: Cn }
  ]);
  var Cn = m.makeMessageType("youtube.response.browse.ReelShelfRenderer", () => [
    { no: 1, name: "richItemContent", kind: "message", T: Ut, repeated: !0 }
  ]);
  var An = m.makeMessageType("youtube.response.browse.MusicDescriptionShelfRenderer", () => [
    { no: 3, name: "description", kind: "message", T: U },
    { no: 10, name: "footer", kind: "message", T: U }
  ]);

  var ke = m.makeMessageType("youtube.response.next.Next", () => [
    { no: 7, name: "content", kind: "message", T: vn },
    { no: 8, name: "onResponseReceivedAction", kind: "message", T: V },
    { no: 777, name: "frameworkUpdateTransport", kind: "message", T: he }
  ]);
  var vn = m.makeMessageType("youtube.response.next.Content", () => [
    { no: 51779735, name: "nextResult", kind: "message", T: Pn }
  ]);
  var Pn = m.makeMessageType("youtube.response.next.NextResult", () => [
    { no: 1, name: "content", kind: "message", T: V }
  ]);

  var Ct = m.makeMessageType("youtube.response.search.Search", () => [
    { no: 4, name: "content", kind: "message", T: V },
    { no: 7, name: "onResponseReceivedCommand", kind: "message", T: Ln }
  ]);
  var Ln = m.makeMessageType("youtube.response.search.OnResponseReceivedCommand", () => [
    { no: 50195462, name: "itemSectionRenderer", kind: "message", T: Je },
    { no: 49399797, name: "appendContinuationItemsAction", kind: "message", T: Ve }
  ]);

  var At = m.makeMessageType("youtube.response.shorts.Shorts", () => [
    { no: 2, name: "entries", kind: "message", T: Dn, repeated: !0 }
  ]);
  var Dn = m.makeMessageType("youtube.response.shorts.Entry", () => [
    { no: 1, name: "command", kind: "message", T: $n }
  ]);
  var $n = m.makeMessageType("youtube.response.shorts.Command", () => [
    { no: 139608561, name: "reelWatchEndpoint", kind: "message", T: Vn }
  ]);
  var Vn = m.makeMessageType("youtube.response.shorts.ReelWatchEndpoint", () => [
    { no: 8, name: "overlay", kind: "message", T: Jn }
  ]);
  var Jn = m.makeMessageType("youtube.response.shorts.Overlay", () => [
    { no: 139970731, name: "reelPlayerOverlayRenderer", kind: "message", T: _n }
  ]);
  var _n = m.makeMessageType("youtube.response.shorts.ReelPlayerOverlayRenderer", () => [
    { no: 12, name: "style", kind: "scalar", T: 5 }
  ]);

  var Lt = m.makeMessageType("youtube.response.browse.Guide", () => [
    { no: 4, name: "items4", kind: "message", T: vt, repeated: !0 },
    { no: 6, name: "items6", kind: "message", T: vt, repeated: !0 }
  ]);
  var vt = m.makeMessageType("youtube.response.browse.Item", () => [
    { no: 117866661, name: "guideSectionRenderer", kind: "message", T: Gn }
  ]);
  var Gn = m.makeMessageType("youtube.response.browse.GuideSectionRenderer", () => [
    { no: 1, name: "rendererItems", kind: "message", T: Yn, repeated: !0 }
  ]);
  var Yn = m.makeMessageType("youtube.response.browse.RendererItem", () => [
    { no: 318370163, name: "iconRender", kind: "message", T: Pt },
    { no: 117501096, name: "labelRender", kind: "message", T: Pt }
  ]);
  var Pt = m.makeMessageType("youtube.response.browse.guideEntryRenderer", () => [
    { no: 1, name: "browseId", kind: "scalar", T: 9 }
  ]);

  var be = m.makeMessageType("youtube.response.player.Player", () => [
    { no: 7, name: "adPlacements", kind: "message", T: qn, repeated: !0 },
    { no: 2, name: "playabilityStatus", kind: "message", T: Wn },
    { no: 9, name: "playbackTracking", kind: "message", T: Qn },
    { no: 10, name: "captions", kind: "message", T: Hn },
    { no: 68, name: "adSlots", kind: "message", T: tr, repeated: !0 }
  ]);
  var qn = m.makeMessageType("youtube.response.player.AdPlacement", () => [
    { no: 84813246, name: "adPlacementRenderer", kind: "message", T: Xn }
  ]);
  var Xn = m.makeMessageType("youtube.response.player.AdPlacementRenderer", () => [
    { no: 4, name: "params", kind: "scalar", T: 9 }
  ]);
  var Wn = m.makeMessageType("youtube.response.player.PlayabilityStatus", () => [
    { no: 21, name: "miniPlayer", kind: "message", T: jn },
    { no: 11, name: "backgroundPlayer", kind: "message", T: _e }
  ]);
  var jn = m.makeMessageType("youtube.response.player.MiniPlayer", () => [
    { no: 151635310, name: "miniPlayerRender", kind: "message", T: Kn }
  ]);
  var _e = m.makeMessageType("youtube.response.player.BackgroundPlayer", () => [
    { no: 64657230, name: "backgroundPlayerRender", kind: "message", T: zn }
  ]);
  var Kn = m.makeMessageType("youtube.response.player.MiniPlayerRender", () => [
    { no: 1, name: "active", kind: "scalar", T: 8 }
  ]);
  var zn = m.makeMessageType("youtube.response.player.BackgroundPlayerRender", () => [
    { no: 1, name: "active", kind: "scalar", T: 8 }
  ]);
  var Qn = m.makeMessageType("youtube.response.player.PlaybackTracking", () => [
    { no: 1, name: "videostatsPlaybackUrl", kind: "message", T: J },
    { no: 2, name: "videostatsDelayplayUrl", kind: "message", T: J },
    { no: 3, name: "videostatsWatchtimeUrl", kind: "message", T: J },
    { no: 4, name: "ptrackingUrl", kind: "message", T: J },
    { no: 5, name: "qoeUrl", kind: "message", T: J },
    { no: 13, name: "atrUrl", kind: "message", T: J },
    { no: 15, name: "videostatsEngageUrl", kind: "message", T: J },
    { no: 18, name: "pageadViewthroughconversion", kind: "message", T: J }
  ]);
  var J = m.makeMessageType("youtube.response.player.Tracking", () => [
    { no: 1, name: "baseUrl", kind: "scalar", T: 9 }
  ]);
  var Hn = m.makeMessageType("youtube.response.player.Captions", () => [
    { no: 51621377, name: "playerCaptionsTrackListRenderer", jsonName: "playerCaptionsTracklistRenderer", kind: "message", T: Zn }
  ]);
  var Zn = m.makeMessageType("youtube.response.player.PlayerCaptionsTrackListRenderer", () => [
    { no: 1, name: "captionTracks", kind: "message", T: Ge, repeated: !0 },
    { no: 2, name: "audioTracks", kind: "message", T: er, repeated: !0 },
    { no: 3, name: "translationLanguages", kind: "message", T: Ye, repeated: !0 },
    { no: 4, name: "defaultAudioTrackIndex", kind: "scalar", T: 5, opt: !0 },
    { no: 6, name: "defaultCaptionTrackIndex", kind: "scalar", T: 5, opt: !0 }
  ]);
  var Ge = m.makeMessageType("youtube.response.player.CaptionTrack", () => [
    { no: 1, name: "baseUrl", kind: "scalar", T: 9 },
    { no: 2, name: "name", kind: "message", T: U },
    { no: 3, name: "vssId", kind: "scalar", T: 9 },
    { no: 4, name: "languageCode", kind: "scalar", T: 9 },
    { no: 5, name: "kind", kind: "scalar", T: 9, opt: !0 },
    { no: 6, name: "rtl", kind: "scalar", T: 8, opt: !0 },
    { no: 7, name: "isTranslatable", kind: "scalar", T: 8 }
  ]);
  var er = m.makeMessageType("youtube.response.player.AudioTrack", () => [
    { no: 2, name: "captionTrackIndices", kind: "scalar", T: 5, repeated: !0, packed: !1 },
    { no: 3, name: "defaultCaptionTrackIndex", kind: "scalar", T: 5, opt: !0 },
    { no: 4, name: "forcedCaptionTrackIndex", kind: "scalar", T: 5, opt: !0 },
    { no: 5, name: "visibility", kind: "scalar", T: 5, opt: !0 },
    { no: 6, name: "hasDefaultTrack", kind: "scalar", T: 8, opt: !0 },
    { no: 7, name: "hasForcedTrack", kind: "scalar", T: 8, opt: !0 },
    { no: 8, name: "audioTrackId", kind: "scalar", T: 9, opt: !0 },
    { no: 11, name: "captionsInitialState", kind: "scalar", T: 5, opt: !0 }
  ]);
  var Ye = m.makeMessageType("youtube.response.player.TranslationLanguage", () => [
    { no: 1, name: "languageCode", kind: "scalar", T: 9 },
    { no: 2, name: "languageName", kind: "message", T: U }
  ]);
  var tr = m.makeMessageType("youtube.response.player.AdSlot", () => [
    { no: 424701016, name: "render", kind: "message", T: nr }
  ]);
  var nr = m.makeMessageType("youtube.response.player.AdSlot.Render", () => [], { localName: "AdSlot_Render" });

  var $t = m.makeMessageType("youtube.response.setting.Setting", () => [
    { no: 6, name: "settingItems", kind: "message", T: Te, repeated: !0 },
    { no: 7, name: "CollectionItems", kind: "message", T: Te, repeated: !0 }
  ]);
  var Te = m.makeMessageType("youtube.response.setting.SettingItem", () => [
    { no: 88478200, name: "backgroundPlayBackSettingRenderer", kind: "message", T: rr },
    { no: 66930374, name: "settingCategoryCollectionRenderer", kind: "message", T: sr }
  ]);
  var rr = m.makeMessageType("youtube.response.setting.BackgroundPlayBackSettingRenderer", () => [
    { no: 1, name: "name", kind: "message", T: U },
    { no: 2, name: "backgroundPlayback", kind: "scalar", T: 8 },
    { no: 3, name: "download", kind: "scalar", T: 8 },
    { no: 5, name: "trackingParams", kind: "scalar", T: 12 },
    { no: 9, name: "downloadQualitySelection", kind: "scalar", T: 8 },
    { no: 10, name: "smartDownload", kind: "scalar", T: 8 },
    { no: 14, name: "icon", kind: "message", T: Vt }
  ]);
  var sr = m.makeMessageType("youtube.response.setting.SettingCategoryCollectionRenderer", () => [
    { no: 2, name: "name", kind: "message", T: U },
    { no: 3, name: "subSettings", kind: "message", T: qe, repeated: !0 },
    { no: 4, name: "categoryId", kind: "scalar", T: 5 },
    { no: 5, name: "icon", kind: "message", T: Vt }
  ]);
  var Vt = m.makeMessageType("youtube.response.setting.Icon", () => [
    { no: 1, name: "iconType", kind: "scalar", T: 5 }
  ]);
  var qe = m.makeMessageType("youtube.response.setting.SubSetting", () => [
    { no: 61331416, name: "settingBooleanRenderer", kind: "message", T: or }
  ]);
  var or = m.makeMessageType("youtube.response.setting.SettingBooleanRenderer", () => [
    { no: 2, name: "title", kind: "message", T: U },
    { no: 3, name: "description", kind: "message", T: U },
    { no: 5, name: "enableServiceEndpoint", kind: "message", T: Dt },
    { no: 6, name: "disableServiceEndpoint", kind: "message", T: Dt },
    { no: 15, name: "itemId", kind: "scalar", T: 5 }
  ]);
  var Dt = m.makeMessageType("youtube.response.setting.ServiceEndpoint", () => [
    { no: 81212182, name: "setClientSettingEndpoint", kind: "message", T: ir }
  ]);
  var ir = m.makeMessageType("youtube.response.setting.SetClientSettingEndpoint", () => [
    { no: 1, name: "settingData", kind: "message", T: ar }
  ]);
  var ar = m.makeMessageType("youtube.response.setting.SettingData", () => [
    { no: 1, name: "clientSettingEnum", kind: "message", T: cr },
    { no: 3, name: "boolValue", kind: "scalar", T: 8 }
  ]);
  var cr = m.makeMessageType("youtube.response.setting.ClientSettingEnum", () => [
    { no: 1, name: "item", kind: "scalar", T: 5 }
  ]);

  var Jt = m.makeMessageType("youtube.response.watch.Watch", () => [
    { no: 1, name: "contents", kind: "message", T: ur, repeated: !0 }
  ]);
  var ur = m.makeMessageType("youtube.response.watch.Content", () => [
    { no: 2, name: "player", kind: "message", T: be },
    { no: 3, name: "next", kind: "message", T: ke }
  ]);

  var hi = m.makeMessageType("youtube.response.frameworkUpdate.FrameworkUpdateTransport", () => [
    { no: 1, name: "entityBatchUpdate", kind: "message", T: dr }
  ]);
  var dr = m.makeMessageType("youtube.response.frameworkUpdate.EntityBatchUpdate", () => [
    { no: 1, name: "mutations", kind: "message", T: mr, repeated: !0 }
  ]);
  var mr = m.makeMessageType("youtube.response.frameworkUpdate.Mutation", () => [
    { no: 1, name: "entityKey", kind: "scalar", T: 9 },
    { no: 2, name: "type", kind: "scalar", T: 5 },
    { no: 3, name: "payload", kind: "message", T: fr }
  ]);
  var fr = m.makeMessageType("youtube.response.frameworkUpdate.Payload", () => []);
  var _t = m.makeMessageType("youtube.response.frameworkUpdate.Entity", () => [
    { no: 2, name: "name", kind: "scalar", T: 9 },
    { no: 4, name: "targetNo", kind: "scalar", T: 5 },
    { no: 5, name: "type", kind: "scalar", T: 5 }
  ]);
})();

(() => {
  var j = class {
    _times = new Map();
    name; isDebug; className; request; response;
    constructor(e, n, r) {
      this.name = e ?? "";
      this.isDebug = r?.debug ?? !1;
      this.className = n ?? "";
      this.init();
      e && this.debug(`${e} Start`);
    }
    static getInstance(e, n) {
      let r = "Surge";
      typeof $loon < "u" ? r = "Loon" : typeof $task < "u" && (r = "QuanX");
      j.instances[r] || (j.instances[r] = j.classNames[r](e, r, n));
      return j.instances[r];
    }
    createProxy(e) { return new Proxy(e, { get: this.getFn, set: this.setFn }); }
    getFn(e, n, r) { return e[n]; }
    setFn(e, n, r, s) { return e[n] = r, !0; }
    getJSON(e, n = {}) { let r = this.getVal(e); return r ? JSON.parse(r) : n; }
    setJSON(e, n) { this.setVal(JSON.stringify(e), n); }
    msg(e = this.name, n = "", r = "", s) {}
    debug(e) { this.isDebug && (typeof e == "object" && (e = JSON.stringify(e)), console.log(e)); }
    log(e) { typeof e == "object" && (e = JSON.stringify(e)), console.log(e); }
    timeStart(e) { this._times.set(e, Date.now()); }
    timeEnd(e) {
      if (this._times.has(e)) {
        let n = this._times.get(e) ?? 0, r = Date.now() - n;
        this.debug(`${e}: ${r}ms`);
        this._times.delete(e);
      } else this.debug(`Timer with label ${e} does not exist.`);
    }
    exit() { $done({}); }
    reject() { $done(); }
    decodeParams(e) { return e; }
  };
  D = j;
  Q(D, "instances", {});
  Q(D, "classNames", {
    QuanX: (e, n, r) => new we(e, n, r),
    Surge: (e, n, r) => new te(e, n, r),
    Loon: (e, n, r) => new Xe(e, n, r)
  });

  var xe = class extends D {
    getFn(e, n, r) { let s = xe.clientAdapter[n] || n; return super.getFn(e, s, r); }
    setFn(e, n, r, s) { let o = xe.clientAdapter[n] || n; return super.setFn(e, o, r, s); }
    init() {
      try { this.request = this.createProxy($request); this.response = this.createProxy($response); } catch (e) { this.debug(e.toString()); }
    }
    getVal(e) { return $persistentStore.read(e); }
    setVal(e, n) { $persistentStore.write(e, n); }
    msg(e = this.name, n = "", r = "", s) { $notification.post(e, n, r, { url: s ?? "" }); }
    async fetch(e) {
      return await new Promise((n, r) => {
        let { method: s, body: o, bodyBytes: i, ...a } = e, c = i ?? o, d = c instanceof Uint8Array;
        $httpClient[s.toLowerCase()]({ ...a, body: c, "binary-mode": d }, (f, l, g) => {
          f && r(f);
          let p = d ? "bodyBytes" : "body";
          n({ status: l.status || l.statusCode, headers: l.headers, [p]: g });
        });
      });
    }
    done(e) {
      let n = e.response ?? e, r, s;
      n.bodyBytes ? (r = n.bodyBytes, delete n.bodyBytes, s = { ...e }, s.response ? s.response.body = r : s.body = r) : s = e;
      $done(s);
    }
    decodeParams(e) {
      return typeof $argument == "string" && !$argument.includes("{{{") && Object.assign(e, JSON.parse($argument)), e;
    }
  };
  te = xe;
  Q(te, "clientAdapter", { bodyBytes: "body" });

  var L = class extends D {
    static transferBodyBytes(e, n) {
      return e instanceof ArrayBuffer ? n === "Uint8Array" ? new Uint8Array(e) : e :
        e instanceof Uint8Array && n === "ArrayBuffer" ? e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset) : e;
    }
    init() {
      try { this.request = this.createProxy($request); this.response = this.createProxy($response); } catch (e) { this.debug(e.toString()); }
    }
    getFn(e, n, r) {
      let s = L.clientAdapter[n] || n, o = super.getFn(e, s, r);
      return n === "bodyBytes" && (o = L.transferBodyBytes(o, "Uint8Array")), o;
    }
    setFn(e, n, r, s) {
      let o = L.clientAdapter[n] || n, i = r;
      return n === "bodyBytes" && (i = L.transferBodyBytes(i, "Uint8Array")), super.setFn(e, o, i, s);
    }
    getVal(e) { return $prefs.valueForKey(e)?.replace(/\0/g, ""); }
    setVal(e, n) { $prefs.setValueForKey(e, n); }
    msg(e = this.name, n = "", r = "", s) { $notify(e, n, r, { "open-url": s ?? "" }); }
    async fetch(e) {
      return await new Promise(n => {
        let r = { url: "", method: "GET" };
        for (let [s, o] of Object.entries(e)) {
          s === "id" ? r.sessionIndex = o : s === "bodyBytes" ? r.bodyBytes = L.transferBodyBytes(o, "ArrayBuffer") : r[s] = o;
        }
        e.bodyBytes && delete r.body;
        $task.fetch(r).then(s => {
          let o = { status: 200, headers: {} };
          for (let [i, a] of Object.entries(s)) {
            i === "sessionIndex" ? o.id = a : i === "bodyBytes" ? o.bodyBytes = L.transferBodyBytes(a, "Uint8Array") :
              i === "statusCode" ? o.status = a : o[i] = a;
          }
          n(o);
        });
      });
    }
    done(e) {
      let n = e.response ?? e, r = {};
      for (let [s, o] of Object.entries(n)) {
        s === "status" ? r.status = `HTTP/1.1 ${o}` : s === "bodyBytes" ? r.bodyBytes = L.transferBodyBytes(o, "ArrayBuffer") : r[s] = o;
      }
      $done(r);
    }
  };
  we = L;
  Q(we, "clientAdapter", { id: "sessionIndex", status: "statusCode" });

  var Xe = class extends te {
    decodeParams(e) {
      if (typeof $argument < "u") {
        for (let n of Object.keys(e)) {
          let r = $argument?.[n];
          r !== void 0 && (e[n] = r);
        }
      }
      return e;
    }
  };

  var y = D.getInstance("YouTube");

  var $ = class {
    name; needProcess; needSave; message; version = "1.0";
    whiteNo = []; blackNo = []; whiteEml = []; blackEml = ["inline_injection_entrypoint_layout.eml"];
    msgType; argument; decoder = new TextDecoder("utf-8", { fatal: !1, ignoreBOM: !0 });
    constructor(e, n) {
      this.name = n; this.msgType = e; this.argument = this.decodeArgument();
      y.isDebug = Boolean(this.argument.debug); y.debug(this.name);
      let r = y.getJSON("YouTubeAdvertiseInfo");
      y.debug(`currentVersion:  ${this.version}`); y.debug(`storedVersion:  ${r.version}`);
      r?.version === this.version && Object.assign(this, r);
    }
    decodeArgument() {
      return y.decodeParams({ lyricLang: "zh-Hans", captionLang: "zh-Hans", blockUpload: !0, blockImmersive: !0, debug: !1 });
    }
    fromBinary(e) {
      if (e instanceof Uint8Array) {
        this.message = this.msgType.fromBinary(e);
        y.debug(`raw: ${Math.floor(e.length / 1024)} kb`);
      } else {
        y.log("YouTube can not get binaryBody"); y.exit();
      }
      return this;
    }
    async modify() { let e = this.pure(); return e instanceof Promise ? await e : e; }
    toBinary() { return this.message.toBinary(); }
    listUnknownFields(e) { return e instanceof E ? e.getType().runtime.bin.listUnknownFields(e) : []; }
    save() {
      if (this.needSave) {
        y.debug("Update Config");
        let e = { version: this.version, whiteNo: this.whiteNo, blackNo: this.blackNo, whiteEml: this.whiteEml, blackEml: this.blackEml };
        y.debug(e); y.setJSON(e, "YouTubeAdvertiseInfo");
      }
    }
    done() {
      this.save();
      if (this.needProcess) {
        y.timeStart("toBinary"); let e = this.toBinary(); y.timeEnd("toBinary");
        y.debug(`modify: ${Math.floor(e.length / 1024)} kb`); y.done({ bodyBytes: e });
      }
      y.debug("use $done({})"); y.exit();
    }
    iterate(e = {}, n, r) {
      let s = typeof e == "object" ? [e] : [];
      while (s.length) {
        let o = s.pop(), i = Object.keys(o);
        for (let a of i) a === n ? r(o, s) : typeof o[a] == "object" && s.push(o[a]);
      }
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
      r ? this.blackNo.push(n) : this.whiteNo.push(n);
      this.needSave = !0;
      return r;
    }
    handleFieldEml(e) {
      let n = !1, r = "";
      this.iterate(e, "renderInfo", (s, o) => {
        r = s.renderInfo.layoutRender.eml.split("|")[0];
        if (this.whiteEml.includes(r)) n = !1;
        else if (this.blackEml.includes(r) || /shorts(?!_pivot_item)/.test(r)) n = !0;
        else {
          let i = s?.videoInfo?.videoContext?.videoContent;
          if (i) {
            n = this.checkUnknownFiled(i);
            n ? this.blackEml.push(r) : this.whiteEml.push(r);
            this.needSave = !0;
          }
        }
        o.length = 0;
      });
      return n;
    }
    checkBufferIsAd(e) { return !e || e.data.length < 1e3 ? !1 : this.decoder.decode(e.data).includes("pagead"); }
    checkUnknownFiled(e) { return e ? this.listUnknownFields(e)?.some(r => this.checkBufferIsAd(r)) ?? !1 : !1; }
    isShorts(e) {
      let n = !1;
      this.iterate(e, "eml", (r, s) => { n = /shorts(?!_pivot_item)/.test(r.eml); s.length = 0; });
      return n;
    }
  };

  function lr(t) {
    let r = ".", s = "+-a^+6", o = "+-3^+b+-f", i, a, c;
    for (i = [], a = 0, c = 0; c < t.length; c++) {
      let d = t.charCodeAt(c);
      128 > d ? i[a++] = d :
        2048 > d ? (i[a++] = d >> 6 | 192, i[a++] = d & 63 | 128) :
        (d & 64512) == 55296 && c + 1 < t.length && (t.charCodeAt(c + 1) & 64512) == 56320 ?
          (d = 65536 + ((d & 1023) << 10) + (t.charCodeAt(++c) & 1023),
          i[a++] = d >> 18 | 240, i[a++] = d >> 12 & 63 | 128, i[a++] = d >> 6 & 63 | 128, i[a++] = d & 63 | 128) :
          (i[a++] = d >> 12 | 224, i[a++] = d >> 6 & 63 | 128, i[a++] = d & 63 | 128);
    }
    for (t = 406644, a = 0; a < i.length; a++) t += i[a], t = Gt(t, s);
    t = Gt(t, o); t ^= 3293161072;
    0 > t && (t = (t & 2147483647) + 2147483648);
    t %= 1e6;
    return t.toString() + r + (t ^ 406644);
  }

  function Gt(t, e) {
    let n = "a", r = "+", s;
    for (let o = 0; o < e.length - 2; o += 3) {
      s = e.charAt(o + 2), s = s >= n ? s.charCodeAt(0) - 87 : Number(s),
      s = e.charAt(o + 1) == r ? t >>> s : t << s,
      t = e.charAt(o) == r ? t + s & 4294967295 : t ^ s;
    }
    return t;
  }

  function Yt(t, e) {
    return `https://translate.google.com/translate_a/single?client=gtx&sl=auto&tl=${e}&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&source=bh&ssel=0&tsel=0&kc=1&tk=${lr(t)}&q=${encodeURIComponent(t)}`;
  }
})();
(() => {
  var K = class extends $ {
    constructor(e = Mt, n = "Browse") { super(e, n); }
    async pure() {
      this.iterate(this.message, "sectionListSupportedRenderers", e => {
        for (let n = e.sectionListSupportedRenderers.length - 1; n >= 0; n--) {
          this.removeCommonAD(e, n); this.removeShorts(e, n);
        }
      });
      await this.translate();
      return this;
    }
    removeCommonAD(e, n) {
      let s = e.sectionListSupportedRenderers[n]?.itemSectionRenderer?.richItemContent;
      for (let o = s?.length - 1; o >= 0; o--) {
        if (this.isAdvertise(s[o])) { s.splice(o, 1); this.needProcess = !0; }
      }
    }
    removeShorts(e, n) {
      let r = e.sectionListSupportedRenderers[n]?.shelfRenderer;
      if (this.isShorts(r)) { e.sectionListSupportedRenderers.splice(n, 1); this.needProcess = !0; }
    }
    getBrowseId() {
      let e = "";
      this.iterate(this.message?.responseContext, "key", (n, r) => { if (n.key === "browse_id") e = n.value; r.length = 0; });
      return e;
    }
    async translate() {
      let e = this.argument.lyricLang?.trim();
      if (!(this.name === "Browse" && this.getBrowseId().startsWith("MPLYt")) || e === "off") return;
      let n = "", r, s = !1;
      this.iterate(this.message, "timedLyricsContent", (c, d) => {
        r = c.timedLyricsContent; n = c.timedLyricsContent.runs.map(f => f.text).join("\n"); s = !0; d.length = 0;
      });
      if (!s) this.iterate(this.message, "description", (c, d) => { r = c.description.runs[0]; n = c.description.runs[0].text; d.length = 0; s = !0; });
      if (!s) return;
      let o = e.split("-")[0], i = Yt(n, e), a = await y.fetch({ method: "GET", url: i });
      if (a.status === 200 && a.body) {
        let c = JSON.parse(a.body), d = " & Translated by Google", f = c[2].includes(o);
        if (r.text) {
          r.text = c[0].map(l => f ? l[0] : l[1] + l[0] || "").join("\r\n");
          this.iterate(this.message, "footer", (l, g) => { l.footer.runs[0].text += d; g.length = 0; });
        } else if (r.runs.length <= c[0].length) {
          r.runs.forEach((l, g) => { l.text = f ? c[0][g][0] : l.text + `\n${c[0][g][0]}`; });
          r.footerLabel += d;
        }
        this.needProcess = !0;
      }
    }
    removeFrameworkUpdateAd() {
      let e = this.message?.frameworkUpdateTransport?.entityBatchUpdate?.mutations;
      if (e) {
        for (let n = e.length - 1; n >= 0; n--) {
          let r = e[n], s = _t.fromBinary(W.dec(decodeURIComponent(r.entityKey))), o = this.blackEml.includes(s.name);
          if (!o && this.checkUnknownFiled(r?.payload)) { o = !0; this.blackEml.push(s.name); this.needSave = !0; }
          if (o) { e.splice(n, 1); this.needProcess = !0; }
        }
      }
    }
  };

  var ne = class extends K { constructor(e = ke, n = "Next") { super(e, n); } };

  var re = class extends $ {
    constructor(e = be, n = "Player") { super(e, n); }
    pure() {
      this.message.adPlacements?.length && (this.message.adPlacements.length = 0);
      this.message.adSlots?.length && (this.message.adSlots.length = 0);
      delete this.message?.playbackTracking?.pageadViewthroughconversion;
      this.addPlayAbility(); this.addTranslateCaption();
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
      if (e !== "off") {
        this.iterate(this.message, "captionTracks", (n, r) => {
          let s = n.captionTracks, o = n.audioTracks;
          if (Array.isArray(s)) {
            let a = { [e]: 2, en: 1 }, c = -1, d = 0;
            for (let f = 0; f < s.length; f++) {
              let l = s[f], g = a[l.languageCode];
              g && g > c && (c = g, d = f); l.isTranslatable = !0;
            }
            if (c !== 2) {
              let f = new Ge({ baseUrl: s[d].baseUrl + `&tlang=${e}`, name: { runs: [{ text: `@Enhance (${e})` }] }, vssId: `.${e}`, languageCode: e });
              s.push(f);
            }
            if (Array.isArray(o)) {
              let f = c === 2 ? d : s.length - 1;
              for (let l of o) {
                l.captionTrackIndices?.includes(f) || l.captionTrackIndices.push(f);
                l.defaultCaptionTrackIndex = f; l.captionsInitialState = 3;
              }
            }
          }
          let i = {
            de: "Deutsch", ru: "Русский", fr: "Français", fil: "Filipino", ko: "한국어", ja: "日本語", en: "English",
            vi: "Tiếng Việt", "zh-Hant": "中文（繁體）", "zh-Hans": "中文（简体）", und: "@VirgilClyne"
          };
          n.translationLanguages = Object.entries(i).map(([a, c]) => new Ye({ languageCode: a, languageName: { runs: [{ text: c }] } }));
          r.length = 0;
        });
      }
    }
  };

  var Ie = class extends K { constructor(e = Ct, n = "Search") { super(e, n); } };

  var Ne = class extends $ {
    constructor(e = At, n = "Shorts") { super(e, n); }
    pure() {
      let e = this.message.entries?.length;
      if (e) {
        for (let n = e - 1; n >= 0; n--) {
          if (!this.message.entries[n].command?.reelWatchEndpoint?.overlay) {
            this.message.entries.splice(n, 1); this.needProcess = !0;
          }
        }
      }
      return this;
    }
  };

  var Se = class extends $ {
    constructor(e = Lt, n = "Guide") { super(e, n); }
    pure() {
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
  };

  var Ee = class extends $ {
    constructor(e = $t, n = "Setting") { super(e, n); }
    pure() {
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
        backgroundPlayBackSettingRenderer: { backgroundPlayback: !0, download: !0, downloadQualitySelection: !0, smartDownload: !0, icon: { iconType: 1093 } }
      });
      this.message.settingItems.push(e);
      this.needProcess = !0;
      return this;
    }
  };

  var Fe = class extends $ {
    player; next;
    constructor(e = Jt, n = "Watch") {
      super(e, n);
      this.player = new re; this.next = new ne;
    }
    async pure() {
      for (let e of this.message.contents) {
        if (e.player) { this.player.message = e.player; await this.player.pure(); }
        if (e.next) { this.next.message = e.next; await this.next.pure(); }
        this.needProcess = !0;
      }
      return this;
    }
  };

  var pr = new Map([
    ["browse", K], ["next", ne], ["player", re], ["search", Ie], ["reel_watch_sequence", Ne],
    ["guide", Se], ["get_setting", Ee], ["get_watch", Fe]
  ]);

  function We(t) {
    for (let [e, n] of pr.entries()) if (t.includes(e)) return new n;
    return null;
  }

  async function gr() {
    let t = We(y.request.url);
    if (t) {
      let e = y.response.bodyBytes;
      y.timeStart("fromBinary"); t.fromBinary(e); y.timeEnd("fromBinary");
      y.timeStart("modify"); await t.modify(); y.timeEnd("modify");
      t.done();
    } else {
      y.msg("YouTube Enhance", "Script cần cập nhật", "Tài nguyên ngoài -> Cập nhật toàn bộ");
      y.exit();
    }
  }

  gr().catch(t => { y.log(t.toString()); }).finally(() => { y.exit(); });
})();
