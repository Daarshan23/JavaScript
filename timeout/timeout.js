console.log('First LINE');


setTimeout(
()=>{
    console.log('LAST RUN');

}, 3000);

var intvartlId = setInterval(()=>{

    console.log('ALWAYS LAST RUN');
    
}, 1000);
