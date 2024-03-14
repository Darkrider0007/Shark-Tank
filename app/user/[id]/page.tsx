/* eslint-disable @next/next/no-img-element */
"use client";
import authService from "@/app/appwrite/auth";
import { AddPageLoader } from "@/components";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LuUserCircle } from "react-icons/lu";
import { useSelector } from "react-redux";

export default function Page({ params }: any) {
  const [errors, setErrors] = useState("");
  const [userDatabase, setUserDatabase] = useState({});
  const [loading, setLoading] = useState(false);
  const [firstTimeLoad, setFirstTimeLoad] = useState(true);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors: formErrors },
  } = useForm({
    defaultValues: {
      role: "Entrepreneur",
      updateImage: "",
    },
  });

  const authUser = useSelector(
    (state: {
      auth: {
        status: boolean;
      };
    }) => state.auth.status
  );

  const userdata = useSelector(
    (state: {
      auth: {
        userData: any;
        status: boolean;
      };
    }) => state.auth.userData
  );

  const userData = userdata?.userData;

  // console.log(userData);
  // console.log(userData?.email);

  // console.log(params.id)
  const update = async (data: any) => {
    setLoading(true);
    const userInfo = await authService.getUserDatabase(params.id);
    if (userInfo) {
      try {
        setErrors("");
        console.log("I am operate from update");
        console.log(data.role);
        console.log(data.updateImage[0]);
        const file = data.updateImage[0]
          ? await authService.uploadAvatar(data.updateImage[0])
          : null;

        if (file) {
          authService.deleteAvatar(userInfo.User_Avatar);
        }
        const updatedRole = await authService.updateUserDatabase({
          UserID: params.id,
          role: data.role,
          User_Avatar: file ? file.$id : undefined,
          Email: userData?.email,
          userName: userData?.name,
        });
        console.log(updatedRole);
        setLoading(false);
      } catch (error: any) {
        setErrors(error.message || "An error occurred");
        //console.log("There was an error to update", error.message)
        setLoading(false);
      }
    } else {
      try {
        const file = data.updateImage[0]
          ? await authService.uploadAvatar(data.updateImage[0])
          : null;

        const role = await authService.createUserDatabase({
          UserID: params.id,
          role: data.role,
          User_Avatar: file ? file.$id : undefined,
          Email: userData?.email,
          userName: userData?.name,
        });
        console.log(role);
        setLoading(false);
      } catch (error: any) {
        setErrors(error.message || "An error occurred");
        // console.log("There was an error to create role", error.message)
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const userInfo = (await authService.getUserDatabase(params.id)) || {};
        setUserDatabase(userInfo);
        // console.log(userDatabase);
        setFirstTimeLoad(false);
      } catch (error: any) {
        setFirstTimeLoad(false);
        setErrors(error.message || "An error occurred");
        console.log("There was an error in getUserDatabase", error.message);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (firstTimeLoad) {
    return <AddPageLoader prop="Holding Up!" />;
  }

  if (loading) {
    return <AddPageLoader prop="Updating" />;
  }

  return (
    <div className="flex flex-col bg-bg_dark_primary">
      <Navbar />
      <div className="flex flex-col justify-center items-start w-full min-h-screen bg-bg_dark_primary">
        <div className="min-h-screen w-full flex justify-center items-center text-[#fefefe] my-5">
          <div className="max-w-[410px] min-h-[540px] w-full bg-bg_dark_secondary p-6 rounded-sm">
            <div className="flex justify-center flex-col items-center mt-3">
              <h1 className="flex justify-center items-center text-4xl font-bold mb-6">
                User Information
              </h1>
              {(userDatabase as any).User_Avatar ? (
                <div className="rounded-full bg-slate-600 h-100 w-100 object-cover">
                  <img
                    src={authService
                      .getAvatar((userDatabase as any).User_Avatar)
                      .toString()}
                    alt="user"
                    className="rounded-full h-36  w-36 object-cover"
                  />
                </div>
              ) : (
                <div className="h-40 w-40 text-lg rounded-full flex items-center justify-cente">
                  <LuUserCircle />
                </div>
              )}
            </div>
            <div className="flex flex-col justify-start items-start mt-10 gap-5">
              <div className="flex flex-row items-center gap-5">
                <h1 className="text-2xl font-bold">User Name &nbsp; </h1>
                <h1 className="text-xl">{(userDatabase as any).userName}</h1>
              </div>
              <div className="flex flex-row items-center gap-5">
                <h1 className="text-2xl font-bold">Email Id &nbsp; </h1>
                <h1 className="text-xl">{(userDatabase as any).Email}</h1>
              </div>
            </div>

            {!authUser && (
              <div className="flex flex-col justify-start items-start mt-10 gap-5">
                <div className="flex flex-row items-center gap-5">
                  <h1 className="text-2xl font-bold">Role &nbsp; </h1>
                  <h1 className="text-xl">{(userDatabase as any)?.role}</h1>
                </div>
              </div>
            )}
            {/* -------------------------------------------------------------------
          -------------------------------  Updates  -------------------------------
          ------------------------------------------------------------------- */}
            {errors && <p className="text-red-500">{errors}</p>}
            {authUser && (
              <form
                className="flex flex-col justify-start items-start w-full mt-2"
                onSubmit={handleSubmit(update)}
              >
                <div className="flex flex-col justify-between items-start my-4 w-full">
                  <p className="text-2xl mb-3">Update Role</p>
                  <select
                    className="w-full p-2 bg-transparent border border-[#945353] mt-1 focus:outline-none"
                    {...register("role", {
                      required: true,
                    })}
                  >
                    <option value="Entrepreneur" className="text-black">
                      Entrepreneur
                    </option>
                    <option value="Investor" className="text-black">
                      Investor
                    </option>
                  </select>
                </div>
                <div className="px-2">
                  <label className="text-2xl mb-3">Update Image</label>
                  <input
                    type="file"
                    className="my-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("updateImage", {
                      required: false,
                    })}
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-1.5 border border-[#fefefe] my-4 rounded-lg hover:bg-white hover:text-black hover:px-3.2 hover:py-1.7"
                >
                  Update
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
