let charts = $(".elem-jchart");

if(charts.length){
  for (let i=0; i<charts.length; i++){
    let values = $(charts[i]).attr('data-values').split(',');
    let colors = $(charts[i]).attr('data-colors').split(',');
    let newData = [];
    
    for (let j=0; j<values.length; j++){
      let dataItem = {
        value: +values[j],
        color: { normal: colors[j]}
      }
      newData.push(dataItem);
    }
    
    
    $(charts[i]).jChart({
      data: newData,
      appearance: {
        type: 'donut',
        baseColor: 'transparent',
        gap: 0
      }
    });
    
    
    let titles = $(charts[i]).attr('data-names').split(',');
    let div = $('<div class="elem-jchart__names"></div>');
    for (let i=0; i<titles.length; i++){
      let p = $('<p class="elem-jchart__items" style="background-color:' + colors[i] + '"></p>');
      div.append(p.html(titles[i]));
    }
    $(charts[i]).append(div);
    
  }
}










