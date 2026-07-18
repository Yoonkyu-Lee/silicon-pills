
fetch('data/events-latest.json').then(r=>r.json()).then(es=>{
  var n=document.getElementById('live-note');
  if(n&&es.length){n.textContent='최신 데이터 기준: '+es[0].date;}
}).catch(function(){});
