'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { Input } from '@/components/contact/Inputs';
import Section from '@/components/shared/Section';
import { newsletterFormSchema as schema } from '@/forms/schema';

export default function Newsletter() {
  type schemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaType>({ resolver: zodResolver(schema) });

  function onSubmit<T extends schemaType>(formData: T) {
    // TODO: Send form data to email service
    toast.success('Form submitted successfully');
  }

  function onError(formData: FieldErrors<schemaType>) {
    // TODO: Create error toast with response from email service
    toast.error('Form submission failed');
  }

  return (
    <>
      <Section
        header="Stay up to date with our journey!"
        subHeader="Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.">
        <form onSubmit={handleSubmit(onSubmit, onError)} aria-label="Band updates signup.">
          <div className="max-w-2xl flex gap-4 justify-center mx-auto">
            <Input register={register} name="email" placeholder="Enter your email" type="text" errors={errors.email} />
            <button
              className="btn animate bg-primary-600 px-3.5 py-2.5 hover:bg-primary-700 w-fit h-fit mt-auto"
              type="submit">
              Signup
            </button>
          </div>
        </form>
      </Section>
    </>
  );
}
