class MigrosBase {
    indirimOrani = 30;

    constructor(Ad, soyAd, kartVarmi, mehsullar) {
        this.Ad = Ad;
        this.soyAd = soyAd;
        this.kartVarmi = kartVarmi;
        this.mehsullar = mehsullar;
    }

    hesabla() {
        let odenecekMebleğ = 0;
        if (this.mehsullariNezaretEt(this.mehsullar)) {

            //(100 * 50)/100    = 5000/100

            //Sebetim dolu.
            if (this.kartVarmi) {
                //Money kartı vardır
                this.mehsullar.forEach((mehsul) => {
                    odenecekMebleğ  += (mehsul.fiyat * (100 - this.indirimOrani) / 100);
                })
            } else {
                //Yoxdur
                this.mehsullar.forEach((mehsul) => {
                    odenecekMebleğ += mehsul.fiyat;
                })
            }


        } else {
            alert("En az bir tane ürün satın almalısınız.");
        }
        return odenecekMebleğ;
    }

    mehsullariNezaretEt(mehsullar) {
        if (mehsullar != null && mehsullar.length > 0) {
            return true;
        }
        return false;
    }

    getAd(){
        return this.Ad;
    }

    getSoyAd(){
        return this.soyAd;
    }
}