module.exports = {
    data: {
        guildId: "TOKENLERIN GİRİCEĞİ SUNUCU ID", // Tokenleri Sokucağınız Sunucu ID
    },
    bot: {
        id: "BOTUN KENDİ ID VEYA DİĞER ADIYLA APPLİCATİON ID", // Botun kendi ID
        token: "BOT TOKEN", // BOT TOKEN
        secret: "BOT SECRET CODE", // BOT SECRET CODE
        status: "BOT DURUMU (online, idle, dnd, offline)", // () içinde verdiklerimizden herhangi birisini yazınız.
        statusName: "BOT DURUMU YAZISI", // ( Örnek/ ADiletisim İzliyor. )
    },
    web: {
        url: "http://localhost:3001", //BU KISMI, BOTUNUZA GELİP > OAuth2 > Add Redirects ( Yönlendirme Ekle ) > BU ADRESİ ORAYA YAPIŞTIRINIZ
        port: 3001, // BU KISMA ELLEMEYİN // Aynı şekilde yukarıdaki kısmada ellmeyin aksi taktirde çalışmaz!
    }
}