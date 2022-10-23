import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialValue = [
  {
    id: uuidv4(),
    title: "SELAMAT DATANG DI WONDERFUL BANTEN",
    subtitle: "Keindahan alam yang diakui Dunia dapat kamu lihat di Provinsi Banten",
    description:
      "Keindahan alam yang dimiliki Provinsi Banten menjadikannya sebagai wilayah yang masuk rekomendasi untuk dikunjungi saat liburan. Memiliki Pantai, Gunung, Tempat Bersejarah dan Wahana Atraksi yang ada di Provinsi Banten yang siap kalian kunjungi kapan saja.",
  },
  {
    id: uuidv4(),
    title: "REKOMENDASI WISATA",
    subtitle: "Destinasi Wisata Yang Wajib Anda Kunjungi",
    description: "Membantu kamu untuk menemukan tempat wisata terbaik yang sesuai dengan keinginan sebelum memulai petualangan mu di Banten.",
  },
  {
    id: uuidv4(),
    title: "BERITA WISATA",
    subtitle: "Berita Menarik Terkini Seputar Destinasi Wisata Banten",
    description: "Dapatkan berita terkini seputar destinasi wisata yang ada di Banten untuk kamu yang menarik untuk dibaca.",
  },
  {
    id: uuidv4(),
    title: "ARTIKEL BERITA",
    subtitle: "MENARIK DAN INFORMATIF",
    description: "Menyajikan berita terhangat yang menarik dan informatif sebagai bacaan yang mermanfaat untuk mengisi waktu kosong liburanmu.",
  },
  {
    id: uuidv4(),
    title: "WISATA KULINER FAVORIT",
    subtitle: "Kelezatan kuliner khas Banten yang dapat memanjakan lidahmu",
    description: "Kunjungi destinasi wisata kuliner terbaik untuk menghilangkan lapar dan haus agar mengembalikan energimu disaat berlibur.",
  },
];

export const contentsReducer = createSlice({
  name: "contents",
  initialState: {
    contents: initialValue,
  },
  reducers: {
    submitContent: (state, action) => {
      state.contents = [...state.contents, action.payload];
    },
    handleDelete: (state, action) => {
      state.contents = state.contents.filter((content) => content.id !== action.payload);
    },
    handleUpdate: (state, action) => {
      state.contents = state.contents.map((content) => {
        if (content.id === action.payload) {
          content.completed = !content.completed;
        }
        return content;
      });
    },
  },
});

export const { submitContent, handleDelete, handleUpdate } = contentsReducer.actions;

export default contentsReducer.reducer;
