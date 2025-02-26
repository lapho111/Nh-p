(() => {
  // Base utilities and definitions
  function defineProperty(t, e, n) { return e in t ? Object.defineProperty(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n; }
  function assign(t, e, n) { return defineProperty(t, typeof e != "symbol" ? e + "" : e, n), n; }

  (function(t) {
    function TextDecoderPolyfill() {}
    function TextEncoderPolyfill() {}
    var r = String.fromCharCode, s = {}.toString, o = s.call(t.SharedArrayBuffer), i = s(), a = t.Uint8Array, c = a || Array,
      d = a ? ArrayBuffer : c, f = d.isView || function(h) { return h && "length" in h }, l = s.call(d.prototype);
    d = TextEncoderPolyfill.prototype;
    var g = t.TextEncoder, p = new(a ? Uint16Array : c)(32);
    TextDecoderPolyfill.prototype.decode = function(h) {
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
            case 13: case 12:
              M = h[k = k + 1 | 0] & 255, F <<= 6, F |= (w & 31) << 6 | M & 63, _ = _ + 7 | 0, k < T && M >> 6 === 2 && F >> _ && 1114112 > F ?
                (w = F, F = F - 65536 | 0, 0 <= F && (O = (F >> 10) + 55296 | 0, w = (F & 1023) + 56320 | 0, 31 > B ? (p[B] = O, B = B + 1 | 0, O = -1) : (M = O, O = w, w = M))) :
                (w >>= 8, k = k - w - 1 | 0, w = 65533), F = _ = 0, x = k <= z ? 32 : T - k | 0;
            default: p[B] = w; continue;
            case 11: case 10: case 9: case 8: p[B] = 65533;
          }
        }
        N += r(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15], p[16], p[17], p[18], p[19], p[20], p[21], p[22], p[23], p[24], p[25], p[26], p[27], p[28], p[29], p[30], p[31]);
        32 > B && (N = N.slice(0, B - 32 | 0));
        if (k < T) { p[0] = O, B = ~O >>> 31, O = -1, N.length < R.length ? continue : null; }
        else O !== -1 && (N += r(O));
        R += N, N = "";
      }
      return R;
    };
    TextEncoderPolyfill.prototype.encode = function(h) {
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
    g || (t.TextDecoder = TextDecoderPolyfill, t.TextEncoder = TextEncoderPolyfill);
  })(globalThis);

  var E = class {
    equals(e) { return this.getType().runtime.util.equals(this.getType(), this, e); }
    clone() { return this.getType().runtime.util.clone(this); }
    fromBinary(e, n) { let r = this.getType(), s = r.runtime.bin, o = s.makeReadOptions(n); return s.readMessage(this, o.readerFactory(e), e.byteLength, o), this; }
    fromJson(e, n) { let r = this.getType(), s = r.runtime.json, o = s.makeReadOptions(n); return s.readMessage(r, e, o, this), this; }
    fromJsonString(e, n) { let r; try { r = JSON.parse(e); } catch (s) { throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${s instanceof Error ? s.message : String(s)}`); } return this.fromJson(r, n); }
    toBinary(e) { let n = this.getType(), r = n.runtime.bin, s = r.makeWriteOptions(e), o = s.writerFactory(); return r.writeMessage(this, o, s), o.finish(); }
    toJson(e) { let n = this.getType(), r = n.runtime.json, s = r.makeWriteOptions(e); return r.writeMessage(this, s); }
    toJsonString(e) { var n; let r = this.toJson(e); return JSON.stringify(r, null, (n = e?.prettySpaces) !== null && n !== void 0 ? n : 0); }
    toJSON() { return this.toJson({ emitDefaultValues: !0 }); }
    getType() { return Object.getPrototypeOf(this).constructor; }
  };

  var u; (function(t) {
    t[t.DOUBLE = 1] = "DOUBLE"; t[t.FLOAT = 2] = "FLOAT"; t[t.INT64 = 3] = "INT64"; t[t.UINT64 = 4] = "UINT64"; t[t.INT32 = 5] = "INT32";
    t[t.FIXED64 = 6] = "FIXED64"; t[t.FIXED32 = 7] = "FIXED32"; t[t.BOOL = 8] = "BOOL"; t[t.STRING = 9] = "STRING"; t[t.BYTES = 12] = "BYTES";
    t[t.UINT32 = 13] = "UINT32"; t[t.SFIXED32 = 15] = "SFIXED32"; t[t.SFIXED64 = 16] = "SFIXED64"; t[t.SINT32 = 17] = "SINT32"; t[t.SINT64 = 18] = "SINT64";
  })(u || (u = {}));

  var C; (function(t) { t[t.BIGINT = 0] = "BIGINT"; t[t.STRING = 1] = "STRING"; })(C || (C = {}));

  // Protobuf setup
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

  // Protobuf message definitions
  var ResponseContext = m.makeMessageType("youtube.component.ResponseContext", () => [
    { no: 6, name: "serviceTrackingParams", kind: "message", T: () => ServiceTrackingParam, repeated: !0 }
  ]);
  var ServiceTrackingParam = m.makeMessageType("youtube.component.ServiceTrackingParam", () => [
    { no: 1, name: "service", kind: "scalar", T: 5 },
    { no: 2, name: "params", kind: "message", T: () => Param, repeated: !0 }
  ]);
  var Param = m.makeMessageType("youtube.component.Param", () => [
    { no: 1, name: "key", kind: "scalar", T: 9 },
    { no: 2, name: "value", kind: "scalar", T: 9 }
  ]);

  var FrameworkUpdateTransport = m.makeMessageType("youtube.component.FrameworkUpdateTransport", () => [
    { no: 1, name: "entityBatchUpdate", kind: "message", T: () => EntityBatchUpdate }
  ]);
  var EntityBatchUpdate = m.makeMessageType("youtube.component.EntityBatchUpdate", () => [
    { no: 1, name: "mutations", kind: "message", T: () => Mutation, repeated: !0 }
  ]);
  var Mutation = m.makeMessageType("youtube.component.Mutation", () => [
    { no: 1, name: "entityKey", kind: "scalar", T: 9 },
    { no: 2, name: "type", kind: "scalar", T: 5 },
    { no: 3, name: "payload", kind: "message", T: () => Payload }
  ]);
  var Payload = m.makeMessageType("youtube.component.Payload", () => []);
  var Entity = m.makeMessageType("youtube.component.Entity", () => [
    { no: 2, name: "name", kind: "scalar", T: 9 },
    { no: 4, name: "targetNo", kind: "scalar", T: 5 },
    { no: 5, name: "type", kind: "scalar", T: 5 }
  ]);

  var Label = m.makeMessageType("youtube.component.Label", () => [
    { no: 1, name: "runs", kind: "message", T: () => Run, repeated: !0 }
  ]);
  var Run = m.makeMessageType("youtube.component.Run", () => [
    { no: 1, name: "text", kind: "scalar", T: 9 }
  ]);

  var Browse = m.makeMessageType("youtube.response.browse.Browse", () => [
    { no: 1, name: "responseContext", kind: "message", T: () => ResponseContext },
    { no: 9, name: "content", kind: "message", T: () => Content },
    { no: 10, name: "onResponseReceivedAction", kind: "message", T: () => Content },
    { no: 777, name: "frameworkUpdateTransport", kind: "message", T: () => FrameworkUpdateTransport }
  ]);
  var Content = m.makeMessageType("youtube.response.browse.Content", () => [
    { no: 58173949, name: "singleColumnResultsRenderer", kind: "message", T: () => SingleColumnResultsRenderer },
    { no: 153515154, name: "elementRenderer", kind: "message", T: () => ElementRenderer },
    { no: 49399797, name: "sectionListRenderer", kind: "message", T: () => SectionListRenderer }
  ]);
  var SingleColumnResultsRenderer = m.makeMessageType("youtube.response.browse.SingleColumnResultsRenderer", () => [
    { no: 1, name: "tabs", kind: "message", T: () => BrowseTabSupportedRenderer, repeated: !0 }
  ]);
  var BrowseTabSupportedRenderer = m.makeMessageType("youtube.response.browse.BrowseTabSupportedRenderer", () => [
    { no: 58174010, name: "tabRenderer", kind: "message", T: () => TabRenderer }
  ]);
  var TabRenderer = m.makeMessageType("youtube.response.browse.TabRenderer", () => [
    { no: 4, name: "content", kind: "message", T: () => Content }
  ]);
  var SectionListRenderer = m.makeMessageType("youtube.response.browse.SectionListRenderer", () => [
    { no: 1, name: "sectionListSupportedRenderers", kind: "message", T: () => SectionListSupportedRenderer, repeated: !0 }
  ]);
  var SectionListSupportedRenderer = m.makeMessageType("youtube.response.browse.SectionListSupportedRenderer", () => [
    { no: 50195462, name: "itemSectionRenderer", kind: "message", T: () => ItemSectionRenderer },
    { no: 51845067, name: "shelfRenderer", kind: "message", T: () => ShelfRenderer },
    { no: 221496734, name: "musicDescriptionShelfRenderer", kind: "message", T: () => MusicDescriptionShelfRenderer }
  ]);
  var ItemSectionRenderer = m.makeMessageType("youtube.response.browse.ItemSectionRenderer", () => [
    { no: 1, name: "richItemContent", kind: "message", T: () => RichItemContent, repeated: !0 }
  ]);
  var RichItemContent = m.makeMessageType("youtube.response.browse.RichItemContent", () => [
    { no: 153515154, name: "videoWithContextRenderer", kind: "message", T: () => ElementRenderer }
  ]);
  var ElementRenderer = m.makeMessageType("youtube.response.browse.ElementRenderer", () => [
    { no: 172660663, name: "videoRendererContent", kind: "message", T: () => VideoRendererContent }
  ]);
  var VideoRendererContent = m.makeMessageType("youtube.response.browse.VideoRendererContent", () => [
    { no: 1, name: "videoInfo", kind: "message", T: () => VideoInfo },
    { no: 2, name: "renderInfo", kind: "message", T: () => RenderInfo }
  ]);
  var VideoInfo = m.makeMessageType("youtube.response.browse.VideoInfo", () => [
    { no: 168777401, name: "videoContext", kind: "message", T: () => VideoContext }
  ]);
  var VideoContext = m.makeMessageType("youtube.response.browse.VideoContext", () => [
    { no: 5, name: "videoContent", kind: "message", T: () => VideoContent }
  ]);
  var VideoContent = m.makeMessageType("youtube.response.browse.VideoContent", () => [
    { no: 465160965, name: "timedLyricsRender", kind: "message", T: () => TimedLyricsRender }
  ]);
  var TimedLyricsRender = m.makeMessageType("youtube.response.browse.TimedLyricsRender", () => [
    { no: 4, name: "timedLyricsContent", kind: "message", T: () => TimedLyricsContent }
  ]);
  var TimedLyricsContent = m.makeMessageType("youtube.response.browse.TimedLyricsContent", () => [
    { no: 1, name: "runs", kind: "message", T: () => Run, repeated: !0 },
    { no: 2, name: "footerLabel", kind: "scalar", T: 9 }
  ]);
  var RenderInfo = m.makeMessageType("youtube.response.browse.RenderInfo", () => [
    { no: 183314536, name: "layoutRender", kind: "message", T: () => LayoutRender }
  ]);
  var LayoutRender = m.makeMessageType("youtube.response.browse.LayoutRender", () => [
    { no: 1, name: "eml", kind: "scalar", T: 9 }
  ]);
  var ShelfRenderer = m.makeMessageType("youtube.response.browse.ShelfRenderer", () => [
    { no: 5, name: "richSectionContent", kind: "message", T: () => RichSectionContent }
  ]);
  var RichSectionContent = m.makeMessageType("youtube.response.browse.RichSectionContent", () => [
    { no: 51431404, name: "reelShelfRenderer", kind: "message", T: () => ReelShelfRenderer }
  ]);
  var ReelShelfRenderer = m.makeMessageType("youtube.response.browse.ReelShelfRenderer", () => [
    { no: 1, name: "richItemContent", kind: "message", T: () => RichItemContent, repeated: !0 }
  ]);
  var MusicDescriptionShelfRenderer = m.makeMessageType("youtube.response.browse.MusicDescriptionShelfRenderer", () => [
    { no: 3, name: "description", kind: "message", T: () => Label },
    { no: 10, name: "footer", kind: "message", T: () => Label }
  ]);

  var Next = m.makeMessageType("youtube.response.next.Next", () => [
    { no: 7, name: "content", kind: "message", T: () => NextContent },
    { no: 8, name: "onResponseReceivedAction", kind: "message", T: () => Content },
    { no: 777, name: "frameworkUpdateTransport", kind: "message", T: () => FrameworkUpdateTransport }
  ]);
  var NextContent = m.makeMessageType("youtube.response.next.Content", () => [
    { no: 51779735, name: "nextResult", kind: "message", T: () => NextResult }
  ]);
  var NextResult = m.makeMessageType("youtube.response.next.NextResult", () => [
    { no: 1, name: "content", kind: "message", T: () => Content }
  ]);

  var Search = m.makeMessageType("youtube.response.search.Search", () => [
    { no: 4, name: "content", kind: "message", T: () => Content },
    { no: 7, name: "onResponseReceivedCommand", kind: "message", T: () => OnResponseReceivedCommand }
  ]);
  var OnResponseReceivedCommand = m.makeMessageType("youtube.response.search.OnResponseReceivedCommand", () => [
    { no: 50195462, name: "itemSectionRenderer", kind: "message", T: () => ItemSectionRenderer },
    { no: 49399797, name: "appendContinuationItemsAction", kind: "message", T: () => SectionListRenderer }
  ]);

  var Shorts = m.makeMessageType("youtube.response.shorts.Shorts", () => [
    { no: 2, name: "entries", kind: "message", T: () => Entry, repeated: !0 }
  ]);
  var Entry = m.makeMessageType("youtube.response.shorts.Entry", () => [
    { no: 1, name: "command", kind: "message", T: () => Command }
  ]);
  var Command = m.makeMessageType("youtube.response.shorts.Command", () => [
    { no: 139608561, name: "reelWatchEndpoint", kind: "message", T: () => ReelWatchEndpoint }
  ]);
  var ReelWatchEndpoint = m.makeMessageType("youtube.response.shorts.ReelWatchEndpoint", () => [
    { no: 8, name: "overlay", kind: "message", T: () => Overlay }
  ]);
  var Overlay = m.makeMessageType("youtube.response.shorts.Overlay", () => [
    { no: 139970731, name: "reelPlayerOverlayRenderer", kind: "message", T: () => ReelPlayerOverlayRenderer }
  ]);
  var ReelPlayerOverlayRenderer = m.makeMessageType("youtube.response.shorts.ReelPlayerOverlayRenderer", () => [
    { no: 12, name: "style", kind: "scalar", T: 5 }
  ]);

  var Guide = m.makeMessageType("youtube.response.browse.Guide", () => [
    { no: 4, name: "items4", kind: "message", T: () => Item, repeated: !0 },
    { no: 6, name: "items6", kind: "message", T: () => Item, repeated: !0 }
  ]);
  var Item = m.makeMessageType("youtube.response.browse.Item", () => [
    { no: 117866661, name: "guideSectionRenderer", kind: "message", T: () => GuideSectionRenderer }
  ]);
  var GuideSectionRenderer = m.makeMessageType("youtube.response.browse.GuideSectionRenderer", () => [
    { no: 1, name: "rendererItems", kind: "message", T: () => RendererItem, repeated: !0 }
  ]);
  var RendererItem = m.makeMessageType("youtube.response.browse.RendererItem", () => [
    { no: 318370163, name: "iconRender", kind: "message", T: () => GuideEntryRenderer },
    { no: 117501096, name: "labelRender", kind: "message", T: () => GuideEntryRenderer }
  ]);
  var GuideEntryRenderer = m.makeMessageType("youtube.response.browse.guideEntryRenderer", () => [
    { no: 1, name: "browseId", kind: "scalar", T: 9 }
  ]);

  var Player = m.makeMessageType("youtube.response.player.Player", () => [
    { no: 7, name: "adPlacements", kind: "message", T: () => AdPlacement, repeated: !0 },
    { no: 2, name: "playabilityStatus", kind: "message", T: () => PlayabilityStatus },
    { no: 9, name: "playbackTracking", kind: "message", T: () => PlaybackTracking },
    { no: 10, name: "captions", kind: "message", T: () => Captions },
    { no: 68, name: "adSlots", kind: "message", T: () => AdSlot, repeated: !0 }
  ]);
  var AdPlacement = m.makeMessageType("youtube.response.player.AdPlacement", () => [
    { no: 84813246, name: "adPlacementRenderer", kind: "message", T: () => AdPlacementRenderer }
  ]);
  var AdPlacementRenderer = m.makeMessageType("youtube.response.player.AdPlacementRenderer", () => [
    { no: 4, name: "params", kind: "scalar", T: 9 }
  ]);
  var PlayabilityStatus = m.makeMessageType("youtube.response.player.PlayabilityStatus", () => [
    { no: 21, name: "miniPlayer", kind: "message", T: () => MiniPlayer },
    { no: 11, name: "backgroundPlayer", kind: "message", T: () => BackgroundPlayer }
  ]);
  var MiniPlayer = m.makeMessageType("youtube.response.player.MiniPlayer", () => [
    { no: 151635310, name: "miniPlayerRender", kind: "message", T: () => MiniPlayerRender }
  ]);
  var BackgroundPlayer = m.makeMessageType("youtube.response.player.BackgroundPlayer", () => [
    { no: 64657230, name: "backgroundPlayerRender", kind: "message", T: () => BackgroundPlayerRender }
  ]);
  var MiniPlayerRender = m.makeMessageType("youtube.response.player.MiniPlayerRender", () => [
    { no: 1, name: "active", kind: "scalar", T: 8 }
  ]);
  var BackgroundPlayerRender = m.makeMessageType("youtube.response.player.BackgroundPlayerRender", () => [
    { no: 1, name: "active", kind: "scalar", T: 8 }
  ]);
  var PlaybackTracking = m.makeMessageType("youtube.response.player.PlaybackTracking", () => [
    { no: 1, name: "videostatsPlaybackUrl", kind: "message", T: () => Tracking },
    { no: 2, name: "videostatsDelayplayUrl", kind: "message", T: () => Tracking },
    { no: 3, name: "videostatsWatchtimeUrl", kind: "message", T: () => Tracking },
    { no: 4, name: "ptrackingUrl", kind: "message", T: () => Tracking },
    { no: 5, name: "qoeUrl", kind: "message", T: () => Tracking },
    { no: 13, name: "atrUrl", kind: "message", T: () => Tracking },
    { no: 15, name: "videostatsEngageUrl", kind: "message", T: () => Tracking },
    { no: 18, name: "pageadViewthroughconversion", kind: "message", T: () => Tracking }
  ]);
  var Tracking = m.makeMessageType("youtube.response.player.Tracking", () => [
    { no: 1, name: "baseUrl", kind: "scalar", T: 9 }
  ]);
  var Captions = m.makeMessageType("youtube.response.player.Captions", () => [
    { no: 51621377, name: "playerCaptionsTrackListRenderer", jsonName: "playerCaptionsTracklistRenderer", kind: "message", T: () => PlayerCaptionsTrackListRenderer }
  ]);
  var PlayerCaptionsTrackListRenderer = m.makeMessageType("youtube.response.player.PlayerCaptionsTrackListRenderer", () => [
    { no: 1, name: "captionTracks", kind: "message", T: () => CaptionTrack, repeated: !0 },
    { no: 2, name: "audioTracks", kind: "message", T: () => AudioTrack, repeated: !0 },
    { no: 3, name: "translationLanguages", kind: "message", T: () => TranslationLanguage, repeated: !0 },
    { no: 4, name: "defaultAudioTrackIndex", kind: "scalar", T: 5, opt: !0 },
    { no: 6, name: "defaultCaptionTrackIndex", kind: "scalar", T: 5, opt: !0 }
  ]);
  var CaptionTrack = m.makeMessageType("youtube.response.player.CaptionTrack", () => [
    { no: 1, name: "baseUrl", kind: "scalar", T: 9 },
    { no: 2, name: "name", kind: "message", T: () => Label },
    { no: 3, name: "vssId", kind: "scalar", T: 9 },
    { no: 4, name: "languageCode", kind: "scalar", T: 9 },
    { no: 5, name: "kind", kind: "scalar", T: 9, opt: !0 },
    { no: 6, name: "rtl", kind: "scalar", T: 8, opt: !0 },
    { no: 7, name: "isTranslatable", kind: "scalar", T: 8 }
  ]);
  var AudioTrack = m.makeMessageType("youtube.response.player.AudioTrack", () => [
    { no: 2, name: "captionTrackIndices", kind: "scalar", T: 5, repeated: !0, packed: !1 },
    { no: 3, name: "defaultCaptionTrackIndex", kind: "scalar", T: 5, opt: !0 },
    { no: 4, name: "forcedCaptionTrackIndex", kind: "scalar", T: 5, opt: !0 },
    { no: 5, name: "visibility", kind: "scalar", T: 5, opt: !0 },
    { no: 6, name: "hasDefaultTrack", kind: "scalar", T: 8, opt: !0 },
    { no: 7, name: "hasForcedTrack", kind: "scalar", T: 8, opt: !0 },
    { no: 8, name: "audioTrackId", kind: "scalar", T: 9, opt: !0 },
    { no: 11, name: "captionsInitialState", kind: "scalar", T: 5, opt: !0 }
  ]);
  var TranslationLanguage = m.makeMessageType("youtube.response.player.TranslationLanguage", () => [
    { no: 1, name: "languageCode", kind: "scalar", T: 9 },
    { no: 2, name: "languageName", kind: "message", T: () => Label }
  ]);
  var AdSlot = m.makeMessageType("youtube.response.player.AdSlot", () => [
    { no: 424701016, name: "render", kind: "message", T: () => AdSlotRender }
  ]);
  var AdSlotRender = m.makeMessageType("youtube.response.player.AdSlot.Render", () => [], { localName: "AdSlot_Render" });

  var Setting = m.makeMessageType("youtube.response.setting.Setting", () => [
    { no: 6, name: "settingItems", kind: "message", T: () => SettingItem, repeated: !0 },
    { no: 7, name: "CollectionItems", kind: "message", T: () => SettingItem, repeated: !0 }
  ]);
  var SettingItem = m.makeMessageType("youtube.response.setting.SettingItem", () => [
    { no: 88478200, name: "backgroundPlayBackSettingRenderer", kind: "message", T: () => BackgroundPlayBackSettingRenderer },
    { no: 66930374, name: "settingCategoryCollectionRenderer", kind: "message", T: () => SettingCategoryCollectionRenderer }
  ]);
  var BackgroundPlayBackSettingRenderer = m.makeMessageType("youtube.response.setting.BackgroundPlayBackSettingRenderer", () => [
    { no: 1, name: "name", kind: "message", T: () => Label },
    { no: 2, name: "backgroundPlayback", kind: "scalar", T: 8 },
    { no: 3, name: "download", kind: "scalar", T: 8 },
    { no: 5, name: "trackingParams", kind: "scalar", T: 12 },
    { no: 9, name: "downloadQualitySelection", kind: "scalar", T: 8 },
    { no: 10, name: "smartDownload", kind: "scalar", T: 8 },
    { no: 14, name: "icon", kind: "message", T: () => Icon }
  ]);
  var SettingCategoryCollectionRenderer = m.makeMessageType("youtube.response.setting.SettingCategoryCollectionRenderer", () => [
    { no: 2, name: "name", kind: "message", T: () => Label },
    { no: 3, name: "subSettings", kind: "message", T: () => SubSetting, repeated: !0 },
    { no: 4, name: "categoryId", kind: "scalar", T: 5 },
    { no: 5, name: "icon", kind: "message", T: () => Icon }
  ]);
  var Icon = m.makeMessageType("youtube.response.setting.Icon", () => [
    { no: 1, name: "iconType", kind: "scalar", T: 5 }
  ]);
  var SubSetting = m.makeMessageType("youtube.response.setting.SubSetting", () => [
    { no: 61331416, name: "settingBooleanRenderer", kind: "message", T: () => SettingBooleanRenderer }
  ]);
  var SettingBooleanRenderer = m.makeMessageType("youtube.response.setting.SettingBooleanRenderer", () => [
    { no: 2, name: "title", kind: "message", T: () => Label },
    { no: 3, name: "description", kind: "message", T: () => Label },
    { no: 5, name: "enableServiceEndpoint", kind: "message", T: () => ServiceEndpoint },
    { no: 6, name: "disableServiceEndpoint", kind: "message", T: () => ServiceEndpoint },
    { no: 15, name: "itemId", kind: "scalar", T: 5 }
  ]);
  var ServiceEndpoint = m.makeMessageType("youtube.response.setting.ServiceEndpoint", () => [
    { no: 81212182, name: "setClientSettingEndpoint", kind: "message", T: () => SetClientSettingEndpoint }
  ]);
  var SetClientSettingEndpoint = m.makeMessageType("youtube.response.setting.SetClientSettingEndpoint", () => [
    { no: 1, name: "settingData", kind: "message", T: () => SettingData }
  ]);
  var SettingData = m.makeMessageType("youtube.response.setting.SettingData", () => [
    { no: 1, name: "clientSettingEnum", kind: "message", T: () => ClientSettingEnum },
    { no: 3, name: "boolValue", kind: "scalar", T: 8 }
  ]);
  var ClientSettingEnum = m.makeMessageType("youtube.response.setting.ClientSettingEnum", () => [
    { no: 1, name: "item", kind: "scalar", T: 5 }
  ]);

  var Watch = m.makeMessageType("youtube.response.watch.Watch", () => [
    { no: 1, name: "contents", kind: "message", T: () => WatchContent, repeated: !0 }
  ]);
  var WatchContent = m.makeMessageType("youtube.response.watch.Content", () => [
    { no: 2, name: "player", kind: "message", T: () => Player },
    { no: 3, name: "next", kind: "message", T: () => Next }
  ]);

  var FrameworkUpdate = m.makeMessageType("youtube.response.frameworkUpdate.FrameworkUpdateTransport", () => [
    { no: 1, name: "entityBatchUpdate", kind: "message", T: () => FrameworkEntityBatchUpdate }
  ]);
  var FrameworkEntityBatchUpdate = m.makeMessageType("youtube.response.frameworkUpdate.EntityBatchUpdate", () => [
    { no: 1, name: "mutations", kind: "message", T: () => FrameworkMutation, repeated: !0 }
  ]);
  var FrameworkMutation = m.makeMessageType("youtube.response.frameworkUpdate.Mutation", () => [
    { no: 1, name: "entityKey", kind: "scalar", T: 9 },
    { no: 2, name: "type", kind: "scalar", T: 5 },
    { no: 3, name: "payload", kind: "message", T: () => FrameworkPayload }
  ]);
  var FrameworkPayload = m.makeMessageType("youtube.response.frameworkUpdate.Payload", () => []);
  var FrameworkEntity = m.makeMessageType("youtube.response.frameworkUpdate.Entity", () => [
    { no: 2, name: "name", kind: "scalar", T: 9 },
    { no: 4, name: "targetNo", kind: "scalar", T: 5 },
    { no: 5, name: "type", kind: "scalar", T: 5 }
  ]);

  // Base handler class
  var BaseHandler = class {
    _times = new Map();
    constructor(e, n, r) {
      this.name = e ?? ""; this.isDebug = r?.debug ?? !1; this.className = n ?? ""; this.init();
      e && this.debug(`${e} Start`);
    }
    static getInstance(e, n) {
      let r = "Surge";
      typeof $loon < "u" ? r = "Loon" : typeof $task < "u" && (r = "QuanX");
      this.instances[r] || (this.instances[r] = this.classNames[r](e, r, n));
      return this.instances[r];
    }
    static instances = {};
    static classNames = {
      QuanX: (e, n, r) => new QuanXHandler(e, n, r),
      Surge: (e, n, r) => new SurgeHandler(e, n, r),
      Loon: (e, n, r) => new LoonHandler(e, n, r)
    };
    createProxy(e) { return new Proxy(e, { get: (t, p) => t[p], set: (t, p, v) => (t[p] = v, !0) }); }
    init() { try { this.request = this.createProxy($request); this.response = this.createProxy($response); } catch (e) { this.debug(e.toString()); } }
    getJSON(e, n = {}) { let r = this.getVal(e); return r ? JSON.parse(r) : n; }
    setJSON(e, n) { this.setVal(JSON.stringify(e), n); }
    debug(e) { this.isDebug && (typeof e == "object" && (e = JSON.stringify(e)), console.log(e)); }
    log(e) { typeof e == "object" && (e = JSON.stringify(e)), console.log(e); }
    timeStart(e) { this._times.set(e, Date.now()); }
    timeEnd(e) { if (this._times.has(e)) { let n = this._times.get(e) ?? 0; this.debug(`${e}: ${Date.now() - n}ms`); this._times.delete(e); } else this.debug(`Timer ${e} does not exist.`); }
    exit() { $done({}); }
    reject() { $done(); }
  };

  var SurgeHandler = class extends BaseHandler {
    getVal(e) { return $persistentStore.read(e); }
    setVal(e, n) { $persistentStore.write(e, n); }
    msg(e = this.name, n = "", r = "", s) { $notification.post(e, n, r, { url: s ?? "" }); }
    async fetch(e) {
      return await new Promise((n, r) => {
        let { method: s, body: o, bodyBytes: i, ...a } = e, c = i ?? o, d = c instanceof Uint8Array;
        $httpClient[s.toLowerCase()]({ ...a, body: c, "binary-mode": d }, (f, l, g) => {
          if (f) r(f);
          n({ status: l.status || l.statusCode, headers: l.headers, [d ? "bodyBytes" : "body"]: g });
        });
      });
    }
    done(e) {
      let n = e.response ?? e, r, s;
      if (n.bodyBytes) { r = n.bodyBytes; delete n.bodyBytes; s = { ...e }; s.response ? s.response.body = r : s.body = r; } else s = e;
      $done(s);
    }
    decodeParams(e) { return typeof $argument == "string" && !$argument.includes("{{{") ? Object.assign(e, JSON.parse($argument)) : e; }
  };
  assign(SurgeHandler, "clientAdapter", { bodyBytes: "body" });

  var QuanXHandler = class extends BaseHandler {
    static transferBodyBytes(e, n) {
      return e instanceof ArrayBuffer ? (n === "Uint8Array" ? new Uint8Array(e) : e) :
        e instanceof Uint8Array && n === "ArrayBuffer" ? e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset) : e;
    }
    getVal(e) { return $prefs.valueForKey(e)?.replace(/\0/g, ""); }
    setVal(e, n) { $prefs.setValueForKey(e, n); }
    msg(e = this.name, n = "", r = "", s) { $notify(e, n, r, { "open-url": s ?? "" }); }
    async fetch(e) {
      return await new Promise(n => {
        let r = { url: "", method: "GET" };
        for (let [s, o] of Object.entries(e)) {
          if (s === "id") r.sessionIndex = o;
          else if (s === "bodyBytes") r.bodyBytes = this.constructor.transferBodyBytes(o, "ArrayBuffer");
          else r[s] = o;
        }
        if (e.bodyBytes) delete r.body;
        $task.fetch(r).then(s => {
          let o = { status: 200, headers: {} };
          for (let [i, a] of Object.entries(s)) {
            if (i === "sessionIndex") o.id = a;
            else if (i === "bodyBytes") o.bodyBytes = this.constructor.transferBodyBytes(a, "Uint8Array");
            else if (i === "statusCode") o.status = a;
            else o[i] = a;
          }
          n(o);
        });
      });
    }
    done(e) {
      let n = e.response ?? e, r = {};
      for (let [s, o] of Object.entries(n)) {
        if (s === "status") r.status = `HTTP/1.1 ${o}`;
        else if (s === "bodyBytes") r.bodyBytes = this.constructor.transferBodyBytes(o, "ArrayBuffer");
        else r[s] = o;
      }
      $done(r);
    }
  };
  assign(QuanXHandler, "clientAdapter", { id: "sessionIndex", status: "statusCode" });

  var LoonHandler = class extends SurgeHandler {
    decodeParams(e) {
      if (typeof $argument < "u") for (let n of Object.keys(e)) { let r = $argument?.[n]; if (r !== void 0) e[n] = r; }
      return e;
    }
  };

  var y = BaseHandler.getInstance("YouTube");

  // Base64 utility
  var W = {
    dec(t) {
      let e = t.length * 3 / 4;
      t[t.length - 2] == "=" ? e -= 2 : t[t.length - 1] == "=" && (e -= 1);
      let n = new Uint8Array(e), r = 0, s = 0, o, i = 0;
      for (let a = 0; a < t.length; a++) {
        if (o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t[a]), o === -1) {
          switch (t[a]) {
            case "=": s = 0; break;
            case "\n": case "\r": case "\t": case " ": continue;
            default: throw Error("invalid base64 string.");
          }
        } else {
          switch (s) {
            case 0: i = o, s = 1; break;
            case 1: n[r++] = i << 2 | (o & 48) >> 4, i = o, s = 2; break;
            case 2: n[r++] = (i & 15) << 4 | (o & 60) >> 2, i = o, s = 3; break;
            case 3: n[r++] = (i & 3) << 6 | o, s = 0; break;
          }
        }
      }
      if (s == 1) throw Error("invalid base64 string.");
      return n.subarray(0, r);
    },
    enc(t) {
      let e = "", n = 0, r, s = 0;
      for (let o = 0; o < t.length; o++) {
        switch (r = t[o], n) {
          case 0: e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >> 2), s = (r & 3) << 4, n = 1; break;
          case 1: e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(s | r >> 4), s = (r & 15) << 2, n = 2; break;
          case 2: e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(s | r >> 6), e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r & 63), n = 0; break;
        }
      }
      return n && (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(s), e += "=", n == 1 && (e += "=")), e;
    }
  };

  // Message processor
  var MessageProcessor = class {
    constructor(e, n) {
      this.name = n; this.msgType = e; this.version = "1.0";
      this.whiteNo = []; this.blackNo = []; this.whiteEml = []; this.blackEml = ["inline_injection_entrypoint_layout.eml"];
      this.needProcess = false; this.needSave = false; this.decoder = new TextDecoder("utf-8", { fatal: !1, ignoreBOM: !0 });
      this.argument = this.decodeArgument(); y.isDebug = Boolean(this.argument.debug); y.debug(this.name);
      let r = y.getJSON("YouTubeAdvertiseInfo");
      y.debug(`currentVersion: ${this.version}`); y.debug(`storedVersion: ${r.version}`);
      if (r?.version === this.version) Object.assign(this, r);
    }
    decodeArgument() { return y.decodeParams({ lyricLang: "zh-Hans", captionLang: "zh-Hans", blockUpload: !0, blockImmersive: !0, debug: !1 }); }
    fromBinary(e) {
      if (e instanceof Uint8Array) { this.message = this.msgType.fromBinary(e); y.debug(`raw: ${Math.floor(e.length / 1024)} kb`); }
      else { y.log("YouTube can not get binaryBody"); y.exit(); }
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
        for (let a of i) if (a === n) r(o, s); else if (typeof o[a] == "object") s.push(o[a]);
      }
    }
    isAdvertise(e) { let n = this.listUnknownFields(e)[0]; return n ? this.handleFieldNo(n) : this.handleFieldEml(e); }
    handleFieldNo(e) {
      let n = e.no;
      if (this.whiteNo.includes(n)) return !1;
      if (this.blackNo.includes(n)) return !0;
      let r = this.checkBufferIsAd(e);
      if (r) this.blackNo.push(n); else this.whiteNo.push(n);
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
          if (i) { n = this.checkUnknownFiled(i); if (n) this.blackEml.push(r); else this.whiteEml.push(r); this.needSave = !0; }
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

  // Translation utilities
  function lr(t) {
    let r = ".", s = "+-a^+6", o = "+-3^+b+-f", i, a, c;
    for (i = [], a = 0, c = 0; c < t.length; c++) {
      let d = t.charCodeAt(c);
      if (128 > d) i[a++] = d;
      else if (2048 > d) { i[a++] = d >> 6 | 192; i[a++] = d & 63 | 128; }
      else if ((d & 64512) == 55296 && c + 1 < t.length && (t.charCodeAt(c + 1) & 64512) == 56320) {
        d = 65536 + ((d & 1023) << 10) + (t.charCodeAt(++c) & 1023);
        i[a++] = d >> 18 | 240; i[a++] = d >> 12 & 63 | 128; i[a++] = d >> 6 & 63 | 128; i[a++] = d & 63 | 128;
      } else { i[a++] = d >> 12 | 224; i[a++] = d >> 6 & 63 | 128; i[a++] = d & 63 | 128; }
    }
    for (t = 406644, a = 0; a < i.length; a++) t += i[a], t = Gt(t, s);
    t = Gt(t, o); t ^= 3293161072;
    if (0 > t) t = (t & 2147483647) + 2147483648;
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

  // Specific handlers
  var BrowseHandler = class extends MessageProcessor {
    constructor(e = Browse, n = "Browse") { super(e, n); }
    async pure() {
      this.iterate(this.message, "sectionListSupportedRenderers", e => {
        for (let n = e.sectionListSupportedRenderers.length - 1; n >= 0; n--) {
          this.removeCommonAD(e, n); this.removeShorts(e, n);
        }
      });
      await this.translate();
      this.removeFrameworkUpdateAd();
      return this;
    }
    removeCommonAD(e, n) {
      let s = e.sectionListSupportedRenderers[n]?.itemSectionRenderer?.richItemContent;
      for (let o = s?.length - 1; o >= 0; o--) if (this.isAdvertise(s[o])) { s.splice(o, 1); this.needProcess = !0; }
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
      if (!s) this.iterate(this.message, "description", (c, d) => { r = c.description.runs[0]; n = c.description.runs[0].text; s = !0; d.length = 0; });
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
      if (e) for (let n = e.length - 1; n >= 0; n--) {
        let r = e[n], s = Entity.fromBinary(W.dec(decodeURIComponent(r.entityKey))), o = this.blackEml.includes(s.name);
        if (!o && this.checkUnknownFiled(r?.payload)) { o = !0; this.blackEml.push(s.name); this.needSave = !0; }
        if (o) { e.splice(n, 1); this.needProcess = !0; }
      }
    }
  };

  var NextHandler = class extends BrowseHandler { constructor(e = Next, n = "Next") { super(e, n); } };

  var PlayerHandler = class extends MessageProcessor {
    constructor(e = Player, n = "Player") { super(e, n); }
    pure() {
      if (this.message.adPlacements?.length) this.message.adPlacements.length = 0;
      if (this.message.adSlots?.length) this.message.adSlots.length = 0;
      delete this.message?.playbackTracking?.pageadViewthroughconversion;
      this.addPlayAbility(); this.addTranslateCaption();
      this.needProcess = !0;
      return this;
    }
    addPlayAbility() {
      let e = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender;
      if (typeof e == "object") e.active = !0;
      if (typeof this.message.playabilityStatus == "object") this.message.playabilityStatus.backgroundPlayer = new BackgroundPlayer({ backgroundPlayerRender: { active: !0 } });
    }
    addTranslateCaption() {
      let e = this.argument.captionLang;
      if (e === "off") return;
      this.iterate(this.message, "captionTracks", (n, r) => {
        let s = n.captionTracks, o = n.audioTracks;
        if (Array.isArray(s)) {
          let a = { [e]: 2, en: 1 }, c = -1, d = 0;
          for (let f = 0; f < s.length; f++) {
            let l = s[f], g = a[l.languageCode];
            if (g && g > c) { c = g; d = f; }
            l.isTranslatable = !0;
          }
          if (c !== 2) s.push(new CaptionTrack({ baseUrl: s[d].baseUrl + `&tlang=${e}`, name: { runs: [{ text: `@Enhance (${e})` }] }, vssId: `.${e}`, languageCode: e }));
          if (Array.isArray(o)) {
            let f = c === 2 ? d : s.length - 1;
            for (let l of o) {
              if (!l.captionTrackIndices?.includes(f)) l.captionTrackIndices.push(f);
              l.defaultCaptionTrackIndex = f; l.captionsInitialState = 3;
            }
          }
          let i = { de: "Deutsch", ru: "Русский", fr: "Français", fil: "Filipino", ko: "한국어", ja: "日本語", en: "English", vi: "Tiếng Việt", "zh-Hant": "中文（繁體）", "zh-Hans": "中文（简体）", und: "@VirgilClyne" };
          n.translationLanguages = Object.entries(i).map(([a, c]) => new TranslationLanguage({ languageCode: a, languageName: { runs: [{ text: c }] } }));
        }
        r.length = 0;
      });
    }
  };

  var SearchHandler = class extends BrowseHandler { constructor(e = Search, n = "Search") { super(e, n); } };

  var ShortsHandler = class extends MessageProcessor {
    constructor(e = Shorts, n = "Shorts") { super(e, n); }
    pure() {
      let e = this.message.entries?.length;
      if (e) for (let n = e - 1; n >= 0; n--) if (!this.message.entries[n].command?.reelWatchEndpoint?.overlay) { this.message.entries.splice(n, 1); this.needProcess = !0; }
      return this;
    }
  };

  var GuideHandler = class extends MessageProcessor {
    constructor(e = Guide, n = "Guide") { super(e, n); }
    pure() {
      let e = ["SPunlimited"];
      if (this.argument.blockUpload) e.push("FEuploads");
      if (this.argument.blockImmersive) e.push("FEmusic_immersive");
      this.iterate(this.message, "rendererItems", n => {
        for (let r = n.rendererItems.length - 1; r >= 0; r--) {
          let s = n.rendererItems[r]?.iconRender?.browseId || n.rendererItems[r]?.labelRender?.browseId;
          if (e.includes(s)) { n.rendererItems.splice(r, 1); this.needProcess = !0; }
        }
      });
      return this;
    }
  };

  var SettingHandler = class extends MessageProcessor {
    constructor(e = Setting, n = "Setting") { super(e, n); }
    pure() {
      this.iterate(this.message.settingItems, "categoryId", n => {
        if (n.categoryId === 10135) {
          n.subSettings.push(new SubSetting({
            settingBooleanRenderer: {
              itemId: 0,
              enableServiceEndpoint: { setClientSettingEndpoint: { settingData: { clientSettingEnum: { item: 151 }, boolValue: !0 } } },
              disableServiceEndpoint: { setClientSettingEndpoint: { settingData: { clientSettingEnum: { item: 151 }, boolValue: !1 } } }
            }
          }));
        }
      });
      this.message.settingItems.push(new SettingItem({
        backgroundPlayBackSettingRenderer: { backgroundPlayback: !0, download: !0, downloadQualitySelection: !0, smartDownload: !0, icon: { iconType: 1093 } }
      }));
      this.needProcess = !0;
      return this;
    }
  };

  var WatchHandler = class extends MessageProcessor {
    constructor(e = Watch, n = "Watch") { super(e, n); this.player = new PlayerHandler(); this.next = new NextHandler(); }
    async pure() {
      for (let e of this.message.contents) {
        if (e.player) { this.player.message = e.player; await this.player.pure(); }
        if (e.next) { this.next.message = e.next; await this.next.pure(); }
        this.needProcess = !0;
      }
      return this;
    }
  };

  // Main execution
  var handlers = new Map([
    ["browse", BrowseHandler], ["next", NextHandler], ["player", PlayerHandler], ["search", SearchHandler],
    ["reel_watch_sequence", ShortsHandler], ["guide", GuideHandler], ["get_setting", SettingHandler], ["get_watch", WatchHandler]
  ]);

  function getHandler(t) { for (let [e, n] of handlers.entries()) if (t.includes(e)) return new n(); return null; }

  async function process() {
    let t = getHandler(y.request.url);
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

  process().catch(t => y.log(t.toString())).finally(() => y.exit());
})();
