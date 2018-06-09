import { Meteor } from 'meteor/meteor';

import '../imports/api/tasks.js';

Meteor.startup(() => {
  // code to run on server at startup
  // 本地坏境下调试，打开https://debug.kadira.cn/debug, 填入本地程序localhost:3000即可

  // 生产坏境的调试监控, 需要在https://www.kadira.cn, 新建app获取appid和appSecret
  //Kadira.connect('tt5X7E8Zv7yrgzcDW', '7905a79f-077b-421a-bd6c-ca1cd71e24d2', {endpoint: 'https://meteor.kadira.cn'});
  
});
