export interface FormProps {
  setSuccessForm: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  typeConnect: TypeConnect;
  setTypeConnect: (value: TypeConnect | ((prevVar: TypeConnect) => TypeConnect)) => void;
}

type TypeConnect = "culture" | "ticket";

export type FormValues = {
  orgName: string;
  instituteId: string;
  inn: string;
  person: string;
  phone: string;
  email: string;
  files: string;
  checkPersonal: string;
  checkOffert: string;
  checkIntegration: string;
};