'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { Input, TextAreaInput } from '@/components/contact/Inputs';
import { contactPageFormSchema as schema } from '@/forms/schema';

export default function ContactForm() {
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
    <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-3 px-6 lg:px-8 lg:py-48 py-8">
      <Input
        register={register}
        label="Name"
        name="name"
        placeholder="John Doe"
        errors={errors.name}
        type="text"
        required
      />
      <Input
        register={register}
        label="Email"
        name="email"
        placeholder="johndoe@domain.com"
        errors={errors.email}
        type="text"
        required
      />
      <Input
        register={register}
        label="Phone Number"
        name="phoneNumber"
        placeholder="0123456789"
        errors={errors.phoneNumber}
        type="text"
        required
      />
      <TextAreaInput
        register={register}
        label="Message"
        name="message"
        placeholder="Your message here..."
        errors={errors.message}
        required
      />
      <button
        className="btn animate bg-primary-600 px-3.5 py-2.5 hover:bg-primary-700 w-fit ml-auto mt-4"
        type="submit">
        Send Message
      </button>
    </form>
  );
}
