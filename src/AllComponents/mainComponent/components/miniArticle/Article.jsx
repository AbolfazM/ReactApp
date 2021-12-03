import React from 'react';
import { Link } from 'react-router-dom';
import articleImg from './web.jpg';

const Article = () => {
    return(
        <div>
            <div className="flex justify-end w-full h-auto -bottom-96 relative mr-20" data-aos="zoom-in">
                <img className="w-80 rounded-3xl mr-20 mobile:mr-16 mobile:w-72 mobile:relative mobile:bottom-20" src={articleImg} alt={`article`} />
            </div>
            <div class="w-2/4">
                <div className="text-sm mobile:bg-blue-100 mobile:p-4 mobile:rounded-lg text-white mobile:text-gray-800 tracking-wide leading-7 break-normall text-right relative left-44 top-52 mobile:w-72 mobile:left-16 mobile:top-80 mobile:text-justify" data-aos="zoom-in">
                فرانت اند یا Front End به بخش قابل مشاهده‌ی یک وب سایت یا نرم افزار توسط کاربران می‌گویند فرانت اند کدهای غیر قابل فهم برای کاربران را در قالب ظاهری گرافیکی و بصری به آن‌ها نمایش می‌دهد تا بتوانند به راحتی از بخش‌های مختلف سایت استفاده کنند در این بخش فرم‌های ورودی اطلاعات صداها تصاویر ویدئوها و به صورت کلی هر چیز دیگری که برای کاربر قابل درک باش قرار می‌گیرد
فرانت اند به دو بخش اصلی طراحی و توسعه رابط کاربری تقسیم می‌شود در بخش طراحی احان با نرم افزارهای گرافیکی مانند فتوشاپ ادوبی ایکس دی فیگما ظاهر سایت را طراحی می‌کن اما بخش توسعه‌ی رابط کاربری مربوط به پیاده سازی ظاهر سایت در قالب کدها
                </div>
            </div>
            <div className="text-right relative -bottom-52 mt-7 flex justify-center mobile:text-sm mobile:top-80" data-aos="zoom-in">
                <p className="text-white mobile:text-justify mobile:text-black">اگر میخوای اطلاعات بیشتری به درست بیاری <Link to="/FullArticle" className="text-blue-700 text-md">رو من کلیک کن</Link> </p>
            </div>
        </div>
    );
}

export default Article;