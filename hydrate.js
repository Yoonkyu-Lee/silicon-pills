
// #live-note: 최신 이벤트 날짜(기존 동작 보존)
fetch('data/events-latest.json').then(function(r){return r.json();}).then(function(es){
  var n=document.getElementById('live-note');
  if(n&&es&&es.length){n.textContent='최신 데이터 기준: '+es[0].date;}
}).catch(function(){});

// [data-live-price="danawa-{pcode}"]: 시리즈 마지막 점 가격으로 갱신(실패 시 빌드값 유지)
Array.prototype.forEach.call(document.querySelectorAll('[data-live-price]'),function(el){
  var key=el.getAttribute('data-live-price');
  if(!key){return;}
  fetch('data/series/'+key+'.json').then(function(r){return r.json();}).then(function(pts){
    if(!pts||!pts.length){return;}
    var last=pts[pts.length-1];
    if(!last||typeof last.price!=='number'){return;}
    el.textContent=last.price.toLocaleString('ko-KR')+'원';
  }).catch(function(){});
});
