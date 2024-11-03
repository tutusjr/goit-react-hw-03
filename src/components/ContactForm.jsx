import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm({ list, setList }) {
  const initialValues = { name: "", number: "" };

  const validation = Yup.object().shape({
    name: Yup.string().min(3).max(50).required("required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/)
      .required("required"),
  });

  const handleNumberChange = (event, setFieldValue) => {
    let input = event.target.value.replace(/\D/g, "");
    if (input.length > 3 && input.length <= 5) {
      input = `${input.slice(0, 3)}-${input.slice(3)}`;
    } else if (input.length > 5) {
      input = `${input.slice(0, 3)}-${input.slice(3, 5)}-${input.slice(5, 7)}`;
    }
    setFieldValue("number", input);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values) => {
          const isDuplicate = list.some(
            (contact) =>
              contact.name === values.name || contact.number === values.number
          );

          if (isDuplicate) {
            alert("Contact already exist bro!");
            return;
          }
          const newContact = {
            name: values.name,
            number: values.number,
            id: Date.now(),
          };
          setList([...list, newContact]);
          localStorage.setItem('listdata', JSON.stringify([...list, newContact]))
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="name">İsim:</label>
              <Field name="name" placeholder="İsminizi girin" maxLength="50" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="number">Telefon Numarası:</label>
              <Field
                name="number"
                placeholder="322-55-33"
                onChange={(event) => handleNumberChange(event, setFieldValue)}
              />
              <ErrorMessage name="number" component="div" />
            </div>
            <button type="submit">Gönder</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
