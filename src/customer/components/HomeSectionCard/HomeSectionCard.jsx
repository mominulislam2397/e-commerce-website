import React from 'react';

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border '>

{/* "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70" */}

      <div className='h-[13rem] w-[10rem]'>
          <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt="" />
      </div>

      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
      </div>

      <div>
      <h1>homeeeeeeeeeeeeeeeeee</h1>
      <h1>tooooooooooo</h1>
    </div>
      
    </div>

    
  );
};

export default HomeSectionCard;