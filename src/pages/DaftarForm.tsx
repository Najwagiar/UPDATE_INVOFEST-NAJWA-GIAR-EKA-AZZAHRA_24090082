import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../components/ui/Button";

type FormData = {
  nama: string;
  email: string;
  password: string;
  bio: string;
  event: string;
};

export default function DaftarForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      <div>
        <label>Nama</label>
        <input {...register("nama")} className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label>Email</label>
        <input {...register("email")} className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label>Password</label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className="w-full border px-3 py-2 rounded pr-20"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-sm text-gray-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <div>
        <label>Bio</label>
        <textarea {...register("bio")} className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label>Event</label>
        <select {...register("event")} className="w-full border px-3 py-2 rounded">
          <option value="">Pilih...</option>
          <option value="seminar">Seminar</option>
          <option value="workshop">Workshop</option>
        </select>
      </div>

      <Button label="Daftar" variant="primary" />

    </form>
  );
}