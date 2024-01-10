import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const AddPage = () => {
    const navigate = useNavigate();

    function handleAdd(val) {
        fetch('http://localhost:2000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(val)
        })
            .then((res) => res.json())
        navigate("/");
    }




    // const [img, setImage] = useState('')
    // const [name, setName] = useState('')
    // const [price, setPrice] = useState('')
    // const [desc, setDesc] = useState('')

    // function handleAdd(e) {
    //     e.preventDefault()
    //     fetch('http://localhost:2000/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({img,name,price,desc })
    //     })
    //     .then((res)=>res.json())
    // }
    // function handleInput(e, setState) {
    //     setState(e.target.value)

    // }
    return (
        <div className='add'>
            {/* <form onSubmit={handleAdd}>
                <input type="text" placeholder='Enter Image' onChange={(e) => handleInput(e, setImage)} />
                <input type="text" placeholder='Enter Name' onChange={(e) => handleInput(e, setName)} />
                <input type="text" placeholder='Enter Price' onChange={(e) => handleInput(e, setPrice)} />
                <input type="text" placeholder='Enter Description' onChange={(e) => handleInput(e, setDesc)} />
                <button>Add</button>
            </form> */}

            <Formik
                initialValues={{ img: '', name: '', price: '', desc: '' }}
                validationSchema={Yup.object({
                    img: Yup.string().required('Plese, image url'),
                    name: Yup.string().required('strh'),
                    price: Yup.number().required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        handleAdd(values)
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <label htmlFor="img"> Image</label>
                    <Field name="img" type="text" />
                    <ErrorMessage name="img" />

                    <label htmlFor="name"> Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="price">Price</label>
                    <Field name="price" type="text" />
                    <ErrorMessage name="price" />

                    <label htmlFor="desc">Description</label>
                    <Field name="desc" type="text" />
                    <ErrorMessage name="desc" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

//axirdan 3-cu yuklenir formik yulenir yup yuklenir
export default AddPage