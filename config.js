// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的宝贝",  // 同上...
        "今天是你的生日",
        "这是我们在一起时",
        "你的第一个生日！",
        "这几个月来，我见过你",
        "认真的样子",
        "憨憨的样子",
        "可爱的样子",
        "还有瑟瑟的样子",
        "都是我喜欢的样子",
        "对了，过年开心吗？",
        "今年要吃好好的",
        "健康的",
        "然后才有力气锻炼干活",
        "和想我！",
        "然后乖乖的 听话的",
        "就能收获棒棒的身体",
        "让你舒呼的小手手",
        "和宝贝喜欢的小宝贝",
        "生日快乐~~",
        "爱你的BABA 爱你的大宝贝~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "biubiu 送给我": "./imgs/songxinxin.jpeg",
        "心爱的宝贝": "./imgs/xinaibaobei.jpg",
        "今天是你的生日": "./imgs/shengri.jpeg",
        "这是我们在一起时": "./imgs/zaiyiqi.png",
        //"你的第一个生日！": "./imgs/nothing.jpg",
        "这几个月来，我见过你": "./imgs/yangzi.jpg",
        "认真的样子": "./imgs/renzhenyangzi.jpg",
        "憨憨的样子": "./imgs/hanhanyangzi.jpg",
        "可爱的样子": "./imgs/keaiyangzi.jpg",
        "还有瑟瑟的样子": "./imgs/buganfangtu.jpg",
        //"都是我喜欢的样子": "./imgs/nothing.jpg",
        "对了，过年开心吗？": "./imgs/chuo.gif",
        "今年要吃好好的": "./imgs/chihaodian.jpeg",
        "健康的": "./imgs/jiankang.jpg",
        "然后才有力气锻炼干活": "./imgs/yundong.gif",
        "和想我！": "./imgs/xiangwo.jpeg",
        "然后乖乖的 听话的": "./imgs/guaitinghua.jpeg",
        //"就能收获棒棒的身体": "./imgs/nothing.jpg",
        "让你舒呼的小手手": "./imgs/shufu.jpg",
        "和宝贝喜欢的小宝贝": "./imgs/xiu.gif",
        "生日快乐~~": "./imgs/shengrikuaile.jpg",
        //"爱你的BABA 爱你的大宝贝~": "./imgs/nothing.jpg"
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "PRESS ME",
        play: "MUSICO STARTO~",
        bannar_coming: "COLOURS",
        balloons_flying: "AND SOMETHING MORE",
        cake_fadein: "CAKE?",
        light_candle: "CANDLES?",
        wish_message: "HAPPY BIRTHDAY~",
        story: "A MESSAGE FOR YOU"
    },
    // 结束语
    loveText: '爱你的BABA 爱你的大宝贝~'
};
