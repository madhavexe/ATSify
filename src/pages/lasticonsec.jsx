
import React from 'react'
import { MessageCircle, Facebook, Instagram } from 'lucide-react'

const LastIconSec = () => {


    const openwhatsap = () => {

        const phonenumber = "8168345816"
        const autofilltext = "😁 hyy what do you want to ask from admin ?"

        const url = `https://wa.me/${phonenumber}?text=${encodeURIComponent(autofilltext)}`
        window.open(url, "_blank")
    }

    const openinstagram = () => {

        const username = "yuvrajjjjjj_";
        const url = `https://instagram.com/${username}`;
        window.open(url,"_blank")

    }


    return (
        <div className="flex flex-col gap-3 fixed bottom-6 right-6">

            <div className="bg-gray-800 hover:bg-gray-900 p-3 rounded-full " onClick={openwhatsap}
            >
                <MessageCircle size={22} className="text-white" />
            </div>

            <div className="bg-gray-800 hover:bg-gray-900 p-3 rounded-full  ">
                <Facebook size={22} className="text-white" />
            </div>

            <div className="bg-gray-800 hover:bg-gray-900 p-3 rounded-full" onClick={openinstagram} >
                <Instagram size={22} className="text-white" />
            </div>

        </div>
    )
}

export default LastIconSec


