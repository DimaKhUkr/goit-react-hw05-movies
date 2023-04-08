import { useForm } from 'react-hook-form';

export default function NewSearche({ DataHandleSubmit }) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(DataHandleSubmit)}>
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('filmName', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.filmName && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
