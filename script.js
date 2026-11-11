const API_URL =
"https://script.google.com/macros/s/AKfycbxpmucl4anc-R93jDDtACZYmxNNMe5ycwlsfqIKTas4qjtgOfcYcNN5bAlb-wnYwy2llw/exec";

document.getElementById("daftarForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = new FormData();

    formData.append("nama",
        document.getElementById("nama").value);

    formData.append("kelas",
        document.getElementById("kelas").value);

    formData.append("jk",
        document.getElementById("jk").value);

    formData.append("wa",
        document.getElementById("wa").value);

    formData.append("waortu",
        document.getElementById("waortu").value);

    try{

        const response = await fetch(API_URL,{
            method:"POST",
            body:formData
        });

        const result = await response.text();

        alert(result);

        document.getElementById("pesan").innerHTML =
        "✅ Pendaftaran Berhasil Terima kasih telah mendaftar pada Ekskul Silat Al-Istiqomah Telagawaru. Data Anda telah tersimpan. Silakan menunggu informasi lebih lanjut.";

        this.reset();

    }catch(error){

        alert(error);

        document.getElementById("pesan").innerHTML =
        "❌ Gagal mengirim data";
    }

});