// Landing copy for each locale. Keys mirror the section structure in Landing.astro.
export type Lang = 'en' | 'ko' | 'ja';

export const REPO = 'https://github.com/kazunito/SiliconScope';
export const RELEASES_LATEST = 'https://github.com/kazunito/SiliconScope/releases/latest';
export const SPECTALO = 'https://spectalo.calidalab.ai';

export const STRINGS = {
  en: {
    nav: { features: 'Features', privacy: 'Privacy', download: 'Download' },
    hero: {
      title: 'See what your Apple Silicon is really doing.',
      sub: 'A sudoless macOS monitor with first-class ANE, Media Engine, and memory-bandwidth tracking — the signals Activity Monitor and btop don’t show. Menu bar and full dashboard.',
      download: 'Download for Apple Silicon',
      github: 'View on GitHub',
      badges: ['Free', 'Open source · MIT', 'No sudo', 'macOS 14+'],
    },
    features: [
      { tag: 'Menu-bar cockpit', title: 'Your whole Mac in one glyph',
        body: 'The combined SiliconScope menu-bar item: live CPU / GPU / ANE / Media / memory bars plus bandwidth, and a dropdown with six color-matched 60-second trends, top processes, and the live workload verdict.',
        img: '/img/ss.png' },
      { tag: 'ANE · Media · Bandwidth', title: 'The metrics others hide',
        body: 'First-class Neural Engine and Media Engine power, plus unified-memory bandwidth with the CPU / GPU / Media split — the real bottleneck signal for on-device AI and video.',
        img: '/img/gpu.png' },
      { tag: 'AI workload', title: 'Bandwidth-bound or compute-bound?',
        body: 'A live verdict for your local LLM, a “% of your chip’s bandwidth ceiling” gauge, and a one-click tokens/sec + tokens-per-watt benchmark.',
        img: '/img/benchmark.png' },
    ],
    gallery: {
      title: 'Pin any metric to its own item',
      sub: 'CPU · GPU · Memory · Network · SSD · Sensors · Battery — each with a live glyph and a rich, iStat-style dropdown. Toggle any of them from the ⬚ on its dashboard card (or in Settings).',
      items: [
        { img: '/img/cpu.png', label: 'CPU — E/P cores, frequency, temp, top processes' },
        { img: '/img/memory.png', label: 'Memory — pressure, app/cached, swap, page rates' },
        { img: '/img/menubar-sensors.png', label: 'Sensors — per-unit temperatures & fans' },
        { img: '/img/menubar-battery.png', label: 'Battery — health, cycles, power draw' },
      ],
    },
    privacy: { title: 'Nothing leaves your Mac',
      body: '100% sudoless and offline by design — no telemetry, no analytics, no outbound calls. Open source, MIT-licensed.' },
    download: { title: 'Download', button: 'Download for Apple Silicon', source: 'or build from source →',
      note: 'macOS 14+ on Apple Silicon. First launch: right-click the app → Open.' },
    footer: { tagline: 'An Apple Silicon system monitor by Calida Lab.', other: 'Also from Calida Lab: Spectalo' },
  },
  ko: {
    nav: { features: '기능', privacy: '프라이버시', download: '다운로드' },
    hero: {
      title: 'Apple Silicon, 그 속까지 들여다보다',
      sub: 'Activity Monitor도 btop도 보여주지 않는 ANE(뉴럴 엔진)·미디어 엔진·메모리 대역폭까지, sudo 없이 살펴봅니다. 메뉴바와 풀 대시보드, 두 가지 모습으로.',
      download: 'Apple Silicon용 다운로드',
      github: 'GitHub에서 보기',
      badges: ['무료', '오픈소스 · MIT', 'sudo 불필요', 'macOS 14+'],
    },
    features: [
      { tag: '메뉴바 콕핏', title: '맥 전체가 글리프 하나에',
        body: '통합 SiliconScope 메뉴바 아이템 하나에 CPU·GPU·ANE·미디어·메모리 막대와 대역폭이 실시간으로 담깁니다. 드롭다운을 열면 색을 맞춘 60초 추세 여섯 개와 상위 프로세스, 그리고 지금 무엇이 발목을 잡는지 일러 주는 판정이 펼쳐집니다.',
        img: '/img/ss.png' },
      { tag: 'ANE · 미디어 · 대역폭', title: '아무도 보여주지 않던 지표',
        body: 'Neural Engine과 미디어 엔진의 전력, 그리고 CPU·GPU·미디어로 나뉜 통합 메모리 대역폭까지 — 온디바이스 AI와 영상 작업의 진짜 병목을 짚어 냅니다.',
        img: '/img/gpu.png' },
      { tag: 'AI 워크로드', title: '대역폭에 묶였나, 연산에 묶였나',
        body: '로컬 LLM이 지금 무엇에 묶여 있는지 실시간으로 가려내고, 칩의 대역폭 한계 대비 몇 퍼센트에 닿았는지 보여 줍니다. 버튼 한 번이면 초당 토큰 수와 와트당 토큰 효율까지 재어 줍니다.',
        img: '/img/benchmark.png' },
    ],
    gallery: {
      title: '지표마다, 저마다의 자리',
      sub: 'CPU·GPU·메모리·네트워크·SSD·센서·배터리 — 무엇이든 메뉴바에 띄우고, 풍부한 드롭다운으로 깊이 들여다봅니다. 각 카드의 ⬚(또는 설정)에서 켜고 끕니다.',
      items: [
        { img: '/img/cpu.png', label: 'CPU — E/P 코어, 주파수, 온도, 상위 프로세스' },
        { img: '/img/memory.png', label: '메모리 — 압력, App/캐시, 스왑, 페이지 속도' },
        { img: '/img/menubar-sensors.png', label: '센서 — 유닛별 온도와 팬' },
        { img: '/img/menubar-battery.png', label: '배터리 — 건강도, 사이클, 전력' },
      ],
    },
    privacy: { title: 'Mac을 떠나지 않는 데이터',
      body: '설계 단계부터 sudo 없이, 오프라인으로 동작합니다. 텔레메트리도 분석도, 바깥으로 나가는 통신도 없습니다. 오픈소스이며 MIT 라이선스입니다.' },
    download: { title: '다운로드', button: 'Apple Silicon용 다운로드', source: '또는 소스에서 직접 빌드 →',
      note: 'macOS 14 이상의 Apple Silicon. 첫 실행은 앱을 우클릭 → 열기.' },
    footer: { tagline: 'Calida Lab이 빚어낸 Apple Silicon 시스템 모니터.', other: 'Calida Lab의 또 다른 앱 · Spectalo' },
  },
  ja: {
    nav: { features: '機能', privacy: 'プライバシー', download: 'ダウンロード' },
    hero: {
      title: 'Apple Silicon の、その奥まで。',
      sub: 'Activity Monitor も btop も見せてくれない ANE(Neural Engine)・Media Engine・メモリ帯域まで、sudo なしで見渡す macOS モニター。メニューバーとフルダッシュボード、二つの姿で。',
      download: 'Apple Silicon 版をダウンロード',
      github: 'GitHub で見る',
      badges: ['無料', 'オープンソース · MIT', 'sudo 不要', 'macOS 14+'],
    },
    features: [
      { tag: 'メニューバー・コックピット', title: 'Mac のすべてが、ひとつのグリフに',
        body: '統合された SiliconScope メニューバー項目に、CPU / GPU / ANE / Media / メモリのバーと帯域がリアルタイムで並びます。ドロップダウンを開けば、色を揃えた60秒トレンド6本、上位プロセス、そして今この瞬間のワークロード判定が広がります。',
        img: '/img/ss.png' },
      { tag: 'ANE · Media · 帯域', title: '他が見せない指標',
        body: 'Neural Engine と Media Engine の電力、そして CPU / GPU / Media に分かれたユニファイドメモリ帯域まで——オンデバイス AI と映像処理の、本当のボトルネックを射抜きます。',
        img: '/img/gpu.png' },
      { tag: 'AI ワークロード', title: '帯域律速か、演算律速か',
        body: 'ローカル LLM が今どちらに縛られているかをリアルタイムで判定し、チップの帯域上限に対して何 % まで届いているかを示します。ワンクリックで、毎秒トークン数とワットあたりトークン効率まで測定。',
        img: '/img/benchmark.png' },
    ],
    gallery: {
      title: 'どの指標も、それぞれの定位置へ',
      sub: 'CPU · GPU · メモリ · ネットワーク · SSD · センサー · バッテリー——どれもライブグリフと、iStat 風の充実したドロップダウンを備えます。各ダッシュボードカードの ⬚(または設定)から、いつでも切り替えられます。',
      items: [
        { img: '/img/cpu.png', label: 'CPU — E/P コア、周波数、温度、上位プロセス' },
        { img: '/img/memory.png', label: 'メモリ — 圧力、App/キャッシュ、スワップ、ページ速度' },
        { img: '/img/menubar-sensors.png', label: 'センサー — ユニット別の温度とファン' },
        { img: '/img/menubar-battery.png', label: 'バッテリー — 健全性、サイクル、消費電力' },
      ],
    },
    privacy: { title: '何も、Mac の外へ出ない',
      body: '設計の最初から、完全に sudo なし・オフラインで動きます。テレメトリも分析も、外部への通信もありません。オープンソース・MIT ライセンスです。' },
    download: { title: 'ダウンロード', button: 'Apple Silicon 版をダウンロード', source: 'またはソースからビルド →',
      note: 'Apple Silicon の macOS 14 以降。初回起動は、アプリを右クリック →「開く」。' },
    footer: { tagline: 'Calida Lab がつくる Apple Silicon システムモニター。', other: 'Calida Lab のもうひとつのアプリ · Spectalo' },
  },
} as const;
