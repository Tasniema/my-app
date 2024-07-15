

import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/footer';


const Home = () => {
  return (
    <>
    < Header/>
  <section className="one">
    <img
      src="https://e7.pngegg.com/pngimages/684/823/png-clipart-victory-motorcycles-cruiser-motorcycle-accessories-v-twin-engine-victory-70th-anniversary-anti-japanese-victory-mode-of-transport-motorcycle.png"
      alt=""
      className="src"
    />
    <div className="motor">
      <h1 className='heading-one' data-en="Motorcycle Technician" data-ar="فني دراجات نارية">
        Motorcycle Technician
      </h1>
      <div className="res-set">
       <span>
         <img src="images/icons8-setting-50.png" alt="" className="setting" />
       </span>
        <span
          className="head-two"
          data-en="Responsible for maintaining, diagnosing, and repairing motorcycles"
          data-ar="مسؤول عن صيانة وتشخيص وإصلاح الدراجات النارية"
        >
          Responsible for maintaining, diagnosing, and repairing motorcycles
        </span>
      </div>
    </div>
  </section>
  <section className="two">
    <ul className="motor-two">
      <li
        data-en="Perform routine maintenance and repairs on motorcycles, such as oil changes, brakes, electrical systems, and engine tune-ups."
        data-ar="تنفيذ الصيانة الروتينية وإصلاح الدراجات النارية، مثل تغيير الزيت، الفرامل، الأنظمة الكهربائية، وضبط المحرك."
      >
        Perform routine maintenance and repairs on motorcycles, such as oil
        changes, brakes, electrical systems, and engine tune-ups.
      </li>
      <li
        data-en="Diagnose and repair mechanical problems."
        data-ar="تشخيص وإصلاح المشاكل الميكانيكية."
      >
        Diagnose and repair mechanical problems.
      </li>
      <li
        data-en="Test drive motorcycles to check for performance and safety issues."
        data-ar="اختبار قيادة الدراجات النارية للتحقق من الأداء وقضايا السلامة."
      >
        Test drive motorcycles to check for performance and safety issues.
      </li>
      <li
        data-en="Replace worn and broken parts."
        data-ar="استبدال الأجزاء البالية والمكسورة."
      >
        Replace worn and broken parts.
      </li>
      <li
        data-en="Provide customers with advice on proper maintenance and repair techniques."
        data-ar="تقديم المشورة للعملاء حول تقنيات الصيانة والإصلاح المناسبة."
      >
        Provide customers with advice on proper maintenance and repair
        techniques.
      </li>
      <li
        data-en="Keep detailed records of maintenance and repair work."
        data-ar="الاحتفاظ بسجلات مفصلة لعمليات الصيانة والإصلاح."
      >
        Keep detailed records of maintenance and repair work.
      </li>
      <li
        data-en="Maintain a clean and organized work area."
        data-ar="الحفاظ على منطقة عمل نظيفة ومنظمة."
      >
        Maintain a clean and organized work area.
      </li>
      <li
        data-en="Follow all safety procedures when working with motorcycles."
        data-ar="اتباع جميع إجراءات السلامة عند العمل مع الدراجات النارية."
      >
        Follow all safety procedures when working with motorcycles.
      </li>
    </ul>
    <div className="photo-wrapper">
      <img
        src="https://scontent.faly1-2.fna.fbcdn.net/v/t1.6435-9/120196741_3647464181972124_8396520908868385255_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFqVZopmTLmnS3PJo5nDomNr36wbweGdCmvfrBvB4Z0KU7mClhSd6ocsiN7i8b-7LNo4H4V-Kk0pk_phNNu10BJ&_nc_ohc=auDJ19hOauEQ7kNvgGdPkJb&_nc_ht=scontent.faly1-2.fna&oh=00_AYApCyWziYkdb-_8RYS8uSokWyL3qsZFp5GU37J6jfmOQg&oe=66AB8C34"
        alt=""
        className="my-photo"
      />
    </div>
  </section>
  <section className="three">
    <div className="googel-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13641.949405972668!2d32.30600492433251!3d31.262612028815635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDE1JzQ0LjciTiAzMsKwMTcnNDkuMiJF!5e0!3m2!1sar!2seg!4v1719491331745!5m2!1sar!2seg"
        // width={600}
        // height={450}
        // style={{ border: 0 }}
        allowFullScreen loading="lazy"
        title='iframe'
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="overlay">Bike Zone</div>
    </div>
    <h1
      className="journey"
      data-en="A journey of a thousand miles must begin with a single step."
      data-ar="رحلة الألف ميل تبدأ بخطوة واحدة."
    >
      A journey of a thousand miles must begin with a single step.📌
    </h1>
  </section>

  <Footer/>
    </>
  );
}

export default Home;
