import React from 'react'

const ProductVariant = ({VariantType, VariantLabel, VariantPrice}) => {
  return (
    <div className='px-2 m-2'>
        <div className="productVariant">
            {VariantType.map((type, index) => (
            <div key={index}>
                <p className="font-semibold">{type}</p>
                <div className="">
                    {VariantLabel[index].map((label, idx) => (
                    <div key={idx} className="flex gap-2 items-center space-x-2 py-1">
                        <input className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300' type="radio" id={`variant-${index} ${idx}`} name={`variant ${index}`} value={label} />
                        <label htmlFor={`variant-${index} ${idx}`} className="ml-2 font-medium text-base text-gray-700 w-24">{label}</label>
                        <div class="grow bg-slate-200 rounded-md px-2 py-1">
                            <span className="ml-2 text-gray-500">{VariantPrice[index][idx]}</span>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default ProductVariant
