import { tw } from "typewind";
import { Text } from "@components/ui/Input/Text"
import { useForm } from "react-hook-form";
import { FormProps, FormValues } from "./types";
import { Textarea } from "@components/ui/Textarea";
import { Button } from "@components/ui/Button";

export const Form = ({ setIsFormSend, setModalActve }: FormProps) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit(() => setIsFormSend(true))}>
      <div className={tw.flex.flex_col.gap_y_['48px'].mt_['65px']}>
        <Text
          title="Контактное лицо"         
          {...register("person", {
            required: "Поле обязательно для заполнения",
            pattern: {
              value: /^[A-Za-zА-Яа-яЁё]+$/i,
              message: 'Некорректный формат'
            }, 
            maxLength: {
              value: 100,
              message: "Максимум 100 символов",
            },
          })} 
          errorText={errors.person?.message}
          value={watch('person')}
        />

        <Text
          title="Email"         
          {...register("email", {
            required: "Поле обязательно для заполнения",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Некорректный формат'
            }, 
            maxLength: {
              value: 100,
              message: "Максимум 100 символов",
            },
          })} 
          errorText={errors.email?.message}
          value={watch('email')}
        />

        <Textarea                 
          title="Текст сообщения"         
          {...register("message", {
            required: "Поле обязательно для заполнения",
            maxLength: {
              value: 500,
              message: "Превышено количество символов ",
            },
          })} 
          maxLength={500}
          errorText={errors.message?.message}
          className={tw.h_['233px']}
          value={watch('message')} />
      </div>

      <div className={tw.flex.gap_x_5.mt_['65px']}>
        <Button onClick={() => setModalActve(false)}>Отмена</Button>

        <Button intent={"primary"} className={tw.cursor_pointer}>
          Отправить
        </Button>
      </div>
    </form>
  )
}