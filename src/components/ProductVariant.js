import React from 'react'

const ProductVariant = ({VariantType}) => {
  return (
    <div class="px-2 m-2">
        <div class="py-2">
            <p class="text-base font-semibold">{VariantType}</p>
        </div>
        <div class="flex gap-2 items-center space-x-2 py-1">
            <input type="radio" id="serve-ice" name="serve" value="0" class="CozOrder focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"></input>
            <label for="serve-ice" class="font-medium text-base text-gray-700 w-24">Ice</label>
            <div class="grow bg-slate-200 rounded-md px-2 py-1">
                <label for="serve-ice-price" class="text-sm px-2">Rp. 0</label>
            </div>
        </div>
        <div class="flex gap-2 items-center space-x-2 py-1">
            <input type="radio" id="serve-hot" name="serve" value="0" class="CozOrder focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"></input>
            <label for="serve-hot" class="font-medium text-base text-gray-700 w-24">Hot</label>
            <div class="grow bg-slate-200 rounded-md px-2 py-1">
                <label for="serve-hot-price" class="text-sm px-2">Rp. 0</label>
            </div>
        </div>
    </div>
  )
}

export default ProductVariant
