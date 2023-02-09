import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../store/user";
import UserLogo from "../utils/UserLogo.png";

const Profile = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // const handleRemoveFavorite = (id) => {
  //   axios
  //     .post(
  //       `http://localhost:3001/api/properties/deleteFavorites/${id}`,
  //       {
  //         id: id,
  //       },
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     )
  //     .then((res) => dispatch(removeFavorite(res.data)))
  //     .then(() => window.location.reload(false))
  //     .catch((error) => console.log(error));
  // };

  return (
    <div class="pt-20 ">
      <div class="max-w-md mx-auto bg-white overflow-hidden md:max-w-md border-b-2 border-gray-300 mb-5">
        <div class="md:flex">
          <div class="w-full p-2 py-10">
            <div class="flex justify-center">
              <div class="relative">
                <img src={UserLogo} class="rounded-full" width="80" />
              </div>
            </div>

            <div class="flex flex-col text-center mt-3 mb-4">
              <span class="text-2xl font-medium">{user.name}</span>
              <span class="text-md text-gray-400">@{user.userName}</span>
            </div>

            <p class="px-16 text-center text-md text-gray-800">Intereses:</p>

            <div class="px-16 mt-3 text-center">
              <span class="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">
                #Comedia
              </span>
              <span class="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">
                #Accion
              </span>
              <span class="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">
                #Terror
              </span>
            </div>

            <div class="px-14 mt-5">
              <button class="h-12 bg-emerald-500 w-full text-white text-md rounded-lg hover:shadow hover:bg-emerald-500">
                Favoritos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
