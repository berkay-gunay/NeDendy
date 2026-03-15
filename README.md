# Ne Dendy?

## Proje nasıl Çalıştırılır ?

- " Node.js " yüklü olmalıdır.

1. Terminal üzerinden proje dizinine gidin:
   cd ne-dendy-dashboard
2. Gerekli kütüphaneleri yükleyin ve çalıştırın.  
    - npm install  
    - npm run dev
3. Terminalde beliren http://localhost:5173/ (veya benzeri) adrese giderek projeyi görüntüleyebilirsiniz.

## Teknik Tercihler ve Nedenleri

1. Istenildiği üzere proje React kullanılarak yazılmıştır.
2. İstenen CSV okuma işlemi için "Papaparse" kullanılmıştır. İstemci tarafında büyük verileri tarayıcıyı dondurmadan, hızlı ve hatasız bir şekilde JSON formatına dönüştürebildiği için tercih edilmiştir.
3. Veri akışı, filtreleme ve anlık güncellemeler sadece useState ve useEffect kullanılarak sağlanmıştır. Projenin boyutu göz önüne alındığında Redux gibi ekstra bir kütüphane kurulmasına gerek görülmemiştir.
4. Kullanıcıların veriyi hızlı okuyabilmesi adına gereksiz detaylardan arındırılmış, renk kodlarıyla (örneğin duyguların kırmızı, yeşil, gri şeklinde olması) desteklenmiş temiz bir arayüz tasarlanmıştır.


## Zaman Kısıtlaması Nedeniyle Yapılamayanlar

- Burada geliştirilebilir veya yapılabilir iki ana nokta var. Onlar da arayüz ve tablonun filtreleme işlemi. Arayüz sade oldu ve çok şık olduğu da söylenemez. Verilerin kontrol edilirken iyi ayırt edilebilmesi için gerekli CSS kodlamaları gerçekleştirildi fakat sayfanın genelinde header kısmı başta olmak üzere çok daha şık olabilirdi. Tailwind CSS ya da daha öncesinde kullandığım Bootstrap ile daha iyi, şık ve ölçekli bir arayüz oluşturabiliriz. Bu konu haricinde, tablo sayfalara ayrılabilir ya da filtrelemeler yapılarak istenen bilgiye daha hızlı erişim sağlanabilir. Veri boyutu çok fazla olmadığı için ve kısıtlı zamandan ötürü bunlar bu etapta yapılamadı.

