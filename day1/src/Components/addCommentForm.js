
import { useFormik } from "formik"
import React from "react"


const AddCommentForm = (props) => {

    const formik = useFormik({
        initialValues: {
            text : '',
        },
        onSubmit: () => {
            props.addComment(formik.values.text)
        },
    }
    )

    return (
        <form onSubmit={formik.handleSubmit}>
            <input name="text" onChange={formik.handleChange} />
            <input name="imageUrl" onChange={formik.handleChange} />
            <button type="submit" onChange={formik.handleChange}> Submit </button>
        </form>
    )
}

export default AddCommentForm;