"use client"
import { UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"
import React from "react"

const Navbar = () => {

    const { isLoaded, isSignedIn, user } = useUser()

    return (
        <div className="bg-base-200/30 px-5 md:px-[10%] py-4">
            {isLoaded && (
                isSignedIn ? (<>
                    <div className="flex justify-between items-center">
                        <div className="flex text-2xl items-center font-bold">
                            e <span className="text-accent">.Track</span>
                        </div>
                        <div className="md:flex hidden">
                            <Link href={""} className="btn ">Mes budgets</Link>
                            <Link href={""} className="btn mx-4">Tableau de bord</Link>
                            <Link href={""} className="btn mx-4">Mes Transactions</Link>
                        </div>
                        <UserButton />
                    </div>

                    <div className="md:hidden flex justify-center mt-2">
                        <Link href={""} className="btn btn-sm">Mes budgets</Link>
                        <Link href={""} className="btn btn-sm mx-4">Tableau de bord</Link>
                        <Link href={""} className="btn btn-sm mx-4">Mes Transactions</Link>
                    </div>
                </>) : (<div className="flex items-center justify-between">
                    <div className="flex text-2xl items-center font-bold">
                        e <span className="text-accent">.Track</span>
                    </div>
                    <div className="flex justify-center mt-2">
                        <Link href={"/sign-in"} className="btn btn-sm">Se connecter</Link>
                        <Link href={"/sign-up"} className="btn btn-sm mx-4">S'inscricre</Link>
                    </div>
                </div>))}
        </div>
    )
}

export default Navbar