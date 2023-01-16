/* eslint-disable prettier/prettier */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import Heading from '../../shared/ui/Heading/Heading';
import Rupee from '../../../public/Rupee.png';
import Percentage from '../../../public/Percentage.png';
import CalculatorScale1 from '../../../public/calculatorScale1.png';
import CalculatorScale2 from '../../../public/calculatorScale2.png';
import CalculatorScale3 from '../../../public/calculatorScale3.png';
import Calculator1Image from '../../../public/calculator1.png';

const Calculator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [yearly, setYearly] = useState(true);
  const [loanAmount, setLoanAmount] = useState('');
  const [intrestRate, setIntrestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState('');
  const [intrestAmount, setIntrestAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [loanTenureType, setLoanTenureType] = useState('');

  const baseUrl = 'https://loan-app-elbs.onrender.com';

  const ChangeTenureFunction = (e: any) => {
    e.preventDefault();
    setYearly(!yearly);
  };

  const clearData = () => {
    setEmi('');
    setIntrestAmount('');
    setTotalAmount('');
    setLoanTenureType('');
  };

  const calculate = async (e: any) => {
    e.preventDefault();

    clearData();
    setLoading(true);

    if (yearly === true) {
      setLoanTenureType('yearly');
    } else {
      setLoanTenureType('monthly');
    }

    axios
      .post(`${baseUrl}/calculate`, {
        loan_type: 'Home Loan',
        loan_tenure_type: loanTenureType,
        loanAmount,
        loanInsterRate: intrestRate,
        loanTenure,
      })
      .then((res) => {
        setEmi(res.data.data.EMI);
        setIntrestAmount(res.data.data.intrest_amount);
        setTotalAmount(res.data.data.total_amount);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero container bg-transparent px-2 sm:px-4 w-full pt-10">
      <div className="w-[89%] flex flex-nowrap items-center justify-between mx-auto">
        <div className="content w-[100/3%]">
          <div className="w-[50%] pr-19">
            <Heading
              title="Know your EMI now"
              type="newxl"
              color="primary"
              classes="text-black font-bold"
            />
          </div>
        </div>

        <div className="content w-[100/3%]">
          <div className="bg-[#f2f2f2] py-16 pr-14 pl-5 max-w-[402px] max-h-[100vh]">
            <div className="nav-link-container flex">
              <div>
                <Link href="#" className="flex items-center">
                  <Heading
                    title="Home Loan"
                    type="sm"
                    color="primary"
                    classes="text-[#0B4870] font-bold transform transition duration-300 hover:scale-110"
                  />
                </Link>
                <div className="border-bottom w-[100%] h-[1px] bg-[#2A94F4]" />
              </div>
              <div className="mx-6 px-1">
                <Link href="#" className="flex items-center">
                  <Heading
                    title="Personal Loan"
                    type="sm"
                    color="primary"
                    classes="text-[#0B4870] font-medium transform transition duration-300 hover:scale-110"
                  />
                </Link>
              </div>
              <div>
                <Link href="#" className="flex items-center">
                  <Heading
                    title="Car Loan"
                    type="sm"
                    color="primary"
                    classes="text-[#0B4870] font-medium transform transition duration-300 hover:scale-110"
                  />
                </Link>
              </div>
            </div>

            <div className="form mt-8">
              <form className="form">
                <div>
                  {/* <label htmlFor="Home Loan Amount" className="text-[#0B4870]">
                    Home Loan Amount
                  </label> */}
                  <Heading
                    title="Home Loan Amount"
                    type="sm"
                    color="primary"
                    classes="form-check-label font-semibold inline-block text-[#0B4870]"
                  />
                  <div className="input-container relative">
                    <input
                      required
                      type="text"
                      id="loan_amount"
                      name="loanAmount"
                      aria-label="loan amount"
                      placeholder="26,00,000"
                      className="bg-wight border-0 py-0 mt-4 flex-1 w-[100%] min-h-[35px]"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                    />
                    <button
                      className="bg-transparent text-white border-l-2 border-black h-[35px] absolute top-0 right-0 mt-4 px-2"
                      type="submit"
                    >
                      <Image src={Rupee} className="mr-4 w-[20px]" alt="icons" />
                    </button>
                  </div>
                  <Image src={CalculatorScale1} className="w-[100%] h-[49px] mt-4" alt="icons" />
                </div>

                <div className="mt-8">
                  {/* <label htmlFor="Interest Rate" className="text-[#0B4870]">
                    Interest Rate
                  </label> */}
                  <Heading
                    title=" Interest Rate"
                    type="sm"
                    color="primary"
                    classes="form-check-label font-semibold inline-block text-[#0B4870]"
                  />
                  <div className="input-container relative">
                    <input
                      required
                      type="text"
                      id="intrest_rate"
                      name="intrestRate"
                      aria-label="Interest Rate"
                      placeholder="7.5"
                      className="bg-wight border-0 mt-4 py-0 flex-1 w-[100%] min-h-[35px]"
                      value={intrestRate}
                      onChange={(e) => setIntrestRate(e.target.value)}
                    />
                    <button
                      className="bg-transparent text-white border-l-2 border-black h-[35px] absolute top-0 right-0 mt-4 px-2"
                      type="submit"
                    >
                      <Image src={Percentage} className="mr-4 w-[20px]" alt="icons" />
                    </button>
                  </div>
                  <Image src={CalculatorScale2} className="w-[100%] h-[49px] mt-4" alt="icons" />
                </div>

                <div className="mt-8">
                  {/* <label htmlFor="Loan Tenure" className="text-[#0B4870]">
                    Loan Tenure
                  </label> */}
                  <Heading
                    title="Loan Tenure"
                    type="sm"
                    color="primary"
                    classes="form-check-label font-semibold inline-block text-[#0B4870]"
                  />
                  <div className="input-container relative">
                    <input
                      required
                      type="text"
                      id="loan_tenure"
                      name="loanTenure"
                      aria-label="Loan Tenure"
                      placeholder="10"
                      className="bg-wight border-0 mt-4 py-0 flex-1 w-[100%] min-h-[35px]"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(e.target.value)}
                    />
                    {yearly === true ? (
                      <div>
                        <button
                          onClick={(e) => ChangeTenureFunction(e)}
                          className="bg-[#a59f9f] text-white h-[35px] absolute top-0 right-11 mt-4 px-2"
                          type="submit"
                        >
                          <Heading title="YR" type="md" color="primary" classes="text-black pt-1" />
                        </button>
                        <button
                          onClick={(e) => ChangeTenureFunction(e)}
                          className="bg-[#d9d9d9] text-white h-[35px] absolute top-0 right-0 mt-4 px-2"
                          type="submit"
                        >
                          <Heading title="MO" type="md" color="primary" classes="text-black pt-1" />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={(e) => ChangeTenureFunction(e)}
                          className="bg-[#d9d9d9] text-white h-[35px] absolute top-0 right-11 mt-4 px-2"
                          type="submit"
                        >
                          <Heading title="YR" type="md" color="primary" classes="text-black pt-1" />
                        </button>
                        <button
                          onClick={(e) => ChangeTenureFunction(e)}
                          className="bg-[#a59f9f] text-white h-[35px] absolute top-0 right-0 mt-4 px-2"
                          type="submit"
                        >
                          <Heading title="MO" type="md" color="primary" classes="text-black pt-1" />
                        </button>
                      </div>
                    )}
                  </div>
                  <Image src={CalculatorScale3} className="w-[100%] h-[49px] mt-4" alt="icons" />
                </div>
                <div className="mt-12 flex justify-center">
                  <button
                    onClick={calculate}
                    className="bg-[#2A94F4] py-4 px-6 text-white text-2xl rounded-xl transform transition duration-300 hover:scale-110"
                    type="submit"
                  >
                    Calculate EMI
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="content w-[100/3%]">
          <div className="bg-[#f2f2f2] py-16 px-5 max-w-[360px] h-[100vh] flex  flex-col justify-between ">
            <div className="nav-link-container flex">
              <Heading
                title="Break Up of Total Payment"
                type="sm"
                color="primary"
                classes="text-black text-bold"
              />
            </div>

            <div className="flex flex-col items-center justify-center">
              <Image src={Calculator1Image} className="w-[165px]" alt="icons" />
              <div className="flex justify-between mt-4 px-2">
                <div className="flex">
                  <div className="bg-[#0B4870] rounded-md h-[10px] w-[20px] mr-2.5" />
                  <div>
                    <Heading
                      title="Principle Loan Amount"
                      type="xs"
                      color="primary"
                      classes="text-black text-bold"
                    />
                  </div>
                </div>
                <div className="flex ml-3">
                  <div className="bg-[#49B0FC] rounded-md h-[10px] w-[20px] mr-2.5" />
                  <div>
                    <Heading
                      title="Total Interest"
                      type="xs"
                      color="primary"
                      classes="text-black text-bold"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form mt-2.5">
              <div className="form-group bg-[#CCE9FF] rounded-2xl px-1 py-5 mt-8 shadow-2xl relative ">
                <div className="flex flex-col justify-center items-center">
                  <div className="relative">
                    <Heading
                      title="Loan EMI"
                      type="sm"
                      color="primary"
                      classes="text-black text-bold"
                    />
                    <div className="flex align-baseline mt-2">
                      <Image src={Rupee} className="w-[20px] h-[20px] inline" alt="icons" />
                      <Heading
                        title={emi ? emi : 0}
                        type="sm"
                        color="primary"
                        classes="text-black text-bold"
                      />
                    </div>
                  </div>
                  <div className="w-[10px] h-[10px] bg-[#0B4870] rounded-full absolute left-4" />
                  <div className="w-[90%] h-[0.8px] bg-black mt-2.5" />
                </div>

                <div className="flex justify-between mt-6">
                  <div className="flex flex-col items-center">
                    <Heading
                      title={intrestAmount ? intrestAmount : 0}
                      type="sm"
                      color="primary"
                      classes="text-black text-bold"
                    />
                    <Heading
                      title="Total Interest Payable"
                      type="sm"
                      color="primary"
                      classes="text-black text-bold"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex justify-start items-baseline">
                      <div className="w-[10px] h-[10px] bg-[#0B4870] rounded-full mr-2.5" />
                      <Heading
                        title={totalAmount ? totalAmount : 0}
                        type="sm"
                        color="primary"
                        classes="text-black text-bold"
                      />
                    </div>

                    <Heading
                      title="Total Payment"
                      type="sm"
                      color="primary"
                      classes="text-black text-bold"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                className="bg-[#2A94F4] py-4 px-6 text-white text-2xl rounded-xl transform transition duration-300 hover:scale-110"
                href="/auth/signup/"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
