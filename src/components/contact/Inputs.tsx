import { FieldError, UseFormRegister } from 'react-hook-form';

type CoreRHFInputProps = {
  label?: string;
  name: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  errors?: FieldError;
  required?: boolean;
};

type InputProps = CoreRHFInputProps & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ register, label, name, placeholder, errors, required, ...rest }: InputProps) {
  const inputClass = errors ? 'input-error' : 'input-default';

  return (
    <div>
      <div className="flex gap-4 mb-2">
        {label && (
          <label htmlFor={name} className="block text-sm font-medium">
            {label}
            {required && <span>*</span>}
          </label>
        )}
        {errors && <ErrorMessage name={name} message={errors.message as string} />}
      </div>
      <div className="relative rounded-md shadow-sm">
        <input
          {...register(name)}
          {...rest}
          id={name}
          name={name}
          className={`${inputClass} block w-full rounded-md px-3.5 py-2 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
          placeholder={placeholder}
          aria-invalid={errors ? 'true' : 'false'}
          aria-label={`${name}-error`}
        />
        {errors && <ErrorIcon />}
      </div>
    </div>
  );
}
type TextAreaInputProps = CoreRHFInputProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaInput({ register, label, name, placeholder, errors, required, ...rest }: TextAreaInputProps) {
  const inputClass = errors ? 'input-error' : 'input-default';
  return (
    <div>
      {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
      <div className="flex gap-4 mb-2">
        <label htmlFor={name} className="block text-sm font-medium">
          {label}
          {required && <span>*</span>}
        </label>
        {errors && <ErrorMessage name={name} message={errors.message as string} />}
      </div>
      <div className="relative rounded-md shadow-sm">
        <textarea
          {...register(name)}
          {...rest}
          id={name}
          name={name}
          className={`${inputClass} block w-full rounded-md px-2 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
          placeholder={placeholder}
          aria-invalid={errors ? 'true' : 'false'}
          aria-label={`${name}-error`}
          rows={10}
        />
        {errors && <ErrorIcon />}
      </div>
    </div>
  );
}

interface ErrorMessageProps {
  name: string;
  message: string;
}

function ErrorMessage({ name, message }: ErrorMessageProps) {
  return (
    <p className="text-xs text-toast-error md:text-sm" id={`${name}-error`}>
      {message}
    </p>
  );
}

function ErrorIcon() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <svg className="h-5 w-5 text-toast-error" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
