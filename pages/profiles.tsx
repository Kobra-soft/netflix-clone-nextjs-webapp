import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

/* import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { GetServerSidePropsContext } from 'next'; */

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

/* export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
} */

const Profiles = () => {
  const router = useRouter();
  const { data: user } = useCurrentUser();

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who&#39;s watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => router.push('/')}>

            <div className="group flex-row w-44 mx-auto">

              <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden"
              >
              <img src="/images/default-green.png" alt="Profile" />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white"
              >
                {user?.name}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
