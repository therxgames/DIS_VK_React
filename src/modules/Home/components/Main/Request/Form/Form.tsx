import { tw } from "typewind";
import { useForm } from "react-hook-form";
import { useHookFormMask } from 'use-mask-input';
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { FormProps, FormValues } from "./types";
import { Text } from "@components/ui/Input/Text";
import { File } from "@components/ui/Input/File";
import { Checkbox } from "@components/ui/Input/Checkbox";
import { Link } from "@components/ui/Text/Link";
import { Button } from "@components/ui/Button";
import FileCheck from "@icons/file-check.svg";
import { Title } from "@components/ui/Text/Title";
import { useState } from "react";
import { TypeConnect } from "@/types";

export const Form = ({ setSuccessForm }: FormProps) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const registerWithMask = useHookFormMask(register);

  const [typeRadioConnect, setTypeRadioConnect] = useState<TypeConnect>(
    "culture"
  );

  const handleTypeConnectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeRadioConnect(event.target.value as TypeConnect);
  };

  return (
    <>
      <div className={tw.max_w_["428px"].flex.flex_col.justify_between}>
        <div>
          <Title>
            Заявка
          </Title>

          <p className={tw.mt_5.text_["32px"].leading_["40px"]}>
            на присоединение<br/>к доверенной<br/> информационной<br/> системе VK
          </p>
        </div>

        <Button className={tw.flex.items_center.gap_["10px"].w_['400px']}>
          <FileCheck />
          <p>Заявка на присоединение</p>
        </Button>
      </div>

      <div className={tw.w_["932px"]}>
        <form onSubmit={handleSubmit(() => setSuccessForm(true))}>
          <RadioGroup 
            defaultValue="culture" 
            value={typeRadioConnect} 
            name="radio-buttons-group" 
            sx={{
              flexDirection: 'row',
              gap: '25px'
            }}
            onChange={handleTypeConnectChange}
          >
            <FormControlLabel
              value="culture"
              control={
                <Radio
                  sx={{
                    color: "#0077FF",
                    "&.Mui-checked": {
                      color: "#0077FF",
                    },
                  }}
                />
              }
              label={
                <span
                  className={
                    tw.font_default.text_gray_normal.text_["18px"].leading_[
                      "24px"
                    ]
                  }
                >
                  Организация культуры
                </span>
              }
            />
            <FormControlLabel
              value="ticket"
              control={
                <Radio
                  sx={{
                    color: "#0077FF",
                    "&.Mui-checked": {
                      color: "#0077FF",
                    },
                  }}
                />
              }
              label={
                <span
                  className={
                    tw.font_default.text_gray_normal.text_["18px"].leading_[
                      "24px"
                    ]
                  }
                >
                  Билетная система
                </span>
              }
            />
          </RadioGroup>

          <div className={tw.flex.flex_col.gap_['48px'].mt_['17px']}>
            <Text 
              title="Наименование организации"         
              {...register("orgName", {
                required: "Поле обязательно для заполнения",
                pattern: {
                  value: /^[A-Za-zА-Яа-яЁё]+$/i,
                  message: 'Некорректный формат'
                }, 
                maxLength: {
                  value: 200,
                  message: "Максимум 200 символов",
                },
              })} 
              errorText={errors.orgName?.message}
              value={watch('orgName')}
            />

            <div className={tw.grid.grid_cols_['3fr_2fr'].gap_x_6}>
              <Text 
                title="Идентификатор учреждения на прокультура.рф"         
                {...register("instituteId", {
                  required: "Поле обязательно для заполнения",
                  pattern: {
                    value: /^\d{0,10}$/,
                    message: 'Некорректный формат'
                  }, 
                  maxLength: {
                    value: 10,
                    message: "Допускается не более 10 циферных символов",
                  },
                })} 
                errorText={errors.instituteId?.message}
                value={watch('instituteId')}
              >
                <Link href="#" size="sm" className={tw.absolute.right_['20px'].top_['22px']}>Как получить?</Link>
              </Text>

              <Text 
                title="ИНН"         
                {...register("inn", {
                  required: "Поле обязательно для заполнения",
                  pattern: {
                    value: /^\d{0,10}$/,
                    message: 'Некорректный формат'
                  }, 
                  maxLength: {
                    value: 10,
                    message: "Необходимо указать 10 циферных символов",
                  },
                })} 
                errorText={errors.inn?.message}
                value={watch('inn')}
              />
            </div>
            
            {
              (typeRadioConnect === 'ticket') &&
                <div className={tw.flex.flex_col.gap_y_['10px'].my_['-16px']}>
                  <Checkbox                  
                    {...register("checkIntegration", {
                      required: false,
                    })} 
                    errorText={errors.checkIntegration?.message}
                    value={watch('checkIntegration')}
                  >
                    <p className={tw.text_['18px'].leading_['24px'].text_gray_normal}>
                      Есть интеграция с ДИС VK
                    </p>
                  </Checkbox>
                </div>
            }

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
                  message: "Допускается не более 100 символов",
                },
              })} 
              errorText={errors.person?.message}
              value={watch('person')}
            />

            <div className={tw.grid.grid_cols_['2fr_3fr'].gap_x_6}>
              <Text 
                title="Телефон"         
                {...registerWithMask("phone", ["+A (BBB) BBB-BB-BB"], {
                  definitions: {
                    'A': {
                      validator: '[7-8]',
                    },
                    'B': {
                      validator: '[0-9]',
                    },
                  },
                  required: "Поле обязательно для заполнения",
                  pattern: {
                    value: /^\+[7-8]\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
                    message: 'Некорректный формат'
                  }, 
                })} 
                errorText={errors.phone?.message}
                value={watch('phone')}
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
            </div>

            <File        
              {...register("files", {
                required: {
                  value: true,
                  message: "Необходима заполненная заявка на присоединение",
                },
              })} 
              accept=".doc,.docx,.txt,.jpg,.png,.pdf"
              errorText={errors.files?.message}
              value={watch('files')}
              />

            <div className={tw.flex.flex_col.gap_y_['10px']}>
              <Checkbox                  
                {...register("checkPersonal", {
                  required: "Необходима заполненная заявка на присоединение",
                })} 
                errorText={errors.checkPersonal?.message}
                value={watch('checkPersonal')}
              >
                <p className={tw.text_['18px'].leading_['24px'].text_gray_normal}>
                  Согласен на обработку персональных данных и с&nbsp;
                  <Link>политикой конфиденциальности</Link>
                </p>
              </Checkbox>

              <Checkbox                 
                {...register("checkOffert", {
                  required: "Необходима заполненная заявка на присоединение",
                })} 
                errorText={errors.checkOffert?.message}
                value={watch('checkOffert')}
              >
                <p className={tw.text_['18px'].leading_['24px'].text_gray_normal}>
                  Согласие на присоединение к&nbsp;
                  <Link>оферте</Link>
                </p>
              </Checkbox>
            </div>
          </div>

          <div className={tw.mt_5}>
            <Button intent={"primary"} className={tw.cursor_pointer}>
              Отправить
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}