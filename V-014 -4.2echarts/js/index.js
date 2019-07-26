
// *******动态改变地图的省份数据*******
   ajax({
          url: "https://www.mymamain.com/api/statistics/index",
          async: false,
          success: function (res) {   
            datacou = JSON.parse(res) //接口数据赋值给全局变量datacou,供全局使用
          },
          error: function (message,code) {
               
          }
        });
         
 
 var datacou; //接口数据赋值的全局变量

  let mapinfo = datacou.mapinfo  // ajax得到城市列表为对象

  let arrData =[]   // ajax得到城市列表转换为数组
  
  for(i in mapinfo){

    arrData.push(mapinfo[i]) //对象转数组
  }

  for(let j=0;j<arrData.length;j++){ 
    delete(arrData[j].city_data) //删除后面city_data不需要的字段
  }
  let data = arrData //城市数组赋值给echarts的data来动态改变

   

// *******动态改变地图的市区数据*******
   ajax({
          url: "https://www.mymamain.com/api/statistics/index",
          async: false,
          success: function (res) {   
            datacity = JSON.parse(res) //接口数据赋值给全局变量datacou,供全局使用
    
          },
          error: function (message,code) {
               
          }
        });
         
 
 var datacity; //接口数据赋值的全局变量
  let  hospitolNumbers = datacity.roominfo.category_data[1].room_number+'台'  //医院设备台数
  let  MarketNumbers = datacity.roominfo.category_data[2].room_number+'台'  //商场设备台数
  let  highSpeedNumbers = datacity.roominfo.category_data[3].room_number+'台'  //高铁设备台数
  let  otherNumbers = datacity.roominfo.category_data[0].room_number+'台'  //其他设备台数
  let combination = '医院：'+hospitolNumbers  +'  商场：'+MarketNumbers  +'  高铁：'+highSpeedNumbers  +'  其他：'+otherNumbers

  let mapcityinfo =  datacity.mapinfo  // ajax得到城市列表为对象
  let totlNumber ='mamain移动母婴室设备总数'+ '\n'+ datacity.roominfo.total_number+'台'  //ajax得到设备总数
  
  let subname = combination //分布情况赋值给echarts
   let name_title = totlNumber //总台数赋值给echarts
  let arrcityData =[]    // ajax得到城市列表转换为数组

  for(i in mapcityinfo){
    arrcityData.push(mapcityinfo[i]) //对象转数组
  }
  
  for(let j=0;j<arrcityData.length;j++){ 
    delete(arrcityData[j].value) //删除后面city_data不需要的字段
    arrcityData[j].city_data = Object.values(arrcityData[j].city_data)//转成需要的数组格式。困扰两天的格式转化，切记。
  }
 
console.log('ajax得到的城市数据格式',arrcityData)

  let toolTipData = arrcityData //城市数组赋值给echarts的data来动态改变


  // **********地图配置数据开始*************
  var myChart = echarts.init(document.getElementById('main'));

//   var name_title = "mamain移动母婴室设备总数"
//   var subname = '医院26台，商场19台'
  var nameColor = " rgb(81,255,255)"
  var subnamecolor = '#fff'
  var name_fontFamily = 'Microsoft YaHei'
  var subname_fontSize = 16
  
  var name_fontSize = 20
  var mapName = 'china'
  //地图省份数据
  // var data = [     
  //     {name:"北京",value:27},
  //     {name:"辽宁",value:2}, 
  //     {name:"江苏",value:2},
  //     {name:"浙江",value:11},
  //     {name:"安徽",value:1},
  //     {name:"山东",value:3},
  //     {name:"湖南",value:2},
  //     {name:"陕西",value:4},
  //     {name:"广东",value:3},
  //     {name:"广西",value:1},
  //     ];
 
 
  var geoCoordMap = {};

  //地图城市数据
  //  var toolTipData = [ 
  //     {name:"北京",city_data:[{name:"朝阳区",value:7},{name:"海淀区",value:5},{name:"房山区",value:2},{name:"顺义区",value:2},{name:"通州区",value:2},{name:"石景山区",value:1},{name:"西城区",value:1},{name:"丰城区",value:1},{name:"昌平区",value:1},{name:"门头沟",value:1},{name:"怀柔区",value:1},{name:"大关区",value:1}]},
  //     {name:"辽宁",city_data:[{name:"沈阳市",value:2}]},
  //     {name:"江苏",city_data:[{name:"常州",value:2}]},
  //     {name:"浙江",city_data:[{name:"杭州市",value:10},{name:"宁波市",value:1}]},
  //     {name:"安徽",city_data:[{name:"合肥市",value:1}]},
  //     {name:"山东",city_data:[{name:"潍坊",value:2},{name:"济南",value:1}]},
  //     {name:"湖南",city_data:[{name:"长沙",value:2}]}, 
  //     {name:"陕西",city_data:[{name:"西安",value:4}]},
  //     {name:"广东",city_data:[{name:"广州",value:2},{name:"深圳",value:1}]},
  //     {name:"广西",city_data:[{name:"南宁",value:1}]},   
  // ];
  // console.log('echarts需要的城市数据格式',toolTipData)
  /*获取地图数据*/
  myChart.showLoading();
  var mapFeatures = echarts.getMap(mapName).geoJson.features;
  myChart.hideLoading();
  mapFeatures.forEach(function(v) {
      // 地区名称
      var name = v.properties.name;
      // 地区经纬度
      geoCoordMap[name] = v.properties.cp;
  
  });
  
  
  var max = 480,
      min = 9; // todo 
  var maxSize4Pin = 100,
      minSize4Pin = 20;
  
  var convertData = function(data) {   //城市数量总和
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          // console.log('geoCoord',geoCoord)
          if (geoCoord) {
              res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value),
              });
          }
      }
      return res;
  };
  option = {
      title: {
          text: name_title,
          subtext: subname,
          x: 'center',
          textStyle: {
              color: nameColor,
              fontFamily: name_fontFamily,
              fontSize: name_fontSize
          },
          subtextStyle:{
              fontSize:subname_fontSize,
              fontFamily:name_fontFamily,
              color: subnamecolor,
          }
      },
      tooltip: {
          trigger: 'item',
          formatter: function(params) {
              if (typeof(params.value)[2] == "undefined") {
                  var toolTiphtml = ''
                  for(var i = 0;i<toolTipData.length;i++){
                      if(params.name==toolTipData[i].name){
                          toolTiphtml += toolTipData[i].name+':<br>'
                          for(var j = 0;j<toolTipData[i].city_data.length;j++){ 
                              toolTiphtml+=toolTipData[i].city_data[j].name+':'+toolTipData[i].city_data[j].value+"<br>"
                          }
                      }
                  }
                  console.log('uuuuu',toolTiphtml)
                  // console.log(convertData(data))
                  return toolTiphtml;
              } else {
                  var toolTiphtml = ''
                  for(var i = 0;i<toolTipData.length;i++){
                      if(params.name==toolTipData[i].name){
                          toolTiphtml += toolTipData[i].name+':<br>'
                          for(var j = 0;j<toolTipData[i].city_data.length;j++){
                              toolTiphtml+=toolTipData[i].city_data[j].name+':'+toolTipData[i].city_data[j].value+"<br>"
                          }
                      }
                  }
                  console.log('zzzzz',toolTiphtml)
                  // console.log(convertData(data))
                  return toolTiphtml;
              }
          }
      },
    //   visualMap: {
    //     show: true,
    //     min: 0,
    //     max: 200,
    //     left: 'left',
    //     top: 'bottom',
    //     text: ['高', '低'], // 文本，默认为数值文本
    //     calculable: true,
    //     seriesIndex: [1],
    //     inRange: {
    //         // color: ['#3B5077', '#031525'] // 蓝黑
    //         // color: ['#ffc0cb', '#800080'] // 红紫
    //         // color: ['#3C3B3F', '#605C3C'] // 黑绿
    //         // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
    //         // color: ['#23074d', '#cc5333'] // 紫红
    //         color: ['#00467F', '#A5CC82'] // 蓝绿
    //         // color: ['#1488CC', '#2B32B2'] // 浅蓝
    //         // color: ['#00467F', '#A5CC82'] // 蓝绿
    //         // color: ['#00467F', '#A5CC82'] // 蓝绿
    //         // color: ['#00467F', '#A5CC82'] // 蓝绿
    //         // color: ['#00467F', '#A5CC82'] // 蓝绿

    //     }
    // },
      geo: {
          show: true,
          zoom:1.2,
          map: mapName,
          label: {
              normal: {
                  show:false,
                  color: '#fff',
  
              },
             
              emphasis: {
                  show: false,
              }
          },
          roam: true,
          itemStyle: {
              normal: {
                  areaColor: 'rgba(3,17,39,.6)',
                  borderColor: '#4FFAFB',
                  borderWidth: 1
  
              },
              emphasis: {
                  areaColor: '#2B91B7',
              }
          }
      },
      series: [{
              name: '',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: convertData(data),
              symbolSize: function(val) { //地理位置蓝色圆点大小
                  return val[2] / 10;
              },
              label: {
                  normal: {
                      formatter: '{b}',
                      position: 'bottom',
                      show: true
                  },
                  emphasis: {
                      show: true
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#fff'  //地理位置蓝色圆颜色
                  }
              }
          },
          {
              type: 'map',
              map: mapName,
              geoIndex: 0,
              aspectScale: 0.75, //长宽比
              showLegendSymbol: false, // 存在legend时显示
              label: {
                  normal: {
                      show: true
                  },
                  emphasis: {
                      show: false,
                      textStyle: {
                          color: '#fff'
                      }
                  }
              },
              roam: true,
              itemStyle: {
                  normal: {
                      areaColor: '#031525',
                      borderColor: '#3B5077',
                  },
                  emphasis: {
                      areaColor: '#2B91B7'
                  }
              },
              animation: false,
              data: data
          },
          {
              name: '点',
  
              type: 'scatter',
              coordinateSystem: 'geo',
              symbol: 'pin', //气泡
              symbolSize: function(val) {  
                  var a = (maxSize4Pin - minSize4Pin) / (max - min);
                  var b = minSize4Pin - a * min; 
                   b = maxSize4Pin - a * max;
                  //return 30*a * val[2] + b; //改变红色气泡大小的方法
                  return 3 * val[2] + b+15;
              },
              label: {
                  normal: {
                     formatter: function(obj){
                      return obj.data.value[2];//改变value数组中的值
                     },
                      show: true,
                      textStyle: {
                          color: '#fff',
                          fontSize: 16,//城市数量字体大小
                      }
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#F62157', //红色气泡颜色
                  }
              },
              zlevel: 6,
              data: convertData(data),
          },
          {
              name: '',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: convertData(data.sort(function(a, b) {
                  return b.value - a.value;
              }).slice(0, 20)),
              symbolSize: function(val) {
                  return val[2] / 10;
              },
              showEffectOn: 'render',
              rippleEffect: {
                  brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                  normal: {
                      formatter: '{a}',
                      position: 'right',
                      show: true
                  }
              },
              itemStyle: {
                  normal: {
                      color: '#FFFF00',
                      shadowBlur: 100,
                      shadowColor: '#FFFF00'
                  }
              },
              zlevel: 1
          },
  
      ]
  };
  myChart.setOption(option);


  
         
         
  // echart图表自适应
          window.addEventListener("resize", function() {
              myChart.resize();
          });
  
   // **********柱状图配置数据开始*************
  
  var myChart2 = echarts.init(document.getElementById('columnEcharts'));
     // 初始化option2
  option2 = {
      // tooltip: {
      //     trigger: 'axis',        
      // },
      
      legend: {
          data:['微信','支付宝','平均增长速度'],
              textStyle: {
                  color: '#fff'
              }
      },
      xAxis: [
          {
              type: 'category',
              data: ['1月','2月','3月','4月','5月','6月'],
              axisPointer: {
                  type: 'shadow'
              },
             
               axisLine: {
                  lineStyle: {
                    color: '#fff'
                           }
                       },
          },
  
      ],
      yAxis: [
          {
              type: 'value',
              name: '用户数',
              min: 0,
              max: 5000,
              interval: 500,
              axisLabel: {
                  formatter: '{value} '
              },
             axisLine: {
              lineStyle: {
                color: '#fff'
                      }
                    },
          },
          {
              type: 'value',
              name: '增长曲线',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                  formatter: '{value} °C'
              },
               axisLine: {
              lineStyle: {
                color: 'transparent'
                      }
                    },
          }
      ],
      series: [
          {
              name:'微信',
              type:'bar',
              data:[],
              itemStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#8bd46e'
                  }, {
                      offset: 1,
                      color: '#09bcb7'
                  }]),
                  barBorderRadius: 12,
              },
            },
          },
          {
              name:'支付宝',
              type:'bar',
              data:[0, 0, 0, 13, 24, 18],
               itemStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#248ff7'
                  }, {
                      offset: 1,
                      color: '#6851f1'
                  }]),
                  barBorderRadius: 12,
              },
            },
          },
          {
              name:'平均增长速度',
              type:'line',
              yAxisIndex: 1,
              data:[6, 15, 17, 21, 23, 16],
              itemStyle:  {
              
                color: '#fff'
                     
                    },
          },
  
      ]
  };
  myChart2.setOption(option2);
  
   let echartDatashow = function () {
              ajax({
                  url: "https://www.mymamain.com/api/statistics/index",
                  async: true,
                  success: function (data) {   
                      // console.log(data)
                      let dataSourcer = JSON.parse(data)//将请求得到的参数赋值给全局变量dataSource
                      // console.log(dataSourcer)
                      // console.log('ssss',dataSourcer.statisticsinfo.wechat_user_count);
  
                      //ajax得到微信1-6月份的用户数
                      let wechatUsercount = dataSourcer.statisticsinfo.wechat_user_count.split(',')
                      // console.log('wechatUsercount',wechatUsercount);
                      //ajax得到微信月份的数组
                      let wechatUsermonth = dataSourcer.statisticsinfo.wechat_user_month.split(',')
                      console.log('wechatUsermonth',wechatUsermonth);
                      
  
                          myChart2.setOption({        //加载数据图表
                                                                              legend: {
                                                          data:['微信','支付宝','平均增长速度'],
                                                              textStyle: {
                                                                  color: '#fff'
                                                              }
                                                      },
                                                      xAxis: [
                                                          {
                                                              type: 'category',
                                                              data: wechatUsermonth, //微信1-6月份的数组
                                                              axisPointer: {
                                                                  type: 'shadow'
                                                              },
                                                             
                                                               axisLine: {
                                                                  lineStyle: {
                                                                    color: '#fff'
                                                                           }
                                                                       },
                                                          },
  
                                                      ],
                                                      yAxis: [
                                                          {
                                                              type: 'value',
                                                              name: '用户数',
                                                              min: 0,
                                                              max: 5000,
                                                              interval: 500,
                                                              axisLabel: {
                                                                  formatter: '{value} '
                                                              },
                                                             axisLine: {
                                                              lineStyle: {
                                                                color: '#fff'
                                                                      }
                                                                    },
                                                          },
                                                          {
                                                              type: 'value',
                                                              name: '增长曲线',
                                                              min: 0,
                                                              max: 25,
                                                              interval: 5,
                                                              axisLabel: {
                                                                  formatter: '{value} °C'
                                                              },
                                                               axisLine: {
                                                              lineStyle: {
                                                                color: 'transparent'
                                                                      }
                                                                    },
                                                          }
                                                      ],
                                                              series: [
                                              {
                                                  name:'微信',
                                                  type:'bar',
                                                  data: wechatUsercount,//微信1-6月份的用户数
                                                  itemStyle: {
                                                  normal: {
                                                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                          offset: 0,
                                                          color: '#8bd46e'
                                                      }, {
                                                          offset: 1,
                                                          color: '#09bcb7'
                                                      }]),
                                                      barBorderRadius: 12,
                                                  },
                                                },
                                              },
                                              {
                                                  name:'支付宝',
                                                  type:'bar',
                                                  data:[0, 0, 0, 13, 24, 18],
                                                   itemStyle: {
                                                  normal: {
                                                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                          offset: 0,
                                                          color: '#248ff7'
                                                      }, {
                                                          offset: 1,
                                                          color: '#6851f1'
                                                      }]),
                                                      barBorderRadius: 12,
                                                  },
                                                },
                                              },
                                              {
                                                  name:'平均增长速度',
                                                  type:'line',
                                                  yAxisIndex: 1,
                                                  data:[6, 15, 17, 21, 23, 16],
                                                  itemStyle:  {
                                                  
                                                    color: '#fff'
                                                         
                                                        },
                                              },
  
                                          ]
                  });
                  },
  
                  error: function (message,code) {
                       
                  }
              });
  
          }
          echartDatashow()