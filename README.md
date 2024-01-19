# Storyku 

## <a name="introduction"></a> Introduction :
Proyek ini merupakan Take Home Challenge dengan waktu pengerjaan lebih kurang 30+ jam. Pengembangan proyek menggunakan ReactJS sebagai Front-end dan ExpressJS sebagai Back-end. 

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Libraries](#libraries)
- [Project Structure](#project-structures)
- [APK Link](#apk-link)

## <a name="features"></a> Features :
Proyek masih dalam pengembangan dan beberapa fitur-fitur yang tersedia sampai pada saat batas waktu selesai: 
 1. **Story List** <br>
 Merupakan tampilan seluruh Story dalam bentuk tabel.
 2. **Add Story** <br>
 Merupakan aksi penambahan Story baru dengan inputan berupa Title, Writer Name (Author), Synopsis, Category, Tags, Cover Image, Status.
 3. **Story Detail** <br>
 Merupakan aksi melihat tampilan detail dari sebuah Story. Bagian ini, pengguna dibatasi akses dalam mengubah data dari Story.
 4. **Edit Story** <br>
 Merupakan aksi untuk mengubah Story yang tersedia. 
 5. **Chapter List** <br>
 Tidak jauh beda dengan Story List, bagian ini ditampilkan pada saat pengguna melakukan aksi **Add Story**.


## <a name="libraries"></a> Libraries :
Penggunaan library pada pengembangan proyek:
 1. **ReactJS** <br>
 2. **ExpressJS** <br>
 
## <a name="project-structures"></a> Project Structure :
```
.
├── Frontend
│   ├── public  
│   └── src
│       ├── components
│       │   ├── AddChapter.js
│       │   ├── AddSTory.js
│       │   ├── EditStory.js
│       │   ├── LandingPage.js
│       │   ├── Sidebar.js
│       │   ├── StoryList.js
│       │   └── ViewStory.js
│       ├── App.css
│       ├── App.js
│       ├── index.css
│       └── index.js
│   
|
├── Backend
│   ├── config
│   │   ├── Database.js
│   ├── controllers
│   │   ├── StoryController.js
│   ├── models
│   │   ├── ChapterModel.js
│   │   ├── StoryModel.js
│   ├── public
│   │   └──  images
│   └── routes
│       └── StoryRoute.js
```

## <a name="apk-link"></a> Website URL :
Proyek dalam pengembangan. Maka dari itu, deployment yang tersedia hanya untuk bagian Front-end.
https://frontend-bigio.vercel.app/ 
