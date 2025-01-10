document.addEventListener("alpine:init", () => {
  Alpine.data("detail-pt", () => ({
    pete: [
      {
        id: 1,
        img: "https://i.pinimg.com/736x/32/af/d2/32afd2431d845f90668bcea60379b7a9.jpg",
        name: "Google",
        locasion: "Mountain View",
        title: "Machine Learning Engineer",
        desk: "Google mencari Machine Learning Engineer untuk mengembangkan model pembelajaran mesin yang inovatif.",
        tags2: ["On-Site", "Permanent", "Engineering"],
        salary: "$75",
        avgSalary: "$174,900", // Avg. Salary per year
        jobType: "Full-Time",
        saved: false,
        responsibility: [
          "Merancang dan mengimplementasikan model pembelajaran mesin yang efisien.",
          "Menganalisis data untuk meningkatkan performa model.",
          "Berkolaborasi dengan tim pengembang untuk integrasi model.",
          "Mengidentifikasi tren data yang relevan untuk proyek.",
          "Melakukan pengujian dan validasi model pembelajaran mesin.",
        ],
        qualification: [
          "Gelar sarjana di bidang Ilmu Komputer atau Teknik terkait.",
          "Pengalaman dalam pembelajaran mesin dan pemrograman.",
          "Pemahaman mendalam tentang teknik pembelajaran mendalam.",
          "Kemampuan untuk bekerja dengan tim lintas fungsi.",
        ],
        skills: ["Python", "TensorFlow", "Algoritma Pembelajaran Mesin"],
        companyDescription:
          "Google adalah perusahaan teknologi multinasional yang terkenal di seluruh dunia, mengembangkan berbagai produk dan layanan mulai dari pencarian, iklan, hingga sistem operasi mobile. Kami berkomitmen untuk memberikan pengalaman pengguna terbaik dan terus berinovasi dengan teknologi terbaru.",
        location: "USA",
      },
    ],
  }));
});
