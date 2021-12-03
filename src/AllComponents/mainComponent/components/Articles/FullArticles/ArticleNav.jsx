import React from 'react';

const ArticleNav = () => {
    return(
        <div>
            <div className="h-96 w-80 bg-indigo-100 absolute right-0 top-32 rounded-lg filter blur-lg mobile:hidden"></div>
            <div className="text-right relative -top-96 p-40">
                <h2 data-aos="fade-up" className="mobile:hidden" style={{fontWeight:'bold',fontSize:'1.4rem'}}>جاوااسکریپت چیست !؟</h2>
                <p data-aos="fade-down" className="mt-2 mobile:hidden">تو این مقاله میخوایم همه چیز رو درباره جاوااسکریپت توضیح بدیم</p>
                <input className="bg-blue-600 mobile:hidden cursor-pointer mt-10 px-6 py-2 rounded-t-xl rounded-bl-xl text-white transition ease-in-out duration-300 hover:bg-blue-200 hover:text-blue-700 hover:shadow-inner" type="button" value="بزن بریم" />
            </div>
        </div>
    );
}

export default ArticleNav;