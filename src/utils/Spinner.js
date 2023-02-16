import React from 'react'

function Spinner() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-grow" role="status" >
          <span className="visually-hidden"></span>
        </div>
      </div>
    </>
  )
}

export default Spinner
