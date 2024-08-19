import React, { useState } from 'react'

export const ComponenteReutilizable = ({parametroLabel,parametroPlaceHolder,parametroName,parametroType,valor,setValor}) => {
  return (
    <>
      <div className='form-group mb-2'>
        <label className='form-label'>{parametroLabel}</label>
        <input
          type='text'
          placeholder={parametroPlaceHolder}
          name={parametroName}
          className='form-control'
          value={valor}
          onChange={(e) => {
            setValor(e.target.value);
          }}
        />
      </div>
    </>
  );
}
