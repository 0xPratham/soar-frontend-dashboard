const CreditCards = () => {
    return (
        <div className='flex sm:flex-row gap-4'>
            {/* Dark theme credit card */}
            <div className='w-[360px] h-[235px] rounded-[20px] px-6 bg-gradient-to-br from-[#5B5A6F] to-[#000000] text-white shadow-xl flex flex-col justify-between'>
                <div className='flex justify-between items-start mt-5 !-mb-20'>
                    <div>
                        <p className='text-xs font-light'>Balance</p>
                        <p className='text-xl font-light'>${'5,756'}</p>
                    </div>
                    <svg
                        width='35'
                        height='35'
                        viewBox='0 0 35 35'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <rect
                            width='34.7713'
                            height='34.7713'
                            fill='url(#pattern0_14_1323)'
                        />
                        <defs>
                            <pattern
                                id='pattern0_14_1323'
                                patternContentUnits='objectBoundingBox'
                                width='1'
                                height='1'
                            >
                                <use
                                    href='#image0_14_1323'
                                    transform='scale(0.01)'
                                />
                            </pattern>
                            <image
                                id='image0_14_1323'
                                width='100'
                                height='100'
                                href='data:image/png;base64,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'
                            />
                        </defs>
                    </svg>
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <p className='text-gray-400 text-xs font-light'>
                                CARD HOLDER
                            </p>
                            <p className='font-light text-sm'>Eddy Cusuma</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs font-light'>
                                VALID THRU
                            </p>
                            <p className='font-light text-sm'>12/22</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center bg-[#3A3D42] px-6 py-4 -mx-6 rounded-b-[20px] mt-10'>
                        <p className='font-light text-lg sm:text-xl md:text-2xl tracking-wider'>
                            3778 **** **** 1234
                        </p>
                        <div className='w-10 h-6 sm:w-12 sm:h-8 opacity-75'>
                            <svg
                                width='44'
                                height='30'
                                viewBox='0 0 44 30'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <circle
                                    cx='15'
                                    cy='15'
                                    r='15'
                                    fill='white'
                                    fillOpacity='0.5'
                                />
                                <circle
                                    cx='29'
                                    cy='15'
                                    r='15'
                                    fill='white'
                                    fillOpacity='0.5'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Light theme credit card */}

            <div className='w-[360px] h-[235px] rounded-[20px] px-6 bg-white text-black shadow-xl flex flex-col justify-between border border-[#DFEAF2]'>
                <div className='flex justify-between items-start mt-5 !-mb-20'>
                    <div>
                        <p className='text-xs font-light'>Balance</p>
                        <p className='text-xl font-light'>${'5,756'}</p>
                    </div>
                    <svg
                        width='35'
                        height='35'
                        viewBox='0 0 35 35'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <rect
                            width='34.7713'
                            height='34.7713'
                            fill='url(#pattern0_14_1343)'
                        />
                        <defs>
                            <pattern
                                id='pattern0_14_1343'
                                patternContentUnits='objectBoundingBox'
                                width='1'
                                height='1'
                            >
                                <use
                                    href='#image0_14_1343'
                                    transform='scale(0.01)'
                                />
                            </pattern>
                            <image
                                id='image0_14_1343'
                                width='100'
                                height='100'
                                href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAADBFJREFUeF7tXXuQHEUZ/30zm8tBIAdExAIi8oyICFwIZIWzdmdve+94RCw9oYiWFpSmLNSCKhLCSwig8hLU8kWK0hITCLkqDURyN723s1egORS5xKgoIKASNGKJCZFANrvTXu/tDrObu9vZx/RsyfRfyW339339+033zHT3/D5CWNoKAWqraMJgEBLSZhdBSEhISJsh0GbhhCMkJKTNEGizcMIR8v9CyMDAgL77td3dBRTiEFhIRCdBYD6AAwEc0Gb99CucNwHsAeFl2HhWaGIcBViHHH7IlsHBwUIjTuseIf1G//EFKiyDwFIARzbi9B3Q5hUStDav5e/LZDIv1tNfz4T0xfreZ5N9GwiXANDrcfIOrpsHsC6CyA2brE1/9YJDTULk1LTr37uWA7ixNB15sRvWqURgD4FuWdyz+K5Vq1bZM4EzIyGJROIIXegPAjBChFuAgMAIZmEp5/zV6axNSwhj7FjkwQGc0IJQQhNlBAReKmiFvkwm89xUoExJSCqWOkFo4gkA7wmR9AWBHWRTjzlq/rna+n6EFKcpWx8D4VhfQgmNlhF4ERFEq6evCkJuuukmbeyJsWEAyRA3JQhku+Z1Jd3vLBWEMIOtBPB1JaGETooICBLXpDPpO8twOIT09va+V7O1ZwDMCbFSisAezdZOGR4d/ov06hDC4mwNqPj2HRbVCBAe4Bn+GYeQ4nIICn8CEGkglk26rS8bGh3aPlNbxtgcbZ92dIEK3QAuItBFADoa8KeiSU5AbACwQRf6uD3L3q7n9EMLWmE1gH4fAsgXqLBALrMURwhLsDshIN/G6y66rc+vRcZURksXwV0APla3Ux8bCIif2mQvn2oNijE2H3n8zQ/3AuKOtJVeSaWlEemkoYXCRgkpdyqZSK4gQfJBQvOjo3XYtCGwkme5vEimLH4SAmB7tCd6DPUl+hbZwv51HYFXVx1CBMs45y83aqNEyh2Ntm9JO4EVNcnYh9Ug9LXE31RGBM4khWC8AeD3BFozd97c1YODgzl3TMxgP5P3Ft86O4NhOU2lrfTH3VX6+/tnF/YWPg8UH3Q+qOTpU2AFsThbB8LFSoEgbM2L/AWWZb1S9ltarpGP3bOUxgLkClQ42X3PMAzjqAgijwE4TXEs64gZbGsAjkGgLXPnzV3sHinMYIMTo+gTKkEQEOvTVtq5IEsj41dBYSIJkUvBh6sEoexLkPhiOpP+bvn/LMGWQmCNylgExKVpK/2QE0OcfRmEb6mMweXrVUnInsD2wAlP8gyPlgPqi/ctsMmW70PKSun531kKZwaTo+MsZQFUOnpTEiICci7d7uYWn1v2v+ScJQe/Nfut11XG07m3c+6jv3x0tzNCDCb/fZDKGNy+gibkdW7xLgcMxuYgj/+qBGP3m7sPHBsbk6dHioW9wwkZ4xb/cBmM0tv7fps2vhIUwXGc85dchDwJ4Gxffc5gPNgRInAFz/LvuW7ql0DAucGqAIUEXWxmzfUuQr4E4NsqfE/lI0hCxrvmdUWDfuyFwMM8y+XRpmIpPvbmCk9C4PQgSAmKkHGhiwvT6fTfy51OJBLH6UL/YwArwDnN1haU9yNkPPLFcBZmbRQQZ6gmRSUh8mb9O/me0fWurvurlk4oZaQ2CIglqgEo+iM8wjO8YtlmYGCgY+drOz9HguTSyamqnrxqHpRTAVA7bB1Xb6Wq6PeU95CgHJf8ysXNa0nQVwOOQ7oXELieZ/ntxX8HVAIbISzG3g/Cvb4uZzcG6pAmtKuGs8PPNta8uVbBEWKwfQ1uGTfXY2+t89ziqledJ29nqpZOuMWrjxwFNi144SSoeENCpmEnJMTLZauwTkiIQrC9uAoJ8YKSwjohIQrB9uIqJMQLSgrrhIQoBNuLq5AQLygprBMSohBsL65CQrygpLBOSIhCsL24CgnxgpLCOiEhCsH24iokxAtKCuuEhCgE24urkBAvKCmsExKiEGwvrkJCvKCksE5IiEKwvbgKjBAvwflRJ2kk/0CgD/hhu1mbAuKZtJU+pVk7jbQP7NSJPGCRSqQSAK4WQqQaCb7VbYjInDiheLeZMTNBnc0KkhAHz4nRMkCg7wOY12qQPdrbCYFreJZLpYZAS1sQIhFIJpNHkk2PKT91TtgqNHG+++B3kIwoOwYE4C0ArwiIzUS0PnpudFO1IGQsFjukQ+vYBMD57tBncDbn7Nz5o6OjO91+Srph5wP4JAD5QZFUuej0OZaieZWEVPdnGwQu41n+tPuHWCx2UIfWsbl04txPDLbl7Nw5o6OjFZ/QsThbCMKPFPifsm9BEiIDykHghmpJi2QyeSIV6CkAzveHLWZmF9l0ZrXmYcpIXSMgbg1AvMDpXtCETA5TolvNjPkVN+gswS6GwLoWEzHpr+ozNvk3ZrDbAFzvh796bLYFIUWQQFeZlvnNClIMZgGI19MhD3UtbnH5uO0UFmdXgXCPh7a+V2kbQuT0RYLOMrPmb8u9TsVTpwkS8h7TKmnzgkZa93BmeFvZRzKWPJ00kmIBbSGm1k6EyGGyteuwrjPdKp3MYBsBXNCiS3Mjt7jz2VwsFot0aB2/CULXZLr+SELkR/NKHuk8gUq4hGf4w84VHE8uIaJHPLWtVYlwIc/wn7tG4KWCxNpazRT+XpTWCEx8ZpqOjnOLLyz/VrqKpThacyrbhH90HdY13z36UkZqPIgvbWcg+J/EEmyL8rfjGpecrdndIyMjW8rVmMGkmIDzLXmDV+yD3OKO6mrKSHULFO9PbVOkZFUwAmY1ICDQStMyHcm/ZCJ5BQn6TjPIEegLpmX+wJkKE8nr2uRjU6dbBHpIpcRfPXimucWZM0Li7OyJj0OlBknDhUBnm5bpaEumjNSIgKh4/G3YeOsaLm+FCGbrwnnb0vPc4ieV/1vM7qPZjkBMIw5tzT5mZGTEkXhlBpMiN8c3YsuvNgRaWJaJlel4jvLLUQN2K3S0pAhzs7JNs+fMnrNx40Yp1lYsQcswTYHJpEys/CEVT90hSKxoADi/mlQQEovFOju0DkfTqhGn+my9c2hoaG8bE3I7t/i1RUJKwi/yQ/lGpMYbwWfGNgR6zrTMBeVKpdRLO5pyFMER7lwdzGDPt1H2oDwiOEnqdr0txm+wnwD4VFOdbl1jzi3ubOsyH27qLM7SIPS2LuQmLAn8mGf5Z6UFh5DzjPOOySMvdXNlYshAS/VjL0uwyyFwf1NBCVzOs/yHzpQVZ9eC8LWmbLam8RuI4OSyMnjFFq5ClesZuyJscUZ6NC31hIslaSQfINCnm+q/KyWEtNPb23uGZmvjTdlsTePl3OJ3l03tn/Lo8TEz4KFcsXRSShYgFbCPaLL/O6I90aPc28ZtsHSSjvZE+9wx7XfIgTH2buQht1CDeUavWlyc0NGV+TrkPnvThYj6zYwpc2wVC0sw5RqPrk68oO/To0NPDP3L3bG2SptXkh9fVLH8nmAbIPDRptmYNLCBW9zJV1JcuNQ7ngpgLW+HDv3cIWvohep+1UosKQ+OndgiMGqZyWmkLXJvHvX29p6q2Zq8l7Qqt4gQtuh235/6En0fsoUt9+/VbFA1kljSGdJy+tqHtSruKYLElelMukJznRlMXhDOmlYtRj39LjDMs7wibVHKSF0pIO711L65Sml9n760epqqOWW5K8gzSpt/sflqEiQPIfiVwW0Vt/jNbr9+CvNLYUsza8ocv05JJVK3CCFkAmY/isydcnO0J3pPU8mJ3ZEV0+oJ7VYIXNrCN/ocEV1nZsxvVIAzmfpVrswe6gc6AP6jQ19UPYczg109cQRI6j+2avrKQ2AtZuFGrxmI6j5KKpdZInZkmSAhiTm6YcAIW22yL3NvRElbvb29XZqtyTy8UprVz7LN1uyPjIyM7Kq4GCY3ruQLZDPJXLYLiLUUofvcMuZeOlM3IWWjxeOWj49JoWEDhO6JzZUFAkKuGB88TfoLuTi4HQKbSaN1ZsaU94cKmb9SdgT5d2VHSTv3dva5syOU+ie3tvtAkI/F8iip7NcBUwAq+ySzKciUgTLlxdMEshb3LN5aa2qajpyGCfHCdlinfgRCQurHzNcWISG+wlu/8ZCQ+jHztUVIiK/w1m88JKR+zHxtERLiK7z1Gw8JqR8zX1v8D6Dr4HtnDshXAAAAAElFTkSuQmCC'
                            />
                        </defs>
                    </svg>
                </div>

                <div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <p className='text-gray-400 text-xs font-light'>
                                CARD HOLDER
                            </p>
                            <p className='font-light text-sm'>Eddy Cusuma</p>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs font-light'>
                                VALID THRU
                            </p>
                            <p className='font-light text-sm'>12/22</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center border-t px-6 py-4 -mx-6 rounded-b-[20px] mt-10'>
                        <p className='font-light text-lg sm:text-xl md:text-2xl tracking-wider'>
                            3778 **** **** 1234
                        </p>
                        <div className='w-10 h-6 sm:w-12 sm:h-8 opacity-75'>
                            <svg
                                width='44'
                                height='30'
                                viewBox='0 0 44 30'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <circle
                                    cx='15'
                                    cy='15'
                                    r='15'
                                    fill='#9199AF'
                                    fillOpacity='0.5'
                                />
                                <circle
                                    cx='29'
                                    cy='15'
                                    r='15'
                                    fill='#9199AF'
                                    fillOpacity='0.5'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCards;
