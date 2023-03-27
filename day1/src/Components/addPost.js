import React, { useState } from "react"
import { useFormik } from "formik"


const AddPostForm = (props) => {
  const { addPost } = props;

  const formik = useFormik({

    initialValues: {
      text: "",
      imageUrl: "",
    },
    onSubmit: () => {
      addPost((prev) => [...prev, { ...formik.values }]);
    }

  })



  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input name="text" onChange={formik.handleChange} />
        <input imageUrl="text" onChange={formik.handleChange} />
        <button type="submit" onChange={formik.handleChange}> Add comment </button>
      </form>
    </div>
  )
}


export default AddPostForm;