import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../components/ui/Button";
import DaftarForm from "./DaftarForm";

const schema = z.object({
    email: z.string().email({ message: "Email harus diisi dengan benar" }),
    password: z.string().min(8, { message: "Password minimal 8 karakter" })
});

interface FormData {
    email: string;
    password: string;
}

export default function LoginForm() {
    // const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");
    const { register, handleSubmit, formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema)
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


                <div>
                    <Button label="Login" variant="primary"/>
                </div>
            </form>
            <div style={{marginTop: "80px"}}>
                <DaftarForm/>
            </div>
        </div>
    );
}