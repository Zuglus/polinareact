import React from 'react';
import rings from "../assets/images/koltsa_fon1.svg";
import circle from "../assets/images/kruzhok_opyt_raboty.svg";

const Experience = () => {
    return (
        <section class="relative mx-auto px-4 py-[0.75rem] max-w-[75rem]">
            <div
                class="absolute top-3/4 left-1/2 w-[56rem] md:w-auto -translate-x-[35.7rem] md:-translate-x-[23rem] z-[-1] overflow-hidden">
                <img src={rings} alt="Кольца" class="w-full h-full object-contain" />
            </div>

            <div class="ml-[30.1025rem] md:ml-[31.875rem] mb-[7.21875rem] md:mb-[4.8125rem]">
                <div class="relative">
                    <div
                        class="absolute -top-[1.40625rem] md:-top-[0.9375rem] -left-[12.375rem] md:-left-[8.25rem] w-[7.875rem] md:w-[5.25rem] h-[7.875rem] md:h-[5.25rem]">
                        <img src={circle} alt="Перо в кружке" class="w-full h-full object-contain" />
                    </div>

                    <div>
                        <p
                            class="mb-[0.1875rem] md:mb-[0.125rem] font-extralight font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.33] tracking-[0.01em]">
                            2023-по наст. время</p>
                        <h3
                            class="mb-[0.65625rem] md:mb-[0.4375rem] font-medium font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.25] tracking-[0.01em]">
                            Центр Педагогического<br />Мастерства</h3>
                        <h3
                            class="mb-[0.65625rem] md:mb-[0.4375rem] font-medium font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.33] tracking-[0.01em]">
                            Графический дизайнер</h3>

                        <ul class="font-extralight text-[3.28125rem] md:text-[2.1875rem] list-none">
                            <li class="relative mb-[0.75rem] md:mb-[0.5rem]">
                                <span
                                    class="-left-[4.71rem] md:-left-[3.14rem] absolute font-onest font-thin">&rarr;</span>
                                Фирменный стиль
                            </li>
                            <li class="relative mb-[0.75rem] md:mb-[0.5rem]">
                                <span
                                    class="-left-[4.71rem] md:-left-[3.14rem] absolute font-onest font-thin">&rarr;</span>
                                SMM-дизайн (соцсети)
                            </li>
                            <li class="relative mb-[0.75rem] md:mb-[0.5rem]">
                                <span
                                    class="-left-[4.71rem] md:-left-[3.14rem] absolute font-onest font-thin">&rarr;</span>
                                Презентации
                            </li>
                            <li class="relative">
                                <span
                                    class="-left-[4.71rem] md:-left-[3.14rem] absolute font-onest font-thin">&rarr;</span>
                                Полиграфия
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="ml-[30.1025rem] md:ml-[31.875rem] mb-[7.21875rem] md:mb-[4.8125rem]">
                <div class="relative">

                    <div>
                        <p
                            class="mb-[0.1875rem] md:mb-[0.125rem] font-extralight font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.33] tracking-[0.01em]">
                            2021-2022</p>
                        <h3
                            class="mb-[0.65625rem] md:mb-[0.4375rem] font-medium font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.25] tracking-[0.01em]">
                            Банк УБРиР</h3>
                        <h3
                            class="mb-[0.65625rem] md:mb-[0.4375rem] font-medium font-onest text-[3.28125rem] md:text-[2.1875rem] leading-[1.33] tracking-[0.01em]">
                            Ведущий дизайнер<br />отдела коммуникаций</h3>

                        <ul class="font-extralight text-[3.28125rem] md:text-[2.1875rem] list-none">
                            <li class="relative mb-[0.75rem] md:mb-[0.5rem]">
                                <span
                                    class="-left-[4.71rem] md:-left-[3.14rem] absolute font-onest font-thin">&rarr;</span>
                                Презентации
                            </li>
                            <li class="relative mb-[0.75rem] md:mb-[0.5rem]">
                                <span
                                    class="-left-[4.71rem] md:-left-[3.14rem] absolute font-onest font-thin">&rarr;</span>
                                Коммуникационный<br />дизайн
                            </li>
                            <li class="relative mb-[0.75rem] md:mb-[0.5rem]">
                                <span
                                    class="-left-[4.71rem] md:-left-[3.14rem] absolute font-onest font-thin">&rarr;</span>
                                Полиграфия
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
