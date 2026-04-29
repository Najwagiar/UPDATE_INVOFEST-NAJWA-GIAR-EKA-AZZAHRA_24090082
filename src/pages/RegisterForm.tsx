import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";


import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";



type FormData = {
    email: string;
    password: string;
    password_confirm: string;
};

const schema = z.object({
    email: z.string().min(1, "isi bol"),
    password: z.string().min(8, "kie juga"),
    password_confirm: z.string().min(8, "Password tidak sesuai"),
});

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label="Email"
                    nama="email"
                    register={register}
                    error={errors.email?.message}
                />

                <InputPassword
                    label="Password"
                    nama="password"
                    register={register}
                    error={errors.password?.message}
                />

                <InputPassword
                    label="Password Confirm"
                    nama="password_confirm"
                    register={register}
                    error={errors.password_confirm?.message}
                />

                <div>
                    <Button label="Register" variant="primary"/>
                </div>

                <div>
                    Sudah punya akun? <Link to="/login">Login Disini</Link>
                </div>
            </form>
        </div>
    );
}