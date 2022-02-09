import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  firstName: string;
  lastName?: string;
  telephone?: number;
  email?: string;
  age?: number;
  avatar?: string;
  website?: string;
  tags?: Array<string>;
}

const schema = yup
  .object({
    firstName: yup.string().required("First Name is required."),
    lastName: yup.string(),
    telephone: yup
      .number()
      .min(1000000000)
      .max(9999999999999)
      .typeError("Please provide valid telephone number"),
    email: yup.string().email(),
    age: yup.number().min(1).max(200),
    avatar: yup.string(),
    website: yup.string().url(),
    tags: yup.array().of(yup.string()),
  })
  .required();

export const AddContact: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      firstName: "",
      lastName: "",
      telephone: 0,
      email: "",
      age: 0,
      avatar: "",
      website: "",
      tags: [],
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="m-4">
      <form onSubmit={onSubmit}>
        <div className="mb-3 form-group">
          <label htmlFor="firstName" className="form-labe">
            First Name
          </label>
          <input
            {...register("firstName")}
            className={`form-control ${
              errors.firstName?.message ? "is-invalid" : ""
            }`}
          />
          <p className="text-danger">{errors.firstName?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            {...register("lastName")}
            className={`form-control ${
              errors.lastName?.message ? "is-invalid" : ""
            }`}
          />
          <p>{errors.lastName?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="telephone" className="form-label">
            telephone
          </label>
          <input
            {...register("telephone")}
            className={`form-control ${
              errors.telephone?.message ? "is-invalid" : ""
            }`}
          />
          <p>{errors.telephone?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email")}
            className={`form-control ${
              errors.email?.message ? "is-invalid" : ""
            }`}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age")}
            className={`form-control ${
              errors.age?.message ? "is-invalid" : ""
            }`}
          />
          <p>{errors.age?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="avatar" className="form-label">
            Avatar
          </label>
          <input
            {...register("avatar")}
            className={`form-control ${
              errors.avatar?.message ? "is-invalid" : ""
            }`}
          />
          <p>{errors.avatar?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="website" className="form-label">
            Website
          </label>
          <input
            {...register("website")}
            className={`form-control ${
              errors.website?.message ? "is-invalid" : ""
            }`}
          />
          <p>{errors.website?.message}</p>
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            {...register("tags")}
            className={`form-control ${
              errors.tags && errors.tags.length > 0 ? "is-invalid" : ""
            }`}
          />
          {/* <p>{errors.tags}</p> */}
        </div>

        <button type="submit" className="btn btn-outline-primary">
          + Add Contact
        </button>
      </form>
    </div>
  );
};
