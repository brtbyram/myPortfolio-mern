
function Facetime() {
    // const openCamera = () => {
    //   navigator.mediaDevices.getUserMedia({ 
    //     video: {
    //       width:1280 , // video boyutunu belirliyoruz
    //       height: 720, // video boyutunu belirliyoruz
    //       frameRate: 100, // video kare hızını belirliyoruz
    //       sampleSize: 10, // video kalitesini belirliyoruz (1-10 arasında bir değer alır)
    //       facingMode: 'user', // ön kamerayı kullanmak için 'user' , arka kamerayı kullanmak için 'environment' değerini veriyoruz
    //       aspectRatio: 1.777777, // video en 
    //       resizeMode: 'crop-and-scale', // video boyutunu belirliyoruz
    //       channelCount: 2, // ses kanal sayısını belirliyoruz (1 veya 2 olabilir)
    //       echoCancellation: true, // ses yankılanmasını engellemek için true değeri veriyoruz 
    //       noiseSuppression: true, // ses gürültüsünü engellemek için true değeri veriyoruz
    //       autoGainControl: true, // ses otomatik kazanç kontrolü için true değeri veriyoruz
    //       latency: 0, // video gecikmesini belirliyoruz (0-1 arasında bir değer alır) 
    //       displaySurface: 'browser', // video yüzeyini belirliyoruz (browser, application, browser, monitor, window) 

    //     },
    //     audio: {
    //       echoCancellation: true, // ses yankılanmasını engellemek için true değeri veriyoruz 
    //       noiseSuppression: true, // ses gürültüsünü engellemek için true değeri veriyoruz
    //       autoGainControl: true, // ses otomatik kazanç kontrolü için true değeri veriyoruz
    //       channelCount: 2, // ses kanal sayısını belirliyoruz (1 veya 2 olabilir)
    //       latency: 0, // ses gecikmesini belirliyoruz (0-1 arasında bir değer alır) 
    //     }, 
    //   }) // burada sadece video için izin istiyoruz ama aynı zamanda ses için de izin isteyebiliriz
    //     .then(stream => { // izin verildiğinde stream objesi döner ve bu stream objesini video elementine atıyoruz ki kameradan gelen görüntüyü görebilelim
    //       const video = document.querySelector('video') // video elementini seçiyoruz
    //       video.srcObject = stream // video elementinin srcObject özelliğine stream objesini atıyoruz ki kameradan gelen görüntüyü görebilelim
    //       video.style.transform = 'scaleX(-1)' // videoyu ters çeviriyoruz
    //       video.onloadedmetadata = () => { // video elementi yüklendiğinde çalışacak fonksiyon
    //         video.play() // videoyu oynatıyoruz
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
    return (
        <div>Facetime</div>
    )
}

export default Facetime