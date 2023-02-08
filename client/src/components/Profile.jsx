const Profile = () => {
  return (
    <div class="pt-20 ">
      <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-md">
        <div class="md:flex">
          <div class="w-full p-2 py-10">
            <div class="flex justify-center">
              <div class="relative">
                <img
                  src="https://i.imgur.com/z4YSzDD.jpg"
                  class="rounded-full"
                  width="80"
                />
              </div>
            </div>

            <div class="flex flex-col text-center mt-3 mb-4">
              <span class="text-2xl font-medium">Lindsey James</span>
              <span class="text-md text-gray-400">@lindsey_jam3s</span>
            </div>

            <p class="px-16 text-center text-md text-gray-800">
              Actress, musician, songwriter, and artist.DM for work inquires or{" "}
              <a class="text-blue-800 text-md font-bold" href="#">
                #tag{" "}
              </a>
              me in your message.
            </p>

            <div class="px-16 mt-3 text-center">
              <span class="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">
                #art
              </span>
              <span class="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">
                #photography
              </span>
              <span class="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">
                #music
              </span>
            </div>

            <div class="px-14 mt-5">
              <button class="h-12 bg-gray-200 w-full text-black text-md rounded hover:shadow hover:bg-gray-300 mb-2">
                Message
              </button>

              <button class="h-12 bg-blue-700 w-full text-white text-md rounded hover:shadow hover:bg-blue-800">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
