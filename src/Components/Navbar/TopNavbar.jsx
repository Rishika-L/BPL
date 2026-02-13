import React, { useEffect, useRef, useState } from "react";
import Icons from "../../Content/Icons";
import ProfileCircle from "../ProfileCircle/ProfileCircle";
import { getUserLocalStorage, RemoveUserLocalStorage } from "../../utils/utils";
import { useNavigate } from "react-router";
import { getInitials } from "../../utils/Data";
import Model from "../Model/Model";
import Input from "../WithHooks/Input/Input";
import Button from "../Buttons/Button";
import { validationPatterns } from "../../utils/Validation";
import { useForm } from "react-hook-form";
import { changePasswordEffect } from "../../Redux/auth/AuthEffect";
import { useDispatch } from "react-redux";
import { resetLoginData } from "../../Redux/auth/AuthAction";

export default function TopNavbar() {
  const dispatch = useDispatch()
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState();
  const [stopModelisOpen, setStopModelIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastData, setToastData] = useState({ show: false });

  const trigger = useRef(null);
  const dropdown = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userDatas= getUserLocalStorage()
    setUserData(userDatas?.userInfo);
  }, []);

    const {
      register,
      formState: { errors },
      handleSubmit,
      setValue,
      reset,
      watch,
    } = useForm();
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

   const copyBomHandler = async (datas) => {
      setLoading(true);
      try {
        const result = await changePasswordEffect(
          datas
        );
        if (result?.data?.status === "success") {

          setToastData({
            ...toastData,
            show: true,
            message: result?.data?.data,
            status: "success",
          });
          RemoveUserLocalStorage();
          navigate("/");
        } else {
          setToastData({
            ...toastData,
            show: true,
            message: result?.data?.data|| "Your Current Password is Wrong",
            status: "error",
          });
        }
      } catch (error) {

        setToastData({
          ...toastData,
          show: true,
          message: "An unexpected error occurred. Please try again.",
          type: "error",
        });
      } finally {
        setLoading(false);
        reset()
        setStopModelIsOpen(false)
      
      }

      setLoading(false);
    };
    const toastOnclose = () => {
      setToastData(() => ({ ...toastData, show: false }));
    };

  return (
    <div className="bg-primary-800 ">
      <div className="flex justify-between items-center p-4 py-1 h-15">
        <img src={Icons?.logo} alt="logo" className="w-32" />
        <div className="flex items-center">
          <div className="flex gap-5 items-center mr-4">
            <button>
              <img
                src={Icons?.questionMarkWhiteIcon}
                alt="Queries"
                className="w-6"
              />
            </button>
            <button
              type="button"
              className="relative inline-flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <img src={Icons?.bellWhiteIcon} alt="bell" className="" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-3.5 h-3.5 text-xs rounded-full font-bold text-white bg-red-500  border-0 -top-1 -end-1 bg-error text-center p-1">
                2
              </div>
            </button>
          </div>
          <div className="ps-1 flex gap-3 items-center">
            <ProfileCircle letter={getInitials(userData?.emp_name)}/>
          </div>
          <section className="">
            <div className="container">
              <div className="flex justify-center">
                <div className="relative inline-block">
                  <button
                    ref={trigger}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className=" inline-flex h-12 items-center justify-start gap-2  text-md border-0 border-stroke px-1 py-3 font-medium text-white"
                  >
                    <div className="flex flex-col justify-start ">
                      <div className="flex gap-2 items-center capitalize">
                        <span>{userData?.emp_name}</span>
                        <span
                          className={`duration-100 ${
                            dropdownOpen ? "-scale-y-100" : ""
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="6"
                            viewBox="0 0 9 6"
                            fill="none"
                          >
                            <path
                              d="M0.939941 1.24023L4.46994 4.76023L7.99994 1.24023"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <span className="text-xsm text-start text-secondary-400">
                        {userData?.role_name}
                      </span>
                    </div>
                    <br />
                  </button>
                  <div
                    ref={dropdown}
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setDropdownOpen(false)}
                    className={`absolute right-0 top-full w-[180px] divide-y divide-stroke overflow-hidden rounded-lg bg-white dark:divide-dark-3 dark:bg-dark-2 ${
                      dropdownOpen ? "block" : "hidden"
                    }`}
                  >
                   
                    <div>
                      <a
                        href="#0"
                        className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-primary-400 hover:bg-secondary-400 dark:text-primary-800 "
                        onClick={() => {
                          setStopModelIsOpen(true)
                        }}
                      >
                        Change Password
                      </a>
                    </div>
                    <div>
                      {/* <a
                        href="/"
                        className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-primary-400 hover:bg-secondary-400 dark:text-primary-800 "
                      >
                        Profile
                      </a> */}
                      <button
                        className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-primary-400 hover:bg-secondary-400 dark:text-primary-800 "
                        onClick={() => {
                          if(userData?.role ==10 ||userData?.role ==70){
                            RemoveUserLocalStorage();
                            dispatch(resetLoginData())
                            navigate("/auth/technician");

                          }else{
                            RemoveUserLocalStorage();
                            dispatch(resetLoginData())
                            navigate("/");
                          }
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  <Model
         isOpen={stopModelisOpen}
         title="Change Password"
         onClose={() => {
           setStopModelIsOpen(false);
         }}
         size="m"
         showFooter={false}
         children={
           <form onSubmit={handleSubmit(copyBomHandler)}>
                    <Input
                      label="Current Password"
                      id="current_password"
                      placeholder="Enter current password"
                      register={register}
                      errors={errors}
                      type="password"

                      validation={{
                        required: "Provide current password",
                        pattern: {
                          value: validationPatterns?.spacePattern,
                          message: "Provide Valid  password",
                        },
                      }}
                    />
                       <Input
                      label="New Password"
                      id="new_password"
                      placeholder="Enter New password"
                      register={register}
                      errors={errors}
                      type="password"
                      validation={{
                        required: "Provide New password",
                        pattern: {
                          value: validationPatterns?.spacePattern,
                          message: "Provide Valid  password",
                        },
                      }}
                    />
                    <div className="flex gap-3 justify-end">
                      <Button
                        label="Cancel"
                        className="secondary__btn w-44"
                        disabled={loading}
                        onClick={() => setStopModelIsOpen(false)}
                      />
                      <Button
                        label="Submit"
                        type="submit"
                        className="primary__btn w-44"
                        loading={loading}
                        disabled={loading}
                      />
                    </div>
                  </form>
          //  <>
          //    <form onSubmit={stopHandleSubmit(stopHandler)}>
          //      <TextArea
          //        label="Reason"
          //        id="reason"
          //        placeholder="Write Reason"
          //        register={stopRegister}
          //        errors={stopError}
          //        showStar={true}
          //        validation={{
          //          required: "Provide Valid Reason",
          //        }}
          //      />
          //      <div className="flex gap-3">
          //        <Button
          //          label="Cancel"
          //          type="button"
          //          disabled={loading}
          //          onClick={() => {
          //            setStopModelIsOpen(false);
          //          }}
          //        />
          //        <Button
          //          label="Submit"
          //          type="submit"
          //          className="primary__btn"
          //          disabled={loading}
          //          loading={loading}
          //        />
          //      </div>
          //    </form>
          //  </>
          // <>hello</>
         }
       />
    </div>
  );
}
