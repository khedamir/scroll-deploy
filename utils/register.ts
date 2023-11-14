import { server } from "./server";

export type RegisterParamsType = {
  name: string;
  email?: string;
  phone?: string;
  password: string;
};

export const registerSubmit = async ({
  name,
  email,
  phone,
  password,
}: RegisterParamsType) => {
  try {
    const params: RegisterParamsType = {
      name,
      password,
    };
    if (email) {
      params.email = email;
    }

    if (phone) {
      params.phone = phone;
    }

    const result = await server.post(`/sw/v1/register`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log(result);
  } catch (error) {
    console.error("Произошла ошибка", error);
  }
};
