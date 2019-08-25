const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    mutex: true,
    lrcType: 3,
    audio: [
      {
        name: "看",
        artist: '陆虎',
        url: 'http://www.ytmp3.cn/down/51235.mp3',
        cover: 'http://q1.qlogo.cn/g?b=qq&nk=911651521&s=100&t=1566745336',
      },
      {
        name: '雪落下的声音',
        artist: '陆虎',
        url: 'http://www.ytmp3.cn/down/60060.mp3',
        cover: 'http://img.ytmp3.cn/image/78.jpg',

      },
      {
        name: '没那么简单',
        artist: '黄小琥',
        url: 'http://www.ytmp3.cn/down/35394.mp3',
        cover: 'http://q1.qlogo.cn/g?b=qq&nk=1529759552&s=100&t=1566745280',

      },
    
        {
        name: '出山',
        artist: '花粥',
        url: 'http://www.ytmp3.cn/down/60427.mp3',
        cover: 'https://p2.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg?param=130y130',
        lrc: 'runoffmountainous.lrc'
      }
    ]
});
ap.lrc.show([
      {
        name: "看",
        artist: '陆虎',
        url: 'http://www.ytmp3.cn/down/51235.mp3',
        cover: 'http://q1.qlogo.cn/g?b=qq&nk=911651521&s=100&t=1566745336',
      },
      {
        name: '雪落下的声音',
        artist: '陆虎',
        url: 'http://www.ytmp3.cn/down/60060.mp3',
        cover: 'http://img.ytmp3.cn/image/78.jpg',

      },
      {
        name: '没那么简单',
        artist: '黄小琥',
        url: 'http://www.ytmp3.cn/down/35394.mp3',
        cover: 'http://q1.qlogo.cn/g?b=qq&nk=1529759552&s=100&t=1566745280',

      },
    
        {
        name: '出山',
        artist: '花粥',
        url: 'http://www.ytmp3.cn/down/60427.mp3',
        cover: 'https://p2.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg?param=130y130',
        lrc: 'runoffmountainous.lrc'
      }
    ]);