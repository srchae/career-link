"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { PATHS } from "@/constants/paths";
// import { api } from "@/services/api";
import { LoginFormData } from "@/types/components/loginForm";

import { Checkbox } from "../inputs/Checkbox";
import { InputField } from "../inputs/InputField";

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      keepLogin: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
    // try {
    //   const response = await api.login(data);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center flex-col mb-5">
        <p className="text-3xl font-bold mb-4">로그인</p>
        <p>퓨잇 출결관리 서비스에 오신 것을 환영합니다.</p>
      </div>
      <div className="w-full max-w-md bg-background shadow-lg rounded-lg p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <InputField
            label="아이디"
            type="text"
            placeholder="아이디를 입력해주세요."
            {...register("username")}
            errors={errors.username}
          />

          <InputField
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password")}
            errors={errors.password}
          />
          <section className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm">
              <Checkbox.Basic
                id="keppMeSignedIn"
                label="로그인 유지하기"
                textSize="text-sm"
                checked={watch("keepLogin")}
                onChange={(e) => setValue("keepLogin", e.target.checked)} // 정확한 상태 설정
              />
              <Link href="#" className="text-signature hover:underline">
                비밀번호를 잊으셨나요?
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="w-full bg-signature text-white py-3 rounded-md hover:bg-signatureDark"
              >
                로그인
              </button>
              <button
                className="w-full border-signature border text-signature py-3 rounded-md hover:bg-signature hover:text-white transition duration-500 ease-in-out"
                onClick={() => router.push(PATHS.ROUTES.JOIN)}
              >
                회원가입
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};
