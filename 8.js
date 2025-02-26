const m = it("proto3", It(), pt(), {
  ...Nt(),
  newFieldList: t => new ge(t, ln),
  initFields(t) {
    for (const e of t.getType().fields.byMember()) {
      if (e.opt) continue;
      const n = e.localName, r = t;
      if (e.repeated) { r[n] = []; continue; }
      switch (e.kind) {
        case "oneof": r[n] = { case: undefined }; break;
        case "enum": r[n] = 0; break;
        case "map": r[n] = {}; break;
        case "scalar": r[n] = G(e.T, e.L); break;
      }
    }
  }
});

// ResponseContext và các cấu trúc liên quan
const ResponseContext = m.makeMessageType("youtube.component.ResponseContext", () => [
  { no: 6, name: "serviceTrackingParams", kind: "message", T: ServiceTrackingParam, repeated: true }
]);
const ServiceTrackingParam = m.makeMessageType("youtube.component.ServiceTrackingParam", () => [
  { no: 1, name: "service", kind: "scalar", T: 5 },
  { no: 2, name: "params", kind: "message", T: Param, repeated: true }
]);
const Param = m.makeMessageType("youtube.component.Param", () => [
  { no: 1, name: "key", kind: "scalar", T: 9 },
  { no: 2, name: "value", kind: "scalar", T: 9 }
]);

// FrameworkUpdateTransport
const FrameworkUpdateTransport = m.makeMessageType("youtube.component.FrameworkUpdateTransport", () => [
  { no: 1, name: "entityBatchUpdate", kind: "message", T: EntityBatchUpdate }
]);
const EntityBatchUpdate = m.makeMessageType("youtube.component.EntityBatchUpdate", () => [
  { no: 1, name: "mutations", kind: "message", T: Mutation, repeated: true }
]);
const Mutation = m.makeMessageType("youtube.component.Mutation", () => [
  { no: 1, name: "entityKey", kind: "scalar", T: 9 },
  { no: 2, name: "type", kind: "scalar", T: 5 },
  { no: 3, name: "payload", kind: "message", T: Payload }
]);
const Payload = m.makeMessageType("youtube.component.Payload", () => []);
const Entity = m.makeMessageType("youtube.component.Entity", () => [
  { no: 2, name: "name", kind: "scalar", T: 9 },
  { no: 4, name: "targetNo", kind: "scalar", T: 5 },
  { no: 5, name: "type", kind: "scalar", T: 5 }
]);

// Label và Run
const Label = m.makeMessageType("youtube.component.Label", () => [
  { no: 1, name: "runs", kind: "message", T: Run, repeated: true }
]);
const Run = m.makeMessageType("youtube.component.Run", () => [
  { no: 1, name: "text", kind: "scalar", T: 9 }
]);

// Browse Response
const Browse = m.makeMessageType("youtube.response.browse.Browse", () => [
  { no: 1, name: "responseContext", kind: "message", T: ResponseContext },
  { no: 9, name: "content", kind: "message", T: Content },
  { no: 10, name: "onResponseReceivedAction", kind: "message", T: Content },
  { no: 777, name: "frameworkUpdateTransport", kind: "message", T: FrameworkUpdateTransport }
]);
const Content = m.makeMessageType("youtube.response.browse.Content", () => [
  { no: 58173949, name: "singleColumnResultsRenderer", kind: "message", T: SingleColumnResultsRenderer },
  { no: 153515154, name: "elementRenderer", kind: "message", T: ElementRenderer },
  { no: 49399797, name: "sectionListRenderer", kind: "message", T: SectionListRenderer }
]);
const SingleColumnResultsRenderer = m.makeMessageType("youtube.response.browse.SingleColumnResultsRenderer", () => [
  { no: 1, name: "tabs", kind: "message", T: BrowseTabSupportedRenderer, repeated: true }
]);
const BrowseTabSupportedRenderer = m.makeMessageType("youtube.response.browse.BrowseTabSupportedRenderer", () => [
  { no: 58174010, name: "tabRenderer", kind: "message", T: TabRenderer }
]);
const TabRenderer = m.makeMessageType("youtube.response.browse.TabRenderer", () => [
  { no: 4, name: "content", kind: "message", T: Content }
]);
const SectionListRenderer = m.makeMessageType("youtube.response.browse.SectionListRenderer", () => [
  { no: 1, name: "sectionListSupportedRenderers", kind: "message", T: SectionListSupportedRenderer, repeated: true }
]);
const SectionListSupportedRenderer = m.makeMessageType("youtube.response.browse.SectionListSupportedRenderer", () => [
  { no: 50195462, name: "itemSectionRenderer", kind: "message", T: ItemSectionRenderer },
  { no: 51845067, name: "shelfRenderer", kind: "message", T: ShelfRenderer },
  { no: 221496734, name: "musicDescriptionShelfRenderer", kind: "message", T: MusicDescriptionShelfRenderer }
]);
const ItemSectionRenderer = m.makeMessageType("youtube.response.browse.ItemSectionRenderer", () => [
  { no: 1, name: "richItemContent", kind: "message", T: RichItemContent, repeated: true }
]);
const RichItemContent = m.makeMessageType("youtube.response.browse.RichItemContent", () => [
  { no: 153515154, name: "videoWithContextRenderer", kind: "message", T: ElementRenderer }
]);
const ElementRenderer = m.makeMessageType("youtube.response.browse.ElementRenderer", () => [
  { no: 172660663, name: "videoRendererContent", kind: "message", T: VideoRendererContent }
]);
const VideoRendererContent = m.makeMessageType("youtube.response.browse.VideoRendererContent", () => [
  { no: 1, name: "videoInfo", kind: "message", T: VideoInfo },
  { no: 2, name: "renderInfo", kind: "message", T: RenderInfo }
]);
const VideoInfo = m.makeMessageType("youtube.response.browse.VideoInfo", () => [
  { no: 168777401, name: "videoContext", kind: "message", T: VideoContext }
]);
const VideoContext = m.makeMessageType("youtube.response.browse.VideoContext", () => [
  { no: 5, name: "videoContent", kind: "message", T: VideoContent }
]);
const VideoContent = m.makeMessageType("youtube.response.browse.VideoContent", () => [
  { no: 465160965, name: "timedLyricsRender", kind: "message", T: TimedLyricsRender }
]);
const TimedLyricsRender = m.makeMessageType("youtube.response.browse.TimedLyricsRender", () => [
  { no: 4, name: "timedLyricsContent", kind: "message", T: TimedLyricsContent }
]);
const TimedLyricsContent = m.makeMessageType("youtube.response.browse.TimedLyricsContent", () => [
  { no: 1, name: "runs", kind: "message", T: Run, repeated: true },
  { no: 2, name: "footerLabel", kind: "scalar", T: 9 }
]);
const RenderInfo = m.makeMessageType("youtube.response.browse.RenderInfo", () => [
  { no: 183314536, name: "layoutRender", kind: "message", T: LayoutRender }
]);
const LayoutRender = m.makeMessageType("youtube.response.browse.LayoutRender", () => [
  { no: 1, name: "eml", kind: "scalar", T: 9 }
]);
const ShelfRenderer = m.makeMessageType("youtube.response.browse.ShelfRenderer", () => [
  { no: 5, name: "richSectionContent", kind: "message", T: RichSectionContent }
]);
const RichSectionContent = m.makeMessageType("youtube.response.browse.RichSectionContent", () => [
  { no: 51431404, name: "reelShelfRenderer", kind: "message", T: ReelShelfRenderer }
]);
const ReelShelfRenderer = m.makeMessageType("youtube.response.browse.ReelShelfRenderer", () => [
  { no: 1, name: "richItemContent", kind: "message", T: RichItemContent, repeated: true }
]);
const MusicDescriptionShelfRenderer = m.makeMessageType("youtube.response.browse.MusicDescriptionShelfRenderer", () => [
  { no: 3, name: "description", kind: "message", T: Label },
  { no: 10, name: "footer", kind: "message", T: Label }
]);

// Next Response
const Next = m.makeMessageType("youtube.response.next.Next", () => [
  { no: 7, name: "content", kind: "message", T: NextContent },
  { no: 8, name: "onResponseReceivedAction", kind: "message", T: Content },
  { no: 777, name: "frameworkUpdateTransport", kind: "message", T: FrameworkUpdateTransport }
]);
const NextContent = m.makeMessageType("youtube.response.next.Content", () => [
  { no: 51779735, name: "nextResult", kind: "message", T: NextResult }
]);
const NextResult = m.makeMessageType("youtube.response.next.NextResult", () => [
  { no: 1, name: "content", kind: "message", T: Content }
]);

// Search Response
const Search = m.makeMessageType("youtube.response.search.Search", () => [
  { no: 4, name: "content", kind: "message", T: Content },
  { no: 7, name: "onResponseReceivedCommand", kind: "message", T: OnResponseReceivedCommand }
]);
const OnResponseReceivedCommand = m.makeMessageType("youtube.response.search.OnResponseReceivedCommand", () => [
  { no: 50195462, name: "itemSectionRenderer", kind: "message", T: ItemSectionRenderer },
  { no: 49399797, name: "appendContinuationItemsAction", kind: "message", T: SectionListRenderer }
]);

// Shorts Response
const Shorts = m.makeMessageType("youtube.response.shorts.Shorts", () => [
  { no: 2, name: "entries", kind: "message", T: Entry, repeated: true }
]);
const Entry = m.makeMessageType("youtube.response.shorts.Entry", () => [
  { no: 1, name: "command", kind: "message", T: Command }
]);
const Command = m.makeMessageType("youtube.response.shorts.Command", () => [
  { no: 139608561, name: "reelWatchEndpoint", kind: "message", T: ReelWatchEndpoint }
]);
const ReelWatchEndpoint = m.makeMessageType("youtube.response.shorts.ReelWatchEndpoint", () => [
  { no: 8, name: "overlay", kind: "message", T: Overlay }
]);
const Overlay = m.makeMessageType("youtube.response.shorts.Overlay", () => [
  { no: 139970731, name: "reelPlayerOverlayRenderer", kind: "message", T: ReelPlayerOverlayRenderer }
]);
const ReelPlayerOverlayRenderer = m.makeMessageType("youtube.response.shorts.ReelPlayerOverlayRenderer", () => [
  { no: 12, name: "style", kind: "scalar", T: 5 }
]);

// Guide Response
const Guide = m.makeMessageType("youtube.response.browse.Guide", () => [
  { no: 4, name: "items4", kind: "message", T: Item, repeated: true },
  { no: 6, name: "items6", kind: "message", T: Item, repeated: true }
]);
const Item = m.makeMessageType("youtube.response.browse.Item", () => [
  { no: 117866661, name: "guideSectionRenderer", kind: "message", T: GuideSectionRenderer }
]);
const GuideSectionRenderer = m.makeMessageType("youtube.response.browse.GuideSectionRenderer", () => [
  { no: 1, name: "rendererItems", kind: "message", T: RendererItem, repeated: true }
]);
const RendererItem = m.makeMessageType("youtube.response.browse.RendererItem", () => [
  { no: 318370163, name: "iconRender", kind: "message", T: GuideEntryRenderer },
  { no: 117501096, name: "labelRender", kind: "message", T: GuideEntryRenderer }
]);
const GuideEntryRenderer = m.makeMessageType("youtube.response.browse.guideEntryRenderer", () => [
  { no: 1, name: "browseId", kind: "scalar", T: 9 }
]);

// Player Response
const Player = m.makeMessageType("youtube.response.player.Player", () => [
  { no: 7, name: "adPlacements", kind: "message", T: AdPlacement, repeated: true },
  { no: 2, name: "playabilityStatus", kind: "message", T: PlayabilityStatus },
  { no: 9, name: "playbackTracking", kind: "message", T: PlaybackTracking },
  { no: 10, name: "captions", kind: "message", T: Captions },
  { no: 68, name: "adSlots", kind: "message", T: AdSlot, repeated: true }
]);
const AdPlacement = m.makeMessageType("youtube.response.player.AdPlacement", () => [
  { no: 84813246, name: "adPlacementRenderer", kind: "message", T: AdPlacementRenderer }
]);
const AdPlacementRenderer = m.makeMessageType("youtube.response.player.AdPlacementRenderer", () => [
  { no: 4, name: "params", kind: "scalar", T: 9 }
]);
const PlayabilityStatus = m.makeMessageType("youtube.response.player.PlayabilityStatus", () => [
  { no: 21, name: "miniPlayer", kind: "message", T: MiniPlayer },
  { no: 11, name: "backgroundPlayer", kind: "message", T: BackgroundPlayer }
]);
const MiniPlayer = m.makeMessageType("youtube.response.player.MiniPlayer", () => [
  { no: 151635310, name: "miniPlayerRender", kind: "message", T: MiniPlayerRender }
]);
const BackgroundPlayer = m.makeMessageType("youtube.response.player.BackgroundPlayer", () => [
  { no: 64657230, name: "backgroundPlayerRender", kind: "message", T: BackgroundPlayerRender }
]);
const MiniPlayerRender = m.makeMessageType("youtube.response.player.MiniPlayerRender", () => [
  { no: 1, name: "active", kind: "scalar", T: 8 }
]);
const BackgroundPlayerRender = m.makeMessageType("youtube.response.player.BackgroundPlayerRender", () => [
  { no: 1, name: "active", kind: "scalar", T: 8 }
]);
const PlaybackTracking = m.makeMessageType("youtube.response.player.PlaybackTracking", () => [
  { no: 1, name: "videostatsPlaybackUrl", kind: "message", T: Tracking },
  { no: 2, name: "videostatsDelayplayUrl", kind: "message", T: Tracking },
  { no: 3, name: "videostatsWatchtimeUrl", kind: "message", T: Tracking },
  { no: 4, name: "ptrackingUrl", kind: "message", T: Tracking },
  { no: 5, name: "qoeUrl", kind: "message", T: Tracking },
  { no: 13, name: "atrUrl", kind: "message", T: Tracking },
  { no: 15, name: "videostatsEngageUrl", kind: "message", T: Tracking },
  { no: 18, name: "pageadViewthroughconversion", kind: "message", T: Tracking }
]);
const Tracking = m.makeMessageType("youtube.response.player.Tracking", () => [
  { no: 1, name: "baseUrl", kind: "scalar", T: 9 }
]);
const Captions = m.makeMessageType("youtube.response.player.Captions", () => [
  { no: 51621377, name: "playerCaptionsTrackListRenderer", jsonName: "playerCaptionsTracklistRenderer", kind: "message", T: PlayerCaptionsTrackListRenderer }
]);
const PlayerCaptionsTrackListRenderer = m.makeMessageType("youtube.response.player.PlayerCaptionsTrackListRenderer", () => [
  { no: 1, name: "captionTracks", kind: "message", T: CaptionTrack, repeated: true },
  { no: 2, name: "audioTracks", kind: "message", T: AudioTrack, repeated: true },
  { no: 3, name: "translationLanguages", kind: "message", T: TranslationLanguage, repeated: true },
  { no: 4, name: "defaultAudioTrackIndex", kind: "scalar", T: 5, opt: true },
  { no: 6, name: "defaultCaptionTrackIndex", kind: "scalar", T: 5, opt: true }
]);
const CaptionTrack = m.makeMessageType("youtube.response.player.CaptionTrack", () => [
  { no: 1, name: "baseUrl", kind: "scalar", T: 9 },
  { no: 2, name: "name", kind: "message", T: Label },
  { no: 3, name: "vssId", kind: "scalar", T: 9 },
  { no: 4, name: "languageCode", kind: "scalar", T: 9 },
  { no: 5, name: "kind", kind: "scalar", T: 9, opt: true },
  { no: 6, name: "rtl", kind: "scalar", T: 8, opt: true },
  { no: 7, name: "isTranslatable", kind: "scalar", T: 8 }
]);
const AudioTrack = m.makeMessageType("youtube.response.player.AudioTrack", () => [
  { no: 2, name: "captionTrackIndices", kind: "scalar", T: 5, repeated: true, packed: false },
  { no: 3, name: "defaultCaptionTrackIndex", kind: "scalar", T: 5, opt: true },
  { no: 4, name: "forcedCaptionTrackIndex", kind: "scalar", T: 5, opt: true },
  { no: 5, name: "visibility", kind: "scalar", T: 5, opt: true },
  { no: 6, name: "hasDefaultTrack", kind: "scalar", T: 8, opt: true },
  { no: 7, name: "hasForcedTrack", kind: "scalar", T: 8, opt: true },
  { no: 8, name: "audioTrackId", kind: "scalar", T: 9, opt: true },
  { no: 11, name: "captionsInitialState", kind: "scalar", T: 5, opt: true }
]);
const TranslationLanguage = m.makeMessageType("youtube.response.player.TranslationLanguage", () => [
  { no: 1, name: "languageCode", kind: "scalar", T: 9 },
  { no: 2, name: "languageName", kind: "message", T: Label }
]);
const AdSlot = m.makeMessageType("youtube.response.player.AdSlot", () => [
  { no: 424701016, name: "render", kind: "message", T: AdSlotRender }
]);
const AdSlotRender = m.makeMessageType("youtube.response.player.AdSlot.Render", () => [], { localName: "AdSlot_Render" });

// Setting Response
const Setting = m.makeMessageType("youtube.response.setting.Setting", () => [
  { no: 6, name: "settingItems", kind: "message", T: SettingItem, repeated: true },
  { no: 7, name: "CollectionItems", kind: "message", T: SettingItem, repeated: true }
]);
const SettingItem = m.makeMessageType("youtube.response.setting.SettingItem", () => [
  { no: 88478200, name: "backgroundPlayBackSettingRenderer", kind: "message", T: BackgroundPlayBackSettingRenderer },
  { no: 66930374, name: "settingCategoryCollectionRenderer", kind: "message", T: SettingCategoryCollectionRenderer }
]);
const BackgroundPlayBackSettingRenderer = m.makeMessageType("youtube.response.setting.BackgroundPlayBackSettingRenderer", () => [
  { no: 1, name: "name", kind: "message", T: Label },
  { no: 2, name: "backgroundPlayback", kind: "scalar", T: 8 },
  { no: 3, name: "download", kind: "scalar", T: 8 },
  { no: 5, name: "trackingParams", kind: "scalar", T: 12 },
  { no: 9, name: "downloadQualitySelection", kind: "scalar", T: 8 },
  { no: 10, name: "smartDownload", kind: "scalar", T: 8 },
  { no: 14, name: "icon", kind: "message", T: Icon }
]);
const SettingCategoryCollectionRenderer = m.makeMessageType("youtube.response.setting.SettingCategoryCollectionRenderer", () => [
  { no: 2, name: "name", kind: "message", T: Label },
  { no: 3, name: "subSettings", kind: "message", T: SubSetting, repeated: true },
  { no: 4, name: "categoryId", kind: "scalar", T: 5 },
  { no: 5, name: "icon", kind: "message", T: Icon }
]);
const Icon = m.makeMessageType("youtube.response.setting.Icon", () => [
  { no: 1, name: "iconType", kind: "scalar", T: 5 }
]);
const SubSetting = m.makeMessageType("youtube.response.setting.SubSetting", () => [
  { no: 61331416, name: "settingBooleanRenderer", kind: "message", T: SettingBooleanRenderer }
]);
const SettingBooleanRenderer = m.makeMessageType("youtube.response.setting.SettingBooleanRenderer", () => [
  { no: 2, name: "title", kind: "message", T: Label },
  { no: 3, name: "description", kind: "message", T: Label },
  { no: 5, name: "enableServiceEndpoint", kind: "message", T: ServiceEndpoint },
  { no: 6, name: "disableServiceEndpoint", kind: "message", T: ServiceEndpoint },
  { no: 15, name: "itemId", kind: "scalar", T: 5 }
]);
const ServiceEndpoint = m.makeMessageType("youtube.response.setting.ServiceEndpoint", () => [
  { no: 81212182, name: "setClientSettingEndpoint", kind: "message", T: SetClientSettingEndpoint }
]);
const SetClientSettingEndpoint = m.makeMessageType("youtube.response.setting.SetClientSettingEndpoint", () => [
  { no: 1, name: "settingData", kind: "message", T: SettingData }
]);
const SettingData = m.makeMessageType("youtube.response.setting.SettingData", () => [
  { no: 1, name: "clientSettingEnum", kind: "message", T: ClientSettingEnum },
  { no: 3, name: "boolValue", kind: "scalar", T: 8 }
]);
const ClientSettingEnum = m.makeMessageType("youtube.response.setting.ClientSettingEnum", () => [
  { no: 1, name: "item", kind: "scalar", T: 5 }
]);

// Watch Response
const Watch = m.makeMessageType("youtube.response.watch.Watch", () => [
  { no: 1, name: "contents", kind: "message", T: WatchContent, repeated: true }
]);
const WatchContent = m.makeMessageType("youtube.response.watch.Content", () => [
  { no: 2, name: "player", kind: "message", T: Player },
  { no: 3, name: "next", kind: "message", T: Next }
]);

// FrameworkUpdate Response
const FrameworkUpdate = m.makeMessageType("youtube.response.frameworkUpdate.FrameworkUpdateTransport", () => [
  { no: 1, name: "entityBatchUpdate", kind: "message", T: FrameworkEntityBatchUpdate }
]);
const FrameworkEntityBatchUpdate = m.makeMessageType("youtube.response.frameworkUpdate.EntityBatchUpdate", () => [
  { no: 1, name: "mutations", kind: "message", T: FrameworkMutation, repeated: true }
]);
const FrameworkMutation = m.makeMessageType("youtube.response.frameworkUpdate.Mutation", () => [
  { no: 1, name: "entityKey", kind: "scalar", T: 9 },
  { no: 2, name: "type", kind: "scalar", T: 5 },
  { no: 3, name: "payload", kind: "message", T: FrameworkPayload }
]);
const FrameworkPayload = m.makeMessageType("youtube.response.frameworkUpdate.Payload", () => []);
const FrameworkEntity = m.makeMessageType("youtube.response.frameworkUpdate.Entity", () => [
  { no: 2, name: "name", kind: "scalar", T: 9 },
  { no: 4, name: "targetNo", kind: "scalar", T: 5 },
  { no: 5, name: "type", kind: "scalar", T: 5 }
]);
class BaseHandler {
  constructor(name = "", className = "", options = {}) {
    this._times = new Map();
    this.name = name;
    this.isDebug = options.debug ?? false;
    this.className = className;
    this.request = this.createProxy($request);
    this.response = this.createProxy($response);
    if (name) this.debug(`${name} Start`);
  }

  static instances = {};
  static classNames = {
    QuanX: (n, c, o) => new QuanXHandler(n, c, o),
    Surge: (n, c, o) => new SurgeHandler(n, c, o),
    Loon: (n, c, o) => new LoonHandler(n, c, o)
  };

  static getInstance(name, options) {
    const env = typeof $loon !== "undefined" ? "Loon" : typeof $task !== "undefined" ? "QuanX" : "Surge";
    if (!this.instances[env]) this.instances[env] = this.classNames[env](name, env, options);
    return this.instances[env];
  }

  createProxy(obj) {
    return new Proxy(obj, { get: (t, p) => t[p], set: (t, p, v) => (t[p] = v, true) });
  }

  debug(msg) { if (this.isDebug) console.log(typeof msg === "object" ? JSON.stringify(msg) : msg); }
  log(msg) { console.log(typeof msg === "object" ? JSON.stringify(msg) : msg); }
  timeStart(label) { this._times.set(label, Date.now()); }
  timeEnd(label) {
    const start = this._times.get(label);
    if (start) {
      this.debug(`${label}: ${Date.now() - start}ms`);
      this._times.delete(label);
    } else this.debug(`Timer ${label} does not exist.`);
  }
  exit() { $done({}); }
  reject() { $done(); }
  getJSON(key, defaultValue = {}) { return this.getVal(key) ? JSON.parse(this.getVal(key)) : defaultValue; }
  setJSON(value, key) { this.setVal(JSON.stringify(value), key); }
}

class SurgeHandler extends BaseHandler {
  getVal(key) { return $persistentStore.read(key); }
  setVal(value, key) { $persistentStore.write(value, key); }
  msg(title = this.name, subtitle = "", desc = "", url = "") { $notification.post(title, subtitle, desc, { url }); }
  async fetch(options) {
    return new Promise((resolve, reject) => {
      const { method, body, bodyBytes, ...rest } = options;
      $httpClient[method.toLowerCase()]({ ...rest, body: bodyBytes ?? body, "binary-mode": !!bodyBytes }, (err, resp, data) => {
        if (err) reject(err);
        resolve({ status: resp.status || resp.statusCode, headers: resp.headers, [bodyBytes ? "bodyBytes" : "body"]: data });
      });
    });
  }
  done(result) {
    const resp = result.response ?? result;
    if (resp.bodyBytes) {
      result.response ? result.response.body = resp.bodyBytes : result.body = resp.bodyBytes;
      delete resp.bodyBytes;
    }
    $done(result);
  }
  decodeParams(params) {
    return typeof $argument === "string" && !$argument.includes("{{{") ? Object.assign(params, JSON.parse($argument)) : params;
  }
}

class QuanXHandler extends BaseHandler {
  static clientAdapter = { id: "sessionIndex", status: "statusCode" };
  static transferBodyBytes(bytes, type) {
    return bytes instanceof ArrayBuffer ? (type === "Uint8Array" ? new Uint8Array(bytes) : bytes) :
           bytes instanceof Uint8Array && type === "ArrayBuffer" ? bytes.buffer.slice(bytes.byteOffset, bytes.byteLength + bytes.byteOffset) : bytes;
  }
  getVal(key) { return $prefs.valueForKey(key)?.replace(/\0/g, ""); }
  setVal(value, key) { $prefs.setValueForKey(value, key); }
  msg(title = this.name, subtitle = "", desc = "", url = "") { $notify(title, subtitle, desc, { "open-url": url }); }
  async fetch(options) {
    return new Promise(resolve => {
      let req = { url: "", method: "GET" };
      for (const [k, v] of Object.entries(options)) {
        if (k === "id") req.sessionIndex = v;
        else if (k === "bodyBytes") req.bodyBytes = this.constructor.transferBodyBytes(v, "ArrayBuffer");
        else req[k] = v;
      }
      if (req.bodyBytes) delete req.body;
      $task.fetch(req).then(resp => {
        const result = { status: 200, headers: {} };
        for (const [k, v] of Object.entries(resp)) {
          if (k === "sessionIndex") result.id = v;
          else if (k === "bodyBytes") result.bodyBytes = this.constructor.transferBodyBytes(v, "Uint8Array");
          else if (k === "statusCode") result.status = v;
          else result[k] = v;
        }
        resolve(result);
      });
    });
  }
  done(result) {
    const resp = result.response ?? result;
    const output = {};
    for (const [k, v] of Object.entries(resp)) {
      if (k === "status") output.status = `HTTP/1.1 ${v}`;
      else if (k === "bodyBytes") output.bodyBytes = this.constructor.transferBodyBytes(v, "ArrayBuffer");
      else output[k] = v;
    }
    $done(output);
  }
}

class LoonHandler extends SurgeHandler {
  decodeParams(params) {
    if (typeof $argument !== "undefined") {
      for (const key of Object.keys(params)) {
        const value = $argument?.[key];
        if (value !== undefined) params[key] = value;
      }
    }
    return params;
  }
}

const y = BaseHandler.getInstance("YouTube");

class MessageProcessor {
  constructor(msgType, name) {
    this.name = name;
    this.msgType = msgType;
    this.version = "1.0";
    this.whiteNo = [];
    this.blackNo = [];
    this.whiteEml = [];
    this.blackEml = ["inline_injection_entrypoint_layout.eml"];
    this.needProcess = false;
    this.needSave = false;
    this.decoder = new TextDecoder("utf-8", { fatal: false, ignoreBOM: true });
    this.argument = this.decodeArgument();
    y.isDebug = Boolean(this.argument.debug);
    y.debug(this.name);
    const stored = y.getJSON("YouTubeAdvertiseInfo");
    if (stored?.version === this.version) Object.assign(this, stored);
  }

  decodeArgument() {
    return y.decodeParams({ lyricLang: "zh-Hans", captionLang: "zh-Hans", blockUpload: true, blockImmersive: true, debug: false });
  }

  fromBinary(bytes) {
    if (!(bytes instanceof Uint8Array)) {
      y.log("YouTube can not get binaryBody");
      y.exit();
      return this;
    }
    this.message = this.msgType.fromBinary(bytes);
    y.debug(`raw: ${Math.floor(bytes.length / 1024)} kb`);
    return this;
  }

  async modify() {
    const result = this.pure();
    return result instanceof Promise ? await result : result;
  }

  toBinary() { return this.message.toBinary(); }

  listUnknownFields(obj) { return obj instanceof E ? obj.getType().runtime.bin.listUnknownFields(obj) : []; }

  save() {
    if (!this.needSave) return;
    y.debug("Update Config");
    const config = { version: this.version, whiteNo: this.whiteNo, blackNo: this.blackNo, whiteEml: this.whiteEml, blackEml: this.blackEml };
    y debug(config);
    y.setJSON(config, "YouTubeAdvertiseInfo");
  }

  done() {
    this.save();
    if (this.needProcess) {
      y.timeStart("toBinary");
      const bytes = this.toBinary();
      y.timeEnd("toBinary");
      y.debug(`modify: ${Math.floor(bytes.length / 1024)} kb`);
      y.done({ bodyBytes: bytes });
    } else {
      y.debug("use $done({})");
      y.exit();
    }
  }

  iterate(obj, key, callback) {
    const stack = [obj];
    while (stack.length) {
      const current = stack.pop();
      for (const prop in current) {
        if (prop === key) callback(current, stack);
        else if (typeof current[prop] === "object") stack.push(current[prop]);
      }
    }
  }

  isAdvertise(obj) {
    const unknown = this.listUnknownFields(obj)[0];
    return unknown ? this.handleFieldNo(unknown) : this.handleFieldEml(obj);
  }

  handleFieldNo(field) {
    const no = field.no;
    if (this.whiteNo.includes(no)) return false;
    if (this.blackNo.includes(no)) return true;
    const isAd = this.checkBufferIsAd(field);
    (isAd ? this.blackNo : this.whiteNo).push(no);
    this.needSave = true;
    return isAd;
  }

  handleFieldEml(obj) {
    let isAd = false;
    let eml = "";
    this.iterate(obj, "renderInfo", (node, stack) => {
      eml = node.renderInfo.layoutRender.eml.split("|")[0];
      if (this.whiteEml.includes(eml)) isAd = false;
      else if (this.blackEml.includes(eml) || /shorts(?!_pivot_item)/.test(eml)) isAd = true;
      else {
        const content = node?.videoInfo?.videoContext?.videoContent;
        if (content) {
          isAd = this.checkUnknownFiled(content);
          (isAd ? this.blackEml : this.whiteEml).push(eml);
          this.needSave = true;
        }
      }
      stack.length = 0;
    });
    return isAd;
  }

  checkBufferIsAd(field) {
    return field && field.data.length >= 1000 && this.decoder.decode(field.data).includes("pagead");
  }

  checkUnknownFiled(obj) {
    return obj && this.listUnknownFields(obj).some(f => this.checkBufferIsAd(f));
  }

  isShorts(obj) {
    let isShort = false;
    this.iterate(obj, "eml", (node, stack) => {
      isShort = /shorts(?!_pivot_item)/.test(node.eml);
      stack.length = 0;
    });
    return isShort;
  }
}

function lr(text) {
  const r = ".", s = "+-a^+6", o = "+-3^+b+-f";
  let i = [], a = 0;
  for (let c = 0; c < text.length; c++) {
    let d = text.charCodeAt(c);
    if (d < 128) i[a++] = d;
    else if (d < 2048) {
      i[a++] = d >> 6 | 192;
      i[a++] = d & 63 | 128;
    } else if ((d & 64512) === 55296 && c + 1 < text.length && (text.charCodeAt(c + 1) & 64512) === 56320) {
      d = 65536 + ((d & 1023) << 10) + (text.charCodeAt(++c) & 1023);
      i[a++] = d >> 18 | 240;
      i[a++] = d >> 12 & 63 | 128;
      i[a++] = d >> 6 & 63 | 128;
      i[a++] = d & 63 | 128;
    } else {
      i[a++] = d >> 12 | 224;
      i[a++] = d >> 6 & 63 | 128;
      i[a++] = d & 63 | 128;
    }
  }
  let t = 406644;
  for (let a = 0; a < i.length; a++) t = Gt(t + i[a], s);
  t = Gt(t, o);
  t ^= 3293161072;
  if (t < 0) t = (t & 2147483647) + 2147483648;
  t %= 1e6;
  return t.toString() + r + (t ^ 406644);
}

function Gt(t, e) {
  const n = "a", r = "+";
  for (let o = 0; o < e.length - 2; o += 3) {
    let s = e.charAt(o + 2);
    s = s >= n ? s.charCodeAt(0) - 87 : Number(s);
    s = e.charAt(o + 1) === r ? t >>> s : t << s;
    t = e.charAt(o) === r ? t + s & 4294967295 : t ^ s;
  }
  return t;
}

function Yt(text, lang) {
  return `https://translate.google.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&source=bh&ssel=0&tsel=0&kc=1&tk=${lr(text)}&q=${encodeURIComponent(text)}`;
}
class BrowseHandler extends MessageProcessor {
  constructor(msgType = Browse, name = "Browse") { super(msgType, name); }

  async pure() {
    this.iterate(this.message, "sectionListSupportedRenderers", node => {
      for (let i = node.sectionListSupportedRenderers.length - 1; i >= 0; i--) {
        this.removeCommonAD(node, i);
        this.removeShorts(node, i);
      }
    });
    await this.translate();
    this.removeFrameworkUpdateAd();
    return this;
  }

  removeCommonAD(node, index) {
    const items = node.sectionListSupportedRenderers[index]?.itemSectionRenderer?.richItemContent;
    for (let i = items?.length - 1; i >= 0; i--) {
      if (this.isAdvertise(items[i])) {
        items.splice(i, 1);
        this.needProcess = true;
      }
    }
  }

  removeShorts(node, index) {
    const shelf = node.sectionListSupportedRenderers[index]?.shelfRenderer;
    if (this.isShorts(shelf)) {
      node.sectionListSupportedRenderers.splice(index, 1);
      this.needProcess = true;
    }
  }

  getBrowseId() {
    let browseId = "";
    this.iterate(this.message?.responseContext, "key", (node, stack) => {
      if (node.key === "browse_id") browseId = node.value;
      stack.length = 0;
    });
    return browseId;
  }

  async translate() {
    const lang = this.argument.lyricLang?.trim();
    if (this.name !== "Browse" || !this.getBrowseId().startsWith("MPLYt") || lang === "off") return;

    let text = "", target, found = false;
    this.iterate(this.message, "timedLyricsContent", (node, stack) => {
      target = node.timedLyricsContent;
      text = target.runs.map(r => r.text).join("\n");
      found = true;
      stack.length = 0;
    });
    if (!found) {
      this.iterate(this.message, "description", (node, stack) => {
        target = node.description.runs[0];
        text = target.text;
        found = true;
        stack.length = 0;
      });
    }
    if (!found) return;

    const langCode = lang.split("-")[0];
    const url = Yt(text, lang);
    const response = await y.fetch({ method: "GET", url });
    if (response.status !== 200 || !response.body) return;

    const data = JSON.parse(response.body);
    const suffix = " & Translated by Google";
    const isTargetLang = data[2].includes(langCode);
    if (target.text) {
      target.text = data[0].map(l => isTargetLang ? l[0] : l[1] + l[0] || "").join("\r\n");
      this.iterate(this.message, "footer", (node, stack) => {
        node.footer.runs[0].text += suffix;
        stack.length = 0;
      });
    } else if (target.runs.length <= data[0].length) {
      target.runs.forEach((r, i) => r.text = isTargetLang ? data[0][i][0] : r.text + `\n${data[0][i][0]}`);
      target.footerLabel += suffix;
    }
    this.needProcess = true;
  }

  removeFrameworkUpdateAd() {
    const mutations = this.message?.frameworkUpdateTransport?.entityBatchUpdate?.mutations;
    if (!mutations) return;
    for (let i = mutations.length - 1; i >= 0; i--) {
      const mutation = mutations[i];
      const entity = Entity.fromBinary(W.dec(decodeURIComponent(mutation.entityKey)));
      let isAd = this.blackEml.includes(entity.name);
      if (!isAd && this.checkUnknownFiled(mutation?.payload)) {
        isAd = true;
        this.blackEml.push(entity.name);
        this.needSave = true;
      }
      if (isAd) {
        mutations.splice(i, 1);
        this.needProcess = true;
      }
    }
  }
}

class NextHandler extends BrowseHandler {
  constructor(msgType = Next, name = "Next") { super(msgType, name); }
}

class PlayerHandler extends MessageProcessor {
  constructor(msgType = Player, name = "Player") { super(msgType, name); }

  pure() {
    if (this.message.adPlacements?.length) this.message.adPlacements.length = 0;
    if (this.message.adSlots?.length) this.message.adSlots.length = 0;
    delete this.message?.playbackTracking?.pageadViewthroughconversion;
    this.addPlayAbility();
    this.addTranslateCaption();
    this.needProcess = true;
    return this;
  }

  addPlayAbility() {
    const mini = this.message?.playabilityStatus?.miniPlayer?.miniPlayerRender;
    if (mini) mini.active = true;
    if (this.message.playabilityStatus) {
      this.message.playabilityStatus.backgroundPlayer = new BackgroundPlayer({ backgroundPlayerRender: { active: true } });
    }
  }

  addTranslateCaption() {
    const lang = this.argument.captionLang;
    if (lang === "off") return;
    this.iterate(this.message, "captionTracks", (node, stack) => {
      const tracks = node.captionTracks;
      const audioTracks = node.audioTracks;
      if (!Array.isArray(tracks)) return;

      const langPriority = { [lang]: 2, "en": 1 };
      let maxPriority = -1, baseIndex = 0;
      for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        const priority = langPriority[track.languageCode];
        if (priority && priority > maxPriority) {
          maxPriority = priority;
          baseIndex = i;
        }
        track.isTranslatable = true;
      }
      if (maxPriority !== 2) {
        tracks.push(new CaptionTrack({
          baseUrl: tracks[baseIndex].baseUrl + `&tlang=${lang}`,
          name: { runs: [{ text: `@Enhance (${lang})` }] },
          vssId: `.${lang}`,
          languageCode: lang
        }));
      }
      if (Array.isArray(audioTracks)) {
        const targetIndex = maxPriority === 2 ? baseIndex : tracks.length - 1;
        for (const track of audioTracks) {
          if (!track.captionTrackIndices.includes(targetIndex)) track.captionTrackIndices.push(targetIndex);
          track.defaultCaptionTrackIndex = targetIndex;
          track.captionsInitialState = 3;
        }
      }

      const languages = {
        "de": "Deutsch", "ru": "Русский", "fr": "Français", "fil": "Filipino",
        "ko": "한국어", "ja": "日本語", "en": "English", "vi": "Tiếng Việt",
        "zh-Hant": "中文（繁體）", "zh-Hans": "中文（简体）", "und": "@VirgilClyne"
      };
      node.translationLanguages = Object.entries(languages).map(([code, name]) =>
        new TranslationLanguage({ languageCode: code, languageName: { runs: [{ text: name }] } })
      );
      stack.length = 0;
    });
  }
}

class SearchHandler extends BrowseHandler {
  constructor(msgType = Search, name = "Search") { super(msgType, name); }
}

class ShortsHandler extends MessageProcessor {
  constructor(msgType = Shorts, name = "Shorts") { super(msgType, name); }

  pure() {
    const entries = this.message.entries;
    if (!entries?.length) return this;
    for (let i = entries.length - 1; i >= 0; i--) {
      if (!entries[i].command?.reelWatchEndpoint?.overlay) {
        entries.splice(i, 1);
        this.needProcess = true;
      }
    }
    return this;
  }
}

class GuideHandler extends MessageProcessor {
  constructor(msgType = Guide, name = "Guide") { super(msgType, name); }

  pure() {
    const blocked = ["SPunlimited"];
    if (this.argument.blockUpload) blocked.push("FEuploads");
    if (this.argument.blockImmersive) blocked.push("FEmusic_immersive");
    this.iterate(this.message, "rendererItems", node => {
      for (let i = node.rendererItems.length - 1; i >= 0; i--) {
        const id = node.rendererItems[i]?.iconRender?.browseId || node.rendererItems[i]?.labelRender?.browseId;
        if (blocked.includes(id)) {
          node.rendererItems.splice(i, 1);
          this.needProcess = true;
        }
      }
    });
    return this;
  }
}

class SettingHandler extends MessageProcessor {
  constructor(msgType = Setting, name = "Setting") { super(msgType, name); }

  pure() {
    this.iterate(this.message.settingItems, "categoryId", node => {
      if (node.categoryId === 10135) {
        node.subSettings.push(new SubSetting({
          settingBooleanRenderer: {
            itemId: 0,
            enableServiceEndpoint: { setClientSettingEndpoint: { settingData: { clientSettingEnum: { item: 151 }, boolValue: true } } },
            disableServiceEndpoint: { setClientSettingEndpoint: { settingData: { clientSettingEnum: { item: 151 }, boolValue: false } } }
          }
        }));
      }
    });
    this.message.settingItems.push(new SettingItem({
      backgroundPlayBackSettingRenderer: {
        backgroundPlayback: true,
        download: true,
        downloadQualitySelection: true,
        smartDownload: true,
        icon: { iconType: 1093 }
      }
    }));
    this.needProcess = true;
    return this;
  }
}

class WatchHandler extends MessageProcessor {
  constructor(msgType = Watch, name = "Watch") {
    super(msgType, name);
    this.player = new PlayerHandler();
    this.next = new NextHandler();
  }

  async pure() {
    for (const content of this.message.contents) {
      if (content.player) {
        this.player.message = content.player;
        await this.player.pure();
      }
      if (content.next) {
        this.next.message = content.next;
        await this.next.pure();
      }
      this.needProcess = true;
    }
    return this;
  }
}
const handlers = new Map([
  ["browse", BrowseHandler],
  ["next", NextHandler],
  ["player", PlayerHandler],
  ["search", SearchHandler],
  ["reel_watch_sequence", ShortsHandler],
  ["guide", GuideHandler],
  ["get_setting", SettingHandler],
  ["get_watch", WatchHandler]
]);

function getHandler(url) {
  for (const [key, Handler] of handlers) {
    if (url.includes(key)) return new Handler();
  }
  return null;
}

async function process() {
  const handler = getHandler(y.request.url);
  if (!handler) {
    y.msg("YouTube Enhance", "Script cần cập nhật", "Tài nguyên ngoài -> Cập nhật toàn bộ");
    y.exit();
    return;
  }

  const bytes = y.response.bodyBytes;
  y.timeStart("fromBinary");
  handler.fromBinary(bytes);
  y.timeEnd("fromBinary");

  y.timeStart("modify");
  await handler.modify();
  y.timeEnd("modify");

  handler.done();
}

process().catch(err => y.log(err.toString())).finally(() => y.exit());
