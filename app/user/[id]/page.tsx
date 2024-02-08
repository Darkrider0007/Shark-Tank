/* eslint-disable @next/next/no-img-element */
"use client"
import authService from '@/app/appwrite/auth'
import { AddPageLoader } from '@/components'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

export default function Page({ params }: any) {
  const [errors, setErrors] = useState("");
  const [userDatabase, setUserDatabase] = useState({})
  const [loading, setLoading] = useState(false)
  const [firstTimeLoad, setFirstTimeLoad] = useState(true)

  const { register, handleSubmit, setError, formState: { errors: formErrors } } = useForm({
    defaultValues :{
      role : "Entrepreneur",
      updateImage : ""
    }
  });

  const authUser = useSelector(
    (state: {
      auth: {
         status: boolean
      }
    }) => state.auth.status
  )

  const userData = useSelector(
    (state: {
      auth: {
        userData: any, status: boolean
      }
    }) => state.auth.userData
  );

  // console.log(params.id)
  const update = async (data: any) => {
    setLoading(true)
    const userInfo = await authService.getUserDatabase(params.id);
    if(userInfo){
      try {
        setErrors("");
        console.log("I am operate from update")
        console.log(data.role)
        console.log(data.updateImage[0]);
        const file = data.updateImage[0] ? await authService.uploadAvatar(data.updateImage[0]) : null

        if(file){
          authService.deleteAvatar(userInfo.User_Avatar)
        }
        const updatedRole = await authService.updateUserDatabase({
          UserID : params.id,
          role :data.role,
          User_Avatar: file ? file.$id : undefined,
          Email:userData?.email,
          userName:userData?.name
        })
        console.log(updatedRole)
        setLoading(false)
      } catch (error:any) {
        setErrors(error.message || "An error occurred");
        //console.log("There was an error to update", error.message)
        setLoading(false)
      }
    }else{
      try {
        const file = data.updateImage[0] ? await authService.uploadAvatar(data.updateImage[0]) : null

        const role = await authService.createUserDatabase({
          UserID : params.id,
          role :data.role,
          User_Avatar: file ? file.$id : undefined,
          Email:userData?.email,
          userName:userData?.name
        })
        console.log(role)  
        setLoading(false)
      } catch (error: any) {
        setErrors(error.message || "An error occurred");
        // console.log("There was an error to create role", error.message)
        setLoading(false)
      }
    }
    
  }

  useEffect(() => {
    ;(async () => {
      try {
        const userInfo = await authService.getUserDatabase(params.id) || {};
        // console.log("User Info :")
        // console.log(userInfo);
        setUserDatabase(userInfo);
          setFirstTimeLoad(false)
      } catch (error: any) {
        setFirstTimeLoad(false)
        setErrors(error.message || "An error occurred");
        console.log("There was an error in getUserDatabase", error.message);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if(firstTimeLoad){
    return(
      <AddPageLoader prop="Holding Up!"/>
    )
  }

  if(loading){
    return(
      <AddPageLoader prop="Updating"/>
    )
  }

  return (
    <div className='flex flex-col justify-center items-start w-full min-h-screen bg-bg_dark_primary'>
      <div className="min-h-screen w-full flex justify-center items-center text-[#fefefe] my-5">
        <div className="max-w-[410px] min-h-[540px] w-full bg-bg_dark_secondary p-6 rounded-sm">
          <div className='flex justify-center flex-col items-center mt-3'>
            <h1 className='flex justify-center items-center text-4xl font-bold mb-6'>User Information</h1>
            {(userDatabase as any).User_Avatar ?
              (
                <div className='rounded-full bg-slate-600 h-100 w-100 object-cover'>

                  <img
                    src={authService.getAvatar((userDatabase as any).User_Avatar).toString()}
                    alt="user" className="rounded-full h-36  w-36 object-cover"
                  />
                </div>

            )         
            : 
            (<svg stroke="currentColor" fill="currentColor"
              stroke-width="0" viewBox="0 0 24 24" height="10em"
              width="10em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M12,8c-1.178,0-2,0.822-2,2s0.822,2,2,2s2-0.822,2-2S13.178,8,12,8z">
              </path><path fill="none" d="M12,4c-4.337,0-8,3.663-8,8c0,2.176,0.923,4.182,2.39,5.641c0.757-1.8,2.538-3.068,4.61-3.068h2 c2.072,0,3.854,1.269,4.61,3.068C19.077,16.182,20,14.176,20,12C20,7.663,16.337,4,12,4z M12,14c-2.28,0-4-1.72-4-4s1.72-4,4-4 s4,1.72,4,4S14.28,14,12,14z">
              </path><path fill="none" d="M13,16.572h-2c-1.432,0-2.629,1.01-2.926,2.354C9.242,19.604,10.584,20,12,20s2.758-0.396,3.926-1.073 C15.629,17.582,14.432,16.572,13,16.572z"></path>
              <path d="M12,2C6.579,2,2,6.579,2,12c0,3.189,1.592,6.078,4,7.924V20h0.102C7.77,21.245,9.813,22,12,22s4.23-0.755,5.898-2H18 v-0.076c2.408-1.846,4-4.734,4-7.924C22,6.579,17.421,2,12,2z M8.074,18.927c0.297-1.345,1.494-2.354,2.926-2.354h2 c1.432,0,2.629,1.01,2.926,2.354C14.758,19.604,13.416,20,12,20S9.242,19.604,8.074,18.927z M17.61,17.641 c-0.757-1.8-2.538-3.068-4.61-3.068h-2c-2.072,0-3.854,1.269-4.61,3.068C4.923,16.182,4,14.176,4,12c0-4.337,3.663-8,8-8 s8,3.663,8,8C20,14.176,19.077,16.182,17.61,17.641z"></path>
              <path d="M12,6c-2.28,0-4,1.72-4,4s1.72,4,4,4s4-1.72,4-4S14.28,6,12,6z M12,12c-1.178,0-2-0.822-2-2s0.822-2,2-2s2,0.822,2,2 S13.178,12,12,12z"></path>
            </svg>)}
          </div>
          <div className="flex flex-col justify-start items-start mt-10 gap-5">
            <div className='flex flex-row items-center gap-5'>
              <h1 className="text-2xl font-bold">User Name &nbsp; </h1>
              <h1 className="text-xl">{(userDatabase as any).userName}</h1>
            </div>
            <div className='flex flex-row items-center gap-5'>
              <h1 className="text-2xl font-bold">Email Id &nbsp; </h1>
              <h1 className="text-xl">{(userDatabase as any).Email}</h1>
            </div>
          </div>

          {
            !authUser && (
              <div className="flex flex-col justify-start items-start mt-10 gap-5">
                <div className='flex flex-row items-center gap-5'>
                  <h1 className="text-2xl font-bold">Role &nbsp; </h1>
                  <h1 className="text-xl">{(userDatabase as any)?.role}</h1>
                </div>
              </div>
            )
          }
          {/* -------------------------------------------------------------------
          -------------------------------  Updates  -------------------------------
          ------------------------------------------------------------------- */}
          {errors && <p className="text-red-500">{errors}</p>}
          {authUser && (<form className="flex flex-col justify-start items-start w-full mt-2"
            onSubmit={handleSubmit(update)}>
            <div className="flex flex-col justify-between items-start my-4 w-full">
              <p className='text-2xl mb-3'>Update Role</p>
              <select
                className="w-full p-2 bg-transparent border border-[#945353] mt-1 focus:outline-none"
                {...register("role", {
                  required: true
                })
                }
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
                      required: false
                    })}
                  />
              </div>
            <button
              type="submit"
              className="px-3 py-1.5 border border-[#fefefe] my-4 rounded-lg hover:bg-white hover:text-black hover:px-3.2 hover:py-1.7"
            >
              Update
            </button>
          </form>)}
        </div>
      </div>
    </div>
  )
}

