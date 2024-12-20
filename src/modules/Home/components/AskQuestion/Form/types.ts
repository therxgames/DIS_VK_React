export interface FormProps {
  setIsFormSend: (send: boolean) => void;
  setModalActve: (active: boolean) => void;
}

export type FormValues = {
  person: string;
  email: string;
  message: string;
};