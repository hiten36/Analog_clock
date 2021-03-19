setInterval(() => {
    let time=new Date();
    let hour=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();
    document.querySelector('.hour').style.transform=`rotate(${30*hour+minute/2+second/120}deg)`;
    document.querySelector('.minute').style.transform=`rotate(${6*minute+second/10}deg)`;
    document.querySelector('.second').style.transform=`rotate(${6*second}deg)`;
}, 1000);