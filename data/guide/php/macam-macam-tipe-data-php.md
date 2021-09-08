# Tipe data

PHP memiliki 7 tipe data, yaitu:

### 1. Boolean

Tipe data _boolean_ adalah tipe data yang hanya memiliki dua buah value atau isi. yaitu `true` dan `false`, atau 0 dan 1. _True_ yang di sebut dengan 1 dan _false_ di sebut 0. Tipe data boolean sering di gunakan untuk memeriksa ketersediaan atau memeriksa nilai kebenaran pada sebuah data. Berikut ini adalah cara penulisan variabel yang bertipe data boolean.

```php
<?php
	$x = true;
	$y = false;

	echo $x; //Hasil: 1
	echo "<br>";
	echo $y; //Tidak ada hasil yang ditampilkan
?>
```

Pada contoh kode diatas pada baris nomor 2 terdapat variabel `$x` dengan nilai `true`, dan pada baris nomor 3 terdapat variabel `$y` dengan nilai false. Variabel $x dan $y itulah disebut variabel yang memiliki tipe data _boolean_.

Apabila kedua variabel itu dipaksa untuk ditampilkan dengan perintah echo maka variabel `$x` yang memiliki nilai `true` akan menampilkan angka 1, dan variabel `$y` yang memiliki nilai `false` tidak menampilkan apa-apa. Biasanya tipe data _boolean_ ini digunakan untuk menguji apakah button login sudah di set/di-klik yang akan kita pelajari lebih jauh kelak pada series _login_ dan _register_ pada PHP.

### 2. Integer

Tipe data _integer_ adalah tipe data yang berbentuk angka yang berbentuk bilangan asli atau bilangan bulat. Seperti yang saya jelaskan sebelumnya pada tipe data _string_, untuk penulisan tipe data _integer_ tidak perlu menambahkan tanda petik, karena akan dibaca sebagai string jika Anda menambahkan tanda petik pada tipe data _integer_. Berikut ini adalah contoh penulisan tipe data _integer_ pada PHP.

```php
<?php
    $bilangan_pertama = 12;
    $bilangan_kedua = 78;
    //Kedua variabel di atas merupakan variabel yang bertipe data integer.
?>
```

Terdapat dua buah variabel yang bernama `$bilangan_pertama` dan `$bilangan_kedua`. Kedua variabel tersebut berisikan angka yang berbentuk bilangan bulat atau bilangan asli. Oleh sebab itu kedua variabel di atas di sebut sebagai variabel yang bertipe data _integer_.

### 3. Float/ Double

Tipe data _float_ atau di sebut juga tipe data _double_ adalah tipe data yang berisi bilangan desimal. Cara penulisannya hampir sama dengan tipe data integer karena tidak memerlukan tanda petik di awal dan di akhir isi variabel _float_. Berikut ini adalah contoh penulisan variabel yang bertipe data _float_ pada PHP.

```php
<?php
    $angka = 12.177;
    //variabel di atas adalah variabel yang bertipe data float karena berisi bilangan desimal.
?>
```

### 4. String

Tipe data _string_ adalah tipe data yang berbentuk _text_ dan untuk cara penulisan tipe data string di letakkan di tengah-tengah tanda petik. di awali dengan tanda petik dan di akhiri dengan tanda petik juga. Berikut ini adalah contoh penulisan tipe data string di PHP.

```php
<?php
  $tes = "Usia Saya Sekarang 23 Tahun";
  // variabel tes di atas merupakan tipe data string karena berisi text atau kalimat.
?>
```

Pada contoh tipe data string di atas kita misalkan terdapat sebuah variabel dengan nama tes yang berisi kalimat `“Usia Saya Sekarang 23 Tahun”`. Walaupun ada angka/_integer_ didalam tanda petik tersebut, tipe data variabel itu tetap saja string. Maka, variabel tes tersebut merupakan variabel yang bertipe data _string_.

### 5. Array

_Array_ adalah sebuah tipe data yang menyimpan banyak isi di dalam sebuah variabel. Array seperti sebuah tas yang di dalamnya bisa saja berisi pulpen, buku, penggaris dan lainnya. Isi dari pada variabel _array_ di tandai dengan masing-masing angka yang sudah di terapkan menurut urutannya. Berikut adalah contoh penulisan variabel yang bertipe data _array_. Pada series selanjutnya kita akan membahas lebih dalam jenis-jenis _array_ berserta cara penggunaannya pada PHP

```php
<?php
  // membuat array
  $tas = array('Pulpen','Buku Tulis','Penggaris');

  // menampilkan isi array
  echo $tas[0]."<br>";
  echo $tas[1]."<br>";
  echo $tas[2]."<br>";
?>
```

Untuk menggunakan tipe data _array_ bisa menggunakan fungsi _array()_. Kemudian diisi dan di pisahkan dengan tanda koma pada tiap-tiap isi variabel. Pada contoh variabel _array_ tas di atas terdapat pulpen, buku tulis dan penggaris. Dimana pulpen berada pada urutan/index 0, buku tulis berada pada urutan/index 1, dan penggaris berada pada urutan/index 2. Angka yang diberikan pada tiap-tiap isi array di mulai dari 0 dan bertambah 1 (++) sesuai urutan.

### 6. Object

Penggunaan tipe data object ini sering digunakan dalam konsep _Object Oriented Programming_ (OOP). Contoh nyatanya seperti pada gambar ilustrasi _class_ dan _object_ diatas. Dimana sebuah object (dalam hal ini rumah secara fisik) terbentuk dari proses instansiasi sebuah _class_(dalam hal ini blueprint/rancangan bangunan). Untuk pemahaman lebih lanjut tentang konsep Object dapat dipelajari pada series PHP khusus yang akan membahas OOP pada PHP.

Tipe data _object_ adalah tipe data yang tidak sekedar menyimpan data tetapi berisikan juga informasi bagaimana untuk mengolah data tersebut. Maksudnya, pada tipe data data lain seperti : _integer_, _float_, _string_ hanya berisikan tipe data dia sendiri, sedangkan pada tipe data object dapat berisikan tipe-tipe data lain.

#### Contoh 1 :

```php
<?php
  class Sapa
  {
    var $str;
  }

  // membuat object pesan. ini disebut instansiasi
  $pesan = new Sapa();

  //memberikan nilai utk properti str pada objek pesan
  $pesan->str="Hello Wordl!";

  // mencetak nilainya (pengolahan data)
  echo $pesan->str;
?>
```

#### Contoh 2 :

```php
<?php
  class Sapa{
   var $str ;

   public function tampung($temp){
    return $this->str=$temp;
   }

   public function cetak(){
    echo $this->str; // mencetak nilainya (pengolahan data)
   }
  }

  // membuat object pesan. ini disebut instansiasi
  $pesan = new Sapa();

  //memanggil method tampung dan memberikan nilainya
  $pesan->tampung("Hello World!");

  $pesan->cetak(); // memanggil method cetak
?>
```

Kalau kita lihat Contoh 1 dan Contoh 2 menghasilkan _output_ yang sama namun dengan cara pengolahan data yang berbeda. Pada Contoh 1 _object_ pesan memberikan nilai untuk _property_ `str` dengan mengakses langsung _property_-nya, kemudian untuk mencetak nilainya juga langsung mengakses _property_-nya.

Pada Contoh 2, _object_ pesan memanggil method tampung untuk memberikan nilai bagi _property_ `str`, kemudian untuk mencetak nilainya _object_ pesan memanggil method cetak dimana pada _method_ cetak terjadi proses pencetakan nilai propertynya.

### 7. NULL

Tipe data _null_ adalah sebuah tipe data spesial yang menunjukkan sebuah variabel belum memiliki nilai/data. Tipe data null pada PHP mirip dengan tipe data none pada _python_.

Untuk menggunakan tipe data null pada sebuah variabel dapat langsung diset :

```php
$var1 = NULL;
atau
$var1 = null
```

Penulisan NULL bisa berupa huruf besar atau kecil maupun keduanya, karena pada dasarnya bersifat _case-insensitive._
