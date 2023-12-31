from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def home(request):
    return render(request,"home.html")

def homepage(request):
    return render(request,"homepage.html")

def homepage_2(request):
    return render(request,"homepage_2.html")


def location_page(request):
    return render(request, "location_page.html", context={})

def get_json_data(request):
    # data = YourModel.objects.all().values()  # Replace with your model and query
    data = [
  [
    "HAUS! CIJERAH",
    "Jl. Melong 1 Blok 5 No.11, Melong, Kota Cimahi, Jawa Barat",
    "Bandung",
    -6.923768,
    107.562233
  ],
  [
    "HAUS! CIKUTRA",
    "Jl. Cikutra no. 139 Rw 12, neglasari , kota bandung",
    "Bandung",
    -6.898679,
    107.643539
  ],
  [
    "HAUS! KARANG TENGAH",
    "Jl. Raden Saleh Ruko No. 2, Karang tengah, Ciledug, Tangerang 15157",
    "Tangerang",
    6.221289,
    106.705899
  ],
  [
    "HAUS! CIMAHI",
    "Jl. Raden Demang Harja kusuma , kota cimahi",
    "Bandung",
    -6.898679,
    107.643539
  ],
  [
    "HAUS! GEGER KALONG",
    "Jl. Gegerkalong girang no.48 RT 01/ Rw06 Kel. Isola , kec. Sukasari",
    "Bandung",
    -6.86346,
    107.589287
  ],
  [
    "HAUS! KIARA CONDONG",
    "Jl. Babakansari 1, no.8 Rt01/ Rw06, kota bandung , jawa barat",
    "Bandung",
    -6.898679,
    107.643539
  ],
  [
    "HAUS! METRO",
    "Jl. Venus Raya No. 6, Rancasari, Gede Bage",
    "Bandung",
    -6.940316,
    107.667168
  ],
  [
    "HAUS! UJUNG BERUNG",
    "Jl. Cigending No. 5 Bandung Jawa barat",
    "Bandung",
    -6.912193,
    107.702522
  ],
  [
    "HAUS! AIR MANCUR",
    "Jl. Jend Sudirman Rt02/Rw04, Sempur Kecamatan Bogor",
    "Bogor",
    -6.587656,
    106.797211
  ],
  [
    "HAUS! CIBINONG CITY MALL",
    "Cibinong City Mall, Lantai 1 Unit IS 1F 12-15 - Jl. Tegar Beriman no. 1 pakansari Cibinong, kab. Bogor 16914 Rt. 005 Rw. 012",
    "Bogor",
    -6.4839443504,
    106.8423873992
  ],
  [
    "HAUS! CIKEAS",
    "Jl. Letda Natsir No. 8, Cikeas Nagrak, Gunung Putri, Bogor 16966",
    "Bogor",
    -6.387431,
    106.939102
  ],
  [
    "HAUS! KEBON PEDES",
    "Jl.Kebon Pedes No.34 RT01/ Rw04, Kebon Pedes, Kecamatan Tanah Sereal Bogor",
    "Bogor",
    -6.567372,
    106.800644
  ],
  [
    "HAUS! CAMAN",
    "Jl. Jati Bening Raya No. 94, Pondok Gede, Bekasi",
    "Bekasi",
    -6.263897,
    106.945044
  ],
  [
    "HAUS! CIBITUNG",
    "Jl. Bosih Raya, Cibitung, Bekasi",
    "Bekasi",
    -6.251728,
    107.0870874
  ],
  [
    "HAUS! HANKAM",
    "Jl. Raya Hankam no.2 Rt01/ Rw 04 , Jatinagor, kec jatisampurna , bekasi",
    "Bekasi",
    -6.334112,
    106.923543
  ],
  [
    "HAUS! PAMULANG 1",
    "Jl. Surya Kencana No.88a RT001/06 Pamulang, Banten 15417",
    "Tangerang",
    6.354846,
    106.734026
  ],
  [
    "HAUS! KARANG SATRIA",
    "Jl. Karang Satria Kampung Gudang No. 20, (Depan Pizza PHD), Tambun Utara, Bekasi",
    "Bekasi",
    -6.216156,
    107.032969
  ],
  [
    "HAUS! KARTINI",
    "Jl. RA. Kartini 7 No.11 (Seberang mie aceh, sebelah jus buah), Margahayu, Bekasi Timur, Bekasi",
    "Bekasi",
    -6.24698,
    107.001894
  ],
  [
    "HAUS! NUSANTARA",
    "Jl. Nusantara Raya No. 18 (Samping Warkop Pancong Balap Dan Depan Bakso Wage), Bekasi Timur, Bekasi",
    "Bekasi",
    -6.2450022,
    107.0409632
  ],
  [
    "HAUS! PONDOK UNGU",
    "Jl. Pondok Ungu Permai Blok GG7 No. 25 (Depan Bebek Setan), Bekasi Utara, Bekasi",
    "Bekasi",
    -6.179795,
    107.003724
  ],
  [
    "HAUS! RAWALUMBU",
    "Jl. Meranti Raya No. 177, Rawalumbu, Bekasi",
    "Bekasi",
    -6.303623,
    106.991047
  ],
  [
    "HAUS! TAMBUN",
    "Jl. Raya mekarsari tengah nomor 02 RT 01/13 Mekarsari, Tambun selatan bekasi 17510 ( Sebelah alfamaRT mekarsari )",
    "Bekasi",
    6.25633,
    107.058263
  ],
  [
    "HAUS! BEJI",
    "Jl. H. Asmawi. Beji. Depok. Jawa Barat. 16421 (Dekat Bank BJB Beji)",
    "Depok",
    -6.379828,
    106.813744
  ],
  [
    "HAUS! BUARAN",
    "Jl. Buaran Raya Blok D No. 1(Sebelah SMU Bakti Samudra), Klender, Jakarta Timur 13440",
    "Jakarta",
    -6.220486,
    106.921003
  ],
  [
    "HAUS! KEADILAN",
    "Jl. Kejayaan 2-3 Abadijaya (Dekat Domino's Pizza), Sukmajaya, Depok",
    "Depok",
    -6.395516,
    106.851456
  ],
  [
    "HAUS! PEKAPURAN",
    "Jl. Pekapuran no.70, sukamaju baru kecamatan tapos Kota",
    "Depok",
    -6.400978,
    106.878532
  ],
  [
    "HAUS! SAWANGAN",
    "Jl. Raya sawangan no.18 kecamatan pancoran maskora depok",
    "Depok",
    -6.240392,
    106.82412
  ],
  [
    "HAUS! SENTOSA",
    "Jl. Sentosa Raya No.98b Rt.08/Rw.10, Kota Depok, Jawa barat , 16412",
    "Depok",
    -6.395744,
    106.836639
  ],
  [
    "HAUS! BINUS 1",
    "Jl. KH Syahdan 1, Palmerah, Jakarta Barat 11480",
    "Jakarta",
    -6.200469,
    106.7862817
  ],
  [
    "HAUS! BINUS 2",
    "Jl. KH Syahdan no.8 , RT 2/ Rw 11 Palmerah Jakarta Barat 11480",
    "Jakarta",
    -6.200698,
    106.784972
  ],
  [
    "HAUS! CIBUBUR",
    "Jl. Lapangan Tembak No. 1A (Depan Pasar Cibubur), Cibubur, Jakarta Timur 13730",
    "Jakarta",
    -6.345632,
    106.872088
  ],
  [
    "HAUS! CILANGKAP",
    "Jl. Cilangkap Baru No. 23, Cipayung, Jakarta Timur 13860",
    "Jakarta",
    -6.343672,
    106.908634
  ],
  [
    "HAUS! CIRACAS",
    "Jl. Bogor Raya No. 17 (Samping Alfamart), Cijantung, Jakarta Timur 13730",
    "Jakarta",
    -6.330404,
    106.867005
  ],
  [
    "HAUS! JAGAKARSA 1",
    "Jl. Srengseng Sawah , Jagakarsa, Jakarta Selatan 12630",
    "Jakarta",
    -6.345803,
    106.825982
  ],
  [
    "HAUS! KAHFI CIGANJUR",
    "Jl. Muhammad Kahfi 1 No.1 RT 10/ Rw04, cipedak jagakarsa. Jakarta Selatan 12630",
    "Jakarta",
    -6.350633,
    106.801637
  ],
  [
    "HAUS! KALISARI",
    "Jl. Kalisari No. 23-43 Rt09/ Rw 02, Cijantung, Jakarta Timur 13790",
    "Jakarta",
    -6.33677,
    106.855421
  ],
  [
    "HAUS! KAYU MANIS",
    "Jl. Supriyadi No.6 Rw 2, Utan kayu , matraman, jakarta timur 13120",
    "Jakarta",
    -6.197049,
    106.861659
  ],
  [
    "HAUS! KOJA",
    "Jl. Muncang No. 47 RT 02, Rw 012 Kecamatan Koja , Jakarta Utara 14270",
    "Jakarta",
    -6.115967,
    106.907899
  ],
  [
    "HAUS! KRESEK KOSAMBI",
    "Jl. Raya Kresek no.42, RW 12 Duri kosambi, jakarta barat 11750",
    "Jakarta",
    -6.176949,
    106.709435
  ],
  [
    "HAUS! MENCENG",
    "Jl. Menceng Raya No. 29, Cengkareng, Jakarta Barat 11730",
    "Jakarta",
    -6.123188,
    106.717716
  ],
  [
    "HAUS! PADEMANGAN",
    "Jl. Pademangan IV No.12 B RT01/ Rw03, kecamatan pademangan Jakarta Utara 14410",
    "Jakarta",
    -6.135838,
    106.842605
  ],
  [
    "HAUS! PANCORAN 2",
    "Jl. Pancoran barat  VII RT 08 Rw 06 no 20. Jakarta Selatan 12790",
    "Jakarta",
    -6.2516394,
    106.8366506
  ],
  [
    "HAUS! SEPATAN",
    "Jl. Raya Mauk KM 11 Blok F no. 1 pisangan jaya 15520",
    "Tangerang",
    -6.114404,
    106.571167
  ],
  [
    "HAUS! PETUKANGAN",
    "Jl. Masjid Darul Fallah No.22 RT 04/02 , Petukangan Utara. Jakarta Selatan 12260",
    "Jakarta",
    -6.234004,
    106.751487
  ],
  [
    "HAUS! POLTANGAN",
    "Jl. Poltangan Raya, Pasar Minggu, Jakarta Selatan 12510",
    "Jakarta",
    -6.295405,
    106.841441
  ],
  [
    "HAUS! CIPINANG",
    "Jl. Cipinang Muara RT 006/ Rw 014 Jakarta Timur 13420",
    "Jakarta",
    -6.227804,
    106.890183
  ],
  [
    "HAUS! PONDOK KELAPA",
    "Jl. Pondok Kelapa Raya Blok C4 No. 7, Duren Sawit, Jakarta Timur 43318",
    "Jakarta",
    -6.230593,
    106.935104
  ],
  [
    "HAUS! JAGAKARSA 2",
    "Jl. Raya Jagakarsa No. 6B RT 05/ Rw 02, kec. Jagakarsa. Jakarta Selatan 12620",
    "Jakarta",
    -6.326426,
    106.819517
  ],
  [
    "HAUS! SEASON CITY",
    "Mall Season City Jl. Prof. Dr. Latumeten Lantai GF Blok C25 No. 7-9. Jemb. Besi, Kec. Tambora, Jakarta Barat. DKI JAKARTA (patokan : depan yoshinoya) 11320",
    "Jakarta",
    -6.1527632198,
    106.7959767971
  ],
  [
    "HAUS! SUMUR BATU",
    "Jl. Sumur batu raya no.7 Rt11/ Rw2 Kecamatan. Kemayoran Jakarta pusat 10640",
    "Jakarta",
    -6.162604,
    106.865771
  ],
  [
    "HAUS! PEJATEN",
    "Jl. Pejaten Raya No. 10A, Pasar Minggu, Jakarta Selatan 12510",
    "Jakarta",
    -6.279071,
    106.839212
  ],
  [
    "HAUS! TANJUNG GEDONG",
    "Jl. Tanjung gedong no.23-24 RT 06/Rw 16 Kec Tomang, grogol. Jakarta Barat 11440",
    "Jakarta",
    -6.169319,
    106.79144
  ],
  [
    "HAUS! MAWAR",
    "Jl. Dr. Semeru no.19 Blok III, Kel. Kebon kelapa , kecamatan bogor",
    "Bogor",
    -6.590402,
    106.786087
  ],
  [
    "HAUS! REMPOA 2",
    "Jl. Pahlawan Raya No. 4, Ciputat Timur, Tangerang 12330",
    "Tangerang",
    -6.2824404,
    106.7613447
  ],
  [
    "HAUS! TEBET",
    "Jl. Tebet raya no 61-63 rt. 3/.3 tebet timur kota jakarta selatan depan pizza mastercheese 12820",
    "Jakarta",
    -6.227976,
    106.8563
  ],
  [
    "HAUS! PARUNG SERAB",
    "Jl. Raden Patah Parung Serab Ciledug. Patokan antara Indomaret dan Alfamart, Ciledug, Tangerang 15153",
    "Tangerang",
    -6.252705,
    106.703577
  ],
  [
    "HAUS! ROYAL PLAZA",
    "Jl. Ahmad Yani 16-18 (Royal Plaza) VII - 3/N2-19, Wonokromo, Kota Surabaya, Jawa Timur, 60243",
    "Surabaya",
    -7.3090289353,
    112.7348453438
  ],
  [
    "HAUS! BINONG",
    "Jl. Binong Raya no.12, Karawaci, Tangerang 15810",
    "Tangerang",
    -6.236121,
    106.58429
  ],
  [
    "HAUS! MERUYA",
    "Jl. Meruya Ilir Raya No. H1/15-16, Meruya, Jakarta Barat 11630",
    "Jakarta",
    6.197203,
    106.753433
  ],
  [
    "HAUS! CEGER",
    "Jl. Ceger Raya No. 42 , (Seberang Alfamidi Ceger Raya ), Pondok Aren, Tangerang 15222",
    "Tangerang",
    -6.262498,
    106.731239
  ],
  [
    "HAUS! CIBINONG",
    "Jl. Raya Mayor Oking Jaya Atmaja RT.03 / RW.02, Kelurahan Ciriung",
    "Bogor",
    -6.479873,
    106.863648
  ],
  [
    "HAUS! PONDOK UNGU 2",
    "Jl. Raya Candrabaga 26-5, Bahagia, Kecamatan Babelan , bekasi 17610",
    "Bekasi",
    -6.18589,
    107.00833
  ],
  [
    "HAUS! MERCUBUANA",
    "Jl. Raya Meruya Selatan No.19, Kel. Meruya, Jakarta Barat 11610",
    "Jakarta",
    6.211779,
    106.73788
  ],
  [
    "HAUS! CIRENDEU",
    "Jl. Raya Cirendeu No.29, RW.1, Cireundeu, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15419",
    "Tangerang",
    -6.314816,
    106.769513
  ],
  [
    "HAUS! TAJUR",
    "Jl. Raya Tajur No.22, Kecamatan Bogor",
    "Bogor",
    -6.63869,
    106.832367
  ],
  [
    "HAUS! GALAXY",
    "Jl. Pulo Ribung, Jaka Setia (Ex Aqualis), RT.03 / RW.07 Bekasi Selatan, Bekasi 17147",
    "Bekasi",
    -6.267074,
    106.974242
  ],
  [
    "HAUS! CITRA RAYA",
    "Ruko  Taman Palma Blok F 1 No.19 Kel.Cikupa Kec.Cikupa Kab.Tangerang 15710",
    "Tangerang",
    -6.235429,
    106.523277
  ],
  [
    "HAUS! KARBELA",
    "Jl. Karet Belakang Barat No. 21, RT.01 / RW.02, Karet Semangi, Setiabudi, Jakarta Selatan 12940",
    "Jakarta",
    -6.216229,
    106.824884
  ],
  [
    "HAUS! BANGKA",
    "Jl. Bangka Raya No. 29, Rt/Rw 013/05, Pela Mampang, Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12720",
    "Jakarta",
    -6.245241,
    106.815726
  ],
  [
    "HAUS! CIBIRU",
    "Jl. Raya Cibiru Blok Kudang Ikat, Pasir Biru No.11, Cibiru, Bandung, Jawa Barat",
    "Bandung",
    -6.934844,
    107.71941
  ],
  [
    "HAUS! PASAR LAMA",
    "Jl. Kisamaun no 131 kelurahan Sukasari, kecamatan Tangerang Kota Tangerang. 15118",
    "Tangerang",
    -6.180719,
    106.63058
  ],
  [
    "HAUS! JOMBANG",
    "Jl. Jombang Raya RT 003/009 Kel Pondok Pucung Kec Pondok Aren Tangerang Selatan 15414",
    "Tangerang",
    -6.294299,
    106.708574
  ],
  [
    "HAUS! JATIWARINGIN",
    "Jl. Jatiwaringin Raya No. 165/17 (Sebrang Bebek Kaleyo Jatiwaringin), Pondok Gede, Bekasi 17411",
    "Bekasi",
    6.2717491,
    106.9121424
  ],
  [
    "HAUS! BALEENDAH",
    "Jl. Raya Banjaran Renggas Condong RT 01/11 No 259 Desa Andir Kec.Baleendah",
    "Bandung",
    -7.0078186989,
    107.6124725342
  ],
  [
    "HAUS! CEMPAKA PUTIH",
    "Jl. Cemp. Putih No.20H, RT.7/RW.8, Cemp. Putih Tim., Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10510 (eks Rest Sobet)",
    "Jakarta",
    -6.176197,
    106.870154
  ],
  [
    "HAUS! CIPETE",
    "Jl. Cipete Raya No. 65 Cipete Selatan, Cilandak Jakarta Selatan 12410",
    "Jakarta",
    -6.2775297119,
    106.8003586241
  ],
  [
    "HAUS! GREEN VILLE",
    "Jl. Green Ville Blok BL No. 2 Jakarta Barat 11510",
    "Jakarta",
    -6.1693182948,
    106.7719330972
  ],
  [
    "HAUS! PLUIT",
    "Jl. Muara Karang Raya No.85, RT.13/RW.17, Pluit, Kec. Penjaringan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14450",
    "Jakarta",
    -6.1167087695,
    106.781378255
  ],
  [
    "HAUS! STT TELKOM BANDUNG",
    "Jl.n. Telkom University raya no. 237, Desa Sukapura, Bandung",
    "Bandung",
    -6.9724523971,
    107.6354660988
  ],
  [
    "HAUS! PGC",
    "Jl. Mayjen Sutoyo No.76, RW.11, Cililitan, Kec. Kramat jati, Kota Jakarta Timur,Daerah Khusus Ibukota Jakarta 13640, Lt. Ground stall 46",
    "Jakarta",
    6.2620881047,
    106.865809726
  ],
  [
    "HAUS! WARAKAS",
    "Jalan Gorontalo Raya ,RT012/RW.001, Sungai Bambu, Tanjung Priok, RT.12/RW.1, Sungai Bambu, Jakarta Utara, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14330",
    "Jakarta",
    -6.114653,
    106.88121
  ],
  [
    "HAUS! ANGGREK LOKA BSD",
    "BSD Sektor II-3 Blok BA No.3, Rawabuntu ,Serpong, Tangerang 15226",
    "Tangerang",
    -6.3023352356,
    106.6719317702
  ],
  [
    "HAUS! BUAH BATU",
    "Jl. Kliningan 21 Rt/Rw 001/005, Turangga, Lengkong, Kota Bandung",
    "Bandung",
    -6.9407689641,
    107.6285708414
  ],
  [
    "HAUS! KELAPA DUA TANGERANG",
    "Sentral Niaga Kelapa Dua, No.08, Kelapa Dua, Tangerang. 15138",
    "Tangerang",
    -6.2352615672,
    106.6207897953
  ],
  [
    "HAUS! JKT - PLAZA KALIBATA",
    "Jl. Raya Kalibata, RT.3/RW.2, Rawajati, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12750",
    "Jakarta",
    -6.2569397295,
    106.8554056343
  ],
  [
    "HAUS! CIPUTAT",
    "Jl. Pesanggrahan, Ciputat Timur, Tanggerang 15412",
    "Tangerang",
    -6.308282,
    106.75584
  ],
  [
    "HAUS! BINTARA",
    "Komplek Mas Naga Blok A/29 RT 001/ Rw 012, Bintara Jaya, Bekasi Barat, Kota Bekasi, Jawa Barat (Patokannya samping PHD)",
    "Bekasi",
    -6.229373,
    106.955398
  ],
  [
    "HAUS! HARAPAN INDAH",
    "Jl. Sentra Niaga Boulevard Blok B8 No.48, Pejuang, Medan Satria, Kota Bekasi, Jawa Barat",
    "Bekasi",
    -6.186092037,
    106.9807172241
  ],
  [
    "HAUS! KARAWACI",
    "Jl. Borobudur Raya, Karawaci, Tangerang 15138",
    "Tangerang",
    -6.214891,
    106.601868
  ],
  [
    "HAUS! KARAWANG",
    "Jl. Galuh Mas Raya Blok Y Nomor 6 Bumi Telukjambe, Desa Sukaluyu, Kecamatan Teluk Jambe Timur, Kab Karawang, Jawa Barat",
    "Karawang",
    -6.3290774,
    107.2897861
  ],
  [
    "HAUS! KUTABUMI",
    "Pasar Kemis, Jl. Kutabumi Raya, Periuk, Tangerang 15560",
    "Tangerang",
    -6.154721,
    106.572825
  ],
  [
    "HAUS! SEMOLOWARU",
    "Jl. Nginden Semolowaru no.101 Kav.10, RT07/08 kelurahan Menur Pumpungan, Kecamatan Sukolilo, Surabaya, Jawa Timur, 60118",
    "Surabaya",
    -7.299923,
    112.771095
  ],
  [
    "HAUS! SIWALANKERTO",
    "Jl. Siwalankerto No 141 RT3/5 Kel. Siwalankerto, kec.wonocolo, Kota Surabaya Jawa timur, 60236",
    "Surabaya",
    -7.337855,
    112.737627
  ],
  [
    "HAUS! MULYOSARI",
    "Jl. raya Mulyosari 284 RT 007/02 Kel. Kalisari kec. Mulyorejo Surabaya Jawa timur, 60112",
    "Surabaya",
    -7.268326,
    112.796299
  ],
  [
    "HAUS! WIYUNG",
    "Jl. Raya Menganti No.732, Kupang Krajan, Kec. Wiyung, Kota SBY, Jawa Timur 60227",
    "Surabaya",
    -7.308987,
    112.674308
  ],
  [
    "HAUS! RUNGKUT MADYA",
    "Jl. Rungkut madya no 81 Kel. Rungkut kidul kec.rungkut, Surabaya Jawa timur, 60293",
    "Surabaya",
    -7.331468,
    112.7781
  ],
  [
    "HAUS! GWALK CIPUTRA",
    "Ruko G Walk K 9 Citraland , Jl. Niaga Gapura No.14, Lidah Kulon, Lakarsantri, Surabaya City, Jawa Timur 60217",
    "Surabaya",
    -7.290429,
    112.655124
  ],
  [
    "HAUS! MANUKAN",
    "Jl. Manukan Tama A3 no 27 atau 79, Manukan Kulon, Kec. Tandes, Kota SBY, Jawa Timur 60185",
    "Surabaya",
    -7.261437,
    112.66746
  ],
  [
    "HAUS! NGAGELREJO",
    "Jl. Bratang Gede No.142-144, Ngagelrejo, Kec. Wonokromo, Kota SBY, Jawa Timur 60245",
    "Surabaya",
    -7.2986677,
    112.7507204
  ],
  [
    "HAUS! PAMULANG 2",
    "Jl. Benda Raya Blok F7 No. 16, Ciputat, Tangerang 15416",
    "Tangerang",
    -6.32558,
    106.70892
  ],
  [
    "HAUS! BINTARO",
    "Jl. Bintaro Utama Blok ED1 No.14, Bintaro Sektor 5, Tangerang Selatan 15222",
    "Tangerang",
    -6.2702050196,
    106.7305531838
  ],
  [
    "HAUS! GARUT CIMANUK",
    "Jl. Cimanuk No.85 Ds. Jayaraga, Garut Jawa Barat",
    "Garut",
    -7.2065761287,
    107.8945599125
  ],
  [
    "HAUS! SERANG CICERI",
    "Jl. K H Abdul Fatah Hasan 27, Sumurpecung, Serang, Banten",
    "Serang",
    -6.1242322417,
    106.1720876716
  ],
  [
    "HAUS! YOGYA TAMAN SISWA",
    "Jl. Taman Siswa 59 Yogyakarta RT053 RW017, Kel.Wiroguna Kec. Mergangsan, D I Yogyakarta",
    "Yogyakarta",
    -7.8077345791,
    110.377550555
  ],
  [
    "HAUS! YOGYA GODEAN",
    "Guyangan RT007/RW003, Kel. Nogotirto Kec. Gamping, Sleman - Yogyakarta",
    "Yogyakarta",
    -7.7782320067,
    110.3372831276
  ],
  [
    "HAUS! YOGYA PALAGAN",
    "Jl. Palagan tentara pelajar No 51, jongkang RT013/035 sariharjo, Ngaglik Sleman D.I.Yogyakarta",
    "Yogyakarta",
    -7.7450889277,
    110.3735778835
  ],
  [
    "HAUS! YOGYA KALIURANG",
    "Jl. Kaliurang KM 5,5 No 71B, RT 001 /RW 001 Karangwuni, Kel. Catur Tunggal, Kec. Depok Sleman Yogyakarta",
    "Yogyakarta",
    -7.7609411187,
    110.3806048616
  ],
  [
    "HAUS! YOGYA KAPTEN TENDEAN",
    "Jl. Kapten Piere Tendean No 40 Yogyakarta, Rt047/010 kel. Wirobrajan kec. Wirobrajan, D I Yogyakarta",
    "Yogyakarta",
    -7.8045481317,
    110.3509125973
  ],
  [
    "HAUS! PANARUB",
    "Jl. Moh Toha Km. 2, Karawaci, Tangerang 15113",
    "Tangerang",
    -6.170476,
    106.618387
  ],
  [
    "HAUS! ANTAPANI",
    "Jl. Purwarkarta No.56 Antapani Kidul",
    "Bandung",
    -6.915098,
    107.653099
  ],
  [
    "HAUS! PORIS",
    "Jl. Komp. Poris indah no.15 RT 004/ Rw003, poris gaga , tanggerang city, banten 15143",
    "Tangerang",
    -6.171175,
    106.681877
  ],
  [
    "HAUS! CIREBON CIREMAI",
    "Jl. Ciremai Raya No.67A, Kel. Kecapi Kec. Harjamukti, Cirebon Jawa Barat 45142",
    "Cirebon",
    -6.7511380771,
    108.560386567
  ],
  [
    "HAUS! CIREBON PERJUANGAN",
    "Jl. Perjuangan Kav. No.13 RT001 RW006 Kel. Karyamulya Kec. Kesambi, Kota Cirebon Jawa Barat 45131",
    "Cirebon",
    -6.7363582222,
    108.5296730851
  ],
  [
    "HAUS! YOGYA GLAGAHSARI",
    "Jl. Glagahsari, Gg. Manggis, UH IV 568, Warungboto, Umbulharjo, Yogyakarta City, Special Region of Yogyakarta 55164",
    "Yogyakarta",
    -7.8099068602,
    110.3873468401
  ],
  [
    "HAUS! YOGYA SETURAN",
    "Jl. Seturan Raya, Kledokan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    "Yogyakarta",
    -7.7720160402,
    110.4094617263
  ],
  [
    "HAUS! YOGYA JAKAL UII",
    "Jl. Kaliurang Dusun Lodadi, RT002 RW005 Umbulmartani, Ngemplak, Sleman Regency, Special Region of Yogyakarta 55584",
    "Yogyakarta",
    -7.688643614,
    110.4187326788
  ],
  [
    "HAUS! SUKABUMI BENTENG ",
    "Jl. Arif Rahman Hakim,RT 03 Benteng, Kec. Warudoyong, Kota Sukabumi, Jawa Barat 43131",
    "Sukabumi",
    -6.9213491847,
    106.922659197
  ],
  [
    "HAUS! SUKABUMI CIKOLE",
    "Jl. Ir. H. Juanda, No.52, Cikole, Waluya, Gunungparang, Cikole, Kota Sukabumi, Jawa Barat 43111",
    "Sukabumi",
    -6.9201552503,
    106.9310749381
  ],
  [
    "HAUS! SERANG CIKANDE",
    "Jl. Cikande Permai Blok F1 No.2, Kabupaten Serang, Banten 42186",
    "Serang",
    -6.2180445967,
    106.34906045
  ],
  [
    "HAUS! CIREBON SUPERBLOCK",
    "Komp. Chelsea Blue Ruko 9 - 10, Jl. DR. Cipto Mangunkusumo No.26, Pekiringan, Kec. Kesambi, Kota Cirebon, Jawa Barat 45131",
    "Cirebon",
    -6.7184298092,
    108.5496771853
  ],
  [
    "HAUS! TAMAN KOPO INDAH ",
    "Taman Kopo Indah 2 Ruko 2A-60, Desa Rahayu, Kecematan Margaasih, Bandung, Jawa Barat.40218",
    "Bandung",
    -6.9613329,
    107.5594369
  ],
  [
    "HAUS! SARINAH",
    "Jl. M.H. Thamrin No.11, RT.8/RW.4, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350",
    "Jakarta",
    -6.187753596,
    106.8239224677
  ],
  [
    "HAUS! CILEGON TEMU PUTIH",
    "Jl. Raya Temu Putih Kav. Blok C No. 2, Masigit, Kec. Jombang, Kota Cilegon, Banten 42414",
    "Cilegon",
    -6.017826,
    106.048767
  ],
  [
    "HAUS! SOLO SUPOMO",
    "Jl. Prof. DR. Supomo No.60, Punggawan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57139",
    "Solo",
    -7.5615617707,
    110.8151214853
  ],
  [
    "HAUS! SOLO JAYA WIJAYA",
    "Jl. Jaya Wijaya 113-119, Mojosongo, Kec. Jebres, Kota Surakarta, Jawa Tengah 57127",
    "Solo",
    -7.536264047,
    110.8394245855
  ],
  [
    "HAUS! SOLO SUTOYO",
    "Ruko Ngemplak, Jl. Letjen Sutoyo No.21A, Nusukan, Kec. Banjarsari, Kota Surakarta, Jawa Tengah 57135",
    "Solo",
    -7.5512816882,
    110.8297699974
  ],
  [
    "HAUS! SOLO GARUDA MAS",
    "Jl. Garuda Mas No.22, Gonilan, Karangasem, Kec. Laweyan, Kabupaten Sukoharjo, Jawa Tengah 57145",
    "Solo",
    -7.5476991234,
    110.770268808
  ],
  [
    "HAUS! SOLO UNS",
    "Jalan Kartika I No. 1, RT 01/ RW 18, Ngoresan, Jebres, Kec. Jebres, Kota Surakarta, Jawa Tengah 57126",
    "Solo",
    -7.554263041,
    110.861079697
  ],
  [
    "HAUS! DELTA SARI",
    "Deltasari Indah Blok AN No. 21, RT 03, RW 12, Desa Kureksari ,Kacamatan Waru, sidoarjo, Jawa Timur  61256a",
    "Sidoarjo",
    -7.364667,
    112.735083
  ],
  [
    "HAUS! GRESIK KOTA BARU",
    "Gresik Kota Baru (GKB) Jl. Kalimantan No.149 RT01 /RW015, Yosowilangun Manyar, Gresik, Jawa Timur",
    "Gresik",
    -7.144206,
    112.615509
  ],
  [
    "HAUS! TAMAN PINANG",
    "Sidokare Asri blok BA-9 RT19/RW04, Ds.Sepande, Kec.Candi, Sidoarjo, Jawa Timur  61271",
    "Sidoarjo",
    -7.458611,
    112.701917
  ],
  [
    "HAUS! KETINTANG",
    "Ketintang Barat 1 RT06/RW06, Kel. Ketintang, Kec. Gayungan, Surabaya, Jawa Timur 60231",
    "Surabaya",
    -7.308816,
    112.72152
  ],
  [
    "HAUS! DUKUH KUPANG",
    "Jl. Raya Dukuh Kupang No.35A , Putat Jaya, Kec. Sawahan, Surabaya  Jawa Timur 60225",
    "Surabaya",
    -7.281111,
    112.716743
  ],
  [
    "HAUS! SIDOARJO SURAPATI",
    "Jl. Raden Wijaya 1-31, RW 01, Sidokumpul, Kec. Sidoarjo, Kab. Sidoarjo, Jawa Timur 61212",
    "Sidoarjo",
    -7.447425,
    112.719818
  ],
  [
    "HAUS! SIDOARJO PONDOK JATI",
    "Jl. Pondok Jati BF-01A, Pondokjati, Pagerwojo, Kec. Buduran, Kab. Sidoarjo, Jawa Timur 61252",
    "Sidoarjo",
    -7.440112,
    112.70356
  ],
  [
    "HAUS! SEMARANG ANJASMORO",
    "Jl. Puri Anjasmoro Raya 75, Karangayu, Kec, Semarang Barat, Kota Semarang 50149",
    "Semarang",
    -6.9753374944,
    110.3904773703
  ],
  [
    "HAUS! CIBADUYUT",
    "Jl. Ters Cibaduyut Situtarate No. 22B RT.06/RW.01, Desa Cangkuang Kulon, Kec, Dayeuhkolot, Bandung, Jawa Barat",
    "Bandung",
    -6.9640323596,
    107.5926270114
  ],
  [
    "HAUS! SRENGSENG",
    "Jalan Srengseng Raya RT 002/06 Nomor 88A. Kelurahan Srengseng, Kecamatan Kembangan, Kotamadya Jakarta Barat, Provinsi DKI Jakarta 11630",
    "Jakarta",
    -6.2103622308,
    106.7592063174
  ],
  [
    "HAUS! SEMARANG GAJAH",
    "Ruko Gajah No. 138 A, Kelurahan Sambirejo dan Siwalan, Kecamatan Genuk dan Gayamsari, Kotamadya Semarang, Provinsi Jawa Tengah 50166",
    "Semarang",
    -6.985279,
    110.448207
  ],
  [
    "HAUS! YOGYA MALIOBORO",
    "Jl. Malioboro No. 49, Kel. Sosromenduran, Kec. Gedongtengon, Kota Yogyakarta, DIY Yogyakarta",
    "Yogyakarta",
    -7.7949058073,
    110.3653240148
  ],
  [
    "HAUS! TNG - GRAHA RAYA",
    "Jl Boulevard Graha Raya Paku Jaya Kec.Serpong utara Kota tangerang Selatan Banten 15220",
    "Tangerang",
    -6.2334601303,
    106.6787152444
  ],
  [
    "HAUS! SMG - SARINAH",
    "Gedung Sarinah Banyumanik Jl.Jati Raya No.17 50264",
    "Semarang",
    -7.069965,
    110.421822
  ],
  [
    "HAUS! BDG - PADALARANG",
    "Jl Raya Padalarang No. 38B, Desa Kertamulya, Kec. Padalarang, Bandung Barat, Jawa Barat, 40533",
    "Bandung",
    -6.8464090166,
    107.4898903266
  ],
  [
    "HAUS! BGR - INDRAPRASTA",
    "Jl Achmad Adnawijaya RT06/RW15, Bantarjati Kec.Bogor Utara Kota Bogor Jawabarat 16153",
    "Bogor",
    -6.5695717446,
    106.811489997
  ],
  [
    "HAUS! TNG - PURI BETA",
    "Jl Puri Beta 1 Lot 7 No 50 (CBD Ciledug) Kel. Larangan Utara, Kec. Larangan, Kota Tangerang, Banten 15154",
    "Tangerang",
    -6.230473,
    106.725565
  ],
  [
    "HAUS! CKR - GRAHA ASRI",
    "Jl. Citanduy Raya No 34 Simpangan Kec Cikarang Utara Bekasi Jawa Barat 17530",
    "Cikarang",
    -6.2782642727,
    107.1800249822
  ],
  [
    "HAUS! KWG - CIKAMPEK",
    "Jl.Ir Haji Juanda,Kel. Sarimulya, Kec Kotabaru Kabupaten Karawang Jawa Barat 41374",
    "Karawang",
    -6.4202007021,
    107.4721926675
  ],
  [
    "HAUS! JKT - PONDOK PINANG",
    "Jl Ciputat Raya Kel Pondok Pinang Kec.Kebayoran Lama Kota Jakarta selatan 12310",
    "Jakarta",
    -6.2645446645,
    106.7751183383
  ],
  [
    "HAUS! JKT - RADIO DALAM",
    "Jl Radio Dalam Raya No 47, Blok Haji Hamali RT 2 / RW 14 Gandaria Utara  Kecamatan Kebayoran Baru Kota Jakarta Selatan DKI Jakarta 12140",
    "Jakarta",
    -6.2589790027,
    106.7894686587
  ],
  [
    "HAUS! TNG - DASANA INDAH",
    "Jl Dasana Indah, Bojong Nangka, Kecamatan Kelapa Dua, Kabupaten Tangerang, Banten 15810",
    "Tangerang",
    -6.2545393302,
    106.602434009
  ],
  [
    "HAUS! KWG -TANJUNGMEKAR",
    "Jl Proklamasi Tanjung Pura, tanjung mekar Kec karawang barat. Kab Karawang karawang jawa barat 41316",
    "Karawang ",
    -6.2723181192,
    107.2727705282
  ],
  [
    "HAUS! JKT - GEMPOL RAYA ",
    "Jl Gempol Raya RT 10 / RW 2 Kec. Cipayung, Kel Ceger Kota.Jakarta Timur 13820",
    "Jakarta",
    -6.3152039993,
    106.8933666677
  ],
  [
    "HAUS! JKT - SUMAGUNG",
    "Jl Sumagung 3 RT14 RW2 Kelapa Gading Timur, Kec. Kelapa Gading, Jakarta Utara 14240",
    "Jakarta",
    -6.1703839955,
    106.9017180027
  ],
  [
    "HAUS! BGR - TAMAN YASMIN",
    "Ruko Taman Yasmin Sektor VI No.184, RT.05/RW.09, Kp. Parung Jambu, Curugmekar, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16113",
    "Bogor",
    -6.5614900036,
    106.7657963677
  ],
  [
    "HAUS! BGR - KOTA WISATA",
    "Jl. Canadian Broadway, Limus Nunggal, Kec. Cileungsi, Kabupaten Bogor, Jawa Barat 16820",
    "Bogor",
    -6.3679516999,
    106.9707069561
  ],
  [
    "HAUS! SKB - CIBADAK",
    "Jl Siliwangi, Sundawenang, Kecamatan Cibadak, Kabupaten Sukabumi, 43351",
    "Sukabumi",
    -6.8938413553,
    106.78618728
  ],
  [
    "HAUS! TNG - TAMAN CIBODAS",
    "Jl. Taman Cibodas Raya, RW.010, Sangiang Jaya, Kec. Periuk, Kota Tangerang, Banten 15138",
    "Tangerang",
    -6.1849559959,
    106.599956656
  ],
  [
    "HAUS! TNG - BANJAR WIJAYA",
    "Jl Wijaya Kusuma Ruko Azores B7/14, Perumahan Banjar Wijaya RT1 RW3 Kel Poris Plawad, Cipondoh, Kota Tangerang - Banten 15142",
    "Tangerang",
    -6.1927092627,
    106.6582155203
  ],
  [
    "HAUS! DPK - GRAND DEPOK CITY",
    "Jl Boulevard Grand Depok City - Ruko Water Park GDC Kelurahan Tirtajaya Kecamatan Sukmajaya, Kota Depok - Jawa Barat 16412",
    "Depok",
    -6.420065685,
    106.8285100184
  ],
  [
    "HAUS! TNG - NUSA LOKA BSD",
    "Jl. Sumatra 14 Mekar Jaya, Kec. Serpong, Kota Tangerang Selatan, Banten 15414",
    "Tangerang",
    -6.300648,
    106.689638
  ],
  [
    "HAUS! JKT - GANDARIA",
    "Jl. Gandaria Terusan/K. H. Syafi'i Hamdzani No.43, RT.9/RW.6, Kby. Lama Utara, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240",
    "Jakarta",
    -6.2457409313,
    106.7842963996
  ],
  [
    "HAUS! DPK - CITAYAM",
    "Jl. Raya Citayam 1, Ratu Jaya Kec. Cipayung Kota Depok, Jawa Barat 16436",
    "Depok",
    -6.4506930013,
    106.8009273499
  ],
  [
    "HAUS! TNG - GONDRONG CIPONDOH",
    "Jl. Kihajar Dewantoro 5-17, Gondrong, Kec. Cipondoh, Kota Tangerang, Banten 15146",
    "Tangerang",
    -6.1975989965,
    106.6944086676
  ],
  [
    "HAUS! TNG - DUTA GARDEN",
    "Duta Gardenia Ruko Food Square Blok H Jl. Husen Sastra Negara, RT.027/RW.008 Jurumudi Baru, Benda Kota Tangerang, Banten 15124",
    "Tangerang",
    -6.1447469945,
    106.6810683148
  ],
  [
    "HAUS! TNG - BERINGIN RAYA",
    "Jl. Beringin Raya, RT.004/RW.008, Nusa Jaya, Kec. Karawaci, Kota Tangerang, Banten 15116",
    "Tangerang",
    -6.1980796623,
    106.6147616209
  ],
  [
    "HAUS! BGR - CIOMAS",
    "Jl. Raya Ciomas 270, Ciomas, Kabupaten Bogor, Jawa Barat 16118",
    "Bogor",
    -6.6017338146,
    106.7734828032
  ],
  [
    "HAUS TNG - VILLA TANGERANG INDAH",
    "Jl. Raya Villa Tangerang Indah 1 RT.001/RW.011, Periuk, Kec. Periuk Kota Tangerang Banten 15131",
    "Tangerang",
    -6.170747,
    106.595471
  ],
  [
    "HAUS! TNG - TALAGA BASTARI",
    "Jl. Taman Palem Raya 4-18 Wana Kerta, Kec. Sindang Jaya Kabupaten Tangerang Banten 15560",
    "Tangerang",
    -6.193795,
    106.500244
  ],
  [
    "HAUS! JKT - SUMUR BOR",
    "Jl. Sumur Bor No 29H RT7 RW2 Cengkareng Barat, Kec Cengkareng Kota Jakarta Barat, DKI Jakarta 11840",
    "Jakarta",
    -6.1501824,
    106.7184351
  ],
  [
    "HAUS! TNG - BUKIT SERUA INDAH",
    "Jl. Bukit Raya, Serua Indah Kec. Ciputat, Kota Tangerang Selatan Banten 15414",
    "Tangerang",
    -6.311299,
    106.722298
  ],
  [
    "HAUS! TNG - CURUG",
    "Jl. Raya Curug Suka Bakti, Kec. Curug Kabupaten Tangerang Banten 15810",
    "Tangerang",
    -6.259913,
    106.558797
  ],
  [
    "HAUS! BGR - CITRA INDAH CITY",
    "Jl. Citra Indah, Singajaya Kec. Jonggol Kabupaten Bogor Jawa Barat 16830",
    "Bogor",
    -6.456778,
    107.034505
  ],
  [
    "HAUS! DPK - MEKARSARI CIMANGGIS",
    "Jl. Mekarsari Raya 2-7, Mekarsari, Kec. Cimanggis, Kota Depok, Jawa Barat 16452",
    "Depok",
    -6.365382,
    106.863121
  ],
  [
    "HAUS! BGR - CIAPUS",
    "Jl. Raya Ciapus Kelurahan Kota Batu, Kecamatan Ciomas Kabupaten Bogor Jawa Barat 16610",
    "Bogor",
    -6.6191666949,
    106.7830330742
  ],
  [
    "HAUS! DPK - PENGASINAN SAWANGAN",
    "Jl. Raya Pengasinan, Pengasinan, Kec. Sawangan, Kota Depok, Jawa Barat 16518",
    "Depok",
    -6.410422,
    106.754973
  ],
  [
    "HAUS! TNG - VILLA DAGO PAMULANG",
    "Jl. Vila Dago Raya 8 Benda Baru, Kec. Pamulang Kota Tangerang Selatan Banten 15415",
    "Tangerang",
    -6.3428636668,
    106.7190823266
  ],
  [
    "HAUS! TNG - HASYIM ASHARI",
    "Jl. KH Hasyim Ashari, RT.002/RW.009, Cipondoh, Kec. Cipondoh, Kota Tangerang, Banten 15122",
    "Tangerang",
    -6.1931899966,
    106.6740713383
  ],
  [
    "HAUS! BGR - DURIAN RAYA",
    "Jl. Durian Raya No.25, RT.07/RW.05, Baranangsiang, Kec. Bogor Timur, Kota Bogor, Jawa Barat 16143",
    "Bogor",
    -6.6159541048,
    106.8163484409
  ],
  [
    "HAUS! DPK - JATIMULYA CILODONG",
    "Jl. Kp. Sawah, Jatimulya Kec. Cilodong Kota Depok Jawa Barat 16413",
    "Depok",
    -6.446311,
    106.828513
  ],
  [
    "HAUS! BKS - KRANGGAN PERMAI",
    "Jl. Wijaya Kusuma, RT.017/RW.012 Jatisampurna, Kec. Jatisampurna Kota Bekasi, Jawa Barat",
    "Bekasi",
    -6.369643,
    106.91557
  ],
  [
    "HAUS! BKS - NANGKA RAYA",
    "Jl. Nangka Raya, RT.001/RW.017 Kayuringin Jaya, Kec. Bekasi Selatan, Kota Bekasi, Jawa Barat, 17135",
    "Bekasi",
    -6.22964,
    106.983894
  ],
  [
    "HAUS! SRG - LOPANG RAYA",
    "Jl. Raya Banten Lopang, Kec. Serang Kota Serang Banten 42111",
    "Serang",
    -6.102798,
    106.155172
  ],
  [
    "HAUS! JKT - JELAMBAR UTAMA",
    "Jl. Jelambar Utama 27-40, RT.2/RW.8, Jelambar Baru, Kec. Grogol petamburan Kota Jakarta Barat DKI Jakarta 11460",
    "Jakarta",
    -6.152883,
    106.783661
  ],
  [
    "HAUS! BKS - PURI GADING",
    "Jl. Raya Puri Gading, RT.005/RW.003, Jatimelati, Kec. Pd. Melati, Kota Bks, Jawa Barat 17415",
    "Bekasi",
    -6.311817,
    106.938336
  ],
  [
    "HAUS! CKR - INDUSTRI CIKARANG",
    "Jl. Raya Industri 20 rt.001/rw.008, cikarang Kota, Kec. Cikarang Utara, Kabupaten Bekasi, Jawa Barat, 17530",
    "Cikarang",
    -6.260491,
    107.147038
  ],
  [
    "HAUS! BKS - JATI KRAMAT RAYA",
    "Jl. Raya Jatikramat 189-23, RT.004/RW.001 Jatimekar, Kec. Jatiasih, Kota Bekasi, Jawa Barat, 17421",
    "Bekasi",
    -6.287802,
    106.943031
  ],
  [
    "HAUS! JKT - PISANGAN LAMA",
    "Jl. Pisangan Lama III no. 20, RT.6/RW.4, Pisangan Timur,  Jakarta Timur, DKI Jakarta, Daerah Khusus Ibukota Jakarta , 13120",
    "Jakarta",
    -6.210237,
    106.878668
  ],
  [
    "HAUS! BGR - SUKAHATI",
    "Jl. Raya Sukahati No. 3 Cibinong, Kec. Cibinong, Sukahati, Jawa Barat, Kabupaten Bogor, Jawa Barat 16911",
    "Bogor",
    -6.4860340631,
    106.8171073642
  ],
  [
    "HAUS! CRB - KUTAGARA",
    "Jl. Jagasatru No.3, Jagasatru, Kec. Pekalipan, Kota Cirebon, Jawa Barat 45115",
    "Cirebon",
    -6.7287492252,
    108.5653519533
  ],
  [
    "HAUS! CRB - SHELL KESAMBI",
    "Jl. Kesambi, Sunyaragi, Kec. Kesambi, Kota Cirebon, Jawa Barat 45132",
    "Cirebon",
    -6.7371947923,
    108.5494910888
  ],
  [
    "HAUS! DPK - RADEN SANIM",
    "Jl. R. Sanim 20-10 Tanah Baru, Kecamatan Beji Kota Depok Jawa Barat 16426",
    "Depok",
    -6.376038,
    106.80135
  ],
  [
    "HAUS! BKS - PATRIOT",
    "Jl. Patriot 36-95, RT.005/RW.003, Jakasampurna, Kec. Bekasi Barat, Kota Bekasi, Jawa Barat,17145",
    "Bekasi",
    -6.24446,
    106.967034
  ],
  [
    "HAUS! PENGUMBEN",
    "Jl. Panjang Raya Kampung baru no.40 RT 04/ Rw 03 sukabumi selatan, Jakarta Barat 11560",
    "Jakarta",
    -6.222637,
    106.771648
  ],
  [
    "HAUS! BKS - PRAMUKA RAWALUMBU",
    "Jl. Pramuka, RT.004/RW.002 Sepanjang Jaya, Kec. Rawalumbu  Kota Bekasi Jawa Barat  17114 (sebelah toko elektronik gemilang)",
    "Bekasi",
    -6.269259,
    107.000699
  ],
  [
    "HAUS! DIPATIUKUR",
    "Jl. Dipatiukur no 108-96 Lebak gede, kecamatan Coblong , bandung jawa barat",
    "Bandung",
    -6.872932,
    107.554871
  ],
  [
    "HAUS! BDG - AMIR MACHMUD",
    "Jl. Nasional III No. 802-794, Padasuka, Kec. Cimahi Tengah, Kota Cimahi, Jawa Barat 40526",
    "Bandung",
    -6.8691776914,
    107.5328516384
  ],
  [
    "HAUS! BGR - POMAD BOGOR",
    "Ruko Ciluar, Jl. Raya Simpang Pomad Ruko No. 323 C, Ciluar, Bogor Utara, RT.01/RW.09, Ciluar, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16710",
    "Bogor",
    -6.5474334683,
    106.8232256193
  ],
  [
    "HAUS! SKB - CISAAT",
    "Jl. Raya Cibatu Cisaat No.320  Nagrak, Kec. Cisaat Kabupaten Sukabumi Jawa Barat 43152",
    "Sukabumi",
    -6.904528,
    106.886583
  ],
  [
    "HAUS! BGR - SURYA KENCANA",
    "Jl. Siliwangi No.276, RT.01/RW.05, Sukasari, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16131",
    "Bogor",
    -6.6099779293,
    106.80458202
  ],
  [
    "HAUS! BKS - DUKUH ZAMBRUD",
    "Jl. Zamrud Selatan No.2, RT.001/RW.017 Padurenan, Kec. Mustika Jaya,  Kota Bekasi Jawa Barat 17156",
    "Bekasi",
    -6.318423,
    107.018517
  ],
  [
    "HAUS! JKT - CITRA GARDEN 7",
    "Jl. Citra Garden VII 29, RT.7/RW.11 Kalideres, Kec. Kalideres, Kota Jakarta Barat Daerah Khusus Ibukota Jakarta  11840",
    "Jakarta",
    -6.146077,
    106.700744
  ],
  [
    "HAUS! BDG - CIUMBULEUIT",
    "Jl. Ciumbuleuit, Hegarmanah, Kec. Cidadap, Kota Bandung, Jawa Barat  40141",
    "Bandung",
    -6.8799116192,
    107.6034318709
  ],
  [
    "HAUS! CKR - TARUM BARAT CIKARANG",
    "Jl. Tarum Bar. II 30-9,  Jayamukti, Kec. Cikarang Pusat Kabupaten Bekasi Jawa Barat 17530",
    "Bekasi",
    -6.311728,
    107.165083
  ],
  [
    "HAUS! BKS - MUTIARA GADING",
    "Jl. Mutiara Gading Timur No.11 RT.006/RW.029, Mustika Jaya  Kec. Mustika Jaya, Kabupaten Bekasi  Jawa Barat 17158",
    "Bekasi",
    -6.286429,
    107.032289
  ],
  [
    "HAUS! BKS - SUMBER ARTHA BINTARA",
    "Jl. Sumber Artha Raya No.08 No. 10 RT.005/RW.003, Jakasampurna Kec. Bekasi Barat, Kota Bekasi Jawa Barat 17136",
    "Bekasi",
    -6.249336,
    106.945929
  ],
  [
    "HAUS! JKT - TAMAN KOTA KEMBANGAN",
    "Jl. Perumahan Taman Kota Kembangan Utara, Kec. Kembangan, Kota Jakarta Barat, DKI Jakarta 11610",
    "Jakarta",
    -6.160077,
    106.753783
  ],
  [
    "HAUS! BKS - MUCHTAR TABRANI",
    "Jl. KH. Muchtar Tabrani No.6, RT.006/RW.001, Perwira, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17143",
    "Bekasi",
    -6.220362,
    107.002949
  ],
  [
    "HAUS! SBG - OTISTA",
    "Jl. Otto Iskandardinata No.19, Karanganyar, Kec. Subang, Kabupaten Subang, Jawa Barat 41211",
    "Subang",
    -6.567436,
    107.763397
  ],
  [
    "HAUS! JKT - STASIUN GAMBIR",
    "Jalan Medan Merdeka Timur No.27, Kel. Gambir, Kec. Gambir, Jakarta Pusat 10110, DKI Jakarta, Indonesia (Depan Roti O)",
    "Jakarta",
    -6.1762197001,
    106.8303556528
  ],
  [
    "HAUS! BKS - KALIABANG",
    "Jl. Pejuang No.32, RT.003/RW.002, Harapan Jaya, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17124",
    "Bekasi",
    -6.1981166004,
    106.9895473998
  ],
  [
    "HAUS! JKT - CITY PARK",
    "Jl. Boulevard Raya 17, RT.7/RW.14,Cengkareng Timur, Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11730",
    "Jakarta",
    -6.136508,
    106.731276
  ],
  [
    "HAUS! DPK - ITC DEPOK",
    "Jl. Margonda Raya No.56, Depok, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16431",
    "Depok",
    -6.3924103636,
    106.8230872116
  ],
  [
    "HAUS! PWK - UPI PURWAKARTA",
    "Jl. Nasional 4 8, Nagri Kaler, Kec. Purwakarta, Kabupaten Purwakarta, Jawa Barat, 41115",
    "Purwakarta",
    -6.539333,
    107.44402
  ],
  [
    "HAUS! BGR - CIKARET CIBINONG",
    "Jl. Raya Cikaret No.60, RT.3/RW.13, Pabuaran,Kec. Cibinong, Kabupaten Bogor, Jawa Barat, 16916",
    "Bogor",
    -6.4738047846,
    106.8435633932
  ],
  [
    "HAUS! BDG - RANCAEKEK",
    "Jl. Raya Dangeur, Rancaekek, Mekargalih, Kec. Jatinangor, Kabupaten Bandung, Jawa Barat 40394",
    "Bandung",
    -6.9548874466,
    107.771786139
  ],
  [
    "HAUS! BKS - KEMANG RAYA JATICEMPAKA",
    "Jl. Kemang Raya 4-26, RT.001/RW.002 Jaticempaka, Kec. Pd. Gede Kota Bekasi Jawa Barat 17411",
    "Bekasi",
    -6.274623,
    106.986859
  ],
  [
    "HAUS! BKS - PLASA CIBUBUR",
    "Jl. Transyogi, RT.001/RW.003, Jatikarya,Kec. Jatisampurna, Kota Bks,Jawa Barat 17435 (sebelah optik tunggal)",
    "Bekasi",
    -6.3755606885,
    106.9153281033
  ],
  [
    "HAUS! JKT - MALL CIJANTUNG",
    "Mal Cijantung, Jl. Pendidikan No.37, RT.1/RW.4, Cijantung, Kec. Ps. Rebo, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13770 (Lantai 1 deket Kopi Kenangan)",
    "Jakarta",
    -6.3118240212,
    106.862429996
  ],
  [
    "HAUS! JKT - BINUS 3",
    "Jl. Kyai H. Syahdan No.8, RT.2/RW.12, Palmerah, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480",
    "Jakarta",
    -6.2004342071,
    106.7870911289
  ]
]

    return JsonResponse(data, safe=False)
