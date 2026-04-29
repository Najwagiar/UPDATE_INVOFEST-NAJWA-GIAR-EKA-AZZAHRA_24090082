import Header from "../components/Header";
import Button from "../components/ui/Button";
import { Collapse } from "../components/ui/Collapse";
import SpeakerCard from "../components/ui/SpeakerCard";
import { Card } from "../components/ui/Card";
import Footer from "../components/Footer";

function App() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.",
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan?",
      description:
        "Invofest akan diselenggarakan pada tanggal 15-17 November 2024 di Jakarta Convention Center (JCC), Jakarta, Indonesia.",
    },
    {
      title: "Siapa saja yang dapat mengikuti Invofest?",
      description:
        "Invofest terbuka untuk semua kalangan, terutama mahasiswa, pelajar, profesional muda, dan siapa saja yang tertarik dengan teknologi dan inovasi. Acara ini dirancang untuk memberikan inspirasi dan pengetahuan kepada semua peserta, tanpa memandang latar belakang atau tingkat keahlian.",
    },
    {
      title: "Apa yang di dapat pemenang dalam kompetisi?",
      description:
        "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat.",
    },
  ];

  const cardItems = [
    {
      title: "IT Seminar",
      description:
        "Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
    },
    {
      title: "IT Talkshow",
      description:
        "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    },
    {
      title: "IT Competition",
      description:
        "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
    },
    {
      title: "IT Workshop",
      description:
        "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    },
  ];

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto">
        <section
          id="hero"
          className="py-10 flex gap-10 justify-between items-center "
        >
          <div className="w-2/3 flex flex-col gap-6">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt=""
              className="w-96"
            />
            <p>
              Invofest (Informatics Vocational Festival) adalah festival tahunan
              yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
              Indonesia dalam menghadapi era digital. Dengan mengusung tema
              “Beyond Limits, Beyond Intelligence: Innovate for a Smarter
              Tomorrow ”.
            </p>

            <div className="flex gap-3">
              <Button label="Info Selengkapnya" variant="primary" />
              <Button label="Hubungi Panitia" variant="outline" />
            </div>
          </div>
          <div className="w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt=""
            />
          </div>
        </section>

        <section id="speaker" className="py-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-red-900">
              Narasumber Kami
            </h2>
            <p className="text-gray-500 mt-2">
              Para pembicara inspiratif di INVOFEST
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </section>

        <section id="cards" className="py-24 px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900">
              Tentang Invofest
            </h2>
            <p className="text-gray-500 mt-2">
              Rangkaian kegiatan yang ada di INVOFEST
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {cardItems.map((item, index) => (
              <Card key={index} className="w-full">
                <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
                <p>{item.description}</p>
                <Button
                  label="Info Selengkapnya"
                  variant="primary"
                  className="mt-4"
                />
              </Card>
            ))}
          </div>
        </section>

        <section id="collapse" className="py-24 px-3">
          <div className="text-center mb-12">
            <h2 className="text-31xl md:text-4xl font-bold text-gray-700">
              Punya Pertanyaan? Lihat{" "}
              <span className="text-red-900">Disini</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat
              melihat daftar pertanyaan di bawah ini.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 pb-24">
          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </div>

      {/* ✅ FOOTER DITAMBAHKAN DI SINI */}
      <Footer />
    </>
  );
}

export default App;