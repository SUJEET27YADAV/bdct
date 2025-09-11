"use client";
import { useEffect, useState } from "react";
import Input from "../components/input";
import { Player } from "@/types";
import { useLoggedin } from "@/context/logincontext";

export default function Coordinator() {
  const [up, setUp] = useState("");
  const { loggedin, setLoggedin } = useLoggedin();
  const [data, setData] = useState<Player[] | null>(null);
  const pass = "123456";

  const login = () => {
    if (up === pass) {
      setLoggedin(true);
    } else {
      alert("Wrong Password");
    }
  };

  const getData = async () => {
    const response = await fetch("/api/getusers");
    const res = await response.json();
    if (res.success) {
      setData(res.data);
    } else {
      setData(null);
      alert("Error fetching Data");
    }
  };

  useEffect(() => {
    if (loggedin && !data) {
      getData();
    }
  }, [loggedin, data]);

  return (
    <main className="relative w-full flex flex-col items-center justify-center p-10">
      {!loggedin ? (
        <form
          onSubmit={login}
          className="max-w-md flex flex-col items-center gap-2 px-6 py-10 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-lg backdrop-blur-md shadow-xl shadow-black/70"
        >
          <h1 className="text-2xl font-extrabold mb-2">Coordinator Login</h1>
          <p className="p-2 text-center">
            Please Enter your password to access this page :
          </p>
          <Input type="password" label="Password" val={up} setVal={setUp} />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      ) : (
        <div className="w-full space-y-2">
          <button className="absolute top-1 right-1 flex flex-col items-center justify-center p-2 rounded-md bg-red-500 hover:font-bold">
            <span className="material-icons-outlined">logout</span>
            <span className="text-[8px]">Logout</span>
          </button>
          <h1 className="w-full text-center text-2xl font-extrabold mb-2">
            Coordinator
          </h1>
          <div className="w-full space-y-0.5">
            <div className="w-full flex items-center gap-0.5 font-bold *:min-h-8 *:text-sm *:flex *:items-center *:justify-center *:flex-1 *:nth-1:max-w-10 *:nth-3:min-w-22 *:nth-4:max-w-10 *:nth-5:min-w-26 *:overflow-hidden *:bg-neutral-500">
              <span>S.no.</span>
              <span>Name</span>
              <span>Phone</span>
              <span>Age</span>
              <span>Role</span>
              <span>Trial Date</span>
              <span>Trial Slot</span>
              <span>Fees Paid</span>
              <span>Actions</span>
            </div>
            {data?.map((player, i) => (
              <div
                key={i}
                className="w-full flex items-center gap-0.5 *:min-h-8 *:text-sm *:flex *:items-center *:justify-center *:flex-1 *:nth-1:max-w-10 *:nth-3:min-w-22 *:nth-4:max-w-10 *:nth-5:min-w-26 *:overflow-hidden odd:*:bg-zinc-500/50 even:*:bg-red-200/70"
              >
                <span>{player.id}</span>
                <span>{player.name}</span>
                <span>{player.phone}</span>
                <span>{player.age}</span>
                <span>{player.role}</span>
                <span>{player.trialdate}</span>
                <span>{player.trialslot}</span>
                <span>{player.haspaid ? "yes" : "no"}</span>
                <div className="flex items-center justify-center gap-2">
                  <span className="material-icons-outlined">edit</span>
                  <span className="material-icons-outlined">delete</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
