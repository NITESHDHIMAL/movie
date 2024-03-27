import React from 'react'

// const Contact = (props) => {
const Contact = (data) => {


    console.log("contact props data", data.data)

    // const contat = data.data[0]
    const contat = data.data

    return (
        // <div>
        //   Eamil: {props.email} <br />
        //   Address: {props.address} <br />
        //   Link: {props.link}
        // </div>

        <>
            {/* <div>
                Eamil: {contat.email} <br />
                Address: {contat.address} <br />
                Link: {contat.link}
            </div> */}

            {contat.map((data) => (
                <div>
                    Eamil: {data.email} <br />
                    Address: {data.address} <br />
                    Link: {data.link}
                </div>
            ))}

        </>

    )
}

export default Contact
