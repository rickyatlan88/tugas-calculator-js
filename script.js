// Fungsi Menghapus Nilai
function clearScreen() {
 document.getElementById("result").value = "";
}

// Fungsi Menampilkan Nilai
function display(value) {
 document.getElementById("result").value += value;
}
// mengevaluasi ekspresi dan mengembalikan hasil
function calculate() {
 var p = document.getElementById("result").value;
 var q = eval(p);
 document.getElementById("result").value = q;
}
