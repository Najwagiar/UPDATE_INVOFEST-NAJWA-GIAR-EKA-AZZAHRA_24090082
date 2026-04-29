import { Button } from "../components/ui/Button";
import SpeakerCard from "../components/ui/SpeakerCard";

export default function Seminar() {
  return (
    <div>
      <section
        id="hero"
        className="py-10 flex gap-10 justify-between items-center "
      >
        <div className="w-2/3 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1
              data-aos="fade-right"
              data-aos-delay="300"
              className="text-[#7A1E3A] font-bold text-3xl sm:text-4xl lg:text-5xl"
            >
              IT Seminar
            </h1>

            <p
              data-aos="fade-right"
              data-aos-delay="400"
              className="text-[#7A1E3A] text-lg sm:text-xl font-medium"
            >
              “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan
              Kompetitif”
            </p>
          </div>

          <p>
            Seminar nasional yang membahas strategi dan arsitektur teknologi
            untuk menciptakan sistem di mana manusia dan AI bekerja sebagai
            mitra yang sinergis.Yang bertujuan mengubah paradigma dari
            persaingan menjadi kolaborasi, serta meningkatkan pengetahuan
            peserta dalam merancang teknologi AI yang berpusat pada manusia.
          </p>

          {/* Button */}
          <div className="flex gap-3">
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
            alt=""
          />
        </div>
      </section>

      <section id="speaker" className="py-16">
              <h2 className="text-3xl font-bold text-center text-red-900 mb-10">
                Temui Pembicara Khusus Kami
              </h2>
      
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <SpeakerCard
                  name="Dery Agung Triyadi"
                  role="AWS Indonesia"
                  imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png"
                />
      
                <SpeakerCard
                  name="Sowam Habibi"
                  role="Google Indonesia"
                  imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png"
                />
              </div>
            </section>
    </div>
  );
}
