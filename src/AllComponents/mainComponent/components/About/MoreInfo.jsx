import React from 'react';

const MoreInfo = () => {

    const modalStyle = {
        width: '50%'
    }
    return(
            <div style={modalStyle} className="shadow-xl text-right relative top-40 h-modal md:h-full left-0 right-0 md:inset-0 z-50 justify-center items-center">
                <div className="relative max-w-2xl mobile:w-96 px-4 h-full md:h-auto">
                    <div className="bg-white mobile:h-96 rounded-lg shadow relative">
                        <div className="flex items-start justify-between p-5 border-b rounded-t">
                            <h3 className="text-xl lg:text-2xl font-semibold">
                                مطالب بیشتر رو بخون
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <p className="text-gray-800 mobile:text-sm text-base leading-relaxed">
                                در این قسمت میتونید اطلاعات بیشتری رو درباره من بدونید 
                            </p>
                            <p className="text-gray-500 mobile:text-sm text-base leading-relaxed">
                            من ابوالفضل مرادی هستم برنامه نویس فرانت اند و حدودا 2 سال هست که در این پلتفورم فعالیت میکنم و نمونه کارهای زیادی دارم که بهترین اش برنامه چت و همین سایتی هست که الان داخلش هستید
                            </p>
                        </div>
                        <div className="flex space-x-2 items-center p-6 border-t border-gray-200 rounded-b">
                            <button data-modal-toggle="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200">! فهمیدم</button>
                            <button data-modal-toggle="default-modal" type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200">! جالبه</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default MoreInfo;