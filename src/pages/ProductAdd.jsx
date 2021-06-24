import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import { Button, FormField, Label } from 'semantic-ui-react';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }

    const schema = Yup.object({
        productName: Yup.string().required("Urun adi zorunlu"),
        unitPrice: Yup.number().required("Urun fiyati zorunlu")
    })
    
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}

        >
            <Form className="ui form">
                <KodlamaIoTextInput name="productName" placeholder="Product Name"/>
                <KodlamaIoTextInput name="unitPrice" placeholder="Unit Price"/>
                <Button color="green" type="submit">Add</Button>
            </Form>

        </Formik>

    )
}
