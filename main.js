var myChart = echarts.init(document.getElementById('main'));
var option = {
  title:{text:'JavaScript语言排行变化'},
  tooltip:{
          trigger:'axis',
          axisPointer:{ type:'line'}
           },
   xAxis: {
            type: 'category',
            data: ['2000', '2005', '2010', '2015', '2020'] },
   yAxis: { type: 'value'},
   series: [{   name:'排名',
                data: [6,9,8,8,7],
                type: 'line' }]

};
myChart.setOption(option);
//var myTable = handsontable.init(document.getElementById('example'));
var data = [//四行五列
      ["Java", "1", "降", "-0.01%"],
     ["C","2","升","+2.44%"],
     ["Python","3","升","+1.41%"],
     ["C++","4","降","-2.58%"],
     ["C#","5","升","+2.07%"],
     ["Visual Basic.NET","6","降","-1.71%"],
     ["JavaScript","7","降","-0.85%"]
    ];
 $("#example").handsontable({
     data: data,//初始化时候的数据
   // minSpareRows:5,//空出多少行
      manualRowResize:false,
    manualColumnResize:false,
    rowHeaders:false,
    colHeaders:["语言名称","排名","升或降","变化幅度"],
    className:'htCenter htMiddle',
    contextMenu:true,
    colWidths:150,
    rowHeights:40,
    })
