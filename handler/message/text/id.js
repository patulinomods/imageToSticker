exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas sticker yang anda buat dari bot ini serta video, gambar maupun data lainnya yang anda dapatkan dari Source code / bot ini.
- Source code / bot tidak boleh digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
    • seks / perdagangan manusia
    • perjudian
    • perilaku adiktif yang merugikan 
    • kejahatan
    • kekerasan (kecuali jika diperlukan untuk melindungi keselamatan publik)
    • pembakaran hutan / penggundulan hutan
    • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan

Source Code BOT : https://github.com/YogaSakti/imageToSticker
NodeJS WhatsApp library: https://github.com/open-wa/wa-automate-nodejs

Best regards, Yoga Sakti.`
}

exports.textMenu = (pushname) => {
    return `
Beleuza, ${pushname}! 👋️
Aqui estão alguns dos recursos do bot Z4X! ✨

Sticker Creator:
1. *#sticker*
Para transformar a imagem em um adesivo.
Usar: enviar imagens com a legenda #sticker ou responder a imagens que foram enviadas com #sticker

2. *#sticker* _<Link da imagem>_
Para mudar a imagem de url para adesivo.
Usar: #sticker https://assets.wired.com/photos/w_1720/wp-content/uploads/2016/04/chat_bot-01.jpg

3. *#gifsticker* _<Link do gif>_ / *#stickergif* _<Giphy URL>_
Para transformar um GIF em um adesivo (somente Giphy)
Uso: enviar mensagens com o formato *gifsticker https://media.giphy.com/media/JUvI2c1ddyzkwK4RlV/giphy.gif*

4. *#memesticker* _<teks atas>_ | _<teks bawah>_
Para fazer um meme de adesivo com texto superior e inferior
Uso: enviar imagem com legenda _ *#meme top me | você sob *_, ou você também pode responder a uma imagem existente.

Baixar:
1. *#tiktok* _<link do tik tok>_
Para baixar vídeos do vídeo tiktok.
Uso: enviar mensagens com o formato *# tiktok https://www.tiktok.com/@itsandani/video/6869248690381425922*

2. *#fb* _<post/video link>_
Para baixar vídeos do Facebook.
Uso: enviar mensagem com o formato *# fb https://www.facebook.com/.....*

3. *#ig* _<instagram post link>_
Para baixar fotos e vídeos do Instagram.
Uso: enviar mensagens com o formato *# ig https://www.instagram.com/p/CHJSUCgpAxd/?utm_source=ig_web_copy_link*

4. *#twt* _<twitter post link>_
Para baixar fotos e vídeos do Twitter.
Uso: enviar mensagem com o formato *# twt https://twitter.com/ntsana_/status/1306108658747324672*

Lain-lain:
1. *#translate* _<Codigo do idioma>_
Para interpretar mensagens no idioma especificado.
Uso: Responder / citar / responder a mensagem que você deseja traduzir com _ * # translate id * _ <- id é o código do idioma. o código do idioma pode ser visto em * https: //bit.ly/33FVldE*

2. *#resi* _<kurir>_ _<nomer resi>_
Para verificar o status de entrega de mercadorias, lista de mensageiros: jne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex.
Uso: enviar mensagem com o formato _ * # resi jne 1238757632 * _

3. *#meme* _<teks atas>_ | _<teks bawah>_
Para criar um meme com texto para cima e para baixo
Use: envie uma foto com o texto _ * # meme top me | Você tem menos de * _ ou também pode responder a uma imagem existente.

4. *#ceklokasi*
Verifique a localização da propagação de covid-19 na área ao seu redor (kelurahan).
Uso: enviar sua localização e responder / citar / responder a localização enviada com _ * #ceklokasi * _

Espero que você tenha um ótimo dia! ✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah beberapa fitur admin grup yang ada pada bot ini!

1. *#kick* @user
Para remover membros do grupo (pode ser mais de 1).

2. *#promote* @user
Para promover membros a administradores do grupo.

3. *#demote* @user
Para rebaixar os administradores do Grupo.

4. *#tagall*
Para mencionar todos os membros do grupo.

5. *#del*
Para deletar uma mensagem do bot (responda a mensagem do bot com #del) `
}

exports.textDonasi = () => {
    return `
Olá, obrigado por usar este bot, para apoiar este bot você pode ajudar doando através do seguinte link:

http://mpago.la/11SeC1Q

A doação será usada para o desenvolvimento e operação deste bot.
Obrigado.`
}
