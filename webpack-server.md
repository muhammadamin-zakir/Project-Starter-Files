# bundle klasörünü oluşturur
# kullanımı: npm run build
# "build": "webpack --progress"


# bundle klasöürünü oluşturur ve değişikleri sürekli izler değişiklik olduğu halde bundle klasöürünü günceller
# kullanımı: npm run build
# "build": "webpack --watch"

# webpack "webpack-dev-server" sayesinde 3200 portunda çalışan port oluşturacak
# bu ayarı webpack.config.js içindeki
# =>
    devServer: {
    port: 3200,
    index: "index.html"
  }
#  --output-public-path=/bundles/ sayesinde
# javascript dosyamızda sürekli değişiklik yaptıkça bundle.js sürekli yenileneceği için  webpack serveri sürekli aktif tutacak.
# kullanımı: npm run start 
# "start": "webpack-dev-server --output-public-path=/bundles/  --mode development --open --hot"

# webpack server sürekli çalışması gerektiğinden farklı bir terminalden açık tutmak gereklidir. 