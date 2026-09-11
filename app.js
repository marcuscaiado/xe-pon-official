/**
 * ==========================================================================
 * ✧XE・PON♡✧ // OFFICIAL CYBERPUNK APPLICATION & AUDIO PLAYER ENGINE
 * High-Performance Vanilla JavaScript with Native Audio Player & Bilingual (EN / JA) Engine
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initCyberCanvas();
  initAudioEngine();
  initTrackShowcase();
  initLyricsModal();
  initPictureViewer();
  initMobileNav();
  initScrollNav();
});

/**
 * ==========================================================================
 * 1. BILINGUAL TRANSLATION DICTIONARY (EN & JA)
 * ==========================================================================
 */
const I18N = {
  en: {
    page_title: "✧XE・PON♡✧ // OFFICIAL CYBER PORTAL | BREAK THE LIMIT#2",
    page_desc: "Official website for ✧XE・PON♡✧. Stream the 5 full tracks from Xe Pon _ NEON & FRICTION and the climax single BREAK THE LIMIT#2.",
    nav_home: "HOME",
    nav_showcase: "TRACK SHOWCASE (5 SONGS)",
    nav_playlist: "PLAYLIST (5 TRACKS)",
    nav_toei: "TOEI COMMS",
    nav_artist_phase: "PHASE ARTIST",
    status_ready: "READY TO PLAY",
    status_playing: "PLAYING NOW ⚡",
    status_paused: "PAUSED",
    badge_new_release: "NEW RELEASE // SINGLE",
    badge_bpm_energy: "HIGH VOLTAGE // 100% PUNK ENERGY",
    badge_phase_tracks: "16 SONGS ON PHASE",
    badge_5_tracks: "5 FULL TRACKS",
    hero_title_top: "JAPANESE POST-HARDCORE & PUNK",
    hero_kanji_sub: "BREAK THE LIMIT#2 // \"Scream! Tear through the night and seize the light!\"",
    hero_desc: "Wall-of-sound production driven by high-gain guitars, high-velocity dynamic skank drumming, furious double-kick pedals, and raw female rock chest vocals. Stream the 5 featured tracks from <em>NEON & FRICTION</em> directly on site, or explore ✧XE・PON♡✧'s full 16-song catalogue on Phase.",
    btn_play_single: "PLAY NEW SINGLE",
    btn_view_playlist: "VIEW ALL 5 TRACKS",
    btn_lyrics_notes: "LYRICS & DIRECTION",
    btn_sub_production: "PRODUCTION SPECS (ALL 5 SONGS)",
    stat_members: "BAND MEMBERS",
    stat_phase_songs: "SONGS ON PHASE",
    stat_tracks: "READY ON SITE",
    stat_toei: "TOEI CALLS",
    hero_tag_top: "✧XE・PON♡✧ // ALL 4 MEMBERS (FULL LINEUP)",
    hero_tag_bottom: "LOCAL AUDIO ACTIVE: 5 TRACKS",
    sec1_badge: "01 // TRACK SHOWCASE (ALL 5 SONGS)",
    sec1_kanji: "SOUND PROFILE",
    sec1_sub: "Explore the sonic direction, Tokyo street locations, lyrics, and musical identity behind all 5 original tracks.",
    pill_location_lbl: "LOCATION",
    direction_header: "// TRACK OVERVIEW & SOUND PROFILE",
    chorus_tag: "CHORUS HIGHLIGHT // サビ",
    btn_expand_lyrics: "VIEW FULL LYRICS 📜",
    btn_play_onsite: "PLAY ON SITE",
    btn_pause_onsite: "PAUSE AUDIO",
    btn_stream_phase: "STREAM ON PHASE",
    btn_sub_open_app: "OPEN IN OFFICIAL APP ↗",
    sec2_badge: "02 // OFFICIAL PLAYLIST (5 TRACKS ON SITE)",
    sec2_kanji: "OFFICIAL PLAYLIST",
    sec2_sub: "Play any of the 5 original songs directly in the site's integrated cyber player or launch on Phase.",
    badge_5_songs: "5 TRACKS",
    playlist_sub_tag: "IN-SITE AUDIO READY",
    playlist_meta_info: "Artist: ✧XE・PON♡✧ • 5 Tracks • Japanese Alternative Rock / Post-Hardcore",
    btn_play_all: "PLAY ALL ON SITE",
    btn_open_phase: "OPEN IN PHASE ↗",
    th_track: "# TRACK & TITLE",
    th_genre: "GENRE / MOOD",
    th_duration: "DURATION",
    th_action: "PLAYBACK & PHASE",
    btn_play_inline: "▶ PLAY",
    badge_new_hit: "FEATURED SINGLE",
    sec3_badge: "03 // TOEI TRANSMISSION",
    sec3_kanji: "STUDIO ALERT",
    sec3_sub: "When your tracks sound so much like an anime opening that major studios won't stop ringing.",
    toei_terminal_title: "COMMS_LOG // TOEI_ANIMATION.PDU",
    toei_alert_badge: "100+ MISSED CALLS: TOEI ANIMATION",
    toei_log_status: "INCOMING CALL OVERFLOW // DO NOT DISTURB ON",
    toei_log_freq: "ARTIST: ✧XE・PON♡✧",
    toei_sender_1: "TOEI ANIMATION // CHIEF PRODUCER SUZUKI",
    toei_time_1: "3:42 AM (CALL #47)",
    toei_msg_1: "\"PLEASE PICK UP YOUR PHONES!! 😭 The director heard BREAK THE LIMIT#2 and literally threw out the entire storyboard for the season finale just to sync the climax fight to your chorus. We don't care what your manager asks for, name your price!! JUST STOP LEAVING US ON READ!\"",
    toei_sender_2: "TOEI ANIMATION // MUSIC PRODUCTION DESK",
    toei_time_2: "4:15 AM (CALL #89)",
    toei_msg_2: "\"Urgent: Who authorized all 4 of you to turn on 'Do Not Disturb' during band practice?! We have three animators in the studio crying with their headphones on. The fall season broadcast deadline is in two weeks. PLEASE CALL BACK.\"",
    toei_sender_3: "SHIBUYA LIVEHOUSE // FRONT DESK",
    toei_time_3: "4:21 AM (CALL #102)",
    toei_msg_3: "\"Uhh girls... there's a guy in a tailored suit with a Toei Animation VIP badge literally pacing outside the back door waiting for your rehearsal to finish. Did you guys rob an anime studio or what? 💀\"",
    btn_follow_phase: "FOLLOW ✧XE・PON♡✧ ON PHASE (16 SONGS)",
    disco_badge: "⚡ COMPLETE DISCOGRAPHY // PHASE",
    disco_title: "ALL 16 SONGS STREAMING ON PHASE",
    disco_desc: "Beyond the 5 featured tracks on <em>NEON & FRICTION</em>, stream ✧XE・PON♡✧'s full 16-song catalogue of Japanese post-hardcore, alternative rock, and melodic punk directly on the official Phase platform.",
    btn_explore_16: "STREAM ALL 16 SONGS ON PHASE",
    cap_akiba: "AKIHABARA GIGO // ALL 4 MEMBERS",
    cap_street: "SHIBUYA BACK-ALLEY // DOWNTIME & FOOD",
    cap_chrome: "CHROME STREETWEAR // SESSIONS",
    modal_chip: "OFFICIAL LYRICS & PRODUCTION NOTES // ✧XE・PON♡✧ (ALL 5 SONGS)",
    modal_specs: "Japanese Post-Hardcore • Track 05 • Featured Single",
    modal_btn_play: "PLAY THIS TRACK ON SITE",
    modal_btn_close: "CLOSE",
    dock_meta_default: "TRACK 05 OF 05 • CLIMAX SINGLE • LOCAL AUDIO READY",
    dock_meta_playing: "TRACK 05 OF 05 • PLAYING ON SITE ⚡",
    dock_btn_phase: "OPEN IN PHASE",
    lbl_zoom_photo: "CLICK TO EXPAND",
    tip_minimize: "MINIMIZE",
    btn_minimize_pip: "MINIMIZE TO CORNER",
    mini_click_expand: "CLICK TO EXPAND"
  },
  ja: {
    page_title: "✧XE・PON♡✧ // 公式電脳ポータル | BREAK THE LIMIT#2",
    page_desc: "✧XE・PON♡✧の公式サイト。公式プレイリスト『Xe Pon _ NEON & FRICTION』全5曲およびクライマックス新曲『BREAK THE LIMIT#2』を配信中。",
    nav_home: "ホーム",
    nav_showcase: "全5曲深層解説",
    nav_playlist: "プレイリスト (5曲)",
    nav_toei: "東映通信",
    nav_artist_phase: "PHASE (全16曲)",
    status_ready: "再生準備完了",
    status_playing: "再生中 ⚡",
    status_paused: "一時停止中",
    badge_new_release: "新曲公開 // シングル",
    badge_bpm_energy: "超高電圧 // エネルギー100%",
    badge_phase_tracks: "PHASEで全16曲配信中",
    badge_5_tracks: "全5曲完全収録",
    hero_title_top: "超音速ジャパニーズ・ポストハードコア＆パンク",
    hero_kanji_sub: "BREAK THE LIMIT#2 「叫べ！夜を切り裂いて光を掴め！」",
    hero_desc: "ハイゲインギターが生み出す音の壁、超高速スカンクビート、怒涛のツーバス、そして感情と摩擦に満ちた女性ロックボーカルの生々しい叫び。『NEON & FRICTION』収録の厳選5曲をサイト内で直接試聴、またはPhaseで✧XE・PON♡✧の全16曲カタログをストリーミング。",
    btn_play_single: "新曲を再生する",
    btn_view_playlist: "全5曲を見る",
    btn_lyrics_notes: "歌詞と制作ノート",
    btn_sub_production: "全5曲 制作ディレクション",
    stat_members: "メンバー人数",
    stat_phase_songs: "PHASE配信楽曲数",
    stat_tracks: "サイト内再生可能",
    stat_toei: "東映着信数",
    hero_tag_top: "✧XE・PON♡✧ // メンバー4名（完全ラインナップ）",
    hero_tag_bottom: "サイト内再生可能：全5曲",
    sec1_badge: "01 // 楽曲深層解説（全5曲）",
    sec1_kanji: "サウンド解説",
    sec1_sub: "全5曲のサウンドディレクション、東京の撮影ロケーション、歌詞、制作背景を徹底解説。",
    pill_location_lbl: "撮影ロケーション",
    direction_header: "// 楽曲解説 & サウンドプロファイル",
    chorus_tag: "サビ抜粋 // サビ",
    btn_expand_lyrics: "フル歌詞を見る 📜",
    btn_play_onsite: "サイトで再生",
    btn_pause_onsite: "一時停止",
    btn_stream_phase: "PHASEで聴く",
    btn_sub_open_app: "公式アプリを開く ↗",
    sec2_badge: "02 // 公式プレイリスト（サイト内全5曲試聴可）",
    sec2_kanji: "公式プレイリスト",
    sec2_sub: "内蔵サイバープレイヤーで5曲すべてを直接再生、またはPhaseでフル再生。",
    badge_5_songs: "全5曲",
    playlist_sub_tag: "サイト内再生対応",
    playlist_meta_info: "アーティスト: ✧XE・PON♡✧ • 全5曲 • ジャパニーズ・オルタナティブロック / ポストハードコア",
    btn_play_all: "全曲サイトで再生",
    btn_open_phase: "PHASEで開く ↗",
    th_track: "# トラック＆曲名",
    th_genre: "ジャンル / 雰囲気",
    th_duration: "時間",
    th_action: "再生 ＆ PHASE",
    btn_play_inline: "▶ 再生",
    badge_new_hit: "最新シングル",
    disco_badge: "⚡ 完全ディスコグラフィ // PHASE",
    disco_title: "PHASEにて全16曲配信中",
    disco_desc: "『NEON & FRICTION』の5曲にとどまらず、公式Phaseプラットフォームでは✧XE・PON♡✧の全16曲におよぶジャパニーズ・ポストハードコア、オルタナティブロック、メロディックパンクをストリーミング配信中。",
    btn_explore_16: "PHASEで全16曲を聴く",
    sec3_badge: "03 // 東映通信",
    sec3_kanji: "東映アニメーション",
    sec3_sub: "曲があまりにもアニメOPすぎるため、大手アニメスタジオからの着信が止まらない事態に。",
    toei_terminal_title: "通信記録 // 東映アニメーション.PDU",
    toei_alert_badge: "着信100件以上: 東映アニメーション",
    toei_log_status: "着信過多 // おやすみモード作動中",
    toei_log_freq: "アーティスト: ✧XE・PON♡✧",
    toei_sender_1: "東映アニメーション // 鈴木チーフプロデューサー",
    toei_time_1: "午前3:42 (着信47回目)",
    toei_msg_1: "「頼むから電話に出てくれ！！😭 監督が『BREAK THE LIMIT#2』を聴いて、クライマックスの戦闘シーンをサビに合わせるために最終話の絵コンテを全部描き直すって言い出したんだ！条件は何でも飲むから、頼むから既読無視をやめて折り返してくれ！！」",
    toei_sender_2: "東映アニメーション // 劇伴音楽制作部",
    toei_time_2: "午前4:15 (着信89回目)",
    toei_msg_2: "「緊急連絡：バンド練習中にメンバー4人全員で『おやすみモード』にするのを今すぐやめてください！！スタジオでアニメーター3人がヘッドホンして泣いてます。秋クールの納品まであと2週間切ってるんです。今すぐ連絡ください。」",
    toei_sender_3: "渋谷ライブハウス // 受付スタッフ",
    toei_time_3: "午前4:21 (着信102回目)",
    toei_msg_3: "「おい、お前ら…ライブハウスの裏口に東映アニメーションの腕章つけたスーツの男が張り付いて練習終わるの待ってるんだけど。お前らスタジオで何やらかしたの？💀」",
    btn_follow_phase: "PHASEで全16曲を聴く ↗",
    cap_akiba: "秋葉原GiGO // メンバー4名全員",
    cap_street: "渋谷の路地裏 // 休憩と食事",
    cap_chrome: "クロム・ストリートウェア // 撮影セッション",
    modal_chip: "公式歌詞＆楽曲ノート // ✧XE・PON♡✧（全5曲収録）",
    modal_specs: "ポストハードコア / オルタナティブロック • 最新シングル",
    modal_btn_play: "この曲をサイトで再生",
    modal_btn_close: "閉じる",
    dock_meta_default: "トラック 05 / 05 • 最新シングル • ローカル音源待機中",
    dock_meta_playing: "トラック 05 / 05 • サイト内再生中 ⚡",
    dock_btn_phase: "PHASEで開く",
    lbl_zoom_photo: "クリックで拡大",
    tip_minimize: "最小化",
    btn_minimize_pip: "隅に最小化表示",
    mini_click_expand: "クリックで拡大"
  }
};

let currentLang = 'en';

function initLanguageSwitcher() {
  const saved = localStorage.getItem('xepon_lang');
  if (saved === 'ja' || saved === 'en') {
    currentLang = saved;
  }
  applyLanguage(currentLang);

  document.querySelectorAll('.btn-lang').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang && (lang === 'en' || lang === 'ja')) {
        currentLang = lang;
        localStorage.setItem('xepon_lang', lang);
        applyLanguage(lang);
      }
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang === 'ja' ? 'ja' : 'en';

  // Toggle active button state
  document.querySelectorAll('.btn-lang').forEach(b => {
    if (b.getAttribute('data-lang') === lang) b.classList.add('active');
    else b.classList.remove('active');
  });

  const dict = I18N[lang] || I18N.en;

  // Title and description
  document.title = dict.page_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = dict.page_desc;

  // Apply to all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Refresh status badge & play buttons text
  if (typeof isPlaying !== 'undefined') {
    updatePlayState(isPlaying);
  }

  // Refresh dock info text in active language
  if (typeof XE_PON_TRACKS !== 'undefined' && typeof currentTrackIdx !== 'undefined') {
    updateDockInfo(XE_PON_TRACKS[currentTrackIdx]);
  }

  // Refresh showcase track in active language
  if (typeof renderShowcaseTrack === 'function' && typeof currentShowcaseIdx !== 'undefined') {
    renderShowcaseTrack(currentShowcaseIdx);
  }

  // Refresh modal lyrics in active language
  if (typeof renderModalLyrics === 'function' && typeof currentModalTrackIdx !== 'undefined') {
    renderModalLyrics(currentModalTrackIdx);
  }

  // Refresh picture view in active language
  if (typeof renderPictureView === 'function' && typeof currentPicIdx !== 'undefined') {
    renderPictureView(currentPicIdx);
  }
}

/**
 * ==========================================================================
 * 2. THE 5 OFFICIAL TRACKS WITH LOCAL AUDIO SOURCES
 * ==========================================================================
 */
const XE_PON_TRACKS = [
  {
    index: 0,
    title: "ASTRAL SHIBUYA OVERDRIVE",
    artist: "✧XE・PON♡✧",
    duration: "3:34",
    audioSrc: "assets/audio/astral-shibuya-overdrive.mp3",
    phaseUrl: "https://app.phase.app.br/?track=8c124227-9d14-43c1-aaaa-847472eb1d95",
    tag: "Track 01"
  },
  {
    index: 1,
    title: "ZANGAI",
    artist: "✧XE・PON♡✧",
    duration: "3:30",
    audioSrc: "assets/audio/zangai.mp3",
    phaseUrl: "https://app.phase.app.br/?track=6cabef0e-061d-4697-b5dd-6152ea718683",
    tag: "Track 02"
  },
  {
    index: 2,
    title: "BREAK THE LIMIT#1",
    artist: "✧XE・PON♡✧",
    duration: "3:26",
    audioSrc: "assets/audio/break-the-limit-1.mp3",
    phaseUrl: "https://app.phase.app.br/?track=db4daa95-648c-4518-b21c-8d8affa7437b",
    tag: "Track 03"
  },
  {
    index: 3,
    title: "HIBANA",
    artist: "✧XE・PON♡✧",
    duration: "3:25",
    audioSrc: "assets/audio/hibana.mp3",
    phaseUrl: "https://app.phase.app.br/?track=bc0b1e00-c033-4072-922f-a11d77c036d3",
    tag: "Track 04"
  },
  {
    index: 4,
    title: "BREAK THE LIMIT#2",
    artist: "✧XE・PON♡✧",
    duration: "3:45",
    audioSrc: "assets/audio/break-the-limit-2.mp3",
    phaseUrl: "https://app.phase.app.br/?track=a49e18b4-39cf-44f6-8f29-9f5dbebeed17",
    tag: "Climax Single",
    isHit: true
  }
];

/**
 * ==========================================================================
 * 2.1 THE 5 TRACKS DEEP-DIVE SHOWCASE DATA (EDITORIAL & LOCATIONS)
 * ==========================================================================
 */
const XE_PON_SHOWCASE = [
  {
    index: 0,
    title: "ASTRAL SHIBUYA OVERDRIVE",
    subtitle: {
      en: "✧XE・PON♡✧ • Track 01 of 05",
      ja: "✧XE・PON♡✧ • トラック 01 / 05"
    },
    tag: "TRACK 01 // OVERDRIVE",
    image: "assets/arcade-follow.jpg",
    imageAlt: "✧XE・PON♡✧ in Akihabara & Shibuya",
    location: {
      en: "Shibuya Scramble & Center-Gai, Tokyo",
      ja: "東京・渋谷スクランブル交差点＆センター街"
    },
    genres: [
      { text: "JAPANESE ALT ROCK", class: "tag-blue" },
      { text: "ELECTRONIC PUNK", class: "tag-pink" },
      { text: "NEON OVERDRIVE", class: "tag-white" },
      { text: "HIGH-OCTANE", class: "tag-gray" }
    ],
    editorialHeader: {
      en: "// TRACK OVERVIEW & SOUND PROFILE",
      ja: "// 楽曲解説 & サウンドプロファイル"
    },
    editorialBody: {
      en: "A high-octane collision of Tokyo midnight energy and roaring alternative rock. Blending distorted melodic guitar riffs with pulsing electronic bass grooves, this track captures the adrenaline rush of sprinting through Shibuya's neon canyons at 2 AM. Sharp dynamic drumming and soaring female rock vocals build an urgent, uncontainable momentum from the very first chord.",
      ja: "東京の夜の熱気と轟音オルタナティブロックが火花を散らすハイスピードナンバー。疾走感あふれるディストーションギターと脈動するエレクトロニックベースが融合し、午前2時の渋谷のネオン街を全力疾走するような高揚感を表現。ダイナミックなドラミングと力強い女性ロックボーカルが、第一音から聴く者を圧倒します。"
    },
    lyricTag: {
      en: "HOOK HIGHLIGHT // 歌詞抜粋",
      ja: "サビ抜粋 // サビ"
    },
    lyricQuote: {
      en: "\"Sprint through the electric storm — our voices will pierce through Tokyo's midnight sky!\"",
      ja: "「ネオンの嵐を蹴散らして走れ！東京の真夜中を貫く叫びを響かせろ！」"
    },
    phaseUrl: "https://app.phase.app.br/?track=8c124227-9d14-43c1-aaaa-847472eb1d95",
    hasFullLyricsModal: true
  },
  {
    index: 1,
    title: "ZANGAI",
    subtitle: {
      en: "✧XE・PON♡✧ • Track 02 of 05",
      ja: "✧XE・PON♡✧ • トラック 02 / 05"
    },
    tag: "TRACK 02 // MATH PUNK",
    image: "assets/band-collage.jpg",
    imageAlt: "✧XE・PON♡✧ band session",
    location: {
      en: "Shinjuku Omoide Yokocho & Underpass, Tokyo",
      ja: "東京・新宿思い出横丁＆アンダーパス"
    },
    genres: [
      { text: "MATH ROCK", class: "tag-pink" },
      { text: "POST-HARDCORE", class: "tag-blue" },
      { text: "MELODIC PUNK", class: "tag-white" },
      { text: "EMOTIONAL CATHARSIS", class: "tag-gray" }
    ],
    editorialHeader: {
      en: "// TRACK OVERVIEW & SOUND PROFILE",
      ja: "// 楽曲解説 & サウンドプロファイル"
    },
    editorialBody: {
      en: "Angular, intricate math-rock guitar tapping intertwines with raw post-hardcore aggression in this emotionally charged anthem. 'Zangai' (Remnants) explores the raw feeling of standing amidst broken promises and rising stronger from the ashes. With unexpected rhythmic shifts, punchy bass work, and strained, impassioned chest-belt vocals, it's a testament to resilience.",
      ja: "変拍子のマスロック的ギタータッピングと、生々しいポストハードコアの衝動が交錯するエモーショナル・アンセム。『残骸』という名の通り、壊れかけた街や挫折の中で立ち上がる強さを描く一曲。予測不能なリズム展開と重厚なベースライン、胸を締め付ける熱いボーカルが魂を揺さぶります。"
    },
    lyricTag: {
      en: "CHORUS HIGHLIGHT // サビ",
      ja: "サビ抜粋 // サビ"
    },
    lyricQuote: {
      en: "\"Even from the ashes of yesterday, we will ignite a fire that never goes out.\"",
      ja: "「瓦礫の隙間に残った火種でも、消えない炎を何度だって燃え上がらせろ！」"
    },
    phaseUrl: "https://app.phase.app.br/?track=6cabef0e-061d-4697-b5dd-6152ea718683",
    hasFullLyricsModal: true
  },
  {
    index: 2,
    title: "BREAK THE LIMIT#1",
    subtitle: {
      en: "✧XE・PON♡✧ • Track 03 of 05",
      ja: "✧XE・PON♡✧ • トラック 03 / 05"
    },
    tag: "TRACK 03 // LIVE ANTHEM",
    image: "assets/street-food.jpg",
    imageAlt: "✧XE・PON♡✧ street food session",
    location: {
      en: "Shimokitazawa Underground Livehouse, Tokyo",
      ja: "東京・下北沢アンダーグラウンド・ライブハウス"
    },
    genres: [
      { text: "MELODIC PUNK", class: "tag-white" },
      { text: "POST-HARDCORE", class: "tag-pink" },
      { text: "186 BPM SKANK BEAT", class: "tag-blue" },
      { text: "CIRCLE PIT FUEL", class: "tag-gray" }
    ],
    editorialHeader: {
      en: "// TRACK OVERVIEW & SOUND PROFILE",
      ja: "// 楽曲解説 & サウンドプロファイル"
    },
    editorialBody: {
      en: "The genesis of the 'Break the Limit' saga. This track delivers pure, unfiltered melodic punk energy built for sweat-drenched underground livehouses and chaotic circle pits. Driven by relentless 186 BPM skank beats, rapid-fire octave guitar leads, and an infectious call-and-response chorus, it's an immediate rush of pure defiance.",
      ja: "『Break the Limit』サーガの原点となる超直球メロディックパンク。地下ライブハウスの熱気とサークルピットをそのままパッケージしたような186 BPMの疾走感。タイトな高速スカンクビート、突き抜けるオクターブ奏法、そしてフロア全体を巻き込むシンガロング必至のサビが火花を散らします。"
    },
    lyricTag: {
      en: "CHORUS HIGHLIGHT // サビ",
      ja: "サビ抜粋 // サビ"
    },
    lyricQuote: {
      en: "\"Smash through the barrier in front of you — don't dare look back until the dawn!\"",
      ja: "「目の前の壁をぶち壊せ！朝が来るまで後ろなんて振り返るな！」"
    },
    phaseUrl: "https://app.phase.app.br/?track=db4daa95-648c-4518-b21c-8d8affa7437b",
    hasFullLyricsModal: true
  },
  {
    index: 3,
    title: "HIBANA",
    subtitle: {
      en: "✧XE・PON♡✧ • Track 04 of 05",
      ja: "✧XE・PON♡✧ • トラック 04 / 05"
    },
    tag: "TRACK 04 // DOUBLE BASS",
    image: "assets/arcade-follow.jpg",
    imageAlt: "✧XE・PON♡✧ Tokyo Electric Town",
    location: {
      en: "Akihabara GiGO Rooftop & Electric Town, Tokyo",
      ja: "東京・秋葉原GiGO屋上＆電気街"
    },
    genres: [
      { text: "POST-HARDCORE", class: "tag-pink" },
      { text: "JAPANESE PUNK", class: "tag-blue" },
      { text: "DOUBLE BASS SURGE", class: "tag-white" },
      { text: "FIERCE & UNTAMED", class: "tag-gray" }
    ],
    editorialHeader: {
      en: "// TRACK OVERVIEW & SOUND PROFILE",
      ja: "// 楽曲解説 & サウンドプロファイル"
    },
    editorialBody: {
      en: "Explosive and razor-sharp, 'Hibana' (Sparks) hits like an electric shock. Thunderous double-kick drum patterns drive an aggressive wall of high-gain guitars, while gritty melodic screams capture the defiance of fighting through pain. It's a defiant statement that every scar and scrape in life can be transformed into illuminating sparks.",
      ja: "稲妻のように鋭く炸裂する『火花』。連打されるツーバスの重低音とエッジの効いたハイゲインギターが織りなすソリッドな音圧。痛みや葛藤をシャウトに変え、逆境を切り拓いていく強靭な意志を描いたナンバー。擦り傷も悔しさも、すべてを未来を照らす光（火花）へと変えていく圧巻の疾走曲です。"
    },
    lyricTag: {
      en: "HOOK HIGHLIGHT // 歌詞抜粋",
      ja: "サビ抜粋 // サビ"
    },
    lyricQuote: {
      en: "\"Transform all doubt and pain into sparks — pull the trigger beyond the limit!\"",
      ja: "「迷いも痛みもすべて火花に変えて、限界の先へと引き金を引け！」"
    },
    phaseUrl: "https://app.phase.app.br/?track=bc0b1e00-c033-4072-922f-a11d77c036d3",
    hasFullLyricsModal: true
  },
  {
    index: 4,
    title: "BREAK THE LIMIT#2",
    subtitle: {
      en: "✧XE・PON♡✧ • Featured Single & Climax (Track 05)",
      ja: "✧XE・PON♡✧ • 最新シングル＆クライマックス (トラック 05)"
    },
    tag: "★ CLIMAX SINGLE",
    image: "assets/street-eating.png",
    imageAlt: "✧XE・PON♡✧ 4 members eating street food together",
    location: {
      en: "Shibuya Back-Alley Street Food Stall, Tokyo",
      ja: "東京・渋谷路地裏屋台（メンバー4名全員）"
    },
    genres: [
      { text: "POST-HARDCORE", class: "tag-pink" },
      { text: "JAPANESE ALTERNATIVE ROCK", class: "tag-blue" },
      { text: "MELODIC PUNK", class: "tag-white" },
      { text: "DARK • INTENSE • BOLD", class: "tag-gray" }
    ],
    editorialHeader: {
      en: "// TRACK OVERVIEW & SOUND PROFILE",
      ja: "// 楽曲解説 & サウンドプロファイル"
    },
    editorialBody: {
      en: "The flagship anthem and crowning achievement of the release. Blistering high-speed skank drumming meets stadium-sized distorted power chords and rapid melodic leads. The solo female vocal performance commands the spotlight with an unapologetic, emotionally strained chest belt and fierce grit that feels like the ultimate anime shonen climax. An unstoppable rush of friction, speed, and raw hope.",
      ja: "超音速で突き抜ける本リリースの旗艦アンセム。怒涛の高速ドラミングとスタジアム級のディストーションギターが圧倒的な音の壁を構築。感情を剥き出しにした熱唱ボーカルと魂の叫びが、まるで劇場版アニメのクライマックスのような激動のドラマを生み出します。妥協なき摩擦とスピードが詰まった最高傑作。"
    },
    lyricTag: {
      en: "CHORUS HIGHLIGHT // サビ",
      ja: "サビ抜粋 // サビ"
    },
    lyricQuote: {
      en: "\"Scream! Tear through the night and seize the light!<br>Burn this life amidst the rubble!<br>I don't need anyone's salvation — I'll carve out the future with my own hands!\"",
      ja: "「叫べ！夜を切り裂いて光を掴め！<br>瓦礫の中でこの命を燃やせ！<br>誰の救いもいらないから、この手で未来を抉り取るんだ！」"
    },
    phaseUrl: "https://app.phase.app.br/?track=a49e18b4-39cf-44f6-8f29-9f5dbebeed17",
    hasFullLyricsModal: true
  }
];

let currentShowcaseIdx = 4; // Defaults to BREAK THE LIMIT#2

function initTrackShowcase() {
  document.querySelectorAll('.showcase-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-track-idx') || '4', 10);
      renderShowcaseTrack(idx);
    });
  });

  const showcasePlayBtn = document.getElementById('showcase-play-btn');
  if (showcasePlayBtn) {
    showcasePlayBtn.addEventListener('click', () => {
      const idx = parseInt(showcasePlayBtn.getAttribute('data-track-index') || `${currentShowcaseIdx}`, 10);
      if (currentTrackIdx === idx && isPlaying) {
        pauseAudio();
      } else {
        loadTrack(idx, true);
      }
    });
  }

  renderShowcaseTrack(currentShowcaseIdx);
}

function renderShowcaseTrack(idx) {
  if (idx < 0 || idx >= XE_PON_SHOWCASE.length) idx = 4;
  currentShowcaseIdx = idx;
  const data = XE_PON_SHOWCASE[idx];
  const lang = currentLang;

  // Update tabs active state
  document.querySelectorAll('.showcase-tab-btn').forEach(b => {
    const bIdx = parseInt(b.getAttribute('data-track-idx') || '-1', 10);
    if (bIdx === idx) b.classList.add('active');
    else b.classList.remove('active');
  });

  // Cover image & BPM tag
  const imgEl = document.getElementById('showcase-cover-img');
  const bpmTag = document.getElementById('showcase-bpm-tag');
  if (imgEl) {
    imgEl.src = data.image;
    imgEl.alt = data.imageAlt;
  }
  if (bpmTag) bpmTag.textContent = data.tag;

  // Location only
  const locValEl = document.getElementById('showcase-location-val');
  if (locValEl) locValEl.textContent = data.location[lang] || data.location.en;

  // Genres
  const genresEl = document.getElementById('showcase-genres-row');
  if (genresEl) {
    genresEl.innerHTML = data.genres.map(g => `<span class="genre-tag ${g.class}">${g.text}</span>`).join('');
  }

  // Titles
  const titleEl = document.getElementById('showcase-track-title');
  const subEl = document.getElementById('showcase-track-sub');
  if (titleEl) titleEl.textContent = data.title;
  if (subEl) subEl.textContent = data.subtitle[lang] || data.subtitle.en;

  // Editorial Overview Box
  const editHeaderEl = document.getElementById('showcase-direction-tag');
  const editBodyEl = document.getElementById('showcase-direction-body');
  if (editHeaderEl) editHeaderEl.textContent = data.editorialHeader[lang] || data.editorialHeader.en;
  if (editBodyEl) editBodyEl.textContent = data.editorialBody[lang] || data.editorialBody.en;

  // Lyric Box
  const lyricTagEl = document.getElementById('showcase-lyric-tag');
  const lyricQuoteEl = document.getElementById('showcase-lyric-quote');
  const lyricExpandBtn = document.getElementById('lyric-expand-btn');
  if (lyricTagEl) lyricTagEl.textContent = data.lyricTag[lang] || data.lyricTag.en;
  if (lyricQuoteEl) lyricQuoteEl.innerHTML = data.lyricQuote[lang] || data.lyricQuote.en;
  if (lyricExpandBtn) {
    lyricExpandBtn.style.display = data.hasFullLyricsModal ? 'inline-block' : 'none';
  }

  // Action Buttons
  const playBtn = document.getElementById('showcase-play-btn');
  const playBtnSub = document.getElementById('showcase-btn-sub');
  const phaseLink = document.getElementById('showcase-phase-link');
  if (playBtn) {
    playBtn.setAttribute('data-track-index', `${idx}`);
  }
  if (playBtnSub) {
    playBtnSub.textContent = "HI-RES MASTER AUDIO";
  }
  if (phaseLink) {
    phaseLink.href = data.phaseUrl;
  }

  updatePlayState(isPlaying);
}

/**
 * ==========================================================================
 * 3. COMPLETE IN-BROWSER AUDIO PLAYER ENGINE
 * ==========================================================================
 */
let currentTrackIdx = 4; // Defaults to BREAK THE LIMIT#2
let isPlaying = false;
let audioEl = null;

function initAudioEngine() {
  audioEl = document.getElementById('native-audio');
  if (!audioEl) return;

  // Initial load
  loadTrack(currentTrackIdx, false);

  // Play / Pause in bottom dock
  const dockPlayBtn = document.getElementById('dock-play-btn');
  if (dockPlayBtn) {
    dockPlayBtn.addEventListener('click', togglePlayPause);
  }

  // Prev / Next buttons
  const prevBtn = document.getElementById('dock-prev-btn');
  const nextBtn = document.getElementById('dock-next-btn');
  if (prevBtn) prevBtn.addEventListener('click', prevTrack);
  if (nextBtn) nextBtn.addEventListener('click', nextTrack);

  // Hero Play Button
  const heroPlayBtn = document.getElementById('hero-play-featured-btn');
  if (heroPlayBtn) {
    heroPlayBtn.addEventListener('click', () => {
      loadTrack(4, true);
    });
  }

  // Single Feature Card Play Button
  document.querySelectorAll('.play-single-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-track-index') || '4', 10);
      if (currentTrackIdx === idx && isPlaying) {
        pauseAudio();
      } else {
        loadTrack(idx, true);
      }
    });
  });

  // Playlist "Play All" button
  const playAllBtn = document.getElementById('play-all-playlist-btn');
  if (playAllBtn) {
    playAllBtn.addEventListener('click', () => {
      loadTrack(0, true);
    });
  }

  // Playlist Table inline play buttons
  document.querySelectorAll('.track-play-inline-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-index') || '0', 10);
      if (currentTrackIdx === idx && isPlaying) {
        pauseAudio();
      } else {
        loadTrack(idx, true);
      }
    });
  });

  // Time & Progress Updates
  audioEl.addEventListener('timeupdate', updateProgress);
  audioEl.addEventListener('loadedmetadata', () => {
    const totalTimeEl = document.getElementById('dock-total-time');
    if (totalTimeEl && !isNaN(audioEl.duration)) {
      totalTimeEl.textContent = formatTime(audioEl.duration);
    }
  });

  // Auto-advance to next song on end
  audioEl.addEventListener('ended', () => {
    nextTrack();
  });

  // Scrubber seeking
  const progressContainer = document.getElementById('dock-progress-container');
  if (progressContainer) {
    progressContainer.addEventListener('click', (e) => {
      if (!audioEl.duration) return;
      const rect = progressContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      audioEl.currentTime = pct * audioEl.duration;
    });
  }

  // Volume slider
  const volSlider = document.getElementById('dock-vol-slider');
  const volBtn = document.getElementById('dock-vol-btn');
  if (volSlider) {
    volSlider.addEventListener('input', (e) => {
      audioEl.volume = parseFloat(e.target.value);
      if (volBtn) volBtn.textContent = audioEl.volume === 0 ? '🔇' : (audioEl.volume < 0.5 ? '🔉' : '🔊');
    });
  }
  if (volBtn) {
    volBtn.addEventListener('click', () => {
      if (audioEl.volume > 0) {
        audioEl.dataset.prevVol = audioEl.volume;
        audioEl.volume = 0;
        if (volSlider) volSlider.value = 0;
        volBtn.textContent = '🔇';
      } else {
        const prev = parseFloat(audioEl.dataset.prevVol || '0.8');
        audioEl.volume = prev;
        if (volSlider) volSlider.value = prev;
        volBtn.textContent = prev < 0.5 ? '🔉' : '🔊';
      }
    });
  }
}

function loadTrack(index, autoPlay = true) {
  if (index < 0) index = XE_PON_TRACKS.length - 1;
  if (index >= XE_PON_TRACKS.length) index = 0;

  currentTrackIdx = index;
  const track = XE_PON_TRACKS[index];

  audioEl.src = track.audioSrc;
  audioEl.load();

  // Update UI Info
  updateDockInfo(track);
  updateActiveRow(index);
  if (typeof renderShowcaseTrack === 'function') {
    renderShowcaseTrack(index);
  }

  if (autoPlay) {
    playAudio();
  } else {
    updatePlayState(false);
  }
}

function playAudio() {
  audioEl.play().then(() => {
    updatePlayState(true);
  }).catch(err => {
    console.warn("Autoplay blocked or audio load error:", err);
    updatePlayState(false);
  });
}

function pauseAudio() {
  audioEl.pause();
  updatePlayState(false);
}

function togglePlayPause() {
  if (audioEl.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
}

function nextTrack() {
  loadTrack(currentTrackIdx + 1, true);
}

function prevTrack() {
  if (audioEl.currentTime > 3) {
    audioEl.currentTime = 0;
  } else {
    loadTrack(currentTrackIdx - 1, true);
  }
}

function updatePlayState(playing) {
  isPlaying = playing;
  const dict = I18N[currentLang] || I18N.en;

  const dockPlayBtn = document.getElementById('dock-play-btn');
  const dockVis = document.getElementById('dock-visualizer');
  const statusBadge = document.getElementById('playback-status-badge');

  if (dockPlayBtn) dockPlayBtn.textContent = playing ? '⏸' : '▶';

  if (dockVis) {
    if (playing) dockVis.classList.add('playing');
    else dockVis.classList.remove('playing');
  }

  if (statusBadge) {
    statusBadge.textContent = playing ? dict.status_playing : dict.status_paused;
  }

  // Update inline play button icons and text
  document.querySelectorAll('.track-play-inline-btn').forEach(btn => {
    const idx = parseInt(btn.getAttribute('data-index') || '-1', 10);
    const inlineText = btn.querySelector('.inline-cue-text');
    if (inlineText) {
      inlineText.textContent = (idx === currentTrackIdx && playing) ? '⏸ PAUSE' : dict.btn_play_inline;
    } else {
      btn.textContent = (idx === currentTrackIdx && playing) ? '⏸' : '▶';
    }
  });

  // Update Showcase Card play button
  document.querySelectorAll('.play-single-btn').forEach(btn => {
    const icon = btn.querySelector('.play-icon');
    const text = btn.querySelector('.play-btn-text');
    const btnTrackIdx = parseInt(btn.getAttribute('data-track-index') || '-1', 10);
    if (btnTrackIdx === currentTrackIdx && playing) {
      if (icon) icon.textContent = '⏸';
      if (text) text.textContent = dict.btn_pause_onsite;
    } else {
      if (icon) icon.textContent = '▶';
      if (text) text.textContent = dict.btn_play_onsite;
    }
  });
}

function updateDockInfo(track) {
  const dict = I18N[currentLang] || I18N.en;
  const titleEl = document.getElementById('dock-track-title');
  const metaEl = document.getElementById('dock-track-meta');
  const totalTimeEl = document.getElementById('dock-total-time');
  const phaseBtn = document.getElementById('dock-phase-btn');

  if (titleEl) titleEl.textContent = `${track.artist} // ${track.title}`;
  if (metaEl) {
    const isJa = currentLang === 'ja';
    const trackNum = `0${track.index + 1}`;
    const playStateStr = isPlaying ? (isJa ? 'サイト内再生中 ⚡' : 'PLAYING ON SITE ⚡') : (isJa ? 'ローカル音源待機中' : 'LOCAL AUDIO READY');
    const singleTag = track.index === 4 ? (isJa ? '最新シングル • ' : 'CLIMAX SINGLE • ') : '';
    metaEl.textContent = `${singleTag}${isJa ? `トラック ${trackNum} / 05 • ${playStateStr}` : `TRACK ${trackNum} OF 05 • ${playStateStr}`}`;
  }
  if (totalTimeEl) totalTimeEl.textContent = track.duration;
  if (phaseBtn) phaseBtn.href = track.phaseUrl;
}

function updateActiveRow(index) {
  document.querySelectorAll('.track-item-row').forEach(row => {
    const rowIdx = parseInt(row.getAttribute('data-index') || '-1', 10);
    if (rowIdx === index) {
      row.classList.add('is-playing');
    } else {
      row.classList.remove('is-playing');
    }
  });
}

function updateProgress() {
  if (!audioEl.duration) return;
  const pct = (audioEl.currentTime / audioEl.duration) * 100;
  const fill = document.getElementById('dock-progress-fill');
  const curTimeEl = document.getElementById('dock-current-time');

  if (fill) fill.style.width = `${pct}%`;
  if (curTimeEl) curTimeEl.textContent = formatTime(audioEl.currentTime);
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

/**
 * ==========================================================================
 * 4. CANVAS BACKGROUND ANIMATION (60-120 FPS)
 * Baby Blue & Cyber Pink neon particles & scanning streaks
 * ==========================================================================
 */
function initCyberCanvas() {
  const canvas = document.getElementById('cyber-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const PARTICLE_COUNT = 45;
  const particles = [];

  const colors = [
    'rgba(112, 224, 255, ', // Baby Blue
    'rgba(255, 97, 166, ',  // Cyber Pink
    'rgba(255, 255, 255, '  // White
  ];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.7 + 0.25,
      speedX: (Math.random() - 0.5) * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y -= p.speedY;
      p.x += p.speedX;

      if (p.y < 0) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${p.opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `${p.color}0.8)`;
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/**
 * ==========================================================================
 * 5. COMPLETE LYRICS & PRODUCTION DIRECTION FOR ALL 5 TRACKS
 * Interactive Modal with Multi-Track Switching, Japanese Lyrics & English Translation
 * ==========================================================================
 */
const XE_PON_LYRICS = [
  {
    index: 0,
    title: "ASTRAL SHIBUYA OVERDRIVE",
    specs: {
      en: "Japanese Alt Rock / Electronic Punk • Track 01",
      ja: "オルタナティブロック / 電子パンク • トラック 01"
    },
    sections: [
      {
        title: "[Intro]",
        direction: "[Synthesizer Neon Arpeggio Swell into Screaming Overdrive Guitars / 184 BPM High-Velocity Punk Beat]",
        japanese: "<span class=\"highlight-pink font-bold\">カウントダウンはいらない、加速しろ！</span>",
        english: "\"No need for countdowns — accelerate now!\"",
        highlightClass: ""
      },
      {
        title: "[Verse 1 - Female Vocalist 1] (aggressive melodic rock delivery)",
        direction: "[Fast Driving Rhythm Guitars / Four-on-the-Floor Kick and Pumping Bassline]",
        japanese: "午前二時のスクランブル交差点<br>ネオンの雨に溺れる影を蹴散らして<br>誰かのルールで動く街なんて<br>このギターのノイズで塗り替えてやる！<br>ヘッドライトの閃光を切り裂いて<br>歪んだ境界線を踏み越えろ！",
        english: "Shibuya Scramble at 2 AM<br>Kicking through shadows drowning in neon rain!<br>A city that dances to someone else's rules?<br>We'll repaint it whole with guitar noise!<br>Tear right through the glare of headlights<br>Step over the distorted borderlines!",
        highlightClass: ""
      },
      {
        title: "[Build-Up]",
        direction: "[Machine-Gun Snare Roll / Rising Octave Lead Guitar / Female Vocalist (breathless rising tension)]",
        japanese: "<span class=\"highlight-blue\">息を止めろ、瞬きするな<br>閃光の中で世界が跳ねる！</span>",
        english: "Hold your breath, don't blink<br>In this flash of light the whole world leaps!",
        highlightClass: ""
      },
      {
        title: "[Chorus - Female Vocalist 1] (explosive melodic belt)",
        direction: "[Full Band Explosion - Melodic Wall of High-Gain Guitars / Soaring Anthemic Belt Vocals]",
        japanese: "ネオンの嵐を蹴散らして走れ！<br>東京の真夜中を貫く叫びを響かせろ！<br>冷めた視線なんて置き去りにして<br>熱狂の渦へと飛び込め！<br>アストラル・オーバードライブ、止まらない！",
        english: "Sprint through the electric storm!<br>Let our voices pierce through Tokyo's midnight sky!<br>Leave all cold, cynical stares behind<br>Dive headfirst into the vortex of ecstasy!<br>Astral Overdrive, never stopping!",
        highlightClass: "chorus-highlight"
      },
      {
        title: "[Instrumental / Guitar Solo]",
        direction: "[Blistering Melodic Shred Guitar Solo / Modulated Synth FX / Relentless Cymbal Wash]",
        japanese: "",
        english: "",
        highlightClass: ""
      },
      {
        title: "[Verse 2 - Female Vocalist 1]",
        direction: "[Tight Skank Rhythm / Staccato Chugs / Aggressive Forward Vocal Diction]",
        japanese: "センター街の雑音を飲み込んで<br>心拍数はレッドゾーンへと振り切れる<br>安全な檻の中に留まるくらいなら<br>火花散らして転げ回る方がマシだ！<br>擦りむいた膝の痛みが<br>生きている証明を刻みつける！",
        english: "Swallowing the background noise of Center-Gai<br>Heart rate pinning the needle into the red zone!<br>Rather than staying in a safe cage<br>I'd rather tumble down scattering sparks!<br>The sting of scraped knees<br>Carves the living proof that we're alive!",
        highlightClass: ""
      },
      {
        title: "[Build-Up]",
        direction: "[Crash Cymbal Accent Chokes / Double Kick Acceleration / Rising Screamed Belt]",
        japanese: "<span class=\"highlight-blue\">夜明け前の静けさを裂いて<br>最高速度で突き進め！</span>",
        english: "Tear through the silence before dawn<br>Charge forward at maximum velocity!",
        highlightClass: ""
      },
      {
        title: "[Chorus - Female Vocalist 1]",
        direction: "[Massive Chorus Drop / Wall of Sound / Dual Harmonies]",
        japanese: "ネオンの嵐を蹴散らして走れ！<br>東京の真夜中を貫く叫びを響かせろ！<br>冷めた視線なんて置き去りにして<br>熱狂の渦へと飛び込め！<br>アストラル・オーバードライブ、止まらない！",
        english: "Sprint through the electric storm!<br>Let our voices pierce through Tokyo's midnight sky!<br>Leave all cold, cynical stares behind<br>Dive headfirst into the vortex of ecstasy!<br>Astral Overdrive, never stopping!",
        highlightClass: "chorus-highlight"
      },
      {
        title: "[Bridge - Female Vocalist 1]",
        direction: "[Bass Solo with Heavy Tube Distortion / Half-time Drum Stomp / Strained Emotional Vocals]",
        japanese: "<span class=\"highlight-pink\">この夜が明けても<br>刻んだ熱は消させない<br>私たちの音が<br><span class=\"font-bold\">[Screamed Note]</span> 闇を穿つ！</span>",
        english: "Even when this night turns into dawn<br>We'll never let this etched heat die<br>Our sound<br><span class=\"font-bold\">[Screamed Note]</span> will pierce the dark!",
        highlightClass: ""
      },
      {
        title: "[Outro - Female Vocalist 1]",
        direction: "[Relentless High-Tempo Charge / Soaring Lead Guitar Riffs / Explosive Final Crash]",
        japanese: "突き抜けろ！<br>光の向こうへ！<br>アストラル・シブヤ・オーバードライブ！",
        english: "Break all the way through!<br>Beyond the light!<br>Astral Shibuya Overdrive!",
        highlightClass: "outro-highlight"
      }
    ]
  },
  {
    index: 1,
    title: "ZANGAI",
    specs: {
      en: "Math Rock / Post-Hardcore • Track 02",
      ja: "マスロック / ポストハードコア • トラック 02"
    },
    sections: [
      {
        title: "[Intro]",
        direction: "[Angular Math-Rock Two-Handed Guitar Tapping / Crisp Snare Ghost Notes into Heavy Full-Band Drop / Screamed Count]",
        japanese: "<span class=\"highlight-pink font-bold\">「瓦礫の底から、顔を上げろ！」</span>",
        english: "\"From the bottom of the rubble, lift your head!\"",
        highlightClass: ""
      },
      {
        title: "[Verse 1 - Female Vocalist 1] (raw math-punk delivery, odd-meter accents)",
        direction: "[Polyrhythmic Math Guitars / Heavy Pumping Bass / Strained Emotional Delivery]",
        japanese: "崩れ落ちた約束の残骸を踏みしめて<br>思い出横丁の煙の向こうへ視線を投げる<br>正しさなんて誰も教えてくれなかった<br>だから痛みの数だけ爪を研いできたんだ<br>雨ざらしのコンクリートに這いつくばっても<br>魂の炎まで消されたわけじゃない！",
        english: "Treading heavily over the remnants of collapsed promises<br>Casting my eyes beyond the smoke of Omoide Yokocho<br>Nobody ever taught us what was truly right<br>So we sharpened our claws for every single scar we took!<br>Even crawling flat on rain-soaked concrete<br>They haven't snuffed out the fire in this soul!",
        highlightClass: ""
      },
      {
        title: "[Build-Up]",
        direction: "[Syncopated Kick Pedals / Shrill Feedback Swells / Urgent Screamed Rise]",
        japanese: "<span class=\"highlight-blue\">絶望の壁を蹴り上げて<br>何度でも立ち上がれ！</span>",
        english: "Kick off the wall of despair<br>Rise back up again and again!",
        highlightClass: ""
      },
      {
        title: "[Chorus - Female Vocalist 1] (passionate chest belt, strained high notes)",
        direction: "[Explosive Post-Hardcore Climax / Heavy Melodic Octaves / Powerful Chest-Belt Vocals]",
        japanese: "瓦礫の隙間に残った火種でも<br>消えない炎を何度だって燃え上がらせろ！<br>失った過去にすがるな<br>傷だらけの拳を天に突き上げろ！<br>残骸の街で、私たちはまだ生きている！",
        english: "Even from the sparks left in the cracks of rubble<br>We will ignite a fire that never goes out!<br>Don't cling to what was lost in the past<br>Thrust your scar-covered fists into the heavens!<br>In this city of remnants, we are still alive!",
        highlightClass: "chorus-highlight"
      },
      {
        title: "[Math Breakdown / Transition]",
        direction: "[Unusual Meter Guitar Riff (7/8 to 4/4) / Crushing Bass Chug / Snare Flurry]",
        japanese: "",
        english: "",
        highlightClass: ""
      },
      {
        title: "[Verse 2 - Female Vocalist 1]",
        direction: "[Driving Melodic Punk Rhythm / Sharp High-Gain Stabs / Raw Vocal Grit]",
        japanese: "高架下の暗がりに響くサイレン<br>逃げ場所なんてどこにもないけど<br>迷っている暇なんて最初からないんだ<br>泥にまみれたプライドを誇らしく掲げろ！<br>どんな罵声も雑音に変えて<br>この喉が裂けるまで叫び続けろ！",
        english: "Sirens echoing through the dim underpass<br>Even if there's nowhere left to hide<br>We never had time to second-guess ourselves!<br>Proudly hoist up your mud-stained pride!<br>Turn every insult into background noise<br>Keep screaming until your throat tears open!",
        highlightClass: ""
      },
      {
        title: "[Build-Up]",
        direction: "[Rapid Drum Accelerando / Rising Feedback Lead / Desperate Vocal Climax]",
        japanese: "<span class=\"highlight-blue\">灰を払って、前を向け<br>光はそこにある！</span>",
        english: "Brush off the ashes, look forward<br>The light is right there!",
        highlightClass: ""
      },
      {
        title: "[Chorus - Female Vocalist 1]",
        direction: "[Wall of Sound Post-Hardcore Drop / Maximum Drum Velocity]",
        japanese: "瓦礫の隙間に残った火種でも<br>消えない炎を何度だって燃え上がらせろ！<br>失った過去にすがるな<br>傷だらけの拳を天に突き上げろ！<br>残骸の街で、私たちはまだ生きている！",
        english: "Even from the sparks left in the cracks of rubble<br>We will ignite a fire that never goes out!<br>Don't cling to what was lost in the past<br>Thrust your scar-covered fists into the heavens!<br>In this city of remnants, we are still alive!",
        highlightClass: "chorus-highlight"
      },
      {
        title: "[Bridge - Female Vocalist 1]",
        direction: "[Halftime Sludge Groove / Distorted Bass Drone / Intimate Whispered Vocal turning into Screamed Release]",
        japanese: "<span class=\"highlight-pink\">壊れたからこそ、強くなれる<br>終わりじゃない、ここが始まりだ<br><span class=\"font-bold\">[Extended Melodic Scream]</span> まだ負けてない！</span>",
        english: "Because we broke, we can grow stronger<br>This isn't the end, this is where it begins<br><span class=\"font-bold\">[Extended Melodic Scream]</span> We haven't lost yet!",
        highlightClass: ""
      },
      {
        title: "[Outro - Female Vocalist 1]",
        direction: "[Raging Skank Beat / Dual Guitar Melodic Harmonies / Abrupt Echoing Finish]",
        japanese: "灰から立ち上がれ！<br>残骸の中で叫べ！<br>生きろ！",
        english: "Rise from the ash!<br>Scream amidst the ruins!<br>Live!",
        highlightClass: "outro-highlight"
      }
    ]
  },
  {
    index: 2,
    title: "BREAK THE LIMIT#1",
    specs: {
      en: "Melodic Punk / Japanese Rock • Track 03",
      ja: "メロディックパンク / 日本語ロック • トラック 03"
    },
    sections: [
      {
        title: "[Intro]",
        direction: "[Hi-Hat 4-Beat Count / High-Speed Skank Snare Explosion / Piercing Melodic Lead / Vocal Cue]",
        japanese: "<span class=\"highlight-pink font-bold\">「ワン、ツー、スリー、フォー！壁をぶち破れ！」</span>",
        english: "\"One, two, three, four! Smash through the wall!\"",
        highlightClass: ""
      },
      {
        title: "[Verse 1 - Female Vocalist 1] (fast melodic punk velocity)",
        direction: "[186 BPM Driving Skank Beat / Tight Downstroke Punk Rhythm / Energetic Rock Delivery]",
        japanese: "地下のライブハウスに充満する熱気<br>錆びた階段を駆け下りてフロアへダイブ！<br>退屈な毎日に中指を立てて<br>スピーカーの前に陣取れ！<br>息が詰まるほどの音圧で<br>くだらない不安を全部吹き飛ばせ！",
        english: "Hot air filling the basement livehouse<br>Running down rusted stairs and diving into the floor!<br>Throw your middle finger at mundane daily life<br>Take up your post right in front of the amplifiers!<br>With sound pressure so intense it takes your breath away<br>Blow away every single foolish doubt!",
        highlightClass: ""
      },
      {
        title: "[Build-Up]",
        direction: "[Floor Tom Rumble and Cymbal Swells / Rising Guitar Harmony / Gang Chorus Vocals]",
        japanese: "<span class=\"highlight-blue\">限界なんて誰が決めた？<br>今すぐここを飛び出せ！</span>",
        english: "Who decided what our limit was?<br>Break out of this place right now!",
        highlightClass: ""
      },
      {
        title: "[Chorus - Female Vocalist 1] (crowd sing-along anthemic surge)",
        direction: "[Explosive Circle-Pit Melodic Punk Drop / Fast Octave Guitar Melodies / Catchy Fist-Pumping Vocal]",
        japanese: "目の前の壁をぶち壊せ！<br>朝が来るまで後ろなんて振り返るな！<br>転んだって笑い飛ばして走れ！<br>この一瞬にすべてを賭けるんだ！<br>ブレイク・ザ・リミット！突き進め！",
        english: "Smash through the barrier in front of you!<br>Don't dare look back until the dawn!<br>Even if you tumble, laugh it off and keep sprinting!<br>Wager every single thing on this exact moment!<br>Break the Limit! Charge ahead!",
        highlightClass: "chorus-highlight"
      },
      {
        title: "[Interlude / Circle Pit Cue]",
        direction: "[Furious 186 BPM Drum Roll / Screamed Floor Instruction / Bass Run]",
        japanese: "<span class=\"highlight-pink font-bold\">「回れ！サークルピットを作れ！」</span>",
        english: "\"Circle pit! Open up the floor!\"",
        highlightClass: ""
      },
      {
        title: "[Verse 2 - Female Vocalist 1]",
        direction: "[Fast Punk Beat / Alternating Guitar Leads / Aggressive Punchy Delivery]",
        japanese: "汗まみれのTシャツ、すれ違う肩<br>知らない誰かと拳を交わして笑う<br>言葉なんていらない、このビートがあれば<br>僕らはどこへだって行けるんだ！<br>擦りむいた腕を高く掲げて<br>声の限りに叫び返せ！",
        english: "Sweat-soaked T-shirts, shoulders colliding<br>Exchanging fists and grins with strangers!<br>We don't need words when we have this beat<br>We can go anywhere together!<br>Raise your scraped arms high into the air<br>Scream back with every ounce of your voice!",
        highlightClass: ""
      },
      {
        title: "[Build-Up]",
        direction: "[Double-Time Snare Surge / Rising Screamed Lead Vocals]",
        japanese: "<span class=\"highlight-blue\">まだ止まれない、まだ足りない！<br>熱狂の頂点へ！</span>",
        english: "Can't stop yet, it's not enough!<br>To the pinnacle of ecstasy!",
        highlightClass: ""
      },
      {
        title: "[Chorus - Female Vocalist 1]",
        direction: "[Full Energy Punk Explosion / Crowd Sing-Along Anthemic Delivery]",
        japanese: "目の前の壁をぶち壊せ！<br>朝が来るまで後ろなんて振り返るな！<br>転んだって笑い飛ばして走れ！<br>この一瞬にすべてを賭けるんだ！<br>ブレイク・ザ・リミット！突き進め！",
        english: "Smash through the barrier in front of you!<br>Don't dare look back until the dawn!<br>Even if you tumble, laugh it off and keep sprinting!<br>Wager every single thing on this exact moment!<br>Break the Limit! Charge ahead!",
        highlightClass: "chorus-highlight"
      },
      {
        title: "[Bridge - Female Vocalist 1]",
        direction: "[Halftime Punk Breakdown / Gang Vocal Chants (\"HEY! HEY! HEY!\")]",
        japanese: "<span class=\"highlight-pink\">（HEY! HEY!）誰の指図も受けない！<br>（HEY! HEY!）この意志は曲げない！<br><span class=\"font-bold\">[Screamed Cue]</span> 行くぞ下北沢！</span>",
        english: "(HEY! HEY!) We take orders from no one!<br>(HEY! HEY!) This will of ours will never bend!<br><span class=\"font-bold\">[Screamed Cue]</span> Let's go, Shimokitazawa!",
        highlightClass: ""
      },
      {
        title: "[Outro - Female Vocalist 1]",
        direction: "[Insane Final 186 BPM Surge / Raging Drum Fills / Guitar Feedback Crash]",
        japanese: "リミットを超えろ！<br>突き抜けろ！<br>ブレイク・ザ・リミット！ナンバーワン！",
        english: "Exceed the limit!<br>Break straight through!<br>Break the Limit #1!",
        highlightClass: "outro-highlight"
      }
    ]
  },
  {
    index: 3,
    title: "HIBANA",
    specs: {
      en: "Japanese Post-Hardcore / Double-Bass Surge • Track 04",
      ja: "ポストハードコア / ツーバス疾走 • トラック 04"
    },
    sections: [
      {
        title: "[Intro]",
        direction: "[Thunderous Double-Kick Drum Barrage / High-Gain Screeching Guitar Riffs / Piercing Scream Cue]",
        japanese: "<span class=\"highlight-pink font-bold\">「火花を散らせ！」</span>",
        english: "\"Let the sparks fly!\"",
        highlightClass: ""
      },
      {
        title: "[Verse 1 - Female Vocalist 1] (aggressive razor-sharp delivery)",
        direction: "[185 BPM Double-Kick Engine / Razor-Sharp Downpicked Chugs / Fierce Raw Vocal]",
        japanese: "秋葉原の夜を染める電子の光<br>無数のモニターが映し出す虚像を睨みつけろ<br>プログラムされた未来なんていらない<br>この火薬だらけの心臓に今すぐ火をつけろ！<br>凍りついた日常を切り裂く刃のように<br>激しいギターのリフを叩き込め！",
        english: "Electronic lights bathing the Akihabara night<br>Glare straight back at the illusions cast across countless screens!<br>We don't need some programmed, predicted future<br>Set fire to this gunpowder-loaded heart right now!<br>Like a razor blade slicing through frozen everyday life<br>Hammer home these fierce guitar riffs!",
        highlightClass: ""
      },
      {
        title: "[Build-Up]",
        direction: "[Drum Velocity Surge / Rising Screamed Vocals into Pitch Break]",
        japanese: "<span class=\"highlight-blue\">火花が散る、導火線が燃える<br>引き金を引け！</span>",
        english: "Sparks scatter, the fuse is lit<br>Pull the trigger!",
        highlightClass: ""
      },
      {
        title: "[Chorus - Female Vocalist 1] (explosive soaring belt & raw scream)",
        direction: "[Crushing Post-Hardcore Drop / Relentless Double-Kick Rhythm / Soaring Screamed Belt]",
        japanese: "迷いも痛みもすべて火花に変えて<br>限界の先へと引き金を引け！<br>闇を切り裂く閃光となれ！<br>この熱が世界を焼き尽くすまで！<br>火花を散らして、命を燃やせ！",
        english: "Transform all doubt and pain into sparks<br>Pull the trigger beyond the limit!<br>Become the flash that carves through the darkness!<br>Until this heat incinerates the world!<br>Let sparks fly and burn this life!",
        highlightClass: "chorus-highlight"
      },
      {
        title: "[Riff Assault / Guitar Duel]",
        direction: "[Speed-Picking Heavy Guitar Duel / Blistering Double-Bass Acceleration / Snare Blast]",
        japanese: "",
        english: "",
        highlightClass: ""
      },
      {
        title: "[Verse 2 - Female Vocalist 1]",
        direction: "[Fast Heavy Metalcore/Punk Beat / Pumping Basslines / Aggressive Vocal Spits]",
        japanese: "冷たいアスファルトに火花を擦り付けて<br>消えかけの情熱をもう一度呼び覚ませ！<br>誰かの物差しで測られる人生なんて<br>この瞬間に全部焼き捨ててやれ！<br>擦り切れた指先から溢れ出す旋律が<br>夜空を焦がす炎になる！",
        english: "Striking sparks against the freezing asphalt<br>Awaken that fading passion once again!<br>A life measured by someone else's ruler?<br>Burn it all away this very instant!<br>The melody bleeding from worn fingertips<br>Becomes flames that scorch the night sky!",
        highlightClass: ""
      },
      {
        title: "[Build-Up]",
        direction: "[Double-Kick Blast Surge / Screaming Octave Leads]",
        japanese: "<span class=\"highlight-blue\">爆発しろ、燃え上がれ！<br>一瞬の光で闇を裂け！</span>",
        english: "Detonate, blaze up!<br>Rend the darkness with a single flash of light!",
        highlightClass: ""
      },
      {
        title: "[Chorus - Female Vocalist 1]",
        direction: "[Full Band Post-Hardcore Climax / Massive Double Kick and Crashing Wash Cymbals]",
        japanese: "迷いも痛みもすべて火花に変えて<br>限界の先へと引き金を引け！<br>闇を切り裂く閃光となれ！<br>この熱が世界を焼き尽くすまで！<br>火花を散らして、命を燃やせ！",
        english: "Transform all doubt and pain into sparks<br>Pull the trigger beyond the limit!<br>Become the flash that carves through the darkness!<br>Until this heat incinerates the world!<br>Let sparks fly and burn this life!",
        highlightClass: "chorus-highlight"
      },
      {
        title: "[Bridge - Female Vocalist 1]",
        direction: "[Sudden Halftime Heavy Drop / Deep Bass Rumble / Raw Screamed Vocal Breakdown]",
        japanese: "<span class=\"highlight-pink\">消えない！<br>折れない！<br>何度でも燃え上がる！<br><span class=\"font-bold\">[Extended Guttural Scream]</span> 火花よ、光となれ！</span>",
        english: "Won't die out!<br>Won't break!<br>Blazing up again and again!<br><span class=\"font-bold\">[Extended Guttural Scream]</span> Sparks, become the light!",
        highlightClass: ""
      },
      {
        title: "[Outro - Female Vocalist 1]",
        direction: "[Final Relentless 185 BPM Double-Bass Dash / Soaring Vocal Belt / Guitar Feedback Cut]",
        japanese: "光を掴め！<br>火花を散らせ！<br>ヒバナ！",
        english: "Seize the light!<br>Scatter the sparks!<br>HIBANA!",
        highlightClass: "outro-highlight"
      }
    ]
  },
  {
    index: 4,
    title: "BREAK THE LIMIT#2",
    specs: {
      en: "Japanese Post-Hardcore & Alternative Rock • Featured Single (Track 05)",
      ja: "ポストハードコア / オルタナティブロック • 最新シングル (トラック 05)"
    },
    sections: [
      {
        title: "[Intro]",
        direction: "[Explosive Guitar Feedback / Rapid Snare Roll Build - 1/8 to 1/16 / Hard Drum Drop - Fast 4/4 Punk Beat / Overdriven High-Gain Guitar Lead In / Full Band Explosion / Female Vocalist 1 (screamed vocal cue)]",
        japanese: "<span class=\"highlight-pink font-bold\">行くぞ！</span>",
        english: "\"Let's go!\"",
        highlightClass: ""
      },
      {
        title: "[Verse 1 - Female Vocalist 1] (aggressive raw chest voice, high-velocity punk delivery)",
        direction: "[Fast Skank Beat Drumming - Driving Rhythm Guitar and Pumping Bass]",
        japanese: "濡れたアスファルトを蹴り飛ばして<br>赤いシグナル突き破るハイウェイ！<br>静寂なんて踏み潰せ今すぐ<br>錆びたリミッター焼き切って叫べ！<br>迷いも痛みも火花に変えて<br>限界の先へ引き金を引け！",
        english: "Kicking up the wet asphalt<br>Tearing right through the red lights on the highway!<br>Trample the silence right now<br>Burn through the rusted limiters and scream!<br>Transform all doubt and pain into sparks<br>Pull the trigger beyond the limit!",
        highlightClass: ""
      },
      {
        title: "[Build-Up]",
        direction: "[Double Kick Drum Acceleration / Rising Distorted Octave Guitar Lead / Female Vocalist 1 (urgent rising belt, strained emotional crack)]",
        japanese: "<span class=\"highlight-blue\">壊れた時計の針を蹴散らし<br>夜の壁をぶち破れ！</span>",
        english: "Scatter the hands of broken clocks<br>Smash right through the wall of the night!",
        highlightClass: ""
      },
      {
        title: "[Chorus - Female Vocalist 1] (explosive soaring high-tenor belt, full chest power, raw grit)",
        direction: "[Wall of Sound Guitar Drop - Blistering Double Bass Drums, Crashing Wash Cymbals]",
        japanese: "叫べ！夜を切り裂いて光を掴め！<br>瓦礫の中でこの命を燃やせ！<br>誰の救いもいらないから<br>この手で未来を抉り取るんだ！<br>脈を打て！胸の奥の叫びを響かせろ！",
        english: "Scream! Tear through the night and seize the light!<br>Burn this life amidst the rubble!<br>I don't need anyone's salvation<br>I'll carve out the future with my own hands!<br>Pulse with life! Make the cry deep in your chest echo!",
        highlightClass: "chorus-highlight"
      },
      {
        title: "[Instrumental Transition]",
        direction: "[Fast Melodic Guitar Riff Solo / Relentless Double-Kick Drum Fills]",
        japanese: "",
        english: "",
        highlightClass: ""
      },
      {
        title: "[Verse 2 - Female Vocalist 1] (punchy rhythmic rock belt, forward aggressive diction)",
        direction: "[Driving Punk Drums and Heavy Overdriven Bass Groove]",
        japanese: "偽りの朝に背中を向けて<br>黒い煙を飲み干すスピード！<br>立ち止まる場所なんて最初からない<br>この心臓が燃え尽きるまで走れ！<br>嘘で塗り固めた街を笑い飛ばし<br>泥だらけの爪で噛みついてやれ！",
        english: "Turning our backs on a fraudulent morning<br>At a speed that swallows the black smoke!<br>There was never a place to stop from the beginning<br>Sprint until this heart burns itself out!<br>Laugh off this city plastered with lies<br>Sink your mud-covered claws right into it!",
        highlightClass: ""
      },
      {
        title: "[Build-Up]",
        direction: "[Machine-Gun Snare Roll - 1/16 to 1/32 / High-Gain Feedback Riser / Female Vocalist 1 (powerful vocal crest, raw chest scream)]",
        japanese: "<span class=\"highlight-blue\">朝霧なんて吹き飛ばして<br>すべての熱を爆発させろ！</span>",
        english: "Blow the morning fog away<br>Let all that heat detonate!",
        highlightClass: ""
      },
      {
        title: "[Chorus - Female Vocalist 1]",
        direction: "[Hard Post-Hardcore Drop - Driving Double Kick Drums, Massive Distorted Guitars]",
        japanese: "叫べ！夜を切り裂いて光を掴め！<br>瓦礫の中でこの命を燃やせ！<br>誰の救いもいらないから<br>この手で未来を抉り取るんだ！<br>脈を打て！胸の奥の叫びを響かせろ！",
        english: "Scream! Tear through the night and seize the light!<br>Burn this life amidst the rubble!<br>I don't need anyone's salvation<br>I'll carve out the future with my own hands!<br>Pulse with life! Make the cry deep in your chest echo!",
        highlightClass: "chorus-highlight"
      },
      {
        title: "[Bridge - Female Vocalist 1] (intense passionate mid-register belt, rising in pitch)",
        direction: "[Drum Halftime Switch - Heavy Stomping Kick and Snare Clang / Driving Bass Chug and Ambient High-Gain Guitar Swell]",
        japanese: "<span class=\"highlight-pink\">どれだけ傷ついても<br>膝は折らない！<br>火花は消えない！<br><span class=\"font-bold\">[Screamed Note]</span> まだ終わらない！</span>",
        english: "No matter how broken we get<br>My knees will not buckle!<br>The sparks will never die!<br><span class=\"font-bold\">[Screamed Note]</span> It's not over yet!",
        highlightClass: ""
      },
      {
        title: "[Outro - Female Vocalist 1] (unfiltered top-register scream into soaring melodic belt)",
        direction: "[Maximum Tempo Surge - Frantic Blast Beats, Piercing Lead Guitar Riffs / Crashing Cymbal Swell into Guitar Feedback / Tape Stop FX]",
        japanese: "燃やし尽くせ！<br>灰になるまで！<br>この鼓動を止めさせるな！<br>生きてる証を叫べ！",
        english: "Burn it all out!<br>Until only ash remains!<br>Never let this pulse cease!<br>Scream the living proof of who you are!",
        highlightClass: "outro-highlight"
      }
    ]
  }
];

let currentModalTrackIdx = 4; // Defaults to BREAK THE LIMIT#2

function renderModalLyrics(trackIdx) {
  if (trackIdx < 0 || trackIdx >= XE_PON_LYRICS.length) trackIdx = 4;
  currentModalTrackIdx = trackIdx;
  const track = XE_PON_LYRICS[trackIdx];
  const lang = currentLang;
  const dict = I18N[lang] || I18N.en;

  // 1. Update Title & Meta
  const titleEl = document.getElementById('modal-song-title');
  const metaEl = document.getElementById('modal-song-meta');
  if (titleEl) titleEl.textContent = track.title;
  if (metaEl) metaEl.textContent = track.specs[lang] || track.specs.en;

  // 2. Update Modal Tabs active state
  document.querySelectorAll('.modal-tab-btn').forEach(b => {
    const bIdx = parseInt(b.getAttribute('data-modal-track-idx') || '-1', 10);
    if (bIdx === trackIdx) b.classList.add('active');
    else b.classList.remove('active');
  });

  // 3. Update Modal Play Button
  const modalPlayBtn = document.getElementById('modal-play-btn');
  if (modalPlayBtn) {
    modalPlayBtn.setAttribute('data-track-index', `${trackIdx}`);
    const playText = modalPlayBtn.querySelector('[data-i18n="modal_btn_play"]');
    if (playText) {
      playText.textContent = dict.modal_btn_play;
    }
  }

  // 4. Render Lyric Sections
  const contentEl = document.getElementById('modal-lyrics-content');
  if (contentEl) {
    contentEl.innerHTML = track.sections.map(sec => {
      const highlight = sec.highlightClass ? ` ${sec.highlightClass}` : '';
      let secHtml = `<div class="lyric-section${highlight}">`;
      secHtml += `<h4 class="lyric-sec-title">${sec.title}</h4>`;
      if (sec.direction) {
        secHtml += `<p class="lyric-direction">${sec.direction}</p>`;
      }
      if (sec.japanese) {
        secHtml += `<p class="lyric-japanese">${sec.japanese}</p>`;
      }
      if (sec.english) {
        secHtml += `<p class="lyric-english">${sec.english}</p>`;
      }
      secHtml += `</div>`;
      return secHtml;
    }).join('');
  }
}

function initLyricsModal() {
  const modal = document.getElementById('lyrics-modal');
  const openBtn = document.getElementById('open-lyrics-btn');
  const expandBtn = document.getElementById('lyric-expand-btn');
  const closeBtn = document.getElementById('modal-close-btn');
  const footerClose = document.getElementById('modal-close-footer');
  const backdrop = document.getElementById('modal-backdrop');
  const modalPlayBtn = document.getElementById('modal-play-btn');

  if (!modal) return;

  function openModal(trackIdx) {
    const target = (typeof trackIdx === 'number') ? trackIdx : (typeof currentTrackIdx !== 'undefined' ? currentTrackIdx : 4);
    renderModalLyrics(target);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Hero button: open modal for current playing/selected track
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      const idx = (typeof currentTrackIdx !== 'undefined') ? currentTrackIdx : 4;
      openModal(idx);
    });
  }

  // Showcase card button: open modal for currently inspected track
  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      const idx = (typeof currentShowcaseIdx !== 'undefined') ? currentShowcaseIdx : 4;
      openModal(idx);
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (footerClose) footerClose.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Modal 5-track tabs: switch displayed track lyrics
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-modal-track-idx') || '4', 10);
      renderModalLyrics(idx);
    });
  });

  // Modal Play Button: play the currently inspected modal song on site
  if (modalPlayBtn) {
    modalPlayBtn.addEventListener('click', () => {
      loadTrack(currentModalTrackIdx, true);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Initial render
  renderModalLyrics(currentModalTrackIdx);
}


/**
 * ==========================================================================
 * 6. MOBILE NAVIGATION
 * ==========================================================================
 */
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('hud-nav');

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
  });

  nav.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
    });
  });
}

/**
 * ==========================================================================
 * 7. SMOOTH SCROLL NAV HIGHLIGHT
 * ==========================================================================
 */
function initScrollNav() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  });
}

/**
 * ==========================================================================
 * 8. PICTURE LIGHTBOX MODAL & FLOATING MINIMIZED VIEWER (PiP)
 * ==========================================================================
 */
const XE_PON_GALLERY = [
  {
    src: "assets/arcade-follow.jpg",
    titleEn: "AKIHABARA GIGO // ALL 4 MEMBERS",
    titleJa: "秋葉原GiGO // メンバー4名全員",
    locEn: "Akihabara GiGO Arcade, Tokyo",
    locJa: "秋葉原 GiGO アーケード（東京）"
  },
  {
    src: "assets/street-eating.png",
    titleEn: "SHIBUYA BACK-ALLEY // DOWNTIME & FOOD",
    titleJa: "渋谷の路地裏 // 休憩と食事",
    locEn: "Shibuya Back-Alley Street Food Stall, Tokyo",
    locJa: "渋谷 路地裏 屋台通り（東京）"
  },
  {
    src: "assets/band-collage.jpg",
    titleEn: "CHROME STREETWEAR // SESSIONS",
    titleJa: "クロム・ストリートウェア // 撮影セッション",
    locEn: "Harajuku & Shibuya Fashion District, Tokyo",
    locJa: "原宿・渋谷 ファッションストリート（東京）"
  },
  {
    src: "assets/toei-missed-calls.png",
    titleEn: "108+ MISSED CALLS: TOEI ANIMATION // SHINJUKU STREETS",
    titleJa: "東映アニメーション着信108件以上 // 新宿ストリート",
    locEn: "Don Quijote & Toei Animation HQ Street, Shinjuku, Tokyo",
    locJa: "新宿 ドン・キホーテ＆東映アニメーション前（東京）"
  }
];

let currentPicIdx = 0;
let isPicMinimized = false;

function renderPictureView(idx) {
  if (typeof idx !== 'number' || isNaN(idx)) idx = 0;
  if (idx < 0) idx = XE_PON_GALLERY.length - 1;
  if (idx >= XE_PON_GALLERY.length) idx = 0;
  currentPicIdx = idx;

  const item = XE_PON_GALLERY[idx];
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en';
  const title = lang === 'ja' ? item.titleJa : item.titleEn;
  const loc = lang === 'ja' ? item.locJa : item.locEn;

  // Modal elements
  const modalImg = document.getElementById('picture-modal-img');
  const modalTitle = document.getElementById('picture-modal-title');
  const modalLoc = document.getElementById('picture-modal-loc');
  const counter = document.getElementById('picture-counter');

  if (modalImg) modalImg.src = item.src;
  if (modalTitle) modalTitle.textContent = title;
  if (modalLoc) modalLoc.textContent = loc;
  if (counter) counter.textContent = `PHOTO 0${idx + 1} / 0${XE_PON_GALLERY.length}`;

  // Mini-viewer elements
  const miniImg = document.getElementById('mini-viewer-img');
  const miniCaption = document.getElementById('mini-viewer-caption');

  if (miniImg) miniImg.src = item.src;
  if (miniCaption) miniCaption.textContent = title;
}

function openPictureModal(idx) {
  const modal = document.getElementById('picture-modal');
  const miniViewer = document.getElementById('picture-mini-viewer');
  if (!modal) return;

  renderPictureView(idx);
  isPicMinimized = false;

  if (miniViewer) {
    miniViewer.classList.remove('active');
    miniViewer.setAttribute('aria-hidden', 'true');
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function minimizePictureViewer() {
  const modal = document.getElementById('picture-modal');
  const miniViewer = document.getElementById('picture-mini-viewer');
  if (!miniViewer) return;

  isPicMinimized = true;

  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  miniViewer.classList.add('active');
  miniViewer.setAttribute('aria-hidden', 'false');
}

function expandPictureViewer() {
  openPictureModal(currentPicIdx);
}

function closePictureViewer() {
  const modal = document.getElementById('picture-modal');
  const miniViewer = document.getElementById('picture-mini-viewer');

  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
  if (miniViewer) {
    miniViewer.classList.remove('active');
    miniViewer.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
  isPicMinimized = false;
}

function prevPicture() {
  renderPictureView(currentPicIdx - 1);
}

function nextPicture() {
  renderPictureView(currentPicIdx + 1);
}

function initPictureViewer() {
  const modal = document.getElementById('picture-modal');
  const miniViewer = document.getElementById('picture-mini-viewer');
  const minimizeBtn = document.getElementById('picture-minimize-btn');
  const footerMinimizeBtn = document.getElementById('picture-footer-minimize-btn');
  const closeBtn = document.getElementById('picture-close-btn');
  const footerClose = document.getElementById('picture-close-footer');
  const backdrop = document.getElementById('picture-backdrop');
  const prevBtn = document.getElementById('picture-prev-btn');
  const nextBtn = document.getElementById('picture-next-btn');
  const miniExpandBtn = document.getElementById('mini-viewer-expand-btn');
  const miniCloseBtn = document.getElementById('mini-viewer-close-btn');
  const miniClickTarget = document.getElementById('mini-viewer-click-target');

  // Minimize actions
  if (minimizeBtn) minimizeBtn.addEventListener('click', minimizePictureViewer);
  if (footerMinimizeBtn) footerMinimizeBtn.addEventListener('click', minimizePictureViewer);

  // Expand actions from floating mini-viewer
  if (miniExpandBtn) miniExpandBtn.addEventListener('click', expandPictureViewer);
  if (miniClickTarget) miniClickTarget.addEventListener('click', expandPictureViewer);

  // Close actions
  if (closeBtn) closeBtn.addEventListener('click', closePictureViewer);
  if (footerClose) footerClose.addEventListener('click', closePictureViewer);
  if (backdrop) backdrop.addEventListener('click', closePictureViewer);
  if (miniCloseBtn) miniCloseBtn.addEventListener('click', closePictureViewer);

  // Navigation
  if (prevBtn) prevBtn.addEventListener('click', prevPicture);
  if (nextBtn) nextBtn.addEventListener('click', nextPicture);

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (modal && modal.classList.contains('active')) {
      if (e.key === 'Escape') closePictureViewer();
      else if (e.key === 'ArrowLeft') prevPicture();
      else if (e.key === 'ArrowRight') nextPicture();
      else if (e.key.toLowerCase() === 'm') minimizePictureViewer();
    } else if (miniViewer && miniViewer.classList.contains('active')) {
      if (e.key === 'Escape') closePictureViewer();
    }
  });

  // Wire all gallery items on the page
  document.querySelectorAll('[data-gallery-idx]').forEach(el => {
    const idx = parseInt(el.getAttribute('data-gallery-idx') || '0', 10);
    el.addEventListener('click', () => {
      openPictureModal(idx);
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPictureModal(idx);
      }
    });
  });

  // Also wire hero image and showcase cover to open picture viewer
  const heroImg = document.getElementById('hero-showcase-img');
  if (heroImg) {
    heroImg.style.cursor = 'pointer';
    heroImg.setAttribute('title', 'Click to view full photo');
    heroImg.addEventListener('click', () => openPictureModal(0));
  }

  const showcaseImg = document.getElementById('showcase-cover-img');
  if (showcaseImg) {
    showcaseImg.style.cursor = 'pointer';
    showcaseImg.setAttribute('title', 'Click to view full photo');
    showcaseImg.addEventListener('click', () => openPictureModal(1));
  }
}

