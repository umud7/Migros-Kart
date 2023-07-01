
let mesaj = 
`
Migros'a xoşgeldiniz.
Money Kartınız varmı ?
1-Evet
2-Hayır
`;

//335
const mehsullar = [
    {
        mehsulIsmi : "Süd",
        fiyat : 15
    },
    {
        mehsulIsmi : "Uşaq Bezi",
        fiyat: 100
    },
    {
        mehsulIsmi : "Quşbaşı",
        fiyat : 220
    }
]


//true veya false
let netice = confirm(mesaj);
let odenecekMebleğ;

if(netice){
    //Money kartı vardır.
    let Ad = prompt("Adınızı Giriniz :");
    let soyAd = prompt("Soyadinizi giriniz");

    const musteri = new Musteri(Ad,soyAd,netice,mehsullar);
    
     odenecekMebleğ = musteri.hesapla();

    alert(
        `Müşteri Bilgileri : ${musteri.getAd()} ${musteri.getSoyAd()}
        Ödenecek Tutar : ${odenecekMebleğ}
        `);


}else{
    const musteri = new Musteri(null,null,netice,mehsullar);
    odenecekMebleğ = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekMebleğ}`)
}