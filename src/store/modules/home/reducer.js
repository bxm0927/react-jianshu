const initialState = {
  topicList: [
    {
      id: '1',
      name: '手绘',
      pic: 'https://i.picsum.photos/id/1/100/100.jpg',
    },
    {
      id: '2',
      name: '社会热点',
      pic: 'https://i.picsum.photos/id/1022/100/100.jpg',
    },
    {
      id: '3',
      name: '简书电影',
      pic: 'https://i.picsum.photos/id/1020/100/100.jpg',
    },
    {
      id: '4',
      name: '读书',
      pic: 'https://i.picsum.photos/id/1018/100/100.jpg',
    },
    {
      id: '5',
      name: '摄影',
      pic: 'https://i.picsum.photos/id/1024/100/100.jpg',
    },
    {
      id: '6',
      name: '旅行·在路上',
      pic: 'https://i.picsum.photos/id/1023/100/100.jpg',
    },
    {
      id: '7',
      name: '历史',
      pic: 'https://i.picsum.photos/id/1008/100/100.jpg',
    },
  ],
  articleList: [
    {
      id: '1',
      title: '两款优秀的编辑工具！新媒体运营人士必备',
      summary:
        '新媒体编辑及运营是个不错的岗位，能让众多人低门槛进入互联网行业，但并不意味着毫无能力者能胜任这个职位，所以今天学姐分享3个超好用的编辑工具，希望...',
      pic: 'https://i.picsum.photos/id/1/100/100.jpg',
    },
    {
      id: '2',
      title: '这9种“伪学习”，正在扼杀你的前途',
      summary:
        '【1】 我叫黄敏，1980年的年初出生，虚岁39岁了，按说我这个年龄，孩子至少应该十来岁了吧，可是我至今孤身一人。 我是独生女，记得我小时候，父...',
      author: '甲甲木术数师',
      pic: 'https://i.picsum.photos/id/1022/100/100.jpg',
    },
    {
      id: '3',
      title: '硅谷权威数据分析课程，高薪就业',
      summary:
        '【1】 我叫黄敏，1980年的年初出生，虚岁39岁了，按说我这个年龄，孩子至少应该十来岁了吧，可是我至今孤身一人。 我是独生女，记得我小时候，父...',
      author: '甲甲木术数师',
      pic: 'https://i.picsum.photos/id/1020/100/100.jpg',
    },
    {
      id: '4',
      title: '什么才是真感情',
      summary:
        '【1】 我叫黄敏，1980年的年初出生，虚岁39岁了，按说我这个年龄，孩子至少应该十来岁了吧，可是我至今孤身一人。 我是独生女，记得我小时候，父...',
      author: '甲甲木术数师',
      pic: 'https://i.picsum.photos/id/1018/100/100.jpg',
    },
    {
      id: '5',
      title: '时隔15年，《绝代双骄》再度翻拍，相比主演，又是反派更吸睛',
      summary:
        '【1】 我叫黄敏，1980年的年初出生，虚岁39岁了，按说我这个年龄，孩子至少应该十来岁了吧，可是我至今孤身一人。 我是独生女，记得我小时候，父...',
      author: '甲甲木术数师',
      pic: 'https://i.picsum.photos/id/1024/100/100.jpg',
    },
    {
      id: '6',
      title: '网吧产子，怎一个乱字了得？（1177）',
      summary:
        '【1】 我叫黄敏，1980年的年初出生，虚岁39岁了，按说我这个年龄，孩子至少应该十来岁了吧，可是我至今孤身一人。 我是独生女，记得我小时候，父...',
      author: '甲甲木术数师',
      pic: 'https://i.picsum.photos/id/1023/100/100.jpg',
    },
    {
      id: '7',
      title: '听领导的话？10年后，活得最可悲的是这4种人！',
      summary:
        '【1】 我叫黄敏，1980年的年初出生，虚岁39岁了，按说我这个年龄，孩子至少应该十来岁了吧，可是我至今孤身一人。 我是独生女，记得我小时候，父...',
      author: '甲甲木术数师',
      pic: 'https://i.picsum.photos/id/1008/100/100.jpg',
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
